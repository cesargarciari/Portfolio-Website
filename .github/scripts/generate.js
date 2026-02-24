import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });


const CORE_CONTEXT_FILES = [
  "AGENTS.md",
  "package.json",
  "tsconfig.json",
  "src/index.css",
  "src/lib/utils.ts",
  "src/main.tsx",
  "src/App.tsx",
];

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}

function getDirectoryTree(dir, depth = 0, maxDepth = 3) {
  if (depth > maxDepth) return "";
  let tree = "";
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (["node_modules", ".git", "dist", ".next"].includes(item)) continue;
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();
    tree += "  ".repeat(depth) + (isDir ? `📁 ${item}/` : `📄 ${item}`) + "\n";
    if (isDir) tree += getDirectoryTree(fullPath, depth + 1, maxDepth);
  }
  return tree;
}

function buildContext() {
  let context = "## Repository Structure\n```\n";
  context += getDirectoryTree("src");
  context += "```\n\n## Core Files\n";

  for (const file of CORE_CONTEXT_FILES) {
    const content = readFileSafe(file);
    if (content) {
      context += `\n### ${file}\n\`\`\`\n${content}\n\`\`\`\n`;
    }
  }

  const componentsDir = "src/components";
  if (fs.existsSync(componentsDir)) {
    context += "\n## Existing Components\n";
    const componentFiles = fs.readdirSync(componentsDir, { recursive: true });
    for (const file of componentFiles) {
      const fullPath = path.join(componentsDir, file);
      if (fs.statSync(fullPath).isFile()) {
        const content = readFileSafe(fullPath);
        if (content) {
          context += `\n### ${fullPath}\n\`\`\`\n${content}\n\`\`\`\n`;
        }
      }
    }
  }

  return context;
}

// function sends details and repository context to LLM and gets back the file changes needed 
async function generateCode(issueTitle, issueBody) {
  const context = buildContext();

  const prompt = `You are an AI developer working on a personal portfolio website built with Vite, React, and TypeScript.

${context}

## Task
Issue Title: ${issueTitle}
Issue Description: ${issueBody}

## Instructions
1. Read AGENTS.md carefully and follow all conventions
2. Generate the complete file changes needed to implement this feature
3. Return ONLY a JSON object in this exact format, no other text:

{
  "summary": "Brief description of what you changed",
  "files": [
    {
      "path": "src/components/Example.tsx",
      "content": "full file content here",
      "action": "create" | "modify" | "delete"
    }
  ]
}

Be conservative — only change what's necessary. Don't refactor unrelated code.`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 17500,
    thinking: { 
      type: "adaptive",
      effort: "medium"
    },
    messages: [{ 
      role: "user", 
      content: [
      {
        type: "text",
        text: prompt,
        cache_control: { type: "ephemeral" } 
      }
    ]
    }],
  });

  const textBlock = message.content.find(block => block.type === 'text');

if (!textBlock) {
  throw new Error("The AI didn't return a text response. Check if it only returned 'thinking'.");
}

const responseText = textBlock.text;

const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)```/) ||
                  responseText.match(/(\{[\s\S]*\})/);

if (!jsonMatch) throw new Error("Could not parse JSON from LLM response");

return JSON.parse(jsonMatch[1]);
}

const DO_NOT_TOUCH = ["vercel.json", "vite.config.ts", ".github/workflows/"];

// Applies the changes but ensures forbidden files are not changed
function applyFileChanges(files) {
  for (const file of files) {
    if (DO_NOT_TOUCH.some(forbidden => file.path.includes(forbidden))) {
      console.warn(`⚠️ Blocked attempt to modify forbidden file: ${file.path}`);
      continue;
    }
    if (file.action === "delete") {
      if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
      console.log(`Deleted: ${file.path}`);
    } else {
      fs.mkdirSync(path.dirname(file.path), { recursive: true });
      fs.writeFileSync(file.path, file.content, "utf8");
      console.log(`Written: ${file.path}`);
    }
  }
}

async function main() {
  const issueTitle = process.argv[2];
  const issueBody = process.argv[3] || "";

  if (!issueTitle) {
    console.error("Usage: node generate.js <issue-title> <issue-body>");
    process.exit(1);
  }

  console.log(`Generating code for: ${issueTitle}`);

  const result = await generateCode(issueTitle, issueBody);

  console.log(`Summary: ${result.summary}`);
  console.log(`Files to change: ${result.files.length}`);

  applyFileChanges(result.files);

  // Write summary for the PR body
  fs.writeFileSync(".github/scripts/pr-summary.txt", result.summary);
}

main().catch(console.error);
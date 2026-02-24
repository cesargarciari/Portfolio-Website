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
    1. Read AGENTS.md carefully and follow all conventions.
    2. Generate the complete file changes needed to implement this feature.
    3. Return your response in this EXACT format — one block per file, nothing else outside the tags:

    <summary>Brief description of what you changed</summary>

    <file>
    <path>src/components/Example.tsx</path>
    <action>create</action>
    <content>
    FULL FILE CONTENT HERE
    </content>
    </file>

    <file>
    <path>src/App.tsx</path>
    <action>modify</action>
    <content>
    FULL FILE CONTENT HERE
    </content>
    </file>

    Be conservative — only change what is necessary. Do not refactor unrelated code.`;


  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 16000,
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
    throw new Error("The AI didn't return a text response.");
  }

  const responseText = textBlock.text;

  // Parse summary
  const summaryMatch = responseText.match(/<summary>([\s\S]*?)<\/summary>/);
  const summary = summaryMatch ? summaryMatch[1].trim() : "AI-generated changes";

  // Parse files using XML tags
  const fileMatches = [...responseText.matchAll(/<file>\s*<path>([\s\S]*?)<\/path>\s*<action>([\s\S]*?)<\/action>\s*<content>\n?([\s\S]*?)<\/content>\s*<\/file>/g)];

  if (fileMatches.length === 0) {
    console.error("Raw response:\n", responseText);
    throw new Error("Could not parse any files from LLM response");
  }

  const files = fileMatches.map(match => ({
    path: match[1].trim(),
    action: match[2].trim(),
    content: match[3],
  }));

  return { summary, files };
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
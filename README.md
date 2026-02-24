# 💼 Personal Portfolio Website

This is my developer portfolio built with modern frontend tools to showcase my work, skills, and experience.

## Tech Stack

- **Vite** – Fast build tool for modern web apps  
- **React** – Component-based UI  
- **React Router DOM** – Client-side routing  
- **Tailwind CSS** – Utility-first styling  
- **ShadCN/UI** – Prebuilt accessible UI components  
- **Deployed on Vercel**

## Features

- Responsive design
- Smooth page navigation
- Modular component structure
- Custom 404 page

## AI-Powered Development

This portfolio is managed by an autonomous AI pipeline:

- **Code generation** — Claude Sonnet generates code from GitHub issues
- **Code review** — Greptile reviews every AI-generated PR  
- **Auto-deploy** — Approved PRs merge automatically and deploy via Vercel

To request a change, open an issue and add the `ai-generate` label.


## The Workflow 
```
Open GitHub Issue + add label
        ↓
GitHub Action triggers generate.js
        ↓
Claude reads codebase + generates code
        ↓
PR opened automatically on a new branch
        ↓
Greptile reviews the PR
        ↓
Manually check PR comment from Greptile
        ↓
Build check passes
        ↓
Auto-merge fires
        ↓
Vercel deploys to production
```

## Check it out

Visit my portfolio: [César García](https://cesar-garcia.vercel.app/)

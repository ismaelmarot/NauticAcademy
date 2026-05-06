# AGENTS.md - Important Commands

This file documents important commands for linting and typechecking the project.

## Frontend (React + TypeScript + Vite)

### Typecheck

Run TypeScript type checking without emitting files:

```bash
cd frontend && npx tsc --noEmit
```

### Build (includes typecheck)

```bash
cd frontend && npm run build
```

This runs `tsc && vite build` which includes typechecking.

### Lint

ESLint is not currently configured in this project. To add linting:

```bash
cd frontend && npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
```

Then create an `.eslintrc.cjs` configuration file.

### Dev Server

```bash
cd frontend && npm run dev
```

## Content Structure

When adding new content sections:

1. Create topic files in the appropriate section directory
2. Update the section's `index.ts` to import and export topics
3. Update the chapter's `index.ts` to include the new section in the correct order
4. Run typecheck to verify: `cd frontend && npx tsc --noEmit`

## Git Workflow

```bash
# Check status
git status

# Stage specific content files
git add frontend/src/content/structured/timonel/chapter-XX/

# Commit
git commit -m "Descriptive message"

# Push
git push
```

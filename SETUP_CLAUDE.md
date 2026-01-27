# Claude Code Setup Guide

Quick guide to set up all Claude Code automations for this project.

## ✅ Prerequisites

- Node.js 18+ installed
- Claude Code CLI installed
- Git configured

## 🚀 Quick Setup (5 minutes)

### Step 1: Install MCP Servers

```bash
# Essential: Live documentation
claude mcp add context7

# Optional: GitHub integration (requires gh CLI)
brew install gh  # if not installed
gh auth login    # authenticate
claude mcp add github
```

### Step 2: Verify Installation

```bash
# Check MCP servers are installed
claude mcp list

# Should show:
# - context7
# - github (if installed)
```

### Step 3: Test Hooks

Hooks are already configured in `.claude/settings.json` and will run automatically:

```bash
# Edit any TypeScript file
# Save it
# → Auto-format should run
# → Type-check should run
```

Test manually:
```bash
# Should format the file
npx prettier --write src/components/App.tsx

# Should show no errors
npm run type-check
```

### Step 4: Test Skills

```bash
# Generate a test component
claude -p "/component-generator TestComponent"

# Should create: src/components/TestComponent.tsx
```

### Step 5: Test Agent

```bash
# Review a component
claude -p "Review src/components/AutoTilingDesktop.tsx with the ui-reviewer agent"
```

## 📋 What's Configured

### ⚡ Hooks (Auto-run)
- **Auto-format**: Prettier on save (`.ts`, `.tsx`, `.jsx`, `.css`, `.astro`, `.json`)
- **Type-check**: TypeScript validation after edits

### 🎯 Skills (User-invoked)
- **component-generator**: Create new React components with proper patterns
  - Usage: `/component-generator ComponentName`

### 🤖 Agents (Background)
- **ui-reviewer**: Accessibility and UX review
  - Usage: "Review [file] with ui-reviewer agent"

### 🔌 MCP Servers
- **context7**: Live docs for React, Astro, Tailwind, Framer Motion, Three.js
- **github**: GitHub issues, PRs, repository management (optional)

## 🎨 Using the Tools

### Generate a Component

```bash
# In Claude Code chat or CLI:
/component-generator NavigationBar

# Claude will:
# 1. Ask about component purpose and props
# 2. Generate TypeScript React component
# 3. Apply Framer Motion animations
# 4. Use holographic theme styling
# 5. Save to src/components/NavigationBar.tsx
```

### Review for Accessibility

```bash
# In Claude Code chat:
"Please review src/components/Terminal.tsx with the ui-reviewer agent for accessibility issues"

# Agent will provide:
# - ✅ Strengths found
# - ⚠️ Issues with severity levels
# - 💡 Improvement suggestions
# - 📊 Scores (accessibility, performance, responsiveness, code quality)
```

### Look Up Documentation

```bash
# With context7 MCP server installed:
"Show me Framer Motion's useAnimation hook examples"
"How do I use Tailwind CSS v4 arbitrary variants?"
"What's new in React 19?"

# context7 fetches live documentation automatically
```

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `.claude/settings.json` | Hooks and permissions |
| `.claude/skills/component-generator/SKILL.md` | Component generation skill |
| `.claude/agents/ui-reviewer.md` | UI review agent |
| `.mcp.json` | MCP server configs (team-shared) |
| `CLAUDE.md` | Project context for Claude |

## 🐛 Troubleshooting

### "Hook failed to run"
```bash
# Check settings syntax
cat .claude/settings.json

# Verify prettier is installed
npx prettier --version

# Test type-check
npm run type-check
```

### "Skill not found"
```bash
# Check skill exists
ls -la .claude/skills/component-generator/SKILL.md

# Restart Claude Code
# Skills are loaded on startup
```

### "MCP server error"
```bash
# List installed servers
claude mcp list

# Remove and reinstall
claude mcp remove context7
claude mcp add context7

# Check debug logs
claude mcp --debug
```

### "Permission denied for Bash"
```bash
# Check .claude/settings.json permissions section
# Should include: "Bash(npm *)", "Bash(npx *)"
```

## 📚 Learn More

- **Project conventions**: See `CLAUDE.md`
- **Component patterns**: See `.claude/skills/component-generator/SKILL.md`
- **Review standards**: See `.claude/agents/ui-reviewer.md`
- **Deployment**: See `DEPLOYMENT.md`

## 🎓 Best Practices

### When to Use Skills
- ✅ Generating new components (use `/component-generator`)
- ✅ Repetitive tasks with templates
- ✅ Project-specific workflows

### When to Use Agents
- ✅ Code review (accessibility, performance, security)
- ✅ Parallel analysis
- ✅ Specialized expertise

### When to Use MCP Servers
- ✅ Looking up documentation
- ✅ Integrating with external services
- ✅ Browser automation (Playwright)
- ✅ Database queries

### When to Use Hooks
- ✅ Auto-formatting on save
- ✅ Running tests after edits
- ✅ Blocking dangerous operations

## 💡 Tips

1. **Use context7 liberally**: It has docs for all your libraries
2. **Run ui-reviewer before PRs**: Catch accessibility issues early
3. **Let hooks run**: They keep code clean automatically
4. **Create new skills**: For repetitive project-specific tasks
5. **Check CLAUDE.md**: Keep it updated with conventions

## 🚀 Next Steps

1. ✅ Install MCP servers
2. ✅ Test hooks work
3. ✅ Try component-generator skill
4. ✅ Run ui-reviewer on a component
5. 📝 Update CLAUDE.md as project evolves

---

**Questions?** Check `.claude/README.md` for detailed documentation.

**Need help?** Ask Claude: "How do I use the component-generator skill?"

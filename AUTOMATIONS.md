# Claude Code Automations

This document describes all Claude Code automations configured for the JBM Portfolio project.

**Last Updated**: 2026-01-28

---

## 🔌 MCP Servers

MCP Servers provide external tool integrations for Claude. Configuration in `.mcp.json`.

### context7
**Purpose**: Live, version-specific documentation for libraries (React, Astro, Three.js, Framer Motion)

**When to use**: Ask Claude about library APIs, best practices, or check documentation.

**Example**: "How do I use useReducedMotion in Framer Motion?" → Claude fetches latest docs

### playwright
**Purpose**: Browser automation and testing

**When to use**: Test UI interactions, verify animations work cross-browser, take screenshots

**Example**: "Test the boot sequence on mobile Safari"

---

## 🎯 Skills

Skills are reusable workflows invoked with `/skill-name` or automatically by Claude.

### Existing Skills

#### component-generator (`/component-generator`)
**Purpose**: Generate new React components with TypeScript, Framer Motion, holographic styling

**Usage**: `/component-generator MyComponent`

**Created**: Previously (project setup)

### New Skills

#### animation-tester (`/animation-tester`)
**Purpose**: Test animation performance and accessibility (prefers-reduced-motion)

**Usage**: `/animation-tester`

**What it does**:
- Checks all animations respect `prefers-reduced-motion`
- Profiles frame rate (target 60fps)
- Analyzes GPU usage
- Checks bundle size of animation libraries

**Created**: 2026-01-28

#### deploy-portfolio (`/deploy-portfolio`)
**Purpose**: Deploy to Vercel with comprehensive pre-flight checks

**Usage**: `/deploy-portfolio`

**What it does**:
1. Checks git status (warns if uncommitted changes)
2. Runs TypeScript type-check
3. Builds production bundle
4. Checks bundle size (warns if > 5MB)
5. Deploys to Vercel (preview then production)
6. Runs Lighthouse audit on deployed URL

**Created**: 2026-01-28

---

## ⚡ Hooks

Hooks run automatically on file edits. Configuration in `.claude/settings.json`.

### Pre-Tool Hooks (run BEFORE edits)

#### block-sensitive
**Trigger**: Before editing `.env`, `.env.*`, `*.key`, `*.pem` files

**Action**: Blocks edit and warns user

**Purpose**: Prevent accidental exposure of secrets

### Post-Tool Hooks (run AFTER edits)

#### auto-format
**Trigger**: After editing `.ts`, `.tsx`, `.js`, `.jsx`, `.css`, `.astro`, `.json`, `.md`

**Action**: Runs `npx prettier --write {{file}}`

**Purpose**: Automatic code formatting

#### astro-check
**Trigger**: After editing `.astro` files

**Action**: Runs `npm run check`

**Purpose**: Validate Astro components (NEW - 2026-01-28)

#### type-check
**Trigger**: After any edit

**Action**: Runs `npm run type-check`

**Purpose**: Catch TypeScript errors immediately

---

## 🤖 Subagents

Subagents are specialized AI agents for specific review tasks.

### Existing Agents

#### ui-reviewer
**Purpose**: Review React components for accessibility, UX, performance, responsiveness

**Created**: Previously (project setup)

### New Agents

#### performance-analyzer
**Purpose**: Analyze Three.js, animation, and bundle performance

**Focus areas**:
- Bundle size optimization
- Three.js rendering (draw calls, GPU usage)
- Animation frame rate
- Memory leak detection
- Web Vitals (LCP, FID, CLS, INP)

**Created**: 2026-01-28

**How to invoke**: Ask Claude "Can you analyze performance?" or "Review Three.js performance"

---

## 📦 Installed Plugins

Plugins are collections of skills maintained by the community.

### superpowers
**What it includes**:
- `/brainstorming` - Explore requirements before coding
- `/systematic-debugging` - Debug with rigor
- `/test-driven-development` - TDD workflow
- `/verification-before-completion` - Verify work before claiming done
- `/writing-plans` - Create implementation plans
- `/requesting-code-review` - Request review after completion
- And more...

**Installed**: 2026-01-28

### Other Installed Plugins (pre-existing)
- `context7` - Documentation access (also available as MCP)
- `feature-dev` - Feature development workflow
- `frontend-design` - Frontend component design
- `vercel` - Vercel deployment commands
- `github` - GitHub integration
- `typescript-lsp` - TypeScript language server
- `claude-code-setup` - Setup assistance
- `claude-md-management` - CLAUDE.md management

---

## 🚀 Quick Start Guide

### For New Contributors

1. **Clone the repo**:
   ```bash
   git clone <repo-url>
   cd jbm-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **MCP servers will auto-configure** (via `.mcp.json`)

4. **Available workflows**:
   - `/component-generator` - Create new component
   - `/animation-tester` - Test animations
   - `/deploy-portfolio` - Deploy to Vercel
   - `/brainstorming` - Plan new features (via superpowers)

### Testing the Setup

```bash
# Test hooks work
echo "// test" >> src/components/App.tsx
# Should auto-format and type-check

# Test skills
/animation-tester
# Should run performance checks

# Test MCP
Ask Claude: "Show me Framer Motion's useReducedMotion docs"
# Should fetch from context7
```

---

## 📝 Configuration Files

| File | Purpose | Committed? |
|------|---------|------------|
| `.claude/settings.json` | Hooks and permissions | ✅ Yes |
| `.claude/skills/` | Custom skills | ✅ Yes |
| `.claude/agents/` | Custom subagents | ✅ Yes |
| `.mcp.json` | MCP server config | ✅ Yes (NEW) |
| `.zed/settings.json` | Zed editor settings | ✅ Yes |
| `.zed/tasks.json` | Zed tasks | ✅ Yes |

---

## 🔧 Maintenance

### Updating MCP Servers

MCP servers auto-update via `npx -y`. No manual updates needed.

### Updating Plugins

```bash
# Update all plugins
claude plugin update

# Update specific plugin
claude plugin update superpowers
```

### Disabling Automations

```bash
# Disable a plugin temporarily
claude plugin disable superpowers

# Remove a hook
# Edit .claude/settings.json and remove the hook entry
```

---

## 🐛 Troubleshooting

### MCP servers not working

```bash
# Check MCP configuration
cat .mcp.json

# Restart Claude Code
# MCP servers load on startup
```

### Hooks not running

```bash
# Check hook syntax
cat .claude/settings.json | grep -A 10 "hooks"

# Check permissions
cat .claude/settings.json | grep -A 10 "permissions"
```

### Skills not found

```bash
# List available skills
ls -la .claude/skills/

# Check skill syntax
cat .claude/skills/animation-tester/SKILL.md | head -10
```

---

## 📚 Resources

- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [MCP Servers Directory](https://github.com/modelcontextprotocol/servers)
- [Plugin Marketplace](https://claude.ai/marketplace)
- [Hooks Guide](https://docs.anthropic.com/claude-code/hooks)

---

## 🎯 Recommended Workflows

### When Building New Features
1. `/brainstorming` - Define requirements
2. `/component-generator` - Create components
3. `/animation-tester` - Test performance
4. `/requesting-code-review` - Get review
5. `/deploy-portfolio` - Deploy to production

### When Debugging
1. `/systematic-debugging` - Structured debugging
2. Ask performance-analyzer agent for profiling
3. Ask ui-reviewer agent for accessibility

### Before Pushing to Production
1. `/animation-tester` - Performance check
2. `/verification-before-completion` - Final verification
3. `/deploy-portfolio` - Deploy with checks

---

**Questions?** Ask Claude: "How do I use [automation-name]?"

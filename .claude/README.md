# Claude Code Automations

This directory contains Claude Code automation configurations for the JBM Portfolio project.

## 📁 Structure

```
.claude/
├── README.md           # This file
├── settings.json       # Hooks and permissions
├── agents/             # Specialized review agents
│   └── ui-reviewer.md
└── skills/             # Custom skills
    └── component-generator/
        └── SKILL.md
```

## ⚡ Hooks (Auto-run)

Configured in `settings.json`:

### Auto-format (PostToolUse)
**Trigger**: After Edit or Write on `.ts`, `.tsx`, `.js`, `.jsx`, `.css`, `.astro`, `.json`, `.md` files
**Action**: Runs `npx prettier --write {{file}}`
**Why**: Ensures consistent code formatting automatically

### Type-check (PostToolUse)
**Trigger**: After Edit or Write on `.ts`, `.tsx` files
**Action**: Runs `npm run type-check`
**Why**: Catches TypeScript errors immediately

## 🎯 Skills (User-invoked)

### /component-generator
**Location**: `skills/component-generator/SKILL.md`
**Purpose**: Generate new React components following project conventions
**Usage**: `/component-generator ComponentName`

**What it does:**
- Creates TypeScript React component with proper imports
- Adds Framer Motion animations
- Applies holographic theme styling
- Follows project patterns (always import React, use interfaces, etc.)

**Example:**
```bash
/component-generator StatusIndicator
```

Creates `src/components/StatusIndicator.tsx` with proper structure.

## 🤖 Agents (Background reviewers)

### ui-reviewer
**Location**: `agents/ui-reviewer.md`
**Purpose**: Review components for accessibility, performance, and UX
**Invoke**: Ask Claude to "review this component with the ui-reviewer agent"

**Reviews:**
- ✅ Accessibility (WCAG AA compliance)
- ✅ Performance (re-renders, animations)
- ✅ Responsiveness (mobile, touch targets)
- ✅ Code quality (TypeScript, patterns)

**Output**: Detailed report with severity levels and code examples

## 🔌 MCP Servers

Configured in `../.mcp.json`:

### context7
**Purpose**: Live documentation for React, Astro, Tailwind, Framer Motion, Three.js
**Install**: `claude mcp add context7`
**Usage**: Automatically provides up-to-date docs when coding

### github (Optional)
**Purpose**: GitHub integration for issues, PRs, repository management
**Install**: `claude mcp add github`
**Requires**: `gh` CLI installed (`brew install gh`)

## 🔐 Permissions

Configured in `settings.json`:

**Allowed tools:**
- `Edit`, `Write`, `Read` - File operations
- `Glob`, `Grep` - Code search
- `Bash(npm *)` - npm commands
- `Bash(npx *)` - npx commands
- `Bash(git *)` - Git operations

## 📖 Usage Examples

### Generate a new component
```bash
/component-generator NavBar
```

### Review component for accessibility
```
Please review src/components/Terminal.tsx with the ui-reviewer agent
```

### Manual hook testing
After editing a file, hooks run automatically. To test manually:
```bash
npx prettier --write src/components/MyComponent.tsx
npm run type-check
```

## 🚀 Setup for Team

1. **Install MCP servers** (one-time per developer):
   ```bash
   claude mcp add context7
   claude mcp add github  # if using GitHub integration
   ```

2. **Verify settings**:
   ```bash
   cat .claude/settings.json
   ```

3. **Test hooks**:
   - Edit any TypeScript file
   - Save it
   - Should auto-format and type-check

4. **Try a skill**:
   ```bash
   /component-generator TestComponent
   ```

## 🐛 Troubleshooting

### Hooks not running
- Check `.claude/settings.json` syntax (valid JSON)
- Verify file patterns match (e.g., `**/*.tsx`)
- Check permissions allow Bash commands

### Skill not found
- Verify `SKILL.md` exists in correct location
- Check YAML frontmatter is valid
- Restart Claude Code if recently added

### Type-check fails
- Run manually: `npm run type-check`
- Fix TypeScript errors before continuing
- Hook will continue on error (won't block edits)

### MCP server not working
- Verify installation: `claude mcp list`
- Check `.mcp.json` syntax
- Restart Claude Code after adding servers

## 📚 Documentation

- **Project context**: See `../CLAUDE.md`
- **Component patterns**: See `skills/component-generator/SKILL.md`
- **Review standards**: See `agents/ui-reviewer.md`
- **Deployment**: See `../DEPLOYMENT.md`

## 🔄 Updates

When patterns change:
1. Update `CLAUDE.md` with new conventions
2. Update `component-generator/SKILL.md` with new patterns
3. Update `ui-reviewer.md` with new standards
4. Test with a sample component

---

**Maintained by**: Jean-Baptiste Machemie
**Last Updated**: 2024-01-26

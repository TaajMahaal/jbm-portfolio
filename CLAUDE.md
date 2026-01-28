# JBM Portfolio - Project Context

## Communication Preference

**Always communicate in French with the user. All responses, explanations, and interactions must be in French. Keep the tone light and informal. This is a Claude Code discovery project so please push some highlights on how to use you effectively when relevant, and only when relevant, don't spam unnecessary explanations.**

## Project Overview

Personal portfolio website for Jean-Baptiste Machemie, Engineering Manager @ Jump. Features a unique tiling window manager interface with holographic gradients and a retro Unix aesthetic.

**Live URL**: TBD (deploy to Vercel)
**Tech Stack**: Astro 5, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Three.js

## Design Philosophy

### Visual Style
- **Holographic gradients**: Animated gradients using petroleum blue (#1a535c), teal (#4fd1c5), and gold (#edc800)
- **Unix/Linux aesthetic**: No Windows references, Unix-style paths (~/terminal, ~/about, etc.)
- **Tiling layout**: Auto-tiling 2x2 grid layout inspired by i3wm/bspwm
- **NerdFont typography**: JetBrains Mono and Fira Code for developer aesthetic
- **Dark theme**: Pure black (#000000) background with subtle gradient overlays

### Key Features
- **Boot sequence**: Linux kernel-style boot messages on load
- **Auto-tiling desktop**: 4 panes in 2x2 grid (terminal, about, work, skills)
- **Interactive terminal**: Working command-line interface with easter eggs
- **Matrix rain**: Animated background effect with gradient colors
- **Responsive**: Adapts to all screen sizes

## Tech Stack Details

### Core
- **Astro 5.16.15**: Static site generator with React islands
- **React 19.2.3**: For interactive components
- **TypeScript (strict mode)**: Type safety throughout
- **Tailwind CSS v4.1.18**: Utility-first styling with custom theme

### Animation & Effects
- **Framer Motion 12.29.2**: Smooth animations (fade, scale, slide)
- **Three.js 0.182.0**: 3D effects (Matrix rain background)
- **@react-three/fiber & @react-three/drei**: React bindings for Three.js

### Build & Dev
- **Vite**: Fast dev server and build tool (via Astro)
- **TypeScript**: Strict mode, no implicit any
- **Prettier**: Code formatting (configured in .prettierrc)

## Architecture

### File Structure
```
src/
├── components/          # React components
│   ├── App.tsx         # Main app with boot sequence
│   ├── AutoTilingDesktop.tsx  # Tiling layout manager
│   ├── BootSequence.tsx       # Linux-style boot animation
│   ├── Terminal.tsx           # Interactive terminal (DEPRECATED - content moved to AutoTilingDesktop)
│   ├── RetroBackground.tsx    # Matrix rain effect
│   └── KonamiCode.tsx         # Easter egg detector
├── data/
│   └── cv.ts           # CV content and data structures
├── layouts/
│   └── Layout.astro    # Base HTML layout
├── pages/
│   └── index.astro     # Homepage
└── styles/
    └── global.css      # Global styles, animations, theme
```

### Component Patterns

**All React components MUST:**
1. Import React explicitly: `import React from 'react'`
2. Use TypeScript interfaces for props
3. Use Framer Motion for animations
4. Follow holographic theme styling
5. Export as default

**Example:**
```typescript
import React from 'react';
import { motion } from 'framer-motion';

interface MyComponentProps {
  title: string;
}

export default function MyComponent({ title }: MyComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="holo-text"
    >
      {title}
    </motion.div>
  );
}
```

## Styling System

### Custom CSS Classes

**Text effects:**
- `holo-text` - Animated gradient text (petroleum → teal → gold)
- `text-teal-100/300/400` - Teal color variants
- `text-gold-400` - Gold accent color

**Layout:**
- `retro-window` - Window with animated gradient border and backdrop blur
- `retro-title-bar` - Title bar with shimmer effect
- `retro-button` - Button with glow and hover animations

**Terminal:**
- `terminal-prompt::before` - Gold gradient `$ ` prompt
- `terminal-cursor` - Blinking cursor with glow

### Color Palette
```css
--color-petroleum: #1a535c  /* Primary - dark teal */
--color-teal: #4fd1c5       /* Accent - bright teal */
--color-gold: #edc800       /* Accent - gold */
--color-dark-bg: #000000    /* Background */
--color-dark-surface: #0a0a0a  /* Surface */
```

### Animations

**Keyframes:**
- `gradient-shift` - Background gradient animation (15s)
- `glow-pulse` - Brightness/saturation pulse (8s)
- `shimmer` - Horizontal shimmer effect (3-4s)
- `blink` - Terminal cursor blink (1s)

**Common patterns:**
```typescript
// Fade in
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Scale up
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}

// Slide in
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
```

## Content Structure

### Profile Data (`src/data/cv.ts`)

**Exports:**
- `profile` - Name, title, location, contact
- `experiences` - Work history array
- `skills` - Technical skills by category
- `education` - Academic background
- `easterEggs` - Terminal command responses

**Skill Categories:**
- `devops` - Kubernetes, Docker, Terraform, etc.
- `backend` - Go, Node.js, Python, PostgreSQL, etc.
- `frontend` - TypeScript, React, Vue, Next.js
- `security` - Security architecture, cryptography
- `tools` - Git, Linux, monitoring, Agile

## Development

### Commands
```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build
npm run type-check  # TypeScript type checking
npm run clean     # Clear cache and build artifacts
```

### Git Workflow
- Main branch: `main` (or `master`)
- Feature branches: `feature/description`
- Commit style: Conventional commits preferred

### Code Quality
- TypeScript strict mode enabled
- No `any` types without justification
- Prettier for consistent formatting
- Type-check before commits

## Known Issues & TODOs

### Fixed
- ✅ React import issue (was causing jsxDEV errors)
- ✅ Z-index issues with CRT effects
- ✅ Terminal styling (removed Windows .EXE references)
- ✅ Tiling layout (now 2x2 auto-tiling)
- ✅ TypeScript errors in AutoTilingDesktop.tsx (RefObject type mismatch with TimelineOrb)

### Active
- No tests yet (could add Vitest)
- No CI/CD pipeline yet (could add GitHub Actions)

### Future Enhancements
- Add more terminal commands
- Implement actual tiling resize/drag
- Add keyboard shortcuts (Mod+1-4 for workspaces)
- Add more easter eggs (Konami code implemented)
- Blog section
- Project showcase section
- Contact form

## Deployment

### Recommended: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

**Build settings:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: 18+

### Alternative: Netlify, Cloudflare Pages, GitHub Pages
See `DEPLOYMENT.md` for detailed instructions.

## Easter Eggs

### Terminal Commands
- `help` - Show available commands
- `whoami` - User info
- `neofetch` - System info (parody)
- `ls` - List files
- `cat .env` - Secret message
- `git log --reverse` - Career as commits
- And more...

### Konami Code
Type: ↑ ↑ ↓ ↓ ← → ← → B A (works anywhere on page)

### Source Code
Hidden ASCII art message in HTML comments

## Performance

### Metrics
- Bundle size: ~108KB gzipped
- Lighthouse score: 95+ expected
- Time to Interactive: < 2.5s
- First Contentful Paint: < 1.0s

### Optimizations
- Static site generation (no SSR overhead)
- Code splitting with Astro islands
- Tree-shaking (Framer Motion, Three.js)
- Critical CSS inlined

## Accessibility

### Current State
- Semantic HTML used
- Color contrast needs review (some teal/gold combinations)
- Keyboard navigation partially implemented
- Screen reader support needs improvement

### Recommendations (from ui-reviewer agent)
- Add ARIA labels to interactive elements
- Implement focus indicators
- Add skip links
- Test with screen readers
- Ensure terminal is keyboard accessible

## Contributing

This is a personal portfolio, but suggestions welcome:
1. Open an issue for bugs or suggestions
2. Fork and create a PR for improvements
3. Follow existing code patterns
4. Run type-check before submitting

## Contact

**Jean-Baptiste Machemie**
Email: jb.machemie@proton.me
LinkedIn: linkedin.com/in/jean-baptiste-machemie-6900a7181
Location: Limoges, France

---

**Last Updated**: 2024-01-26
**Version**: 1.0.0
**Status**: Active Development

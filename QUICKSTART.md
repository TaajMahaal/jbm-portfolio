# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- Git installed (optional, for version control)
- Code editor (VS Code recommended)

## Installation

```bash
# Navigate to the project
cd jbm-portfolio

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Your site will be available at `http://localhost:4321`

## First Steps

### 1. Update Your Information

Edit `src/data/cv.ts` to customize with your information:

```typescript
export const profile = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... update all fields
};
```

### 2. Modify Experiences

Update the `experiences` array with your work history:

```typescript
export const experiences: Experience[] = [
  {
    company: 'Your Company',
    role: 'Your Role',
    period: 'Start - End',
    description: 'What you did',
    highlights: ['Achievement 1', 'Achievement 2'],
  },
  // Add more experiences
];
```

### 3. Update Skills

Customize the `skills` array with your technical skills:

```typescript
export const skills: Skill[] = [
  { name: 'Your Skill', category: 'backend' },
  // Add more skills
];
```

### 4. Personalize Colors (Optional)

Edit `src/styles/global.css` to change the color scheme:

```css
@theme {
  --color-petroleum: #1a535c;  /* Primary color */
  --color-gold: #edc800;       /* Secondary color */
  --color-phosphor: #00ff41;   /* Accent color */
}
```

### 5. Add Custom Terminal Commands

Edit `src/components/Terminal.tsx` to add your own commands:

```typescript
switch (trimmedCmd) {
  case 'yourcommand':
    output = 'Your custom response';
    break;
  // Add more commands
}
```

### 6. Customize Easter Eggs

Edit `src/data/cv.ts` to add your own easter eggs:

```typescript
export const easterEggs = {
  terminalCommands: [
    { cmd: 'custom', response: 'Your secret message' },
  ],
};
```

## Development Commands

```bash
# Start dev server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Clean build artifacts
npm run clean
```

## Project Structure Overview

```
src/
├── components/
│   ├── App.tsx           # Main app component
│   ├── Terminal.tsx      # Interactive terminal
│   ├── Desktop.tsx       # Desktop interface
│   ├── Window.tsx        # Draggable windows
│   ├── BootSequence.tsx  # Boot animation
│   ├── RetroBackground.tsx  # Background effects
│   └── KonamiCode.tsx    # Easter egg handler
├── data/
│   └── cv.ts            # YOUR CONTENT HERE
├── layouts/
│   └── Layout.astro     # HTML layout
├── pages/
│   └── index.astro      # Homepage
└── styles/
    └── global.css       # Styles & theme
```

## Customization Quick Wins

### Change Boot Messages

Edit `src/components/BootSequence.tsx`:

```typescript
const bootMessages = [
  'YOUR_NAME_OS v1.0.0',
  'Your custom message...',
  // Customize all messages
];
```

### Update Meta Tags

Edit `src/layouts/Layout.astro`:

```astro
<meta name="description" content="Your description" />
<meta property="og:title" content="Your title" />
```

### Add New Window/Section

1. Create component in `src/components/YourComponent.tsx`
2. Add to Desktop.tsx:

```typescript
const apps: DesktopApp[] = [
  // ... existing apps
  {
    id: 'yourapp',
    title: 'YOUR_APP.EXE',
    icon: '🚀',
    component: <YourComponent />,
  },
];
```

## Testing Your Changes

1. Save your files
2. Check browser (auto-refreshes)
3. Test terminal commands
4. Try dragging windows
5. Check mobile view (responsive mode in DevTools)

## Common Issues

### Port 4321 already in use
```bash
# Kill the process using the port
lsof -ti:4321 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Styles not updating
```bash
# Clear cache and restart
npm run clean
npm run dev
```

### Type errors
```bash
# Check for type errors
npm run type-check
```

## Next Steps

1. ✅ Update personal information
2. ✅ Customize colors and theme
3. ✅ Add your own content
4. ✅ Test all features
5. 📝 Read [DEPLOYMENT.md](DEPLOYMENT.md) to deploy
6. 🎨 Customize further (see [ROADMAP.md](ROADMAP.md))

## Need Help?

- Check [README.md](README.md) for full documentation
- See [CONTRIBUTING.md](CONTRIBUTING.md) for code guidelines
- Open an issue on GitHub for questions

## Deploy

When ready to deploy:

```bash
# Build production version
npm run build

# Test production build locally
npm run preview
```

Then follow [DEPLOYMENT.md](DEPLOYMENT.md) for platform-specific instructions.

---

**Ready to impress?** Start customizing and make this portfolio truly yours! 🚀

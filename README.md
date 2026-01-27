# Jean-Baptiste Machemie - Portfolio

A retro-styled, highly interactive portfolio website showcasing engineering excellence through code.

## 🎨 Design Philosophy

This portfolio breaks away from the traditional infinite-scroll format. Instead, it presents a modernized retro operating system interface, combining:

- **Retro aesthetics** with modern polish
- **Interactive terminal** with hidden commands
- **Draggable windows** for different sections
- **Boot sequence** animation on load
- **Matrix-style background** effects
- **CRT screen effects** (scanlines, glow, vignette)

## 🎯 Features

### Core Features
- ✅ **Retro OS Interface** - Desktop with draggable windows
- ✅ **Interactive Terminal** - Full command-line experience with easter eggs
- ✅ **Boot Sequence** - Authentic system startup animation
- ✅ **Matrix Background** - Subtle animated background effect
- ✅ **Konami Code** - Hidden easter egg (try it!)
- ✅ **Clean Architecture** - Maintainable, auditable TypeScript code

### Easter Eggs 🥚
Hidden features for the curious:
- Terminal commands: `whoami`, `history`, `cat .env`, `hack.exe`, `neofetch`, `git log`, `sudo make me a sandwich`
- Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
- Hidden message in HTML source code
- Various terminal secrets waiting to be discovered

## 🛠️ Tech Stack

### Core Technologies
- **[Astro](https://astro.build)** - Static site generation with optimal performance
- **[React](https://react.dev)** - Interactive components
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe code
- **[Tailwind CSS v4](https://tailwindcss.com)** - Modern styling with custom theme

### Libraries
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Three.js](https://threejs.org)** / **React Three Fiber** - 3D effects
- **[clsx](https://github.com/lukeed/clsx)** - Conditional classnames

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
jbm-portfolio/
├── src/
│   ├── components/       # React components
│   │   ├── BootSequence.tsx
│   │   ├── Desktop.tsx
│   │   ├── KonamiCode.tsx
│   │   ├── RetroBackground.tsx
│   │   ├── Terminal.tsx
│   │   └── Window.tsx
│   ├── data/            # CV data and content
│   │   └── cv.ts
│   ├── layouts/         # Astro layouts
│   │   └── Layout.astro
│   ├── pages/           # Astro pages
│   │   └── index.astro
│   └── styles/          # Global styles
│       └── global.css
├── public/              # Static assets
└── astro.config.mjs     # Astro configuration
```

## 🎨 Color Palette

- **Primary**: `#1a535c` (Petroleum Blue)
- **Secondary**: `#edc800` (Gold)
- **Accent**: `#00ff41` (Phosphor Green)
- **Background**: `#0a0e0f` (Deep Black)
- **Surface**: `#141a1c` (Dark Gray)

## 🔧 Code Quality

This project demonstrates:
- ✅ **Clean Code** - Self-documenting, maintainable
- ✅ **Type Safety** - Full TypeScript implementation
- ✅ **Modern Patterns** - React hooks, composition
- ✅ **Performance** - Optimized builds, lazy loading
- ✅ **Accessibility** - Semantic HTML, ARIA labels
- ✅ **Responsive** - Mobile-friendly design

## 🤝 Easter Egg Hints

Try these in the terminal:
- Basic commands: `help`, `whoami`, `ls`, `clear`
- Fun commands: `neofetch`, `hack.exe`, `cat .env`
- Git commands: `git log --reverse`
- XKCD reference: `sudo make me a sandwich`
- Use arrow keys to navigate command history
- The Konami Code works anywhere on the page

## 📝 License

This project is a personal portfolio. Feel free to use the code structure as inspiration, but please don't copy the personal content.

## 📧 Contact

**Jean-Baptiste Machemie**
- Email: jb.machemie@gmail.com
- LinkedIn: [linkedin.com/in/jean-baptiste-machemie-6900a7181](https://linkedin.com/in/jean-baptiste-machemie-6900a7181)

---

*Built with passion for engineering excellence. If you found this in the source code, let's connect!* 🚀

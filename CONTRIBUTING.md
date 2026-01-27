# Contributing to JBM Portfolio

Thank you for your interest in this project! While this is a personal portfolio, suggestions and improvements are welcome.

## Code Quality Standards

This project maintains high code quality standards:

### TypeScript
- Strict mode enabled
- No `any` types without justification
- Proper type definitions for all functions and components
- Use interfaces for object shapes

### React
- Functional components with hooks
- Proper dependency arrays in useEffect
- Meaningful component and variable names
- Props interfaces defined separately

### Styling
- Tailwind CSS for all styling
- Custom CSS classes in global.css for complex effects
- Responsive design using Tailwind breakpoints
- Consistent color usage via CSS variables

### Performance
- Lazy load heavy components
- Optimize animations for 60fps
- Use Astro islands for React components
- Minimize bundle size

## Project Structure

```
src/
├── components/       # React components
│   ├── App.tsx      # Main app component
│   ├── Terminal.tsx # Interactive terminal
│   ├── Window.tsx   # Draggable window component
│   └── ...
├── data/            # CV data and content
│   └── cv.ts        # Structured CV information
├── layouts/         # Astro layouts
│   └── Layout.astro # Base HTML layout
├── pages/           # Astro pages (routes)
│   └── index.astro  # Homepage
└── styles/          # Global styles
    └── global.css   # Tailwind + custom CSS
```

## Development Workflow

### Setup
```bash
npm install
npm run dev
```

### Before Committing
```bash
# Type check
npm run type-check

# Build to verify no errors
npm run build

# Test the build
npm run preview
```

## Adding Features

### New Terminal Command
1. Edit `src/components/Terminal.tsx`
2. Add command to the `executeCommand` switch statement
3. Add to help message
4. Consider adding to easter eggs in `src/data/cv.ts`

### New Window/Section
1. Create component in `src/components/`
2. Add to apps array in `src/components/Desktop.tsx`
3. Define icon and title
4. Ensure draggable and closeable

### New Easter Egg
1. Add to `src/data/cv.ts` easterEggs object
2. Implement in relevant component
3. Document in README.md hints section

## Code Style

### Naming Conventions
- Components: PascalCase (`Terminal.tsx`)
- Files: camelCase for utils, PascalCase for components
- Functions: camelCase (`executeCommand`)
- Constants: UPPER_SNAKE_CASE (`KONAMI_CODE`)
- CSS classes: kebab-case (`retro-window`)

### Component Structure
```tsx
// Imports
import { useState } from 'react';

// Types/Interfaces
interface Props {
  title: string;
}

// Component
export default function Component({ title }: Props) {
  // Hooks
  const [state, setState] = useState();

  // Functions
  const handleClick = () => {};

  // Effects
  useEffect(() => {}, []);

  // Render
  return <div>{title}</div>;
}
```

## Testing

Currently no automated tests, but manual testing checklist:
- [ ] All terminal commands work
- [ ] Windows are draggable
- [ ] Boot sequence plays
- [ ] Konami Code triggers
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Smooth animations
- [ ] Fast page load

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature suggestions
- Code improvements
- Documentation updates

## License

This is a personal portfolio project. The code structure can be used as inspiration, but please don't copy personal content (CV information, etc.).

---
name: component-generator
description: Generate new React component with TypeScript, Framer Motion animations, and holographic styling
disable-model-invocation: true
---

# Component Generator Skill

Generate a new React component following project conventions.

## Usage

```
/component-generator ComponentName [options]
```

## Project Conventions

All components MUST follow these patterns:

### 1. Imports
```typescript
import React from 'react';
import { motion } from 'framer-motion';
```

**Critical**: Always import React explicitly. The project uses `import React from 'react'` pattern.

### 2. TypeScript Interface
```typescript
interface ComponentNameProps {
  // Define props here
}
```

### 3. Component Structure
```typescript
export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="..."
    >
      {/* Component content */}
    </motion.div>
  );
}
```

### 4. Styling Classes

**Available custom classes:**
- `holo-text` - Holographic animated gradient text
- `retro-window` - Window with animated gradient border
- `retro-title-bar` - Title bar with shimmer effect
- `retro-button` - Button with glow and hover effects

**Color utilities:**
- `text-teal-100`, `text-teal-300`, `text-teal-400`
- `text-gold-400`

**Theme colors (use with arbitrary values):**
- `#1a535c` - Petroleum blue
- `#4fd1c5` - Teal
- `#edc800` - Gold
- `#000000` - Dark background

### 5. File Location

Save components to: `src/components/{ComponentName}.tsx`

## Animation Patterns

### Fade in
```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
```

### Scale up
```typescript
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
```

### Slide in
```typescript
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
```

### Staggered children
```typescript
variants={{
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}}
```

## Example Component

```typescript
import React from 'react';
import { motion } from 'framer-motion';

interface StatusCardProps {
  title: string;
  status: 'active' | 'inactive';
  children?: React.ReactNode;
}

export default function StatusCard({ title, status, children }: StatusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="retro-window p-6"
    >
      <div className="retro-title-bar mb-4">
        <span className="holo-text">{title}</span>
        <span className={status === 'active' ? 'text-teal-400' : 'text-gray-500'}>
          {status}
        </span>
      </div>
      <div className="text-teal-100">
        {children}
      </div>
    </motion.div>
  );
}
```

## Steps

1. Ask user for component name and purpose
2. Determine required props
3. Choose appropriate animation pattern
4. Generate component following ALL conventions above
5. Save to `src/components/{ComponentName}.tsx`
6. Confirm creation with user

## Important Notes

- **Always** import React explicitly
- **Always** use TypeScript interfaces for props
- **Always** use Framer Motion for animations
- **Always** follow the holographic/retro theme
- Keep components focused and single-responsibility

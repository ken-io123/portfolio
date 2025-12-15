# Portfolio Project - Copilot Instructions

## Project Overview
Single-page personal portfolio website with dark mode support.
Design: Modern creative agency style (Xander-inspired) with floating badges, gradient backgrounds, smooth animations.

## Tech Stack
- **Framework**: React 18 via Vite
- **Styling**: Tailwind CSS v3 (with dark mode)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: EmailJS
- **Utilities**: clsx, tailwind-merge

## Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Run Prettier
```

## Architecture
- **Single-page app** — No React Router, smooth scroll navigation
- **Component-based** — Small, focused, reusable components
- **Data-driven** — All content in `src/data/` files
- **Custom hooks** — Encapsulate logic (theme, scroll, animations)

## Folder Structure
```
PORTFOLIO/
├── .github/
│   └── copilot-instructions.md
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── profile.png          # Profile photo
│   │   └── icons/
│   ├── components/
│   │   ├── ui/                       # Reusable primitives
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── index.js             # Barrel export
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── index.js
│   │   ├── sections/                 # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Works.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── index.js
│   │   └── index.js                  # Main barrel export
│   ├── data/
│   │   ├── navLinks.js
│   │   ├── services.js
│   │   ├── projects.js
│   │   ├── stats.js
│   │   └── socialLinks.js
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useScrollSection.js
│   │   └── useAnimateOnScroll.js
│   ├── lib/
│   │   ├── utils.js                  # cn() helper
│   │   └── emailjs.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🧹 CLEAN CODE PRINCIPLES (MANDATORY)

### 1. Component Rules
- **Single Responsibility**: One component = one purpose
- **Max 100 lines**: If longer, break into smaller components
- **No inline styles**: Use Tailwind classes only
- **Props destructuring**: Always at function parameters

```jsx
// ✅ GOOD
const Button = ({ children, variant = 'primary', onClick, className }) => {
  return (
    <button 
      onClick={onClick}
      className={cn(buttonVariants[variant], className)}
    >
      {children}
    </button>
  );
};

// ❌ BAD
const Button = (props) => {
  return <button style={{color: 'red'}} onClick={props.onClick}>{props.children}</button>
}
```

### 2. Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HeroSection.jsx` |
| Hooks | camelCase, `use` prefix | `useTheme.js` |
| Utils/Data | camelCase | `projects.js` |
| CSS classes | kebab-case | `hero-gradient` |
| Constants | SCREAMING_SNAKE | `API_URL` |

### 3. Import Order
```jsx
// 1. React & external libraries
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 2. Internal components (use barrel exports)
import { Button, Badge, Container } from '@/components/ui';

// 3. Hooks
import { useTheme } from '@/hooks/useTheme';

// 4. Data & utils
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

// 5. Assets
import profileImg from '@/assets/images/profile.png';
```

### 4. Tailwind Best Practices
- **Use `cn()` helper** for conditional classes
- **Extract repeated patterns** to `@layer components`
- **Mobile-first**: Always start with base (mobile) then add responsive

### 5. Animation Patterns (Framer Motion)
```jsx
// Define variants outside component
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Use in component
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

---

## Design Tokens

### Colors (CSS Variables)
```css
:root {
  --color-primary: 124 58 237;      /* violet-600 */
  --color-primary-dark: 109 40 217; /* violet-700 */
  --color-bg: 248 250 252;          /* slate-50 */
  --color-text: 30 41 59;           /* slate-800 */
  --color-text-muted: 100 116 139;  /* slate-500 */
}

.dark {
  --color-bg: 15 23 42;             /* slate-900 */
  --color-text: 248 250 252;        /* slate-50 */
  --color-text-muted: 148 163 184;  /* slate-400 */
}
```

---

## Key Sections to Build

| Section | Key Elements |
|---------|--------------|
| **Navbar** | Logo, nav links, theme toggle, mobile menu |
| **Hero** | Headline, subtitle, 2 CTAs, profile image, floating badges, stats |
| **Services** | 3 cards (Illustration, Graphic Design, Creative Branding) |
| **Works** | Project grid with hover effects |
| **Contact** | Form with validation, EmailJS integration |
| **Footer** | Links, socials, copyright |

---

## Assets
- Profile image: `src/assets/images/profile.png`

---

**NOTE:** Always print "✅ PROMPT COMPLETE - READY FOR NEXT PROMPT!" at the end of each task completion.

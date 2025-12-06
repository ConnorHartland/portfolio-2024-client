# Project Structure

## Directory Organization

```
src/
├── components/       # React components (kebab-case filenames)
│   ├── landing-page.tsx
│   ├── navbar.tsx
│   ├── projects.tsx
│   ├── work.tsx
│   └── modal.tsx
├── constants/        # Static data and configuration
│   ├── skills.ts
│   ├── projects.ts
│   └── work.ts
├── types/           # TypeScript type definitions
│   ├── index.ts     # Re-exports all types
│   └── project.ts
├── App.tsx          # Root component with section layout
├── main.tsx         # Application entry point
└── index.css        # Global styles and Tailwind imports

public/              # Static assets
├── blogs/           # Markdown blog posts
└── *.png            # Images (logos, icons, etc.)
```

## Conventions

### File Naming
- Components: kebab-case (e.g., `landing-page.tsx`)
- Constants: kebab-case (e.g., `skills.ts`)
- Types: kebab-case (e.g., `project.ts`)

### Component Structure
- Functional components with TypeScript
- Default exports for components
- Named exports for constants and types

### Styling
- Tailwind utility classes for all styling
- Gradient backgrounds: `bg-gradient-to-r from-slate-800 via-slate-900 to-black`
- Color scheme: Purple, blue, green accents on dark slate/gray backgrounds
- Responsive design with `lg:` breakpoints for desktop layouts

### Data Management
- Static data stored in `src/constants/` files
- Export as named constants (e.g., `export { skills }`)
- Types defined in `src/types/` and re-exported through index

### Layout Pattern
- App.tsx contains main sections with IDs for navigation
- Sections: `#home`, `#experience`, `#projects`
- Full-screen sections with flexbox centering

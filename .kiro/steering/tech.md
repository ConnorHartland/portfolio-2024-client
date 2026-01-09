# Technology Stack

## Core Technologies

- **Framework**: React 18.3+ with TypeScript 5.5+
- **Build Tool**: Vite 5.4+ (fast HMR and optimized builds)
- **Styling**: Tailwind CSS 3.4+ with PostCSS and Autoprefixer
- **Package Manager**: pnpm (use pnpm, not npm or yarn)

## Key Libraries

- **UI Components**: React Icons for iconography
- **Content**: MDX and React Markdown for blog posts
- **Syntax Highlighting**: react-syntax-highlighter
- **Scrolling**: react-scroll for smooth navigation
- **Markdown Rendering**: chakra-ui-markdown-renderer

## Development Tools

- **Linting**: ESLint 9+ with TypeScript ESLint
- **Type Checking**: TypeScript with strict mode

## Common Commands

```bash
# Development server with hot reload
pnpm dev

# Type check and build for production
pnpm build

# Lint code
pnpm lint

# Preview production build locally
pnpm preview
```

## Build Configuration

- Vite config includes React plugin and MDX support
- TypeScript configured with separate configs for app and node
- Tailwind scans all HTML/JS/TS/JSX/TSX files in src directory

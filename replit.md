# Nebula Portfolio

## Overview
A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases projects, skills, and experience for Iain Zechender, a homelab engineer and full-stack developer.

## Project Architecture

### Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS with custom dark theme
- **Animations**: Framer Motion
- **UI Components**: Custom shadcn/ui-inspired components
- **Icons**: Lucide React

### Project Structure
```
├── public/              # Static assets (logo, images)
├── src/
│   ├── components/
│   │   └── ui/         # Reusable UI components (Button, Card, Badge)
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and Tailwind directives
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## Development Setup

### Running Locally
The development server runs on port 5000 with the following configuration:
- Host: 0.0.0.0 (required for Replit proxy)
- Port: 5000
- HMR enabled with Vite

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment
Configured for Replit Autoscale deployment:
- Build: `npm run build`
- Run: `npx vite preview --host 0.0.0.0 --port 5000`

## Configuration Notes

### Vite Configuration
The Vite config includes:
- React plugin for JSX/TSX support
- Path alias: `@` maps to `src/`
- Server config with `allowedHosts: true` (required for Replit proxy)
- Port 5000 binding on 0.0.0.0

### Styling
- Dark theme with custom color palette
- Background: #0b0c10
- Text: #c5c6c7
- Accent: Purple (#purple-500/600)
- Custom utility classes for consistent spacing and effects

## Recent Changes (October 17, 2025)
- Fixed nested `<a>` tag React error in Button component
- Configured Vite for Replit environment with proper host settings
- Set up deployment configuration for production
- Installed all dependencies and verified build process

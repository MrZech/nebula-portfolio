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

### Complete Redesign with Modern Interactive Features
Comprehensive UI/UX overhaul with advanced animations and interactivity:

**Hero Section Enhancements:**
- Animated CSS grid background with gradient overlay
- 20 floating particle animations using Framer Motion
- Typewriter effect for name display with animated cursor
- Floating "Live Status" card showing real-time homelab metrics (uptime, active services, storage, network)
- Enhanced gradient buttons with hover effects and icons

**Projects Section Redesign:**
- Interactive filter system with 5 categories (All, React, PHP, Python, Docker)
- Status badges on project cards (Active/WIP/Completed)
- Advanced hover effects with gradient glow and scale animations
- Improved card layouts with better visual hierarchy

**Skills Section Transformation:**
- Skills categorized by type (Frontend, Backend, Infrastructure)
- Animated progress bars showing proficiency percentages
- Smooth scroll-into-view animations using Framer Motion
- Enhanced visual presentation with icons and grouped display

**New Homelab Dashboard Section:**
- Dedicated dashboard with 4 metric cards (Proxmox Nodes, TrueNAS Pools, Containers, Network)
- Active Services grid showing 6 live service indicators (Plex, Jellyfin, Pi-hole, etc.)
- Glassmorphism card design with gradient accents
- Real-time status indicators with pulse animations

**Navigation & Polish:**
- Gradient scroll progress bar (purple to pink) at page top
- Improved sticky header with glassmorphism backdrop-blur effect
- Stylish slide-out menu panel that animates from the left (YouTube-style)
- Backdrop blur overlay when menu is open with click-to-close
- Menu includes external links (Dispo.tech) and close button
- Scroll-to-top FAB button that appears on scroll with smooth animations
- Smooth scrolling interactions throughout

**Contact Section Upgrade:**
- Professional contact form with name, email, and message fields (marked as W.I.P.)
- Enhanced contact info cards with hover effects
- Collaboration callout card with gradient styling
- Form inputs with focus states and modern styling
- W.I.P. badges on both Live Status and Contact Form sections

**Visual Enhancements:**
- Consistent purple/pink gradient theme throughout
- Glow effects and shadows on interactive elements
- Glassmorphism effects on cards and overlays
- Framer Motion animations for smooth transitions
- Improved typography and spacing

### Technical Implementation
- Fixed nested `<a>` tag React error in Button component
- Configured Vite for Replit environment with proper host settings
- Set up deployment configuration for production
- Installed all dependencies and verified build process
- All TypeScript types properly defined for new features
- Zero LSP errors - fully compiling and functional

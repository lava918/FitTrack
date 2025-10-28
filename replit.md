# FitTrack - Athletic Health Tracker

## Overview

FitTrack is a modern health and fitness tracking application with an Adidas-inspired athletic design system. The app allows users to log and visualize daily health metrics including steps, calories burned, and water intake. Built with React, TypeScript, and Express, it features a bold, geometric UI with neon accents and dynamic data visualizations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR support
- Wouter for lightweight client-side routing (single-page application)

**UI Component System**
- shadcn/ui component library (Radix UI primitives with custom styling)
- Tailwind CSS for utility-first styling with custom design tokens
- Framer Motion for animations and transitions
- Custom design system following Adidas-inspired athletic aesthetics with sharp corners, bold typography, and neon blue accents

**State Management**
- TanStack Query (React Query) for server state management and caching
- Local browser localStorage for persistent health data storage
- React hooks for local component state

**Data Visualization**
- Recharts library for rendering line charts showing 7-day trends
- Custom animated number components using Framer Motion for metric displays

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Custom Vite integration for SSR-capable development with middleware mode
- Session-based architecture prepared (uses connect-pg-simple for PostgreSQL sessions)

**Data Layer**
- Currently uses in-memory storage (MemStorage class) for user data
- Drizzle ORM configured for PostgreSQL with schema definitions ready
- Database migrations configured via drizzle-kit pointing to `/migrations`

**API Design**
- RESTful API structure with `/api` prefix for all endpoints
- Middleware for JSON parsing, logging, and request timing
- Type-safe request/response handling using shared TypeScript schemas

### Data Storage

**Current Implementation**
- Client-side localStorage for health metrics (steps, calories, water)
- Structured as time-series data with date-indexed entries
- In-memory Map for user authentication data on server

**Prepared Database Schema**
- PostgreSQL tables defined using Drizzle ORM
- Users table with UUID primary keys, username/password fields
- Zod schemas for runtime validation of insert operations

**Data Models**
```typescript
HealthEntry: { date: string, value: number }
HealthData: { steps, calories, water: HealthEntry[] }
User: { id, username, password }
```

### Design System

**Typography**
- Primary font: Montserrat (Google Fonts) mimicking Adidas' Adineue PRO
- Hierarchy: Ultra-bold headers (700-900), uppercase tracking, large metric displays
- All sharp corners (border-radius: 0) for geometric athletic aesthetic

**Color Palette**
- Black (#000000) background base
- Gray-900 secondary backgrounds
- Neon blue (#00FFFF / #06B6D4) for primary accents, CTAs, and chart highlights
- White for text and borders
- Custom CSS variables for theme consistency across light/dark modes

**Layout System**
- Responsive grid using Tailwind spacing units (4, 6, 8, 12, 16, 20, 24)
- Mobile-first design with breakpoints for tablets and desktops
- Gradient backgrounds (black to gray-900) for depth

## External Dependencies

### Core Libraries
- **React & React DOM**: UI framework
- **TypeScript**: Type safety and developer experience
- **Express**: Backend HTTP server
- **Vite**: Build tool and dev server with plugins for Replit integration

### UI & Styling
- **Tailwind CSS**: Utility-first styling framework
- **Radix UI**: Accessible component primitives (20+ components including dialogs, dropdowns, tooltips)
- **shadcn/ui**: Pre-built component library built on Radix
- **Framer Motion**: Animation library for transitions and gestures
- **Lucide React**: Icon library

### Data & Forms
- **TanStack Query**: Server state management
- **React Hook Form**: Form validation and handling
- **Zod**: Schema validation
- **Drizzle Zod**: Integration between Drizzle ORM and Zod

### Database & ORM
- **Drizzle ORM**: Type-safe SQL query builder
- **@neondatabase/serverless**: PostgreSQL serverless driver for Neon
- **connect-pg-simple**: PostgreSQL session store for Express

### Data Visualization
- **Recharts**: Chart library for line graphs and data visualization

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific tooling
- **esbuild**: Server-side bundling for production

### Utilities
- **wouter**: Lightweight routing library
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional className utilities
- **nanoid**: Unique ID generation
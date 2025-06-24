# Zaitech Development Portfolio

## Overview

This is a modern, full-stack web application built as a portfolio website for Zaitech Development. The project showcases a comprehensive technology stack featuring React frontend with TypeScript, Express.js backend, PostgreSQL database with Drizzle ORM, and styled with Tailwind CSS using shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in development mode
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Internationalization**: Custom language provider supporting English and Arabic (RTL)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20 with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for bundling server code
- **Static Files**: Vite development server in dev, static serving in production

### Database Architecture
- **Database**: PostgreSQL 16 
- **ORM**: Drizzle ORM with PostgreSQL driver
- **Connection**: Neon Database serverless connection
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Key Components

### Frontend Components
- **Layout Components**: Navigation, Hero, Footer with responsive design
- **Section Components**: About, Services, Work, Skills, Portfolio, Testimonials, Contact
- **UI Library**: Complete shadcn/ui component set including forms, dialogs, tooltips, etc.
- **Animations**: Custom scroll-based animations with Intersection Observer
- **Language Support**: Bilingual interface with RTL support for Arabic

### Backend Components
- **Server Setup**: Express application with middleware for JSON parsing and logging
- **Route Registration**: Modular route system with API prefix
- **Storage Layer**: Abstract storage interface with CRUD operations for users
- **Development Tools**: Vite integration for hot module replacement

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Validation**: Zod schemas for type-safe data validation
- **Type Safety**: Generated TypeScript types from database schema

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack React Query
2. **Server Processing**: Express.js handles requests with custom middleware for logging
3. **Data Storage**: Storage interface abstracts database operations
4. **Response Handling**: JSON responses with error handling middleware
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React Query, React Hook Form
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Utilities**: clsx, date-fns, wouter for routing

### Backend Dependencies
- **Server**: Express.js, connect-pg-simple for session management
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Development**: tsx, esbuild, Vite integration
- **Validation**: Zod for schema validation

### Development Tools
- **Build Tools**: Vite, PostCSS, Autoprefixer
- **TypeScript**: Full type safety across frontend and backend
- **Replit Integration**: Runtime error overlay, cartographer for development

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 and PostgreSQL 16 modules
- **Process**: `npm run dev` starts tsx server with Vite middleware
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Port Configuration**: Development server on port 5000

### Production Deployment
- **Build Process**: Vite builds frontend, esbuild bundles backend
- **Static Assets**: Frontend built to `dist/public`, served by Express
- **Server Bundle**: Backend compiled to `dist/index.js` as ES module
- **Deployment Target**: Replit autoscale deployment
- **Port Mapping**: Internal port 5000 mapped to external port 80

### Database Management
- **Environment**: DATABASE_URL environment variable required
- **Migrations**: Drizzle Kit handles schema migrations
- **Development**: In-memory storage implementation for testing
- **Production**: PostgreSQL with Neon Database connection

## Recent Changes

- June 24, 2025: Transformed portfolio from personal CV to company-focused presentation
- Removed testimonials section and portfolio section to eliminate redundancy
- Updated navigation to match actual sections (Services, Projects, Technology)
- Added ShowSeeker-inspired advanced campaign management project (without naming client)
- Enhanced automated pricing system project description with ML capabilities
- Updated Skills section to enterprise "Technology Stack" format
- Added company logo to About section
- Updated footer with correct social media links: GitHub (zaitech-dev), LinkedIn (company/zaitech-dev), Instagram (a.z.lens), Blog RSS (zaitech.blog)
- Removed Contact section as email link in footer is sufficient for contact

## Changelog

- June 24, 2025. Initial setup and major restructuring to company format

## User Preferences

Preferred communication style: Simple, everyday language.
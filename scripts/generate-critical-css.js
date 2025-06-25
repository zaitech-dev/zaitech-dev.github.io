#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Critical CSS classes that are likely to be above the fold
const criticalClasses = [
  // Layout
  'min-h-screen',
  'flex',
  'items-center',
  'justify-center',
  'relative',
  'overflow-hidden',
  'bg-zai-primary',
  'absolute',
  'inset-0',
  'bg-cover',
  'bg-center',
  'bg-no-repeat',
  'bg-gradient-to-b',
  'from-zai-primary/70',
  'via-zai-primary/50',
  'to-zai-primary/70',
  'z-10',
  'text-center',
  'px-4',
  'max-w-4xl',
  'mx-auto',
  
  // Typography
  'text-5xl',
  'md:text-7xl',
  'font-bold',
  'mb-6',
  'bg-gradient-to-r',
  'from-white',
  'to-gray-300',
  'bg-clip-text',
  'text-transparent',
  'text-xl',
  'md:text-2xl',
  'mb-4',
  'text-gray-300',
  'text-lg',
  'mb-8',
  'text-gray-400',
  
  // Navigation
  'nav-backdrop',
  'backdrop-filter',
  'blur-10',
  'fixed',
  'top-0',
  'left-0',
  'right-0',
  'w-full',
  'h-16',
  'border-b',
  'border-gray-800',
  'z-50',
  
  // Base styles
  'font-sans',
  'antialiased',
  'bg-background',
  'text-foreground',
  
  // Animations
  'fade-in',
  'active',
  'transition-all',
  'duration-600',
  'ease-out',
  'opacity-0',
  'opacity-1',
  'transform',
  'translate-y-5',
  'translate-y-0',
  
  // Custom CSS variables
  '--zai-primary',
  '--zai-secondary',
  '--zai-accent',
  '--zai-success',
  '--zai-glass',
  '--background',
  '--foreground',
];

// Generate critical CSS content
const generateCriticalCSS = () => {
  const criticalCSS = `
/* Critical CSS - Above the fold styles */
:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(20, 14.3%, 4.1%);
  --zai-primary: hsl(0, 0%, 10.2%);
  --zai-secondary: hsl(0, 0%, 16.5%);
  --zai-accent: hsl(221, 83%, 53%);
  --zai-success: hsl(142, 76%, 36%);
  --zai-glass: hsla(0, 0%, 16.5%, 0.8);
}

.dark {
  --background: hsl(240, 10%, 3.9%);
  --foreground: hsl(0, 0%, 98%);
}

* {
  border-color: hsl(20, 5.9%, 90%);
}

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: var(--background);
  color: var(--foreground);
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

/* Hero section critical styles */
.min-h-screen { min-height: 100vh; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.relative { position: relative; }
.overflow-hidden { overflow: hidden; }
.bg-zai-primary { background-color: var(--zai-primary); }
.absolute { position: absolute; }
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.bg-cover { background-size: cover; }
.bg-center { background-position: center; }
.bg-no-repeat { background-repeat: no-repeat; }
.bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); }
.from-zai-primary\\/70 { --tw-gradient-from: hsl(0 0% 10.2% / 0.7); --tw-gradient-to: hsl(0 0% 10.2% / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.via-zai-primary\\/50 { --tw-gradient-to: hsl(0 0% 10.2% / 0); --tw-gradient-stops: var(--tw-gradient-from), hsl(0 0% 10.2% / 0.5), var(--tw-gradient-to); }
.to-zai-primary\\/70 { --tw-gradient-to: hsl(0 0% 10.2% / 0.7); }
.z-10 { z-index: 10; }
.text-center { text-align: center; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.max-w-4xl { max-width: 56rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Typography */
.text-5xl { font-size: 3rem; line-height: 1; }
.font-bold { font-weight: 700; }
.mb-6 { margin-bottom: 1.5rem; }
.bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
.from-white { --tw-gradient-from: #fff; --tw-gradient-to: rgb(255 255 255 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.to-gray-300 { --tw-gradient-to: #d1d5db; }
.bg-clip-text { -webkit-background-clip: text; background-clip: text; }
.text-transparent { color: transparent; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.mb-4 { margin-bottom: 1rem; }
.text-gray-300 { color: #d1d5db; }
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.mb-8 { margin-bottom: 2rem; }
.text-gray-400 { color: #9ca3af; }

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}

/* Navigation */
.nav-backdrop {
  backdrop-filter: blur(10px);
  background: rgba(26, 26, 26, 0.9);
}

.fixed { position: fixed; }
.top-0 { top: 0; }
.left-0 { left: 0; }
.right-0 { right: 0; }
.w-full { width: 100%; }
.h-16 { height: 4rem; }
.border-b { border-bottom-width: 1px; }
.border-gray-800 { border-color: #1f2937; }
.z-50 { z-index: 50; }

/* Responsive */
@media (min-width: 768px) {
  .md\\:text-7xl { font-size: 4.5rem; line-height: 1; }
  .md\\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
}
`;

  return criticalCSS.trim();
};

// Write critical CSS to file
const criticalCSS = generateCriticalCSS();
const criticalCSSPath = path.join(__dirname, 'critical.css');

fs.writeFileSync(criticalCSSPath, criticalCSS);
console.log('Critical CSS generated successfully!');

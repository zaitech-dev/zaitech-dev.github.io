import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { modulePreloadPlugin } from "./plugins/module-preload-plugin";
import { htmlUpdatePlugin } from "./plugins/html-update-plugin";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    modulePreloadPlugin(),
    htmlUpdatePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Enable manual chunk splitting for better caching
        manualChunks: (id) => {
          // React and React DOM
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }
          // UI libraries
          if (id.includes('lucide-react') || id.includes('@radix-ui')) {
            return 'ui-vendor';
          }
          // Utility libraries
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
            return 'utils-vendor';
          }
          // Node modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Set long-term cache headers for assets
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset';
          const extType = name.split('.').at(-1) || '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|avif|webp/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(extType)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          if (/woff2|woff|ttf|eot/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Enable module preloading
    target: 'esnext',
    minify: true, // Uses esbuild by default - faster than terser
    sourcemap: false,
    cssCodeSplit: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // autoUpdate: when the browser detects the SW file has changed it
      // activates the new version immediately. Combined with skipWaiting()
      // in sw.js, users always get the latest design on the next page load.
      registerType: 'autoUpdate',
      // Use our hand-written sw.js without any Workbox injection.
      // vite-plugin-pwa copies it to dist/ and registers it automatically.
      strategies: 'injectManifest',
      srcDir: 'public',
      filename: 'sw.js',
      injectRegister: 'auto',
      injectManifest: {
        // Don't inject __WB_MANIFEST — our SW doesn't use Workbox precaching
        injectionPoint: undefined,
      },
      manifest: {
        name: 'Oliva — Padel & Café',
        short_name: 'Oliva',
        description: "A grove, two courts, and the slowest afternoon you've ever had.",
        theme_color: '#1b5e20',
        background_color: '#1a2e1a',
        display: 'standalone',
        icons: [
          {
            src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oliva-logo-7vdw2NsA2Wofs4TtAyO49iJkZo8nn1.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
          },
          {
            src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oliva-logo-7vdw2NsA2Wofs4TtAyO49iJkZo8nn1.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Aggressive minification for smaller output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
    // Compress larger chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { VitePWA } from 'vite-plugin-pwa';

// All remote image URLs — pre-cached on first visit so they're instant forever after
const IMAGE_URLS = [
  // Subcategory card images
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Style_of_cub_cold_drink_202607240431-TrhRjFxd4wxoAx2gsQCFMQNxRLCWI3.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_milkshakes_202607240432-DyeXQYjJj3Qg2lXxkb8gT9y7V0T2mz.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_random_coffee_202607240435-Rqt8wvMWeMz7dwq7AGPXffMLOVnKpd.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_ice_latte_202607240436-pCXFkaQ79lJybuM2KEHZVqUlyIAJUW.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cubs_with_ice_tea_202607240439-nvfxQ18zvpbu66MPvhJBdGmXFLvIPq.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29484572558483377%20%281%29-1iER0hWvPNuvfPzzBs3dGVMmgG3dos.jpg',
  // Smoothie drinks
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Remove_cub_keep_berry_202607240514-HSn503Mf9tacmA8abgIBzX6GJZV2aA.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_mango_smoothies_202607240514-6etjX8dIMf211zgwAI0qADkDRfXIYK.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_strawberry_smoothies_202607240515-ErzxOqHxsILoXGGWoxfURuwvjKOfLR.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_passion_fruit_smoothie_202607240515-gcFfTy9CTasTxniOrouIbIFZszEfSE.jpeg',
  // Milkshake drinks
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Make_cookies_brown_not_oreo_202607240518-iKktANVkffo9wb6QbbcuqxY2ChOrwx.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Strawberry_whip_milkshakes_202607240519-XGTJ17Ap1la3ozcF0mlFK2Y7N9HQqZ.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_choco_nut_202607240519-6mC8PWh61UYLCgVfOb8SdAZVcD0oJo.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_vanilla_milkshakes_202607240520-CSxRiddqcNF8XKDMaS0NDdhwTaSgYp.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_lotus_milkshake_202607240521-VWPZhDpaqRMBGqeEMWZyjAZrVKWVQA.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Make_drink_sooooo_blur_202607240524-oqfptwROqTmiIQ6F4op2kh9LR8JRA6.jpeg',
  // Hot drink images
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_drink_with_cafe_latte_202607232038-sILwH2u7ucm7zxNQAC2O01CToZpFtE.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_hot_chocolat_202607232038-ITId7cFtZGHzdKXocxmd6zYk8ZaNbA.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_design_with_white_202607232112-q3frxaTSt5VAZ2p4JNC9ZchDWhvYS9.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_espresso_cub_202607232041-DuTLgmfeNonKK3t469sh1OztnIlMS8.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mint%20Tea%20-%20Healthier%20Steps-K09FCIl8LarX2J4jW8Xjz2jdz4SGtN.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%8D%B5%E2%9C%A8%20Boost%20your%20wellness%20with%20Turmeric%20Ginger%20Detox%E2%80%A6-ZuXGzKnSKAtkGGw6dF8zluNlgAMTZb.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20motivos%20para%20tomar%20ch%C3%A1%20de%20camomila-krP5Rh6ygGTtzKuGO8YcYO9HoI9VgX.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Download%20Cup%20of%20tea%20with%20mint%20leaves%20on%20transparent%20background%20for%20free-dVWvZk3WigRlkFEKZQtfcDFOwMcIY0.jpg',
  // Logo + menu card images
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oliva-logo-7vdw2NsA2Wofs4TtAyO49iJkZo8nn1.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27303141487567135-FZOtUqnJn852MBeJeyIeP3bhfQy8iL.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sandwich%20PNG-ALWYL1Ttrugnx7fPbCpNyn3mu4AcTN.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14988611256100392-VcfSLudrmQ98JzCToSTWUmeOANUBaV.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drinks_in_one_photo_202607240530-NwdLjbfbz8vvpIqLwGgdeA8gzsRCXc.jpeg',
];

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        // Cache all app shell assets (JS, CSS, HTML, fonts)
        globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],
        // CacheFirst for all remote images — serve from cache instantly, never re-download
        runtimeCaching: [
          {
            urlPattern: ({ url }) =>
              url.hostname === 'hebbkx1anhila5yf.public.blob.vercel-storage.com' ||
              url.hostname.includes('pexels.com'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'oliva-images-v1',
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
        // Pre-fetch every known image in the background on first install
        additionalManifestEntries: IMAGE_URLS.map((url) => ({
          url,
          revision: null,
        })),
        skipWaiting: true,
        clientsClaim: true,
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
});

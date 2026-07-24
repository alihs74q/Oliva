const CACHE_NAME = 'oliva-v1';
const IMAGE_CACHE = 'oliva-images-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
];

// All images to pre-cache on first visit
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
  // Shisha flavor images
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-klpHNUnY3MwHeGKY7cAgyUCnpsvMwk.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bg1AzOAvlolWak7jtcGIl6Qo9Cw0yt.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OYNiRMMx8o2JWCECpBiReXveE9b4YZ.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jyDHjO5Wx9Z8uD1yNioltR69Ne0J5w.png',
];

// Install event - cache app shell + pre-cache all images
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    }).then(() => {
      // Pre-cache all images in background
      return caches.open(IMAGE_CACHE).then((cache) => {
        // Download images in chunks to avoid overwhelming the network
        const chunkSize = 5;
        const chunks = [];
        for (let i = 0; i < IMAGE_URLS.length; i += chunkSize) {
          chunks.push(IMAGE_URLS.slice(i, i + chunkSize));
        }

        const downloadChunk = (chunkIndex) => {
          if (chunkIndex >= chunks.length) {
            self.skipWaiting(); // Activate service worker immediately
            return Promise.resolve();
          }

          const chunk = chunks[chunkIndex];
          return Promise.all(
            chunk.map((url) =>
              fetch(url, { mode: 'no-cors' })
                .then((response) => {
                  if (response.status === 200) {
                    cache.put(url, response);
                  }
                })
                .catch(() => {
                  // Silently fail individual image downloads
                  console.log(`[v0] Failed to pre-cache: ${url}`);
                })
            )
          ).then(() => downloadChunk(chunkIndex + 1));
        };

        return downloadChunk(0);
      });
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(
            (name) =>
              name.includes('oliva') &&
              name !== CACHE_NAME &&
              name !== IMAGE_CACHE
          )
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Strategy: CacheFirst for images, NetworkFirst for others
  if (
    url.hostname === 'hebbkx1anhila5yf.public.blob.vercel-storage.com' ||
    url.pathname.includes('.jpg') ||
    url.pathname.includes('.jpeg') ||
    url.pathname.includes('.png') ||
    url.pathname.includes('.gif')
  ) {
    // CacheFirst: try cache first, fallback to network
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(request, { mode: 'no-cors' }).then((response) => {
          // Cache successful responses
          if (response.status === 200) {
            const cache = caches.open(IMAGE_CACHE);
            cache.then((c) => c.put(request, response.clone()));
          }
          return response;
        });
      })
    );
  } else {
    // NetworkFirst: try network first, fallback to cache
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const cache = caches.open(CACHE_NAME);
            cache.then((c) => c.put(request, response.clone()));
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  }
});

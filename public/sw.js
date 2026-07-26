// ─────────────────────────────────────────────
//  OLIVA SERVICE WORKER  –  v4
//  Bump this version string every deployment so
//  users always get the latest design/code.
// ─────────────────────────────────────────────
const CACHE_VERSION = 'v4';
const APP_CACHE    = `oliva-app-${CACHE_VERSION}`;
const IMAGE_CACHE  = `oliva-images-${CACHE_VERSION}`;

// App shell — cached on install
const SHELL_URLS = ['/', '/index.html'];

// Every remote image the app uses.
// Images are downloaded in small parallel batches AFTER the SW activates,
// so they never block the page and survive page reloads.
const IMAGE_URLS = [
  // Subcategory cards
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Style_of_cub_cold_drink_202607240431-TrhRjFxd4wxoAx2gsQCFMQNxRLCWI3.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_milkshakes_202607240432-DyeXQYjJj3Qg2lXxkb8gT9y7V0T2mz.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_random_coffee_202607240435-Rqt8wvMWeMz7dwq7AGPXffMLOVnKpd.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_ice_latte_202607240436-pCXFkaQ79lJybuM2KEHZVqUlyIAJUW.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cubs_with_ice_tea_202607240439-nvfxQ18zvpbu66MPvhJBdGmXFLvIPq.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29484572558483377%20%281%29-1iER0hWvPNuvfPzzBs3dGVMmgG3dos.jpg',
  // Smoothies
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Remove_cub_keep_berry_202607240514-HSn503Mf9tacmA8abgIBzX6GJZV2aA.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_mango_smoothies_202607240514-6etjX8dIMf211zgwAI0qADkDRfXIYK.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_strawberry_smoothies_202607240515-ErzxOqHxsILoXGGWoxfURuwvjKOfLR.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_passion_fruit_smoothie_202607240515-gcFfTy9CTasTxniOrouIbIFZszEfSE.jpeg',
  // Milkshakes
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Make_cookies_brown_not_oreo_202607240518-iKktANVkffo9wb6QbbcuqxY2ChOrwx.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Strawberry_whip_milkshakes_202607240519-XGTJ17Ap1la3ozcF0mlFK2Y7N9HQqZ.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_choco_nut_202607240519-6mC8PWh61UYLCgVfOb8SdAZVcD0oJo.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_vanilla_milkshakes_202607240520-CSxRiddqcNF8XKDMaS0NDdhwTaSgYp.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_lotus_milkshake_202607240521-VWPZhDpaqRMBGqeEMWZyjAZrVKWVQA.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Make_drink_sooooo_blur_202607240524-oqfptwROqTmiIQ6F4op2kh9LR8JRA6.jpeg',
  // Hot drinks
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_drink_with_cafe_latte_202607232038-sILwH2u7ucm7zxNQAC2O01CToZpFtE.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_hot_chocolat_202607232038-ITId7cFtZGHzdKXocxmd6zYk8ZaNbA.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_design_with_white_202607232112-q3frxaTSt5VAZ2p4JNC9ZchDWhvYS9.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_espresso_cub_202607232041-DuTLgmfeNonKK3t469sh1OztnIlMS8.jpeg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mint%20Tea%20-%20Healthier%20Steps-K09FCIl8LarX2J4jW8Xjz2jdz4SGtN.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%8D%B5%E2%9C%A8%20Boost%20your%20wellness%20with%20Turmeric%20Ginger%20Detox%E2%80%A6-ZuXGzKnSKAtkGGw6dF8zluNlgAMTZb.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20motivos%20para%20tomar%20ch%C3%A1%20de%20camomila-krP5Rh6ygGTtzKuGO8YcYO9HoI9VgX.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Download%20Cup%20of%20tea%20with%20mint%20leaves%20on%20transparent%20background%20for%20free-dVWvZk3WigRlkFEKZQtfcDFOwMcIY0.jpg',
  // Logo / menu cards
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oliva-logo-7vdw2NsA2Wofs4TtAyO49iJkZo8nn1.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27303141487567135-FZOtUqnJn852MBeJeyIeP3bhfQy8iL.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sandwich%20PNG-ALWYL1Ttrugnx7fPbCpNyn3mu4AcTN.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14988611256100392-VcfSLudrmQ98JzCToSTWUmeOANUBaV.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drinks_in_one_photo_202607240530-NwdLjbfbz8vvpIqLwGgdeA8gzsRCXc.jpeg',
  // Shisha flavors
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-klpHNUnY3MwHeGKY7cAgyUCnpsvMwk.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bg1AzOAvlolWak7jtcGIl6Qo9Cw0yt.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OYNiRMMx8o2JWCECpBiReXveE9b4YZ.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jyDHjO5Wx9Z8uD1yNioltR69Ne0J5w.png',
  // Desserts - Pastries
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jyyr1osfvSd53tv63b4IO3hsjGWyu6.png', // Vanilla Mushroom Muffin
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vrzWQm0vPdBhkdfAN3Cplhoyjr5c4p.png', // Chocolate Mushroom Muffin
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lJJOUjm0bUeldmdyrsVfGboEJz3Igr.png', // Croissant
  // Desserts - Cheesecakes
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Dt52eLBdTVXlatatfFekmMGWynWUW9.png', // Oreo Cheesecake
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cyy23HENQZpQMA5YM49q4LrdWEJdWL.png', // Raspberry Cheesecake
  // Desserts - Cakes
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9UXhz9OicC31LRDeCJeHhsIJN8Yshu.png', // Lazy Cake
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EL1k14PAkXovY7n1gx7fvPdYsbW1wh.png', // Chocolate Cake
];

// ─── HELPERS ────────────────────────────────

/**
 * Download and store one image.
 * Uses cors mode so we get a real (non-opaque) response that can
 * be read back later. Falls back gracefully if the server blocks CORS.
 */
async function cacheImage(cache, url) {
  // Skip if already cached
  const existing = await cache.match(url);
  if (existing) return;

  try {
    // Try a proper CORS request first (gives status 200, fully readable)
    const response = await fetch(url, { mode: 'cors', credentials: 'omit' });
    if (response.ok) {
      await cache.put(url, response);
      return;
    }
  } catch (_) { /* CORS blocked — fall through */ }

  try {
    // Fall back to no-cors opaque response (status 0 but still usable in cache)
    const response = await fetch(url, { mode: 'no-cors' });
    // Opaque responses always have status 0 — that is expected and fine
    await cache.put(url, response);
  } catch (err) {
    // Network unavailable — will be retried on next SW activation
  }
}

/**
 * Download all images in small parallel batches so we don't saturate
 * the network. Already-cached images are skipped instantly.
 */
async function precacheImages() {
  const cache = await caches.open(IMAGE_CACHE);
  const BATCH = 4; // parallel fetches per round

  for (let i = 0; i < IMAGE_URLS.length; i += BATCH) {
    const batch = IMAGE_URLS.slice(i, i + BATCH);
    await Promise.all(batch.map((url) => cacheImage(cache, url)));
  }
}

// ─── INSTALL ────────────────────────────────
// Only cache the tiny app shell here so install is instant.
// Image pre-caching happens in activate (after the SW controls the page).
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_CACHE).then((cache) => cache.addAll(SHELL_URLS))
  );
  // Take control immediately — don't wait for old SW to die
  self.skipWaiting();
});

// ─── ACTIVATE ───────────────────────────────
// 1. Delete ALL caches whose name contains "oliva" but doesn't match
//    the current version → users always see the new design.
// 2. Claim all open tabs right away.
// 3. Start image pre-caching in the background (non-blocking).
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(async (names) => {
      await Promise.all(
        names
          .filter(
            (n) =>
              n.startsWith('oliva-') &&
              n !== APP_CACHE &&
              n !== IMAGE_CACHE
          )
          .map((n) => caches.delete(n))
      );
      // Claim all existing tabs without a reload
      await self.clients.claim();
      // Download images in the background — does NOT block activation
      precacheImages();
    })
  );
});

// ─── FETCH ──────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isImage =
    url.hostname === 'hebbkx1anhila5yf.public.blob.vercel-storage.com' ||
    /\.(jpe?g|png|gif|webp|svg)(\?.*)?$/i.test(url.pathname);

  if (isImage) {
    // CacheFirst — serve instantly from cache; fetch & store if missing
    event.respondWith(
      caches.open(IMAGE_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;

        // Not in cache yet — fetch, store, and respond
        try {
          const response = await fetch(request, { mode: 'cors', credentials: 'omit' });
          if (response.ok) {
            cache.put(request, response.clone());
            return response;
          }
        } catch (_) { /* CORS blocked */ }

        // no-cors fallback
        const response = await fetch(request, { mode: 'no-cors' });
        cache.put(request, response.clone());
        return response;
      })
    );
  } else {
    // NetworkFirst for the app shell — ensures updated HTML/JS/CSS is always
    // delivered when online; falls back to cache when offline.
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(APP_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
  }
});

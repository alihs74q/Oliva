/**
 * Image optimization utilities
 * Vite + React (no Next.js Image) — relies on URL params, srcset, and
 * native browser lazy-loading / fetchpriority hints.
 */

// ─── Vercel Blob URL helpers ──────────────────────────────────────────────────

/**
 * Append Vercel Blob image-transformation params to a blob URL.
 * Non-blob URLs are returned unchanged.
 */
export function blobOptimized(url: string, width: number, quality = 80): string {
  if (!url.includes('blob.vercel-storage.com')) return url
  const u = new URL(url)
  u.searchParams.set('w', String(width))
  u.searchParams.set('q', String(quality))
  u.searchParams.set('fmt', 'webp')
  return u.toString()
}

/**
 * Build a srcset string for Vercel Blob or Pexels images.
 * For other hosts the original URL is returned as a single entry.
 */
export function buildSrcSet(url: string, quality = 80): string {
  if (url.includes('blob.vercel-storage.com')) {
    return [320, 480, 640, 800, 1080, 1400]
      .map((w) => `${blobOptimized(url, w, quality)} ${w}w`)
      .join(', ')
  }
  if (url.includes('pexels.com')) {
    // Pexels already supports w= and auto=compress via its CDN params
    const widths = [320, 480, 640, 800, 1080]
    return widths
      .map((w) => {
        const u = new URL(url)
        u.searchParams.set('w', String(w))
        u.searchParams.set('auto', 'compress')
        u.searchParams.set('cs', 'tinysrgb')
        return `${u.toString()} ${w}w`
      })
      .join(', ')
  }
  return url
}

/**
 * Return a best-effort single optimized src (for use where srcset isn't set).
 * Defaults to 800 px wide at quality 80.
 */
export function optimizedSrc(url: string, width = 800, quality = 80): string {
  if (url.includes('blob.vercel-storage.com')) return blobOptimized(url, width, quality)
  if (url.includes('pexels.com')) {
    const u = new URL(url)
    u.searchParams.set('w', String(width))
    u.searchParams.set('auto', 'compress')
    u.searchParams.set('cs', 'tinysrgb')
    return u.toString()
  }
  return url
}

// ─── Tiny inline blur placeholder ────────────────────────────────────────────

/**
 * Returns a 4×3 SVG-based data URI that can be used as a low-quality
 * placeholder. It doesn't depend on the actual image contents — it's just a
 * semi-transparent block in the card's accent color so there's no layout shift
 * and the transition is smooth.
 */
export function svgPlaceholder(color = '#1a2e1a'): string {
  const enc = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="3"><rect width="4" height="3" fill="${color}"/></svg>`
  )
  return `data:image/svg+xml,${enc}`
}

// ─── Legacy compat shims (keep existing call-sites working) ──────────────────

export function getOptimizedImageUrl(url: string, opts: { quality?: number; width?: number } = {}): string {
  return optimizedSrc(url, opts.width ?? 800, opts.quality ?? 80)
}

export function getResponsiveImageSrcSet(url: string, quality = 75): string {
  return buildSrcSet(url, quality)
}

export function preloadImage(url: string): void {
  if (typeof document === 'undefined') return
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = optimizedSrc(url, 1200, 80)
  document.head.appendChild(link)
}

export function preloadImages(urls: string[]): void {
  urls.forEach(preloadImage)
}

import React, { useState, useEffect, useRef } from 'react'
import { buildSrcSet, optimizedSrc, svgPlaceholder } from '../utils/imageOptimization'

interface OptimizedImageProps {
  src: string
  alt: string
  style?: React.CSSProperties
  className?: string
  /** Natural width in px — used to derive srcset widths and prevent layout shift */
  width?: number
  /** Natural height in px — used to derive aspect ratio and prevent layout shift */
  height?: number
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down'
  /**
   * true  → eager load + fetchpriority="high" (LCP / hero images)
   * false → lazy IntersectionObserver-based load (default)
   */
  priority?: boolean
  /**
   * CSS sizes attribute, e.g. "(max-width: 640px) 100vw, 50vw"
   * Helps the browser pick the right srcset entry before layout is known.
   */
  sizes?: string
  /** Base color for the blur placeholder rectangle. */
  placeholderColor?: string
  /** Called when the real image finishes loading */
  onLoad?: () => void
  quality?: number
  draggable?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  style,
  className,
  width,
  height,
  objectFit = 'cover',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  placeholderColor = '#1a2e1a',
  onLoad,
  quality = 80,
  draggable = false,
}: OptimizedImageProps) {
  const [revealed, setRevealed] = useState(priority)
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // IntersectionObserver — only for non-priority images
  useEffect(() => {
    if (priority) return
    const el = imgRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '200px' } // start loading 200 px before entering viewport
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [priority])

  const realSrc = revealed ? optimizedSrc(src, width ?? 800, quality) : svgPlaceholder(placeholderColor)
  const srcSet  = revealed ? buildSrcSet(src, quality) : undefined

  return (
    <div
      style={{
        position: 'relative',
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
        overflow: 'hidden',
        // Show placeholder background until image loads
        backgroundImage: loaded ? undefined : `url("${svgPlaceholder(placeholderColor)}")`,
        backgroundSize: 'cover',
      }}
    >
      <img
        ref={imgRef}
        src={realSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        draggable={draggable}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // @ts-ignore — fetchpriority is valid HTML but not in React types yet
        fetchpriority={priority ? 'high' : 'auto'}
        onLoad={() => { setLoaded(true); onLoad?.() }}
        onError={() => {
          // Fallback: try the raw URL if the optimized version failed
          if (imgRef.current && imgRef.current.src !== src) {
            imgRef.current.src = src
          }
        }}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.35s ease',
          ...style,
        }}
        className={className}
      />
    </div>
  )
}

import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  width?: number;
  height?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  priority?: boolean;
}

/**
 * OptimizedImage component with:
 * - Lazy loading (IntersectionObserver)
 * - Automatic WebP conversion with fallback
 * - Blur placeholder while loading
 * - Responsive sizing
 */
export default function OptimizedImage({
  src,
  alt,
  style,
  className,
  width,
  height,
  objectFit = 'cover',
  priority = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [isVisible, setIsVisible] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  // Convert blob storage URLs to optimized versions
  // Reduce quality and size for faster loading
  const optimizedSrc = src.includes('blob.vercel-storage.com')
    ? `${src}?format=webp&quality=75&width=${width || 500}`
    : src;

  return (
    <div
      style={{
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
      }}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <img
          src={src}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            filter: 'blur(20px)',
            opacity: 0.5,
            objectFit,
          }}
          aria-hidden="true"
        />
      )}

      {/* Main image - only loads when visible */}
      <img
        ref={imgRef}
        src={isVisible ? optimizedSrc : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1" height="1"%3E%3C/svg%3E'}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          // Fallback to original if optimization fails
          if (isVisible && imgRef.current) {
            imgRef.current.src = src;
          }
        }}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          objectFit,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          ...style,
        }}
        className={className}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

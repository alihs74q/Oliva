import { useCardTilt } from '../hooks/useCardTilt'

export function CategoryCardPreview({ images, accentColor }: { images?: string[]; accentColor: string }) {
  const { cardRef, tilt } = useCardTilt(true)
  const validImages = (images || []).filter(Boolean).slice(0, 4)

  if (validImages.length === 0) {
    return (
      <div
        ref={cardRef}
        style={{
          width: '100%',
          height: 180,
          borderRadius: 20,
          background: `${accentColor}20`,
          border: `2px dashed ${accentColor}60`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={accentColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.5 }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21,15 16,10 5,21" />
        </svg>
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      style={{
        position: 'relative',
        width: '100%',
        height: 180,
        borderRadius: 20,
        overflow: 'hidden',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        transition: tilt.scale === 1 ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
      }}
    >
      {/* Layer base (most back) */}
      {validImages[0] && (
        <img
          src={validImages[0]}
          alt="category-base"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.8) blur(2px)',
            transform: 'translate(4px, 4px) scale(0.95)',
          }}
        />
      )}

      {/* Layer 2 */}
      {validImages[1] && (
        <img
          src={validImages[1]}
          alt="category-layer2"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.85)',
            transform: 'translate(2px, 2px) scale(0.98) rotateZ(-1deg)',
            zIndex: 1,
          }}
        />
      )}

      {/* Layer 3 */}
      {validImages[2] && (
        <img
          src={validImages[2]}
          alt="category-layer3"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(0.99) rotateZ(0.5deg)',
            zIndex: 2,
          }}
        />
      )}

      {/* Top layer (most visible) */}
      {validImages[3] && (
        <img
          src={validImages[3]}
          alt="category-top"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 3,
          }}
        />
      )}

      {/* Subtle overlay gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

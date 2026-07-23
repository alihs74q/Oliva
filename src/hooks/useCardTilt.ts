import { useRef, useEffect, useState } from 'react'

export interface TiltValues {
  rotateX: number
  rotateY: number
  scale: number
}

export function useCardTilt(enabled = true) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState<TiltValues>({ rotateX: 0, rotateY: 0, scale: 1 })
  const rafRef = useRef<number>()
  const isTrackingRef = useRef(false)

  useEffect(() => {
    if (!enabled || !cardRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      const card = cardRef.current
      if (!card) return

      isTrackingRef.current = true
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Center-relative coordinates
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const ratioX = (x - centerX) / centerX
      const ratioY = (y - centerY) / centerY

      // Calculate tilt (max 3-5 degrees)
      const maxTilt = 4
      const rotateY = ratioX * maxTilt
      const rotateX = -ratioY * maxTilt

      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        setTilt({ rotateX, rotateY, scale: 1.02 })
      })
    }

    const handleMouseLeave = () => {
      isTrackingRef.current = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      setTilt({ rotateX: 0, rotateY: 0, scale: 1 })
    }

    const element = cardRef.current
    element.addEventListener('mousemove', handleMouseMove, { passive: true })
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [enabled])

  return { cardRef, tilt }
}

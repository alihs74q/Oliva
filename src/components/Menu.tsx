import { motion } from 'framer-motion'

const EASE = [0.25, 0.46, 0.45, 0.94] as const

interface CatCard {
  id: string
  label: string
  desc: string
  gradient: string
  accent: string
  image: string | null
}

const CARDS: CatCard[] = [
  { id: 'hot', label: 'Hot Drinks', desc: 'Warm & aromatic classics — espresso, cappuccino, Turkish coffee & more', gradient: 'linear-gradient(135deg,#f97316,#dc2626)', accent: '#fed7aa', image: 'https://images.pexels.com/photos/15851583/pexels-photo-15851583/free-photo-of-cappuccino-in-cup-on-table.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'cold', label: 'Cold Drinks', desc: 'Chilled & refreshing — iced lattes, fresh juices, smoothies & shakes', gradient: 'linear-gradient(135deg,#0ea5e9,#2563eb)', accent: '#bae6fd', image: 'https://images.pexels.com/photos/22873679/pexels-photo-22873679.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'dessert', label: 'Desserts', desc: 'Sweet indulgence — cakes, cheesecakes & freshly baked pastries', gradient: 'linear-gradient(135deg,#ec4899,#be185d)', accent: '#fbcfe8', image: 'https://images.pexels.com/photos/16544183/pexels-photo-16544183/free-photo-of-sweet-cakes-on-plate.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'shisha', label: 'Shisha', desc: 'Premium flavors — fresh mint, double apple & classic blends', gradient: 'linear-gradient(135deg,#eab308,#a16207)', accent: '#fef08a', image: 'https://images.pexels.com/photos/18781628/pexels-photo-18781628/free-photo-of-hookah-with-purple-pipes.jpeg?auto=compress&cs=tinysrgb&w=400' },
]

export default function Menu({ onBack, onHotDrinks, onColdDrinks, onDesserts, onShisha }: {
  onBack?: () => void
  onHotDrinks?: () => void
  onColdDrinks?: () => void
  onDesserts?: () => void
  onShisha?: () => void
}) {
  const handlers: Record<string, (() => void) | undefined> = {
    hot: onHotDrinks, cold: onColdDrinks, dessert: onDesserts, shisha: onShisha,
  }

  return (
    <section style={{
      minHeight: '100svh', padding: 'clamp(80px,12vh,120px) clamp(16px,4vw,40px) clamp(40px,6vh,80px)',
      background: 'linear-gradient(160deg,#1a2e1a,#0f1f0f 50%,#0a140a)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      {/* Back */}
      {onBack && (
        <button onClick={onBack} style={{
          alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 999, padding: '10px 20px', cursor: 'pointer',
          color: '#e2e8f0', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em',
          marginBottom: 'clamp(24px,4vh,40px)',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          BACK
        </button>
      )}

      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(32px,5vh,56px)' }}>
        <p style={{
          margin: 0, fontSize: 'clamp(11px,1.4vw,14px)', fontWeight: 800, letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#86efac',
        }}>Café & Kitchen</p>
        <h2 style={{
          margin: '8px 0 0', fontSize: 'clamp(36px,7vw,72px)', fontWeight: 900,
          color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1,
        }}>Our Menu</h2>
      </div>

      {/* Big category cards */}
      <div style={{
        width: '100%', maxWidth: 960,
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 'clamp(16px,2.5vw,24px)',
      }}>
        {CARDS.map((card, i) => (
          <motion.button
            key={card.id}
            onClick={() => handlers[card.id]?.()}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
            whileTap={{ scale: 0.96, transition: { duration: 0.12 } }}
            style={{
              position: 'relative', overflow: 'hidden', cursor: 'pointer',
              background: card.gradient, borderRadius: 28, border: 'none',
              padding: 'clamp(24px,3vw,36px)', textAlign: 'left',
              minHeight: 260, display: 'flex', flexDirection: 'column', gap: 14,
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              willChange: 'transform',
            }}
          >
            {/* Image placeholder — big */}
            <div style={{
              width: 'clamp(72px,10vw,96px)', height: 'clamp(72px,10vw,96px)',
              borderRadius: 20, flexShrink: 0,
              background: card.image ? 'transparent' : `${card.accent}30`,
              border: card.image ? 'none' : `2px dashed ${card.accent}60`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {card.image ? (
                <img src={card.image} alt={card.label} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 18 }} />
              ) : (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={card.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21,15 16,10 5,21" />
                </svg>
              )}
            </div>

            <h3 style={{
              margin: 0, fontSize: 'clamp(24px,3.2vw,34px)', fontWeight: 900,
              color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>{card.label}</h3>

            <p style={{
              margin: 0, fontSize: 'clamp(14px,1.4vw,17px)', fontWeight: 600,
              color: 'rgba(255,255,255,0.85)', lineHeight: 1.5,
            }}>{card.desc}</p>

            <div style={{
              marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8,
              paddingTop: 8, color: '#fff', fontSize: 14, fontWeight: 800,
            }}>
              Explore
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}

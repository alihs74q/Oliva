import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { hotDrinks, HotDrink } from '../data/hotDrinks'
import OlivaLogo from './OlivaLogo'

type NavRoute = 'home' | 'menu' | 'cold-drinks' | 'desserts' | 'hot-drinks'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// ─── Price sticky note ────────────────────────────────────────────────────────
function PriceStickyNote({ price }: { price: string }) {
  return (
    <div style={{ position: 'relative', flexShrink: 0, transform: 'rotate(3deg)', transformOrigin: 'center top' }}>
      <div style={{
        position: 'absolute', top: -9, left: '50%',
        transform: 'translateX(-50%) rotate(-5deg)',
        width: 40, height: 16,
        background: 'rgba(255,255,255,0.34)',
        borderLeft: '1px solid rgba(255,255,255,0.25)',
        borderRight: '1px solid rgba(255,255,255,0.25)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }} />
      <div style={{
        minWidth: 'clamp(52px,8vw,68px)',
        padding: 'clamp(12px,1.6vw,16px) clamp(12px,1.8vw,18px)',
        background: 'linear-gradient(155deg, #ffe994, #fcd968)',
        color: '#3a2c0c',
        borderRadius: 3,
        boxShadow: '0 8px 16px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.5)',
        textAlign: 'center',
        fontFamily: '"Georgia", "Times New Roman", serif',
        fontStyle: 'italic',
        fontWeight: 800,
        fontSize: 'clamp(17px,2vw,24px)',
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>{price}</div>
    </div>
  )
}

// ─── Detail popup modal ───────────────────────────────────────────────────────
function HotDrinkModal({ drink, onClose }: { drink: HotDrink; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE }}
      style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(12px,2vw,24px)' }}
    >
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{
          position: 'relative', zIndex: 1,
          width: 'min(560px, 94vw)',
          maxHeight: 'calc(100svh - 48px)',
          background: '#ffffff',
          border: `1.5px solid ${drink.themeColor}33`,
          borderRadius: 'clamp(22px,3vw,32px)',
          padding: 'clamp(20px,3vw,36px)',
          display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vh,20px)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          willChange: 'transform',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <div style={{ width: 44, height: 4, borderRadius: 3, background: drink.themeColor, marginBottom: 10 }} />
            <p style={{ margin: 0, fontSize: 11, fontWeight: 800, letterSpacing: '0.3em', color: '#888', textTransform: 'uppercase' }}>Hot Drinks</p>
            <h3 style={{ margin: '4px 0 0', fontSize: 'clamp(22px,3.4vw,32px)', fontWeight: 900, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.15 }}>{drink.name}</h3>
          </div>
          <button onClick={onClose} aria-label="Close"
            style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#333', transition: 'background 0.2s ease' }}
            onMouseOver={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.12)')}
            onMouseOut={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.06)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Item card */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 'clamp(12px,1.8vh,16px)',
          background: '#f8f8f8',
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: 20,
          padding: 'clamp(14px,2vh,20px)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
        }}>
          {/* Top row: image · name · price */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(12px,2vw,18px)' }}>
            {/* Image */}
            <div style={{
              flexShrink: 0,
              width: 'clamp(72px,12vw,96px)', height: 'clamp(72px,12vw,96px)',
              borderRadius: 14,
              background: drink.themeColor,
              border: '1px solid rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
            }}>
              {drink.image ? (
                <img src={drink.image} alt={drink.name} draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <svg width="28" height="28" viewBox="0 0 120 138" fill="none" style={{ opacity: 0.55 }}>
                  <path d="M24 40 L96 40 L88 128 Q86 134 80 134 L40 134 Q34 134 32 128 Z" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                  <path d="M88 60 Q110 60 110 80 Q110 100 88 100" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="8" strokeLinecap="round" />
                  <ellipse cx="60" cy="42" rx="36" ry="4" fill="rgba(255,255,255,0.3)" />
                  <path d="M44 30 Q40 22 44 14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M60 26 Q56 18 60 10" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M76 30 Q72 22 76 14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )}
            </div>

            {/* Name */}
            <h4 style={{
              flex: 1, minWidth: 0, margin: 0, alignSelf: 'center',
              fontSize: 'clamp(16px,2.4vw,22px)', fontWeight: 800, color: '#111',
              lineHeight: 1.2, letterSpacing: '-0.01em',
            }}>{drink.name}</h4>

            {/* Price sticky note */}
            <PriceStickyNote price={drink.price} />
          </div>

          {/* Description */}
          <p style={{
            margin: 0,
            fontFamily: '"Georgia", "Times New Roman", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(14px,1.7vw,17px)',
            color: '#555',
            lineHeight: 1.55,
            fontWeight: 500,
          }}>{drink.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Hot drink grid card ──────────────────────────────────────────────────────
function HotDrinkGridCard({ drink, index, onClick }: { drink: HotDrink; index: number; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE, delay: Math.min(index * 0.05, 0.3) }}
      whileTap={{ scale: 0.97, transition: { duration: 0.12 } }}
      style={{
        position: 'relative', overflow: 'hidden',
        background: '#f8f8f8',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 20,
        padding: 'clamp(14px,2vh,18px)',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        textAlign: 'left',
        display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'clamp(12px,2vw,16px)',
      }}
    >
      {/* Image */}
      <div style={{
        flexShrink: 0,
        width: 'clamp(50px,7vw,60px)', height: 'clamp(50px,7vw,60px)',
        borderRadius: 13,
        background: drink.themeColor,
        border: '2px solid rgba(0,0,0,0.08)',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {drink.image ? (
          <img src={drink.image} alt={drink.name} draggable={false} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <svg width="22" height="22" viewBox="0 0 120 138" fill="none" style={{ opacity: 0.5 }}>
            <path d="M24 40 L96 40 L88 128 Q86 134 80 134 L40 134 Q34 134 32 128 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
            <path d="M88 60 Q110 60 110 80 Q110 100 88 100" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="10" strokeLinecap="round" />
            <ellipse cx="60" cy="42" rx="36" ry="4" fill="rgba(255,255,255,0.25)" />
            <path d="M52 26 Q48 18 52 10" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="4" strokeLinecap="round" />
            <path d="M70 26 Q66 18 70 10" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="4" strokeLinecap="round" />
          </svg>
        )}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ margin: 0, fontSize: 'clamp(14px,1.8vw,17px)', fontWeight: 700, color: '#111', lineHeight: 1.2 }}>{drink.name}</p>
        <p style={{ margin: '3px 0 0', fontSize: 'clamp(11px,1.1vw,13px)', color: 'rgba(0,0,0,0.45)', lineHeight: 1.35 }}>{drink.description}</p>
      </div>

      {/* Price */}
      <p style={{ margin: 0, flexShrink: 0, fontSize: 'clamp(15px,1.8vw,18px)', fontWeight: 900, color: '#111', letterSpacing: '-0.02em' }}>{drink.price}</p>

      {/* Arrow */}
      <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: `${drink.themeColor}20`, border: `1px solid ${drink.themeColor}44`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={drink.themeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </div>
    </motion.button>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HotDrinksPage({ navigate, onBack }: { navigate: (to: NavRoute) => void; onBack?: () => void }) {
  const [openDrink, setOpenDrink] = useState<HotDrink | null>(null)

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: '#ffffff' }} />

      {/* Nav */}
      <nav style={{
        position: 'relative', zIndex: 10, height: 64, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(16px,4vw,40px)',
      }}>
        <button onClick={() => navigate('home')}
          style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer' }}>
          <OlivaLogo size={38} showText={false} />
          <span style={{ color: '#111', fontWeight: 800, fontSize: 17, letterSpacing: '0.05em' }}>OLIVA</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px,2vw,20px)' }}>
          {onBack ? (
            <button onClick={onBack}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 999, background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.15)', color: '#111', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.12)')}
              onMouseOut={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.06)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back
            </button>
          ) : (
            <button onClick={() => navigate('menu')}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 999, background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.15)', color: '#111', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.12)')}
              onMouseOut={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.06)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Menu
            </button>
          )}
        </div>
      </nav>

      {/* Scrollable content */}
      <div className="hdp-scroll" style={{ flex: 1, position: 'relative', zIndex: 2, overflowY: 'auto', overflowX: 'hidden', padding: 'clamp(10px,2vh,20px) clamp(16px,4vw,40px) clamp(20px,3vh,40px)' }}>

        {/* Hero header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ marginBottom: 'clamp(16px,3vh,28px)' }}
        >
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: '0.35em', color: 'rgba(0,0,0,0.38)', textTransform: 'uppercase' }}>Café &amp; Lounge</p>
          <h1 style={{ margin: '4px 0 6px', fontSize: 'clamp(32px,7vw,64px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#111' }}>Hot Drinks</h1>
          <div style={{ width: 40, height: 3, borderRadius: 2, background: '#7a4820' }} />
        </motion.div>

        {/* Grid of hot drinks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.8vh,14px)' }}>
          {hotDrinks.map((drink, i) => (
            <HotDrinkGridCard key={drink.name} drink={drink} index={i} onClick={() => setOpenDrink(drink)} />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {openDrink && (
          <HotDrinkModal drink={openDrink} onClose={() => setOpenDrink(null)} />
        )}
      </AnimatePresence>

      <style>{`
        .hdp-scroll::-webkit-scrollbar { display: none; }
        .hdp-scroll { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </div>
  )
}

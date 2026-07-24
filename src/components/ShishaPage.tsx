import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OlivaLogo from './OlivaLogo'
import { shishaItems, ShishaItem } from '../data/shisha'

type NavRoute = 'home' | 'menu' | 'cold-drinks' | 'desserts' | 'hot-drinks' | 'shisha' | 'shisha-list'

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
function ShishaModal({ item, onClose }: { item: ShishaItem; onClose: () => void }) {
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
          border: '1.5px solid rgba(212,160,23,0.25)',
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
            <div style={{ width: 44, height: 4, borderRadius: 3, background: '#D4A017', marginBottom: 10 }} />
            <p style={{ margin: 0, fontSize: 11, fontWeight: 800, letterSpacing: '0.3em', color: '#888', textTransform: 'uppercase' }}>Shisha</p>
            <h3 style={{ margin: '4px 0 0', fontSize: 'clamp(26px,3.4vw,36px)', fontWeight: 900, color: '#111', letterSpacing: '-0.02em' }}>{item.name}</h3>
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
              background: '#1a3a2a',
              border: '1px solid rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}>
              {item.image ? (
                <img src={item.image} alt={item.name} draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21,15 16,10 5,21" />
                </svg>
              )}
            </div>

            {/* Name */}
            <h4 style={{
              flex: 1, minWidth: 0, margin: 0, alignSelf: 'center',
              fontSize: 'clamp(18px,2.6vw,26px)', fontWeight: 800, color: '#111',
              lineHeight: 1.2, letterSpacing: '-0.01em',
            }}>{item.name}</h4>

            {/* Price sticky note */}
            <PriceStickyNote price={item.price} />
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
          }}>{item.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Shisha item grid card ────────────────────────────────────────────────────
function ShishaGridCard({ item, index, onClick }: { item: ShishaItem; index: number; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE, delay: Math.min(index * 0.06, 0.3) }}
      whileTap={{ scale: 0.97, transition: { duration: 0.12 } }}
      style={{
        position: 'relative', overflow: 'hidden',
        background: '#f8f8f8',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 20,
        padding: 'clamp(14px,2vh,20px)',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        textAlign: 'left',
        display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'clamp(12px,2vw,16px)',
      }}
    >
      {/* Image */}
      <div style={{
        flexShrink: 0,
        width: 'clamp(52px,8vw,64px)', height: 'clamp(52px,8vw,64px)',
        borderRadius: 13,
        background: '#1a3a2a',
        border: '2px solid #1a3a2a',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {item.image ? (
          <img src={item.image} alt={item.name} draggable={false} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        )}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ margin: 0, fontSize: 'clamp(15px,2vw,18px)', fontWeight: 700, color: '#111', lineHeight: 1.2 }}>{item.name}</p>
        <p style={{ margin: '3px 0 0', fontSize: 'clamp(11px,1.2vw,13px)', color: 'rgba(0,0,0,0.48)', lineHeight: 1.35 }}>{item.description}</p>
      </div>

      {/* Price */}
      <p style={{ margin: 0, flexShrink: 0, fontSize: 'clamp(16px,2vw,20px)', fontWeight: 900, color: '#D4A017', letterSpacing: '-0.02em' }}>{item.price}</p>

      {/* Arrow */}
      <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(212,160,23,0.12)', border: '1px solid rgba(212,160,23,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </div>
    </motion.button>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ShishaPage({ navigate, onBack }: { navigate: (to: NavRoute) => void; onBack?: () => void }) {
  const [openItem, setOpenItem] = useState<ShishaItem | null>(null)

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: '#ffffff' }} />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        style={{ position: 'relative', zIndex: 10, flexShrink: 0, height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(16px,4vw,40px)' }}
      >
        {onBack ? (
          <motion.button
            onClick={onBack}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.15)', borderRadius: 999, padding: '8px 18px', cursor: 'pointer', color: '#111', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            BACK TO 2ARAGILE
          </motion.button>
        ) : (
          <motion.button
            onClick={() => navigate('menu')}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.15)', borderRadius: 999, padding: '8px 18px', cursor: 'pointer', color: '#111', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            MENU
          </motion.button>
        )}
        <button onClick={() => navigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer' }}>
          <OlivaLogo size={34} showText={false} />
          <span style={{ color: '#111', fontWeight: 800, fontSize: 15, letterSpacing: '0.06em' }}>OLIVA</span>
        </button>
      </motion.nav>

      {/* Main scrollable content */}
      <div className="sp-scroll" style={{ flex: 1, position: 'relative', zIndex: 2, overflowY: 'auto', overflowX: 'hidden', padding: 'clamp(10px,2vh,20px) clamp(16px,4vw,40px) clamp(20px,3vh,40px)' }}>

        {/* Hero header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ marginBottom: 'clamp(16px,3vh,28px)' }}
        >
          <div style={{ marginBottom: 'clamp(4px,0.8vh,10px)', opacity: 0.15 }}>
            <img src="/shisha.png" alt="" aria-hidden draggable={false} style={{ width: 'clamp(36px,5vw,52px)', height: 'auto', filter: 'invert(1)' }} />
          </div>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: '0.35em', color: 'rgba(0,0,0,0.38)', textTransform: 'uppercase' }}>Café &amp; Lounge</p>
          <h1 style={{ margin: '4px 0 6px', fontSize: 'clamp(36px,8vw,72px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#111' }}>SHISHA</h1>
          <div style={{ width: 40, height: 3, borderRadius: 2, background: 'linear-gradient(90deg,#D4A017,#f5c540)' }} />
        </motion.div>

        {/* Grid of shisha items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.8vh,14px)' }}>
          {shishaItems.map((item, i) => (
            <ShishaGridCard key={item.id} item={item} index={i} onClick={() => setOpenItem(item)} />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {openItem && (
          <ShishaModal item={openItem} onClose={() => setOpenItem(null)} />
        )}
      </AnimatePresence>

      <style>{`
        .sp-scroll::-webkit-scrollbar { display: none; }
        .sp-scroll { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </div>
  )
}

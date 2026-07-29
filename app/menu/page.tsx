'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Menu from '@/components/Menu';

export default function MenuPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      style={{ background: '#faf9f4', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header with Home Button */}
      <div
        style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(89,107,61,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#1a2612' }}>Our Menu</h1>
        <Link href="/" prefetch={true}>
          <button
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(89,107,61,0.15)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(89,107,61,0.08)'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(89,107,61,0.08)',
              border: '1px solid #596b3d',
              borderRadius: 999,
              padding: '8px 16px',
              cursor: 'pointer',
              color: '#596b3d',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.08em',
              transition: 'background 0.15s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            HOME
          </button>
        </Link>
      </div>

      {/* Menu Section */}
      <div style={{ flex: 1, padding: '24px' }}>
        <Menu
          onHotDrinks={() => {}}
          onColdDrinks={() => {}}
          onDesserts={() => {}}
          onShisha={() => {}}
          onSandwiches={() => {}}
          onYogurt={() => {}}
          onPadel={() => {}}
        />
      </div>
    </motion.div>
  );
}

'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import SiteFooter from '@/components/SiteFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleScrollToMenu = () => {
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateList = (category: string) => {
    router.push(`/menu/${category}`);
  };

  return (
    <div style={{ background: '#faf9f4' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg,#1a2612,#2c3a24 60%,#1e2e16)',
        textAlign: 'center',
        padding: '60px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Olive branch — decorative */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%285%29-I4zRXdmd0oQXqKRice8ElgxI5yEMtN.png"
          alt=""
          style={{
            position: 'absolute',
            right: '-4%',
            top: '4%',
            width: 'clamp(180px,28vw,380px)',
            height: 'auto',
            opacity: 0.22,
            pointerEvents: 'none',
          }}
        />

        {/* Logo circle */}
        <div style={{
          width: 'clamp(130px,16vw,190px)',
          height: 'clamp(130px,16vw,190px)',
          borderRadius: '50%',
          background: '#596B3D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 36,
          flexShrink: 0,
          boxShadow: '0 8px 40px rgba(89,107,61,0.45)',
        }}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%284%29-XnkqrdTFPK1XQiDPMZmAUqfH4w4IPy.png"
            alt="Oliva"
            style={{
              width: '78%',
              height: '78%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

        {/* Eyebrow */}
        <p style={{
          margin: '0 0 14px',
          fontSize: 'clamp(11px,1.2vw,13px)',
          fontWeight: 800,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: '#8aa86a',
        }}>Padel · Café · Shisha</p>

        {/* Headline */}
        <h1 style={{
          margin: '0 0 14px',
          fontSize: 'clamp(44px,7vw,84px)',
          fontWeight: 900,
          color: '#f5f2e8',
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          maxWidth: 680,
        }}>
          From Court<br />to Cup
        </h1>

        {/* Subline */}
        <p style={{
          margin: '0 0 52px',
          fontSize: 'clamp(15px,1.5vw,18px)',
          color: 'rgba(245,242,232,0.6)',
          maxWidth: 460,
          lineHeight: 1.65,
        }}>
          A grove, two courts, and the slowest afternoon you&apos;ve ever had.
        </p>

        {/* Scroll CTA */}
        <button
          onClick={handleScrollToMenu}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#596B3D',
            color: '#f5f2e8',
            border: 'none',
            borderRadius: 999,
            padding: '16px 38px',
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: '0.06em',
            cursor: 'pointer',
            boxShadow: '0 4px 28px rgba(89,107,61,0.45)',
          }}
        >
          View Menu
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </section>

      {/* Menu Section */}
      <div id="menu-section">
        <Menu
          onHotDrinks={() => handleNavigateList('hot-drinks')}
          onColdDrinks={() => handleNavigateList('cold-drinks')}
          onDesserts={() => handleNavigateList('desserts')}
          onShisha={() => handleNavigateList('shisha')}
          onSandwiches={() => handleNavigateList('sandwiches')}
          onYogurt={() => handleNavigateList('yogurt')}
          onPadel={() => handleNavigateList('padel')}
        />
      </div>

      <WhatsAppButton />
    </div>
  );
}

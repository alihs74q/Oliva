'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleViewMenu = () => {
    router.push('/menu');
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
        <button onClick={handleViewMenu} style={{
          marginTop: 48,
          padding: '14px 36px',
          background: '#596B3D',
          color: '#faf9f4',
          border: 'none',
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: '0.08em',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#4a5630'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#596B3D'}
        >
          VIEW MENU
        </button>
      </section>
      <SiteFooter 
        navigate={() => {}}
        onBook={() => {}}
      />
    </div>
  );
}

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
          marginTop: 64,
          padding: '18px 56px',
          background: 'linear-gradient(135deg, #596B3D 0%, #4a5630 100%)',
          color: '#faf9f4',
          border: 'none',
          borderRadius: 12,
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: '0.12em',
          cursor: 'pointer',
          transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: '0 8px 24px rgba(89, 107, 61, 0.3)',
          textTransform: 'uppercase',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #4a5630 0%, #3a4220 100%)'
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 16px 40px rgba(89, 107, 61, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #596B3D 0%, #4a5630 100%)'
          e.currentTarget.style.transform = 'translateY(0px)'
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(89, 107, 61, 0.3)'
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)'
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
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

import { useState, useEffect } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import HomepageExperience from './components/HomepageExperience';
import GalleryPage from './components/GalleryPage';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
import WhatsAppButton from './components/WhatsAppButton';
import ColdDrinksPage from './components/ColdDrinksPage';
import DessertsPage from './components/DessertsPage';
import HotDrinksPage from './components/HotDrinksPage';
import ShishaPage from './components/ShishaPage';
import CategoryListPage, { type CategoryTheme } from './components/CategoryListPage';
import { subcategoryData } from './data/subcategories';
import PadelPage from './components/PadelPage';
import { useOfflineSupport } from './hooks/useOfflineSupport';


type Category = 'cold-drinks' | 'hot-drinks' | 'desserts' | 'shisha' | 'sandwiches' | 'yogurt' | 'padel';

type ParsedRoute =
  | { name: 'home' }
  | { name: 'menu' }
  | { name: 'gallery' }
  | { name: 'list'; category: Category }
  | { name: 'detail'; category: Category; slug: string };

function parseRoute(): ParsedRoute {
  if (typeof window === 'undefined') return { name: 'home' };
  const hash = window.location.hash.replace(/^#/, '');
  const listMatch = hash.match(/^\/menu\/(cold-drinks|hot-drinks|desserts|shisha|sandwiches|yogurt|padel)$/);
  if (listMatch) return { name: 'list', category: listMatch[1] as Category };
  const detailMatch = hash.match(/^\/menu\/(cold-drinks|hot-drinks|desserts|shisha|sandwiches|yogurt|padel)\/(.+)$/);
  if (detailMatch) return { name: 'detail', category: detailMatch[1] as Category, slug: detailMatch[2] };
  if (hash === '/menu') return { name: 'menu' };
  if (hash === '/gallery') return { name: 'gallery' };
  return { name: 'home' };
}



const COLD_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#0e3a5f,#1565a8 55%,#0a4a7a)',
  glowColor: '#38bdf8',
  text: '#f1f5f9',
  subtext: '#94a3b8',
  accent: '#7dd3fc',
};

const HOT_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#5c2e0a,#8b4513 55%,#6e3410)',
  glowColor: '#f59e0b',
  text: '#fdf6e3',
  subtext: '#c9a57b',
  accent: '#fbbf24',
};

const DESSERT_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#5a1a3a,#8b1a4a 55%,#6e1240)',
  glowColor: '#ec4899',
  text: '#fdf2f8',
  subtext: '#d4a5b8',
  accent: '#f9a8d4',
};

const SHISHA_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#3d2e0a,#6b5010 55%,#4a3808)',
  glowColor: '#d4a017',
  text: '#f5f5f4',
  subtext: '#a8a29e',
  accent: '#d4a017',
};

const SANDWICHES_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#5c2e0a,#8b4513 55%,#6e3410)',
  glowColor: '#f59e0b',
  text: '#fdf6e3',
  subtext: '#c9a57b',
  accent: '#fbbf24',
};

const YOGURT_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#4a1a5a,#8b1a7a 55%,#6e1256)',
  glowColor: '#d946ef',
  text: '#fdf2f8',
  subtext: '#d4a5d8',
  accent: '#f472b6',
};

const PADEL_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#003a4d,#006b8f 55%,#004d6b)',
  glowColor: '#06f6d4',
  text: '#f0f9fa',
  subtext: '#7dd3fc',
  accent: '#06f6d4',
};

const CATEGORY_DATA: Record<Category, { title: string; subtitle: string; theme: CategoryTheme; listHash: string }> = {
  'cold-drinks': { title: 'Cold Drinks', subtitle: 'Chilled & Refreshing', theme: COLD_THEME, listHash: '/menu/cold-drinks' },
  'hot-drinks': { title: 'Hot Drinks', subtitle: 'Warm & Aromatic', theme: HOT_THEME, listHash: '/menu/hot-drinks' },
  'desserts': { title: 'Desserts', subtitle: 'Sweet Indulgence', theme: DESSERT_THEME, listHash: '/menu/desserts' },
  'shisha': { title: 'Shisha', subtitle: 'Premium Flavors', theme: SHISHA_THEME, listHash: '/menu/shisha' },
  'sandwiches': { title: 'Sandwiches', subtitle: 'Fresh & Delicious', theme: SANDWICHES_THEME, listHash: '/menu/sandwiches' },
  'yogurt': { title: 'Yogurt', subtitle: 'Creamy & Refreshing', theme: YOGURT_THEME, listHash: '/menu/yogurt' },
  'padel': { title: 'Padel', subtitle: 'Court & Coaching', theme: PADEL_THEME, listHash: '/menu/padel' },
};

export default function App() {
  const [route, setRoute] = useState<ParsedRoute>(parseRoute);
  const offlineStatus = useOfflineSupport();

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseRoute());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Show/hide the gallery logo based on scroll position
  useEffect(() => {
    const onScroll = () => {
      const transition = document.querySelector('.noh-transition') as HTMLElement | null;
      const galleryLogo = document.querySelector('.noh-gallery-logo') as HTMLElement | null;
      if (!transition || !galleryLogo) return;
      const rect = transition.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
      // Show when transition is ~90% complete, hide when gallery section is scrolled past
      const gallery = document.getElementById('gallery');
      const galleryRect = gallery?.getBoundingClientRect();
      const galleryVisible = galleryRect ? galleryRect.bottom > 100 : false;
      if (progress > 0.9 && galleryVisible) {
        galleryLogo.classList.add('visible');
      } else {
        galleryLogo.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigateHome = () => { window.location.hash = '/'; };
  const navigateMenu = () => { window.location.hash = '/menu'; };
  const navigateGallery = () => { window.location.hash = '/gallery'; };
  const navigateList = (cat: Category) => { window.location.hash = CATEGORY_DATA[cat].listHash; };
  const navigateDetail = (cat: Category, slug: string) => { window.location.hash = `/menu/${cat}/${slug}`; };


  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Dedicated menu page
  if (route.name === 'menu') {
    return (
      <>
        <div className="relative min-h-screen">
          <Navbar navigate={(to) => { if (to === 'home') navigateHome(); else navigateMenu(); }} route={'menu'} />
          <main className="relative z-10">
            <Menu
              onBack={navigateHome}
              onHotDrinks={() => navigateList('hot-drinks')}
              onColdDrinks={() => navigateList('cold-drinks')}
              onDesserts={() => navigateList('desserts')}
              onShisha={() => navigateList('shisha')}
              onSandwiches={() => navigateList('sandwiches')}
              onYogurt={() => navigateList('yogurt')}
              onPadel={() => navigateList('padel')}
            />
          </main>
          <SiteFooter navigate={navigateMenu} onBook={scrollToBooking} />
          <WhatsAppButton />
        </div>
      </>
    );
  }

  // Category list page
  if (route.name === 'list') {
    const data = CATEGORY_DATA[route.category];
    
    // Padel gets its own custom page
    if (route.category === 'padel') {
      return (
        <>
          <PadelPage
            theme={data.theme}
            onBack={navigateMenu}
          />
          <WhatsAppButton />
        </>
      );
    }
    
    // For Shisha, directly show a modal with all flavors (no subcategory cards)
    if (route.category === 'shisha') {
      const shishaFlavors = subcategoryData[route.category] || [];
      return (
        <div style={{
          position: 'fixed', inset: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column',
          background: data.theme.bgGradient, zIndex: 40,
        }}>
          {/* Nav */}
          <nav style={{
            position: 'relative', zIndex: 10, height: 68, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            padding: '0 clamp(16px,4vw,40px)',
          }}>
            <button onClick={navigateMenu}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999,
                padding: '10px 20px', cursor: 'pointer',
                color: data.theme.text, fontSize: 13, fontWeight: 700, letterSpacing: '0.08em',
                transition: 'transform 0.2s ease, background 0.2s ease',
              }}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.95)')}
              onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              BACK
            </button>
          </nav>

          {/* Scrollable content - show all flavors as list */}
          <div style={{
            flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch', padding: 'clamp(20px,3vh,40px)',
          }}>
            <div style={{ maxWidth: 960, margin: '0 auto', width: '100%' }}>
              <div style={{
                display: 'flex', flexDirection: 'column',
                gap: 'clamp(16px,2.5vh,28px)',
              }}>
                {shishaFlavors.map((flavor) => (
                  <div key={flavor.id} style={{
                    display: 'flex', flexDirection: 'row', alignItems: 'center',
                    gap: 'clamp(12px,2vw,20px)',
                    background: `linear-gradient(145deg, ${flavor.themeColor}40, ${flavor.themeColor}15)`,
                    border: `1.5px solid ${flavor.accentColor}55`,
                    borderRadius: 24,
                    padding: 'clamp(16px,2.5vh,24px)',
                    boxShadow: `0 8px 24px ${flavor.themeColor}30`,
                    minHeight: '180px',
                  }}>
                    {/* Left: Text content */}
                    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ width: 44, height: 4, borderRadius: 3, background: flavor.accentColor, opacity: 0.8 }} />
                      <div>
                        <h3 style={{
                          margin: 0, fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900,
                          color: data.theme.text, letterSpacing: '-0.02em', lineHeight: 1.1,
                        }}>{flavor.name}</h3>
                        {flavor.description && (
                          <p style={{
                            margin: '6px 0 0', fontSize: 'clamp(14px,1.8vw,18px)', color: data.theme.subtext,
                            lineHeight: 1.5, fontWeight: 500,
                          }}>{flavor.description}</p>
                        )}
                      </div>
                      {flavor.drinks.length > 0 && (
                        <div style={{
                          display: 'inline-flex', alignItems: 'center', gap: 8,
                          color: flavor.accentColor, fontSize: 13, fontWeight: 800, letterSpacing: '0.04em',
                        }}>
                          <span style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                            width: 30, height: 30, borderRadius: '50%',
                            background: `${flavor.accentColor}22`, border: `1px solid ${flavor.accentColor}55`,
                          }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          </span>
                          {flavor.drinks.length > 0 && <span>${flavor.drinks[0].price.replace('$', '')}</span>}
                        </div>
                      )}
                    </div>

                    {/* Right: Image */}
                    <div style={{
                      flexShrink: 0,
                      width: 'clamp(100px,15vw,130px)',
                      height: 'clamp(100px,15vw,130px)',
                      borderRadius: 16,
                      background: flavor.image ? '#1a3a2a' : `${flavor.accentColor}18`,
                      border: '2px solid #1a3a2a',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      overflow: 'hidden', position: 'relative',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                    }}>
                      {flavor.image ? (
                        <img src={flavor.image} alt={flavor.name} draggable={false} crossOrigin="anonymous"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={flavor.accentColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21,15 16,10 5,21" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <WhatsAppButton />
        </div>
      );
    }
    
    return (
      <>
        <CategoryListPage
          title={data.title}
          subtitle={data.subtitle}
          theme={data.theme}
          subcategories={subcategoryData[route.category]}
          navigate={() => navigateHome()}
          onBack={navigateMenu}
        />
        <WhatsAppButton />
      </>
    );
  }

  // Product detail routes — render existing detail page with initialSlug + Back button
  if (route.name === 'detail') {
    const back = () => navigateList(route.category);
    if (route.category === 'cold-drinks') {
      return (<><ColdDrinksPage navigate={navigateMenu} onBack={back} initialSlug={route.slug} /><WhatsAppButton /></>);
    }
    if (route.category === 'hot-drinks') {
      return (<><HotDrinksPage navigate={navigateMenu} onBack={back} initialSlug={route.slug} /><WhatsAppButton /></>);
    }
    if (route.category === 'desserts') {
      return (<><DessertsPage navigate={navigateMenu} onBack={back} initialSlug={route.slug} /><WhatsAppButton /></>);
    }
    if (route.category === 'shisha') {
      return (<><ShishaPage navigate={navigateMenu} onBack={back} /><WhatsAppButton /></>);
    }
  }

  // Dedicated gallery page
  if (route.name === 'gallery') {
    return (
      <>
        <div className="relative min-h-screen" style={{ background: '#0A0F06' }}>
          <Navbar navigate={(to) => { if (to === 'home') navigateHome(); else navigateMenu(); }} route={'home'} />
          <GalleryPage onViewMenu={navigateMenu} onBack={navigateHome} />
          <WhatsAppButton />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative min-h-screen" style={{ background: '#1F2B18' }}>
        <Navbar navigate={(to) => { if (to === 'home') navigateHome(); else navigateMenu(); }} route={'home'} />
        <main className="relative z-10">
          <HomepageExperience
            onViewMenu={navigateMenu}
            onHotDrinks={() => navigateList('hot-drinks')}
            onColdDrinks={() => navigateList('cold-drinks')}
            onDesserts={() => navigateList('desserts')}
            onShisha={() => navigateList('shisha')}
            onSandwiches={() => navigateList('sandwiches')}
            onYogurt={() => navigateList('yogurt')}
          />
          <div style={{ position: 'relative', zIndex: 20 }}>
            <ContactSection />
          </div>
        </main>
        <SiteFooter navigate={navigateMenu} onBook={scrollToBooking} />
        <WhatsAppButton />
      </div>
    </>
  );
}


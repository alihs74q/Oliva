'use client';

import { useParams, useRouter } from 'next/navigation';
import PadelPage from '@/components/PadelPage';
import CategoryListPage, { type CategoryTheme } from '@/components/CategoryListPage';
import { subcategoryData } from '@/data/subcategories';
import WhatsAppButton from '@/components/WhatsAppButton';

type Category = 'cold-drinks' | 'hot-drinks' | 'desserts' | 'shisha' | 'sandwiches' | 'yogurt' | 'padel';

const COLD_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#0e3a5f,#1565a8 55%,#0a4a7a)',
  glowColor: '#8ECFE8',
  text: '#f1f5f9',
  subtext: '#94a3b8',
  accent: '#8ECFE8',
};

const HOT_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#5c2e0a,#8b4513 55%,#6e3410)',
  glowColor: '#E7A05A',
  text: '#fdf6e3',
  subtext: '#c9a57b',
  accent: '#E7A05A',
};

const DESSERT_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#5a1a3a,#8b1a4a 55%,#6e1240)',
  glowColor: '#E5A4B7',
  text: '#fdf2f8',
  subtext: '#d4a5b8',
  accent: '#E5A4B7',
};

const SHISHA_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#3d2e0a,#6b5010 55%,#4a3808)',
  glowColor: '#C5A342',
  text: '#f5f5f4',
  subtext: '#a8a29e',
  accent: '#C5A342',
};

const SANDWICHES_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#5c2e0a,#8b4513 55%,#6e3410)',
  glowColor: '#D8B84E',
  text: '#fdf6e3',
  subtext: '#c9a57b',
  accent: '#D8B84E',
};

const YOGURT_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#4a1a5a,#8b1a7a 55%,#6e1256)',
  glowColor: '#A78AC4',
  text: '#fdf2f8',
  subtext: '#d4a5d8',
  accent: '#A78AC4',
};

const PADEL_THEME: CategoryTheme = {
  bgGradient: 'linear-gradient(160deg,#003a4d,#006b8f 55%,#004d6b)',
  glowColor: '#4F82C5',
  text: '#f0f9fa',
  subtext: '#7dd3fc',
  accent: '#4F82C5',
};

const CATEGORY_DATA: Record<Category, { title: string; subtitle: string; theme: CategoryTheme }> = {
  'cold-drinks': { title: 'Cold Drinks', subtitle: 'Chilled & Refreshing', theme: COLD_THEME },
  'hot-drinks': { title: 'Hot Drinks', subtitle: 'Warm & Aromatic', theme: HOT_THEME },
  'desserts': { title: 'Desserts', subtitle: 'Sweet Indulgence', theme: DESSERT_THEME },
  'shisha': { title: 'Shisha', subtitle: 'Premium Flavors', theme: SHISHA_THEME },
  'sandwiches': { title: 'Sandwiches', subtitle: 'Fresh & Delicious', theme: SANDWICHES_THEME },
  'yogurt': { title: 'Yogurt', subtitle: 'Creamy & Refreshing', theme: YOGURT_THEME },
  'padel': { title: 'Padel', subtitle: 'Court & Coaching', theme: PADEL_THEME },
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as Category;

  if (!category || !CATEGORY_DATA[category]) {
    return <div>Category not found</div>;
  }

  const data = CATEGORY_DATA[category];

  const handleBack = () => {
    // Scroll to top smoothly then navigate
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => router.push('/'), 200);
  };

  if (category === 'padel') {
    return (
      <>
        <PadelPage
          theme={data.theme}
          onBack={handleBack}
        />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <CategoryListPage
        title={data.title}
        subtitle={data.subtitle}
        theme={data.theme}
        subcategories={subcategoryData[category]}
        navigate={() => router.push('/')}
        onBack={handleBack}
      />
      <WhatsAppButton />
    </>
  );
}

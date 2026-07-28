import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oliva - Cafe & Padel Venue',
  description: 'Enjoy premium food and drinks at Oliva Cafe & Padel Courts',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

import { useEffect, useState } from 'react';
import { Workbox } from 'workbox-window';

interface OfflineSupportStatus {
  isOnline: boolean;
  isAppInstalled: boolean;
  cacheReady: boolean;
  imagesDownloaded: number;
}

export const useOfflineSupport = () => {
  const [status, setStatus] = useState<OfflineSupportStatus>({
    isOnline: navigator.onLine,
    isAppInstalled: false,
    cacheReady: false,
    imagesDownloaded: 0,
  });

  useEffect(() => {
    // Register service worker if supported
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const wb = new Workbox('/sw.js', { scope: '/' });

          // Listen for updates
          wb.addEventListener('installed', () => {
            setStatus((prev) => ({ ...prev, cacheReady: true }));
            console.log('[v0] Service Worker installed - offline support ready');
          });

          wb.addEventListener('waiting', () => {
            console.log('[v0] New service worker waiting to activate');
          });

          // Register the service worker
          await wb.register();
          
          // Get cache status
          if ('caches' in window) {
            const cacheNames = await caches.keys();
            const imageCaches = cacheNames.filter((name) =>
              name.includes('image') || name.includes('oliva')
            );
            
            let totalImages = 0;
            for (const cacheName of imageCaches) {
              const cache = await caches.open(cacheName);
              const keys = await cache.keys();
              totalImages += keys.length;
            }
            
            setStatus((prev) => ({
              ...prev,
              imagesDownloaded: totalImages,
              cacheReady: true,
            }));
          }
        } catch (error) {
          console.error('[v0] Service Worker registration failed:', error);
        }
      }
    };

    // Track online/offline status
    const handleOnline = () => {
      setStatus((prev) => ({ ...prev, isOnline: true }));
      console.log('[v0] Back online');
    };

    const handleOffline = () => {
      setStatus((prev) => ({ ...prev, isOnline: false }));
      console.log('[v0] Going offline - cached content available');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    registerServiceWorker();

    // Check if app is installed (PWA)
    window.addEventListener('beforeinstallprompt', () => {
      setStatus((prev) => ({ ...prev, isAppInstalled: true }));
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setStatus((prev) => ({ ...prev, isAppInstalled: true }));
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return status;
};

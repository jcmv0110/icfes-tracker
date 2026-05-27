const CACHE = 'icfes-track-v2';
const STATIC = [
  'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@400;500;700;800&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js'
];

// Al instalar, cachea solo recursos externos — los locales se cachean dinámicamente
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // No interceptar peticiones a Firebase (necesitan ir siempre a la red)
  if (url.hostname.includes('firebaseio.com') || url.hostname.includes('firebase')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      const networkFetch = fetch(e.request).then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => cached || new Response('Offline', { status: 503 }));

      // Para el HTML principal: red primero, caché como fallback
      if (e.request.mode === 'navigate') return networkFetch;
      // Para el resto: caché primero si existe, si no red
      return cached || networkFetch;
    })
  );
});

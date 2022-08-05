const cacheName = 'Test'
const cachedFiles = [
  '/',
  '/index.html',
  '/assets/site.webmanifest',
  '/index.js'
]

self.addEventListener('install', (e) => {
  console.log('Service worker install event')
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('caching files')
      return cache.addAll(cachedFiles)
    }).then(() => self.skipWaiting()).catch(err => console.log(`Cahced error`, err))
  )
})
const cacheName = 'Test2'
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

self.addEventListener('activate', (e) => {
  console.log('Activated!', e)
  e.waitUntil(
    caches.keys().then(keylist => {
      console.log({ keylist })
      return Promise.all([keylist.map(key => {
        console.log({ key })
        if (key !== cacheName) {
          console.log('Remove old cache key')
          return caches.delete(key)
        }
      })
      ])
    })
  )
  return self.clients.claim()
})

self.addEventListener('fetch', (e) => {
  console.log('Fetch event', e)
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})
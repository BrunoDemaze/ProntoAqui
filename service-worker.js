self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("prontoaqui").then(cache => {
      return cache.addAll([
        "/ProntoAqui/",
        "/ProntoAqui/index.html",
        "/ProntoAqui/servicos.html",
        "/ProntoAqui/profissionais.html",
        "/ProntoAqui/css/style.css",
        "/ProntoAqui/js/app.js"
      ])
    })
  )
})

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})
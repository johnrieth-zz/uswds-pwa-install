self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'uswds.min.js',
        'styleguide.css',
        '/assets/fonts/',
        '/assets/img/favicons/favicon-57.png',
        '/assets/img/hero.png'

      ]);
    })
  );
 });
 
 self.addEventListener('fetch', function(e) {
   console.log(e.request.url);
   e.respondWith(
     caches.match(e.request).then(function(response) {
       return response || fetch(e.request);
     })
   );
 });

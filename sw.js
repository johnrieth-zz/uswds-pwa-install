self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'uswds.min.js',
        'styleguide.css',
        'assets/img/favicons/favicon-57.png',
        'assets/img/hero.png',
        'assets/img/close.svg',
        'assets/img/icon-htts.svg',
        'assets/img/icon-dot-gov.svg',
        'assets/img/circle-124.svg',
        'assets/img/logo-img.png',
        'assets/img/social-icons/svg/youtube15.svg',
        'assets/img/social-icons/svg/twitter16.svg',
        'assets/img/social-icons/svg/facebook25.svg',
        'assets/fonts/sourcesanspro-bold-webfont.ttf',
        'assets/fonts/merriweather-regular-webfont.ttf',
        


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

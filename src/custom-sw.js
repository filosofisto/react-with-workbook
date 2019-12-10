// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
// workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', event => {
    console.log('Activating ServiceWorker');
    event.waitUntil(self.clients.claim());

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== workbox.core.cacheNames.precache) {
                        console.log('Deleting cache ' + cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

workbox.core.setCacheNameDetails({
    prefix: 'react-with-workbox',
    suffix: 'v7',
    precache: 'pre-cache',
    runtime: 'runtime-cache'
});

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute("/", new workbox.strategies.NetworkFirst());



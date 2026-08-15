const CACHE_NAME = "utago-learn-v7";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/tokyo-street.png",
  "./assets/favicon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  let requestUrl;
  try {
    requestUrl = new URL(event.request.url);
  } catch (error) {
    return;
  }
  if (requestUrl.origin !== location.origin) return;

  const isCore = requestUrl.pathname === "/" ||
    requestUrl.pathname === "/index.html" ||
    requestUrl.pathname === "/app.js" ||
    requestUrl.pathname === "/styles.css" ||
    requestUrl.pathname === "/manifest.webmanifest";

  if (isCore || event.request.mode === "navigate") {
    const bustedUrl = requestUrl.href + (requestUrl.search ? "&" : "?") + "v=" + CACHE_NAME;
    event.respondWith(
      fetch(bustedUrl, { cache: "no-store" })
        .then(response => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() =>
          caches.match(event.request).then(cached => cached || caches.match("./index.html"))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetched = fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetched;
    })
  );
});

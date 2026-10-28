// Pocket Ledger offline cache. Bump VERSION whenever any file changes,
// so phones pick up the new version on their next launch.
const VERSION = "pl-2026-10-28-1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./vendor/chart.umd.js",
  "./fonts/bricolage-grotesque.woff2",
  "./fonts/instrument-sans-400.woff2",
  "./fonts/instrument-sans-500.woff2",
  "./fonts/instrument-sans-600.woff2",
  "./fonts/jetbrains-mono-400.woff2",
  "./fonts/jetbrains-mono-500.woff2",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  // The page itself: try the network first so updates arrive, fall back to the cache offline.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put("./index.html", copy)); } return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }
  // Everything else: cache first.
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});

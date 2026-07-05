const CACHE = 'sacas-v32';
const ASSETS = ['/Sacas/', '/Sacas/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  // Nao chama skipWaiting automaticamente — aguarda confirmacao da pagina
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Permite que a pagina force ativacao imediata do novo SW
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  // Nao intercepta HTTP puro (requests para impressoras locais) — o SW nao
  // herda a permissao "Conteudo nao seguro" da pagina e bloquearia o acesso
  if (e.request.url.startsWith('http://')) return;

  // Navegacao (HTML): sempre busca na rede sem cache — garante versao atual
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .catch(() => caches.match('/Sacas/index.html'))
    );
    return;
  }
  // Outros recursos HTTPS: rede primeiro, cache como fallback
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

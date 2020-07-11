/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a11380e69c463baa693a347872321ea9"
  },
  {
    "url": "assets/css/0.styles.9e20c02a.css",
    "revision": "8b72b499a29350a61817dbeffc13ee74"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/tinaam_logo.014a085e.svg",
    "revision": "014a085e2c03ca4a9fa7d6a0ae614701"
  },
  {
    "url": "assets/img/xxx.6d1cab97.jpg",
    "revision": "6d1cab97d729de19496d3dc37b182bbf"
  },
  {
    "url": "assets/js/1.edf6f876.js",
    "revision": "35574b3a9248706b3a14883cd0fb7ade"
  },
  {
    "url": "assets/js/10.8b799305.js",
    "revision": "ef10fafd3a8b9682e00dea9cd2af9c58"
  },
  {
    "url": "assets/js/11.f998e656.js",
    "revision": "67b2d05a2f46c9b90b94d29d935e2d7c"
  },
  {
    "url": "assets/js/12.aeabe633.js",
    "revision": "a277f5889733dbee3a99767ab9059396"
  },
  {
    "url": "assets/js/13.edad25a4.js",
    "revision": "e7822df8b69cd80359ed83d87e1491df"
  },
  {
    "url": "assets/js/14.57012d7c.js",
    "revision": "96cc5ef6d8dfb6b3a97c1f7d7159f58b"
  },
  {
    "url": "assets/js/15.be1a0aff.js",
    "revision": "b4b53d93a3f031adcf48e46b06c3f2b4"
  },
  {
    "url": "assets/js/16.a95f8b90.js",
    "revision": "8b043c5f5be5ea728b390d4aba84480d"
  },
  {
    "url": "assets/js/17.d5bfca1c.js",
    "revision": "212b5067a09f9a17794fb6a41c2b7812"
  },
  {
    "url": "assets/js/18.324ab366.js",
    "revision": "e528a7ce9a7b2f05248dbc20821b77df"
  },
  {
    "url": "assets/js/19.6cef0b72.js",
    "revision": "52d9e9b62b8214e28979b26ec87c08e6"
  },
  {
    "url": "assets/js/20.deecb354.js",
    "revision": "a70ebfcfdcfdb42d9ca9488b3af49c01"
  },
  {
    "url": "assets/js/3.a1094f0c.js",
    "revision": "717e81b78baf6e7dab856a14c9ee7137"
  },
  {
    "url": "assets/js/4.53c483ef.js",
    "revision": "7bfa6595a480ed7bc8f9649a086d486f"
  },
  {
    "url": "assets/js/5.d0710370.js",
    "revision": "b28c0672252754794b6d78cb66c08e3f"
  },
  {
    "url": "assets/js/6.f8d9213b.js",
    "revision": "f9624b8e9d02edbf3af8f28bd4a6d604"
  },
  {
    "url": "assets/js/7.7e07fd8d.js",
    "revision": "b5f29b872c204364327517229cc3a461"
  },
  {
    "url": "assets/js/8.4a755bb4.js",
    "revision": "7d74724b433164afb7a060229799e0f5"
  },
  {
    "url": "assets/js/9.3bd9fe0f.js",
    "revision": "583101274bd7fb14f5513765f06479c2"
  },
  {
    "url": "assets/js/app.8aee1f40.js",
    "revision": "72f024340d1c9687f3e19880be8a93e1"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "b02c335337bc82263afbe199e6de0402"
  },
  {
    "url": "categories/bbb/index.html",
    "revision": "7290e3356e68f6181127ad7b3b970ce5"
  },
  {
    "url": "categories/index.html",
    "revision": "2563459740ffc869c6ea1b25bd438117"
  },
  {
    "url": "categories/文书/index.html",
    "revision": "a37832c42de8a9b3d792a892a9fefbcd"
  },
  {
    "url": "config/index.html",
    "revision": "0bc71bfa055493fad53d70b7027b1fc3"
  },
  {
    "url": "guide/index.html",
    "revision": "e074092d972eb31f3b51831b9801dffa"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "4e46a495809a2f7bbbeaa621f3a6c18b"
  },
  {
    "url": "guide/xxx.html",
    "revision": "7bf9fb9a0050327e582cee0fa37e0174"
  },
  {
    "url": "guide/yyy.html",
    "revision": "fb5bc44862e70f03d83d76378348d35a"
  },
  {
    "url": "img/tinaam_logo.svg",
    "revision": "014a085e2c03ca4a9fa7d6a0ae614701"
  },
  {
    "url": "img/xxx.jpg",
    "revision": "6d1cab97d729de19496d3dc37b182bbf"
  },
  {
    "url": "index.html",
    "revision": "1fa0f71dc784843e1dd2c225ef2ae518"
  },
  {
    "url": "tag/index.html",
    "revision": "cdf08a847b5d1bb719ca97b2ae426e60"
  },
  {
    "url": "timeline/index.html",
    "revision": "b063ffda36d9ab888237aa8e2c7d9043"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

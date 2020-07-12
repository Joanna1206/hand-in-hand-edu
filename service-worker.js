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
    "revision": "f512a9b85892ed646a1c36710b5ec870"
  },
  {
    "url": "assets/css/0.styles.9e20c02a.css",
    "revision": "8b72b499a29350a61817dbeffc13ee74"
  },
  {
    "url": "assets/img/HKScholarship.3ad9c088.png",
    "revision": "3ad9c088654ca119a25428462473695a"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.e4e5c049.js",
    "revision": "a2e90abde8ae08d1ae77d7580626e53e"
  },
  {
    "url": "assets/js/10.0486bc26.js",
    "revision": "4566377e4cd7557b877e30df18511d73"
  },
  {
    "url": "assets/js/11.b5510f24.js",
    "revision": "b4f4cfa3bd55b6599a95315ce77425d5"
  },
  {
    "url": "assets/js/12.7c276707.js",
    "revision": "b143793652ed232cc8f571ca340ba224"
  },
  {
    "url": "assets/js/13.46ddf675.js",
    "revision": "5f450fb000d04d2899dc067f3a15e6ce"
  },
  {
    "url": "assets/js/14.dfdd7d03.js",
    "revision": "797530c2c33d4d26f306269c8731d62d"
  },
  {
    "url": "assets/js/15.3075c4ea.js",
    "revision": "57568a62d5377c021e6566f995ca3637"
  },
  {
    "url": "assets/js/16.3eed4b1e.js",
    "revision": "a0c91e664b1aa222aad78ae96e95b568"
  },
  {
    "url": "assets/js/17.d5bfca1c.js",
    "revision": "212b5067a09f9a17794fb6a41c2b7812"
  },
  {
    "url": "assets/js/18.21da99d3.js",
    "revision": "942813c6ff3b44f86752bd9a1b171018"
  },
  {
    "url": "assets/js/3.0db91cdd.js",
    "revision": "a9794be0177098de43f36896f59cc173"
  },
  {
    "url": "assets/js/4.61f3ac5c.js",
    "revision": "760f5a3b5129b7dc870c2ba3b2215458"
  },
  {
    "url": "assets/js/5.f1199cc9.js",
    "revision": "52800aad6ff555706898c71127ff4d91"
  },
  {
    "url": "assets/js/6.69484f8d.js",
    "revision": "2c7a5a215f9a4cd44855dbc95296df34"
  },
  {
    "url": "assets/js/7.ed270d95.js",
    "revision": "de785a155715dc613fb0b10f8e76e2d6"
  },
  {
    "url": "assets/js/8.2a26c2e1.js",
    "revision": "c4ab93b4cfcad50c4d396f2681e74d7b"
  },
  {
    "url": "assets/js/9.1b55dc65.js",
    "revision": "96e5c49d4804d4f2d3803a5ac3e5d6b8"
  },
  {
    "url": "assets/js/app.ded7fd3b.js",
    "revision": "c5e4699970481a4f4d09ba0d9d2e5c18"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "1cf6e40c74913cbb04d0ab0055194177"
  },
  {
    "url": "categories/index.html",
    "revision": "ff7c0989cec96a82721fd78d749505c4"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "3cf7527307f9bce31678f9381c22274a"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "345285e6fc1b9c4a5d5930ff0e51d1bc"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "abc59ab4b69ad721d27a490fd418fb44"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "f16af7857a671093c71c43f10e7dbd14"
  },
  {
    "url": "guide/index.html",
    "revision": "8a6c2143371b6883252be5491536608d"
  },
  {
    "url": "img/HKScholarship.png",
    "revision": "3ad9c088654ca119a25428462473695a"
  },
  {
    "url": "img/tinaam_logo.svg",
    "revision": "014a085e2c03ca4a9fa7d6a0ae614701"
  },
  {
    "url": "index.html",
    "revision": "99ea1b365d205b3122e48fff9013c564"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "b83673b6d2085a5bd6affd66a1906bdd"
  },
  {
    "url": "tag/index.html",
    "revision": "0110751b6be11df75bad71c27e03f0f3"
  },
  {
    "url": "timeline/index.html",
    "revision": "85ddee7ff589cce87778a4bf146a3d95"
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

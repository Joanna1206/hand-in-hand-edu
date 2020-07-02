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
    "revision": "95a7dc81fb269d4d3189744c4a9c6330"
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
    "url": "assets/js/1.edf6f876.js",
    "revision": "35574b3a9248706b3a14883cd0fb7ade"
  },
  {
    "url": "assets/js/10.4fb700a9.js",
    "revision": "f1d387a66774adc99da09491aab7334c"
  },
  {
    "url": "assets/js/11.bcb93d11.js",
    "revision": "aca0f7f4cccd0491056a1b99d0113e1e"
  },
  {
    "url": "assets/js/12.fa910dc7.js",
    "revision": "008a4f1ea469aab0fe42c5207f5258e8"
  },
  {
    "url": "assets/js/13.8cc84100.js",
    "revision": "7a721a3c1800a8d6c0861857925d6361"
  },
  {
    "url": "assets/js/14.612aa78a.js",
    "revision": "958859b421b3175e1417d319ede704a3"
  },
  {
    "url": "assets/js/15.99133dc0.js",
    "revision": "ac5f6a3d9a901e9ca49943a3162ebcca"
  },
  {
    "url": "assets/js/16.569eadea.js",
    "revision": "6c2e05c9eaca2859e0573a84f76ff047"
  },
  {
    "url": "assets/js/17.1d2184fd.js",
    "revision": "8a21f5553635135c536d2579f7bc5cf2"
  },
  {
    "url": "assets/js/18.b3cc8ca1.js",
    "revision": "f9af5ef36613decc109962459330be77"
  },
  {
    "url": "assets/js/3.5720072c.js",
    "revision": "bedcedac0ec3a5a6432b3588170aeb11"
  },
  {
    "url": "assets/js/4.82e40ed0.js",
    "revision": "4519cfdabf79389307ee4e203ad3817b"
  },
  {
    "url": "assets/js/5.b6c0038b.js",
    "revision": "5e728925b029bf8f1fd5a1bda5eef126"
  },
  {
    "url": "assets/js/6.b66c61e7.js",
    "revision": "604e0cda58f0d447b4795bff87f82a40"
  },
  {
    "url": "assets/js/7.91ca8866.js",
    "revision": "53fdef6c5dd03611d51c8274922e5069"
  },
  {
    "url": "assets/js/8.1b733ebe.js",
    "revision": "e23b2dea6c3c5aa405ef83a92479d8c2"
  },
  {
    "url": "assets/js/9.8ed7665a.js",
    "revision": "a19195b493ae0b6d577ca61bcfeb50e4"
  },
  {
    "url": "assets/js/app.bf152515.js",
    "revision": "3f98669051d2a58a4c53e719f249e92c"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "c1317f84657207e2fcf912bdbb379ebe"
  },
  {
    "url": "categories/bbb/index.html",
    "revision": "494050197f3552ef113ac1d6aa5fb98b"
  },
  {
    "url": "categories/index.html",
    "revision": "417cd8d7a19b0e7fd0b0a1b575b1f383"
  },
  {
    "url": "config/index.html",
    "revision": "14f018c85e7a95b16181f8744383a512"
  },
  {
    "url": "guide/index.html",
    "revision": "ffda2cee1e1f0297a7e2045f793ae2b3"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "85d20539582e2bb313b0b3d9f3397bf3"
  },
  {
    "url": "img/tinaam_logo.svg",
    "revision": "014a085e2c03ca4a9fa7d6a0ae614701"
  },
  {
    "url": "index.html",
    "revision": "a125bf9fc3c26fb389af5092808c20c3"
  },
  {
    "url": "tag/index.html",
    "revision": "eed0d1dc15a2bfe1ecdc1ec3ee47c2ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "29b6885e7c4875aaa4ab47a8ca2e7c6b"
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

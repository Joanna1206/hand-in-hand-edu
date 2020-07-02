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
    "revision": "bc8114c522ece25f35744177403c7a9f"
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
    "url": "assets/js/app.ee443c7e.js",
    "revision": "39bab9a373a5d574a631b917b42cbdef"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "fe0ecd9a4e37b3ad5ba0d555c6b20ba6"
  },
  {
    "url": "categories/bbb/index.html",
    "revision": "7109df6626a1fb567ff3b443f93712e8"
  },
  {
    "url": "categories/index.html",
    "revision": "aee83ce52365d183ebc0b15a187cee3c"
  },
  {
    "url": "config/index.html",
    "revision": "ccdff8dc3f9d08b416b915ecda38b552"
  },
  {
    "url": "guide/index.html",
    "revision": "2f6928f78ce2f53e7cae26da56925a82"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "8089973bd1c34ab8d91071bc0f3f3924"
  },
  {
    "url": "img/tinaam_logo.svg",
    "revision": "014a085e2c03ca4a9fa7d6a0ae614701"
  },
  {
    "url": "index.html",
    "revision": "dc15485867c73eae5bf432d2a433598d"
  },
  {
    "url": "tag/index.html",
    "revision": "ee3a1c6e03f1fcbeee33e1ffba6dbe26"
  },
  {
    "url": "timeline/index.html",
    "revision": "d2fe2994d7a91326f359d4214b5276d1"
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

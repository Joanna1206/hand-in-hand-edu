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
    "revision": "536b1723da14b72010fc3bf5b163186d"
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
    "url": "assets/js/1.2ef5c327.js",
    "revision": "29fdeb1dce465998b83fd4b40e83672a"
  },
  {
    "url": "assets/js/10.73e1b716.js",
    "revision": "6c027e4f86c294844f5e0ece8f113199"
  },
  {
    "url": "assets/js/11.55fe8ca0.js",
    "revision": "0e2a0bfaa2ad6ff7601de74d935ed0e9"
  },
  {
    "url": "assets/js/12.7c276707.js",
    "revision": "b143793652ed232cc8f571ca340ba224"
  },
  {
    "url": "assets/js/13.47dce7fb.js",
    "revision": "9ef42b45b8ebd1d56e3cb206dca80b16"
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
    "url": "assets/js/17.03c796a7.js",
    "revision": "52708229526b29a63e22f8f0817abc70"
  },
  {
    "url": "assets/js/18.f66b9ac8.js",
    "revision": "4a4c2ac9da0d7c659223120413dde26d"
  },
  {
    "url": "assets/js/19.d8b12963.js",
    "revision": "9e43e9ad92b8f33f9f109f1d59894a38"
  },
  {
    "url": "assets/js/20.6c065bf4.js",
    "revision": "9ccce75d57cd7d89b8811db45a164f7b"
  },
  {
    "url": "assets/js/21.0cca073d.js",
    "revision": "246a5425bb6f204b53c149ebaf77adec"
  },
  {
    "url": "assets/js/22.1ffb5d09.js",
    "revision": "e4ad0b67a2b3c4c11df210f57609a05d"
  },
  {
    "url": "assets/js/3.a86fd37b.js",
    "revision": "40d25dd5da979cd47cd52627bf9e3a89"
  },
  {
    "url": "assets/js/4.ea9542e3.js",
    "revision": "d3e6da88d6bb21b9a3167ddef926bf83"
  },
  {
    "url": "assets/js/5.3d9b6265.js",
    "revision": "0b644ce31af61ea600f22f80888f1840"
  },
  {
    "url": "assets/js/6.aadfad4e.js",
    "revision": "acdd1e4fa1ca1a71b0cd4ecdfce48616"
  },
  {
    "url": "assets/js/7.ed270d95.js",
    "revision": "de785a155715dc613fb0b10f8e76e2d6"
  },
  {
    "url": "assets/js/8.1ed31862.js",
    "revision": "9fc0cef7c261674e7b15b522f97e2f13"
  },
  {
    "url": "assets/js/9.8b0ced19.js",
    "revision": "ac5b703c4ab00b07ea1b9a9a5677a76e"
  },
  {
    "url": "assets/js/app.e6285851.js",
    "revision": "d66188bc283675270800169d74614a83"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "087423eeede65b9d1151b5b8a1b571a3"
  },
  {
    "url": "categories/index.html",
    "revision": "921c5b694259d620a49a05470ddf88bb"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "3479dca687d5da7a4606f7b6481b6376"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "ac5405f70637eb2d315612f8a744a647"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "8c7e2adf8cc23e722e03b4b77132f6a1"
  },
  {
    "url": "guide/10min分享-港中文MiM项目和港科大MGO项目大揭秘（含招生内幕分享）.html",
    "revision": "d899aa74cdab9d0e5efb7841a8f9b140"
  },
  {
    "url": "guide/10min分享-跨专业申请QS TOP100英国金融项目到底有什么选择.html",
    "revision": "03f78359e4f398f6524d0ea5fe94c4a3"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "98d8e8205b87b7ba85bcc9ba50feeb62"
  },
  {
    "url": "guide/10min分享-这些美国名校MIS项目大揭秘.html",
    "revision": "10cdb8849cc69ff7a2e4350e173d3099"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "cd3b6b6587c8da7f065676df53946463"
  },
  {
    "url": "guide/index.html",
    "revision": "be7af75740892fe9cd8bff9ee83b1fe6"
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
    "revision": "4113594f142bfcb4c787035c2bdc5c69"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "30c79351670cb14a3bb20305d0a23a96"
  },
  {
    "url": "tag/index.html",
    "revision": "06ca415040bf9767d8afb57091d82b49"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc57bf8c28298290a7ab4ea607acd55f"
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

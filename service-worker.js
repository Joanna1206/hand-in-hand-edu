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
    "revision": "f9d96bdca4cfc6f5a77c21b317dd343b"
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
    "url": "assets/img/PsychologyProgramsUK.625874b8.jpg",
    "revision": "625874b87aa27121b9d0bde8478eef1f"
  },
  {
    "url": "assets/js/1.2ef5c327.js",
    "revision": "29fdeb1dce465998b83fd4b40e83672a"
  },
  {
    "url": "assets/js/10.8b799305.js",
    "revision": "ef10fafd3a8b9682e00dea9cd2af9c58"
  },
  {
    "url": "assets/js/11.fa8eb8a5.js",
    "revision": "a001fc2b2f231c57960015822dcec2d8"
  },
  {
    "url": "assets/js/12.3ebee017.js",
    "revision": "462cba69c420c7e7ae4f27eca67d39b5"
  },
  {
    "url": "assets/js/13.a71019b6.js",
    "revision": "29a5582d2cafad6e974b2f0fe0c4d3e8"
  },
  {
    "url": "assets/js/14.2bcda629.js",
    "revision": "8b31e31a77f5ff4236294f41a328a7c5"
  },
  {
    "url": "assets/js/15.82cf371d.js",
    "revision": "4079e676b03f97842e3247c8f049deb0"
  },
  {
    "url": "assets/js/16.58da305e.js",
    "revision": "fa10f1ef36a3776287c9c4dcd8db29d1"
  },
  {
    "url": "assets/js/17.4105394b.js",
    "revision": "2ca71e822b0078bbf76498febbd71871"
  },
  {
    "url": "assets/js/18.777ec0e0.js",
    "revision": "811fbd223743656adb09d7880f065b5d"
  },
  {
    "url": "assets/js/19.d9915035.js",
    "revision": "b6da5f949e7e1d8dce811db788a3034f"
  },
  {
    "url": "assets/js/20.deecb354.js",
    "revision": "a70ebfcfdcfdb42d9ca9488b3af49c01"
  },
  {
    "url": "assets/js/3.dce1bcfa.js",
    "revision": "465c45fa5b7244b6855cabede2bc580b"
  },
  {
    "url": "assets/js/4.dc396e2a.js",
    "revision": "2c028e743d13178997e33ef1d72de50b"
  },
  {
    "url": "assets/js/5.6469f00e.js",
    "revision": "9e59748146274949a439a5aef7d6b869"
  },
  {
    "url": "assets/js/6.807cacdf.js",
    "revision": "522bdec8ce319b0286f5cf66e6832fb1"
  },
  {
    "url": "assets/js/7.7e07fd8d.js",
    "revision": "b5f29b872c204364327517229cc3a461"
  },
  {
    "url": "assets/js/8.67b4ceae.js",
    "revision": "dff683a84fe904605c51d9e93c6a9154"
  },
  {
    "url": "assets/js/9.8f3b1126.js",
    "revision": "faba7ee4b631a31e5365494baec75d26"
  },
  {
    "url": "assets/js/app.088ac5cc.js",
    "revision": "60517d8f53f54273b69ea8294ecc9d9b"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "33f979483d7a711c6ea79db7b434e4a9"
  },
  {
    "url": "categories/index.html",
    "revision": "c646c15a8580f4268e320d6a26ef04b7"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "016d74b8cce7935b3c2979da7f5d0be8"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "5c27beef06ef3c429aff49153c0db54d"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "93d8b529717badd1d72e3b8c3e5de064"
  },
  {
    "url": "guide/10min分享-港中文MiM项目和港科大MGO项目大揭秘（含招生内幕分享）.html",
    "revision": "1a1dfef88764bb2a1fb10a123e9c1738"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "dcb28f84d4add88e42f8c21691760c21"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "4fd6c816fe3d962272d991b3d47be933"
  },
  {
    "url": "guide/index.html",
    "revision": "0c6f79c12803e210a691460a4ace9e78"
  },
  {
    "url": "img/HKScholarship.png",
    "revision": "3ad9c088654ca119a25428462473695a"
  },
  {
    "url": "img/PsychologyProgramsUK.jpg",
    "revision": "625874b87aa27121b9d0bde8478eef1f"
  },
  {
    "url": "img/tinaam_logo.svg",
    "revision": "014a085e2c03ca4a9fa7d6a0ae614701"
  },
  {
    "url": "index.html",
    "revision": "71249c58ada7154c5fed8518cb0547c9"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "06e2bc8edbe6fa1f2cb154a1d247aaf1"
  },
  {
    "url": "tag/index.html",
    "revision": "7cdd5841299a8a2e85d700553edb1b4e"
  },
  {
    "url": "timeline/index.html",
    "revision": "98d4047b7769e49de8c82747afd413fb"
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

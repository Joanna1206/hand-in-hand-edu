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
    "revision": "e33cff23b70b27f03b5c81edc860bd86"
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
    "url": "assets/js/1.121d5756.js",
    "revision": "4eb6e6cbe448350b8e33224d0a65ecd2"
  },
  {
    "url": "assets/js/10.bd07315c.js",
    "revision": "ffaa7a82ac8ebcbf0f5830265d671629"
  },
  {
    "url": "assets/js/11.570b1fd8.js",
    "revision": "9c800f7a7d98cb1a29527fe72886fafe"
  },
  {
    "url": "assets/js/12.63e4fa96.js",
    "revision": "1c310f244a23d466af16153fb326fe04"
  },
  {
    "url": "assets/js/13.a71019b6.js",
    "revision": "29a5582d2cafad6e974b2f0fe0c4d3e8"
  },
  {
    "url": "assets/js/14.6bac623e.js",
    "revision": "00b93d24e1bc1844ff8b5c306f271d40"
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
    "url": "assets/js/18.b2f8faa7.js",
    "revision": "99dc92131d983176691ba2e544d08775"
  },
  {
    "url": "assets/js/19.0e9199b5.js",
    "revision": "b655e318bb17791e3ba78e0da92f5ec1"
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
    "url": "assets/js/9.116676a7.js",
    "revision": "aaf0c625a50c31ebe99629288deb1c19"
  },
  {
    "url": "assets/js/app.79bb4072.js",
    "revision": "866b413ced5dc64dc92d25e5d6fcfdef"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "9dd70cf5f36806b3de48eea480f2608e"
  },
  {
    "url": "categories/index.html",
    "revision": "7cc5cb10a48e3b94b85d070977e0b5c4"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "96ec60ffe1acda9fe072f27f02929668"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "f06b26d06a5db2fbc18475cc6b48e023"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "2a0a9355b3a8549e5ee5687bfaf38339"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "1a0340ace137e7c1c703deb32605a2d8"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "e23dcb82827ef119ed0a60565de869a9"
  },
  {
    "url": "guide/index.html",
    "revision": "a97d66ca7363b882c9110769c19d71e7"
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
    "revision": "12c0254efc95ef2d4fd438211d402016"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "e3e9360cb952204f82b514ddac61f5bf"
  },
  {
    "url": "tag/index.html",
    "revision": "8ce5b9a816738653fe547ced3d7c99bb"
  },
  {
    "url": "timeline/index.html",
    "revision": "1f6c75132d8b86174233f5e00091c409"
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

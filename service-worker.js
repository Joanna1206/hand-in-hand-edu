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
    "revision": "d46c44e77d6d74df7abf6c93fe5c297d"
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
    "url": "assets/js/10.cfbd983e.js",
    "revision": "21ece58b11001ca96d9c499aea7f40c2"
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
    "url": "assets/js/13.edad25a4.js",
    "revision": "e7822df8b69cd80359ed83d87e1491df"
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
    "url": "assets/js/17.0c6b167f.js",
    "revision": "b3a69b26ce0c4c5fdda306a3983fff79"
  },
  {
    "url": "assets/js/18.e1a71a80.js",
    "revision": "15b59e2532aa7f9214bb0c0cf150e7db"
  },
  {
    "url": "assets/js/19.eba7ea6a.js",
    "revision": "b43c6f59315fc36a94ab2a1c70363ec2"
  },
  {
    "url": "assets/js/20.b620fc6c.js",
    "revision": "9cba7bf9c3beeabd5de392945d7410bc"
  },
  {
    "url": "assets/js/21.78399e86.js",
    "revision": "e3936fbc88cf9a5a449c65673bf58661"
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
    "url": "assets/js/app.de9e2d0c.js",
    "revision": "94696762370bb295406cc6533da46f78"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "319d62c8d5b802886c1173688a00cc36"
  },
  {
    "url": "categories/index.html",
    "revision": "65a2e3a26dd83f3d03481fa36924c0b5"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "acde0eb93163ddf6476cbbc9034ed752"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "e17030c7540d258b66743fd9825975a3"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "ca150494349b1d92efd426d7b34527b4"
  },
  {
    "url": "guide/10min分享-港中文MiM项目和港科大MGO项目大揭秘（含招生内幕分享）.html",
    "revision": "add9ccf2c5f06ff5f1d4daa35c9978d8"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "732b4ef2a04f2089a5a182f35b018dcc"
  },
  {
    "url": "guide/10min分享-这些美国名校MIS项目大揭秘.html",
    "revision": "1b9a358f70a40c5e40f081cced5ec166"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "297f87894632419d50d341f81cd6c8b9"
  },
  {
    "url": "guide/index.html",
    "revision": "f9baa961285070a6daa8dd0337ea7381"
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
    "revision": "7b187788ffb8865d289783eb0e099269"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "862228c4302f62184a150a7ca0db074a"
  },
  {
    "url": "tag/index.html",
    "revision": "36688999d6e6db99b4b89c42b753f3be"
  },
  {
    "url": "timeline/index.html",
    "revision": "201394ee5c9b0eda0f72053af03e62bc"
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

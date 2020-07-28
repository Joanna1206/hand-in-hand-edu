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
    "revision": "4cc9c5bb0dc6807dfe37ed2f696591f0"
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
    "url": "assets/js/10.0ce67b55.js",
    "revision": "e3122f60740b5b311f559fc9b88a559d"
  },
  {
    "url": "assets/js/11.78d105bd.js",
    "revision": "c61ab0202ac0dedb2627da6ae4833801"
  },
  {
    "url": "assets/js/12.7c276707.js",
    "revision": "b143793652ed232cc8f571ca340ba224"
  },
  {
    "url": "assets/js/13.55a74b75.js",
    "revision": "ff5aa2509549ece4db68fc8ed6cad56b"
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
    "url": "assets/js/17.fd94df11.js",
    "revision": "11557b644fa777de105fee53e68da52c"
  },
  {
    "url": "assets/js/18.72a34c9c.js",
    "revision": "5be7172cbf623e808f2c43b9a0bcb477"
  },
  {
    "url": "assets/js/19.f1e783cc.js",
    "revision": "48da590b7283180eceb702c4e9c9add4"
  },
  {
    "url": "assets/js/20.99738ce2.js",
    "revision": "ac44411ade207249db1a4a65d912cd15"
  },
  {
    "url": "assets/js/21.c0a06421.js",
    "revision": "4e9b47ca33fdae83908c7df3460cecd3"
  },
  {
    "url": "assets/js/22.145b6a95.js",
    "revision": "645cfdf135e475cd76eb04b05d3e72d5"
  },
  {
    "url": "assets/js/23.d6b67a50.js",
    "revision": "6c909d82d243658782cbf722525ec6ab"
  },
  {
    "url": "assets/js/24.9b05bc12.js",
    "revision": "8beb4049fe74916f47e395d4b1fe0b7c"
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
    "url": "assets/js/app.04709cc2.js",
    "revision": "96ccc23f7bd08917569a7f43332a31e5"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "794b586304074c828e71f62356a8933a"
  },
  {
    "url": "categories/index.html",
    "revision": "c332bdeaf9db7c8e8437debea4e7596f"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "2b5d1ae9c5e8c7695ebde03c356a0b1f"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "18d939f2287f5578fd432a83abf9e034"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "3dbeaaed947a81cec4dff32ed8dd3f0e"
  },
  {
    "url": "guide/10min分享-港中文MiM项目和港科大MGO项目大揭秘（含招生内幕分享）.html",
    "revision": "4af3b468fceba158deee48521ccab36e"
  },
  {
    "url": "guide/10min分享-英国心理学硕士项目(点开了解一下呗).html",
    "revision": "92a0c9a20beb5767c41f118b40936d93"
  },
  {
    "url": "guide/10min分享-跨专业申请QS TOP100英国金融项目到底有什么选择.html",
    "revision": "127f7fde11a31ee817f7d2facdb4eb10"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "d909130595bb8cd919a8583c25f75f42"
  },
  {
    "url": "guide/10min分享-这些美国名校MIS项目大揭秘.html",
    "revision": "cb67b583208a9ec8b76144215900f601"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "34611e8ac9633e16d81ec82b39dcdfe6"
  },
  {
    "url": "guide/index.html",
    "revision": "d99bcb38ab178dff2b82786f3c74417f"
  },
  {
    "url": "guide/一起来看英国这几个顶尖院校的EE硕士项目吧.html",
    "revision": "a456fb2a8a7055a031e59eb3255c9232"
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
    "revision": "55bbbb42067d89e37682a50d73d68691"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "4b6c8a365dceb24c764ada1ed987c543"
  },
  {
    "url": "tag/index.html",
    "revision": "2074a1e62879d44fe5065774d1e64568"
  },
  {
    "url": "timeline/index.html",
    "revision": "a0d16fa7c66c1747a1e69e1dcd8adf6d"
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

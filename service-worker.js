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
    "revision": "4b6b1b6e5ca250415b567e3111a4bb2e"
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
    "url": "assets/js/10.074af03f.js",
    "revision": "111f76635b71bb12e1e0f97fa1d31a52"
  },
  {
    "url": "assets/js/11.ae9c1d95.js",
    "revision": "455d8620278c7660d4887556b32b18f5"
  },
  {
    "url": "assets/js/12.7c276707.js",
    "revision": "b143793652ed232cc8f571ca340ba224"
  },
  {
    "url": "assets/js/13.a0624d7f.js",
    "revision": "ec13f4f8ecfdda1577f8cdd5bcff3a1b"
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
    "url": "assets/js/16.c4ab6ce8.js",
    "revision": "256c2390401db43fd9e365455222023e"
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
    "url": "assets/js/19.d67c780a.js",
    "revision": "74eb2b0788e5c2645b9d7b7d4f40e32c"
  },
  {
    "url": "assets/js/20.6db535b5.js",
    "revision": "b2ab520132f48c94ae3c295bf51d7dd9"
  },
  {
    "url": "assets/js/21.17312ff2.js",
    "revision": "8365b26adb43f966f3a4338c3859ab76"
  },
  {
    "url": "assets/js/22.58660ced.js",
    "revision": "da4897b60e8e4204a39a90bb2e77622d"
  },
  {
    "url": "assets/js/23.ef07c244.js",
    "revision": "012afbdbfcbb15aa488af5b10102d8a4"
  },
  {
    "url": "assets/js/24.98541201.js",
    "revision": "8442a07a6cd45f3b399b5e777b51f64f"
  },
  {
    "url": "assets/js/25.2debb085.js",
    "revision": "53351571a805e21e52db62600121df22"
  },
  {
    "url": "assets/js/26.fffa2679.js",
    "revision": "98279ccef6ffaad607352d7596ec16ac"
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
    "url": "assets/js/app.b297a90e.js",
    "revision": "e95aa20db8f22fb5afd2c26644b9ebc9"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "8eb413d5c2d61c9e6da1288bb29683ae"
  },
  {
    "url": "categories/index.html",
    "revision": "ac86ba9ed4385f0a26625ee0ba186cec"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "fb6f1437ef4059d2df027acdb106c425"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "621d2ded01510e80f6724d8b175ead82"
  },
  {
    "url": "guide/10min分享-一起来看英国这几个顶尖院校的EE硕士项目吧.html",
    "revision": "332de52bf526b801c17cd65020181137"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "1f9fa066c41355b55096768160871324"
  },
  {
    "url": "guide/10min分享-港中文MiM项目和港科大MGO项目大揭秘（含招生内幕分享）.html",
    "revision": "03c889a79f40a8604f7118e0917a4cf1"
  },
  {
    "url": "guide/10min分享-美国统计学硕士-斯坦福大学 PK 耶鲁大学 PK 杜克大学.html",
    "revision": "0a4219e3f1aba90b6e1dcc2c4b21faa7"
  },
  {
    "url": "guide/10min分享-美国金融工程硕士-哥伦比亚大学 PK 加州大学伯克利分校 PK 纽约大学.html",
    "revision": "467bb34cd1eae123ddb78729053814d0"
  },
  {
    "url": "guide/10min分享-英国心理学硕士项目(点开了解一下呗).html",
    "revision": "97da28718502e79b85deb559b0a856a4"
  },
  {
    "url": "guide/10min分享-跨专业申请QS TOP100英国金融项目到底有什么选择.html",
    "revision": "305f9ae2754419c38d8fe9d1318760a2"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "596bb252826a4ca48303e7a6c1ea99f3"
  },
  {
    "url": "guide/10min分享-这些美国名校MIS项目大揭秘.html",
    "revision": "1100eaeb2f37ad8b7bfb9d16e64e6233"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "34d2aa9e8477316c7ba78c9c53c77311"
  },
  {
    "url": "guide/index.html",
    "revision": "e0720074efa186026f2d65829a3e9f91"
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
    "revision": "1fc08c2928355f6c69ed7c61aab9a422"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "a2fb67d64a8a06cc14b1f93a23da614d"
  },
  {
    "url": "tag/index.html",
    "revision": "f66831edf6bd7c7c5bac16474d49aaf3"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a15c157624b29951a5d0c86abd40b3a"
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

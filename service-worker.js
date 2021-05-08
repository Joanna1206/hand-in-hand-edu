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
    "revision": "da1b34195c18a928b642e6840fe86db4"
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
    "url": "assets/js/app.cf4725d7.js",
    "revision": "2cebe50ee0ab39d43c4d528bf98404b0"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "0a274e389d5fdc54b0e87d9efe9f0241"
  },
  {
    "url": "categories/index.html",
    "revision": "edbe87ce1f0b69e2dc27dec2bcd28dff"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "3b7d41e20243e52df98a7bf73df17837"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "b3600672d3e026fe5875154abab32967"
  },
  {
    "url": "guide/10min分享-一起来看英国这几个顶尖院校的EE硕士项目吧.html",
    "revision": "a5ba9e66d795f2ecff000b918a6280d3"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "51a16e698db7417b746c1139959be4e3"
  },
  {
    "url": "guide/10min分享-港中文MiM项目和港科大MGO项目大揭秘（含招生内幕分享）.html",
    "revision": "f4a81147591c5ce50eb740e5fc033193"
  },
  {
    "url": "guide/10min分享-美国统计学硕士-斯坦福大学 PK 耶鲁大学 PK 杜克大学.html",
    "revision": "329d9b8736ad7884e076161f32879573"
  },
  {
    "url": "guide/10min分享-美国金融工程硕士-哥伦比亚大学 PK 加州大学伯克利分校 PK 纽约大学.html",
    "revision": "adbd032c73513a25ad1d1bb9f56eecce"
  },
  {
    "url": "guide/10min分享-英国心理学硕士项目(点开了解一下呗).html",
    "revision": "6c7ee5ecdda059ca7c22cdd7e11ef8c0"
  },
  {
    "url": "guide/10min分享-跨专业申请QS TOP100英国金融项目到底有什么选择.html",
    "revision": "41964773599d15e42e69ea0d943c8874"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "42a4ae3167308142979d2a742eeee170"
  },
  {
    "url": "guide/10min分享-这些美国名校MIS项目大揭秘.html",
    "revision": "f31c94b4c97682453c798caa8401c87f"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "e99c2952865dbb38f217bc5b574b4b7d"
  },
  {
    "url": "guide/index.html",
    "revision": "6f2cb8e814f65afc80f14ab38f3f5dc7"
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
    "revision": "d96d3f183a86e48c4575ec9d41a5179e"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "464cc2a6107cbe9e685f1bae187039ab"
  },
  {
    "url": "tag/index.html",
    "revision": "ccdcc80c5a4019914da2d598559078fe"
  },
  {
    "url": "timeline/index.html",
    "revision": "3f2c8cd40d8778901d7f55dc2549eada"
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

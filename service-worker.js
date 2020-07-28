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
    "revision": "9fc07af160539014375f3d330b998d10"
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
    "url": "assets/js/10.9293b1df.js",
    "revision": "a9e01236322a5d2613e7412d962df753"
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
    "url": "assets/js/13.b92341cb.js",
    "revision": "3630741706a9b179f52f71db3eb114b8"
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
    "url": "assets/js/18.25922530.js",
    "revision": "7870afffde7098be2ba6132205fe6630"
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
    "url": "assets/js/21.84ee3690.js",
    "revision": "2086a2c2ccf702399da53afe99059633"
  },
  {
    "url": "assets/js/22.145b6a95.js",
    "revision": "645cfdf135e475cd76eb04b05d3e72d5"
  },
  {
    "url": "assets/js/23.606dd6f0.js",
    "revision": "1cc2ba7aa51cbe68fae412a4f36369de"
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
    "url": "assets/js/app.4f46e2f5.js",
    "revision": "250f5d3d52bab3270f4b5c5e06593a9f"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "daca4b3be9e0f6297e92e0fc5ab0ac71"
  },
  {
    "url": "categories/index.html",
    "revision": "d349d1a0c1c78f7c251d27f41ee99363"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "67cdcfc8185f36b5238bd494e474d716"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "65b7e0b1359d064c555da57a7c4af796"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "22c25fbd399a2fecac38e657ab79f487"
  },
  {
    "url": "guide/10min分享-港中文MiM项目和港科大MGO项目大揭秘（含招生内幕分享）.html",
    "revision": "40d37492b2b4a6b21b2ed880d5d56b82"
  },
  {
    "url": "guide/10min分享-英国心理学硕士项目(点开了解一下呗).html",
    "revision": "0c5ceff85ab189388d51b578d76e6cbc"
  },
  {
    "url": "guide/10min分享-跨专业申请QS TOP100英国金融项目到底有什么选择.html",
    "revision": "33a529baf76ca172c119af36819deb69"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "53e5599f6d966a1ea6321604e071fa10"
  },
  {
    "url": "guide/10min分享-这些美国名校MIS项目大揭秘.html",
    "revision": "5c1c18fd00e669edd5d9c68d0fc63bf6"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "64b80aa031294246117919373ab5796e"
  },
  {
    "url": "guide/index.html",
    "revision": "9e46617c102f5351beffaba6df988393"
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
    "revision": "73c35af88c363d6367ba58c51a9b0351"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "36c4d8290f73836134ff07bda05d91fa"
  },
  {
    "url": "tag/index.html",
    "revision": "c003bc1e82268fafff3c3fa8ceafafb0"
  },
  {
    "url": "timeline/index.html",
    "revision": "39609df9ba091ceeb206e91c977e8990"
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

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
    "revision": "e1eb2774005f41e4ba2bbfef93e99192"
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
    "url": "assets/js/10.3cede27a.js",
    "revision": "5a1f700386537eb5e94a8fa3453232ee"
  },
  {
    "url": "assets/js/11.49e2bdf3.js",
    "revision": "9d57abdd47c370cee06a1b40dded21bc"
  },
  {
    "url": "assets/js/12.7c276707.js",
    "revision": "b143793652ed232cc8f571ca340ba224"
  },
  {
    "url": "assets/js/13.42fbe422.js",
    "revision": "d0d199b981e8d1ebac68bac040cdcc6d"
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
    "url": "assets/js/18.ac925723.js",
    "revision": "b6acc188f8c997ace6487408a93b15e5"
  },
  {
    "url": "assets/js/19.e906324a.js",
    "revision": "bea127993443a23f12ac45af412d3b8b"
  },
  {
    "url": "assets/js/20.89f824f0.js",
    "revision": "7ff4a977143fbc9788821505a76fc2dc"
  },
  {
    "url": "assets/js/21.2fba2773.js",
    "revision": "aff4ca758a182b89101c5fed2a77559d"
  },
  {
    "url": "assets/js/22.7cdcb903.js",
    "revision": "a9b5da1e41d86a5d6c35900259e1872e"
  },
  {
    "url": "assets/js/23.c809ad8c.js",
    "revision": "c2f8a87456307a575f61bfe9500b894e"
  },
  {
    "url": "assets/js/24.6218bc4d.js",
    "revision": "ba6643cc343b554f0ceb961365cf70e6"
  },
  {
    "url": "assets/js/25.3087a151.js",
    "revision": "91a0de4d1a557789c10cd1e044292e08"
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
    "url": "assets/js/app.548c7983.js",
    "revision": "1fc3eed73a257ffa93e0dcf0f5a467f4"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "8f47b83f855a83cacdcd5274e7effe74"
  },
  {
    "url": "categories/index.html",
    "revision": "aabba530f391a5c4abef64f8b228c108"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "40bf190a6a6a57f97973311800725c98"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "d74bb596dfefafbf501e841b673a1c77"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "6ec003c0f69fac24c00bfc4babd83e68"
  },
  {
    "url": "guide/10min分享-港中文MiM项目和港科大MGO项目大揭秘（含招生内幕分享）.html",
    "revision": "f0f137f45db201694eaad0ff65058abb"
  },
  {
    "url": "guide/10min分享-美国金融工程硕士-哥伦比亚大学 PK 加州大学伯克利分校 PK 纽约大学.html",
    "revision": "7c32cb695602e2eb753e6c0ac6440f66"
  },
  {
    "url": "guide/10min分享-英国心理学硕士项目(点开了解一下呗).html",
    "revision": "5ff5354000f90238c303ba0108a2715d"
  },
  {
    "url": "guide/10min分享-跨专业申请QS TOP100英国金融项目到底有什么选择.html",
    "revision": "c6d2ae5e15a9546eb81a17796c9756ce"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "923103de36d3252407ae39e9f2680aa8"
  },
  {
    "url": "guide/10min分享-这些美国名校MIS项目大揭秘.html",
    "revision": "d91c9108c30381f52fcb6e9a30bc8dcd"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "283e84a9dd7117f2c8a24427adf5a8e4"
  },
  {
    "url": "guide/index.html",
    "revision": "926d8e2c098faf8a837503b78df145b6"
  },
  {
    "url": "guide/一起来看英国这几个顶尖院校的EE硕士项目吧.html",
    "revision": "d5def6ca532ba87603a7128db76a0e5e"
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
    "revision": "68ed334060a5251585f51b7c81755bf3"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "200f98fe8cca6cfd22080df15e4a4601"
  },
  {
    "url": "tag/index.html",
    "revision": "fcf52486b7e36692cf09d70b038f8f98"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd60714f7f53b073fb00dd3e7750f9df"
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

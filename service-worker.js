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
    "revision": "b3639ee34827bcc76446258e1daff1e3"
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
    "url": "assets/js/10.2b95a719.js",
    "revision": "a0e9d68381074b16568adad982017a2c"
  },
  {
    "url": "assets/js/11.741d797a.js",
    "revision": "c841ef46b1545458c0d20303bcd726a3"
  },
  {
    "url": "assets/js/12.7c276707.js",
    "revision": "b143793652ed232cc8f571ca340ba224"
  },
  {
    "url": "assets/js/13.f61588c1.js",
    "revision": "8421a75b0ae7b9de6e8cafa4501312d6"
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
    "url": "assets/js/18.9bb9b97a.js",
    "revision": "6377a80f6a87cbed1536d58737e2f1a2"
  },
  {
    "url": "assets/js/19.7077d390.js",
    "revision": "681a0bcd3f04c484e053d139bf9406d7"
  },
  {
    "url": "assets/js/20.c0775527.js",
    "revision": "32e568b13bc64cf47259b40ff5adf663"
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
    "url": "assets/js/app.e2adccb2.js",
    "revision": "ac464012520892c39b8e183c828126fb"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "4eb0974aa6344950ac71176a156a7072"
  },
  {
    "url": "categories/index.html",
    "revision": "bc57c876cb55c8571443e7e63c2793fd"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "8ee7899e33986dfffbd3cad7ebac2d8e"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "d11d1d47dcc463bdab6e4b3c8de441d3"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "5d57d25a4a20d7314726cc69128a43ca"
  },
  {
    "url": "guide/10min分享-港中文MiM项目和港科大MGO项目大揭秘（含招生内幕分享）.html",
    "revision": "1fbdf04c1102e6992d8e652cfa92c354"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "babb777179f4e4f0a283813ef9e658dc"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "143a6ac11de98a641f3fd26cc2560ca3"
  },
  {
    "url": "guide/index.html",
    "revision": "e4c16ebb35f6841afba6c86588f63455"
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
    "revision": "8a97989ecd559f58a2af0599aa432a61"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "968099bb7a8ad19315c38b1d5147dccd"
  },
  {
    "url": "tag/index.html",
    "revision": "59995503fc00ced769b0756afdfcc243"
  },
  {
    "url": "timeline/index.html",
    "revision": "4b301e8f009088d7b71d2c54e5d730f8"
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

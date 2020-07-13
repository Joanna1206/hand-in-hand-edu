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
    "revision": "8bfbb9ba3058307f548bdffc0afdcc18"
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
    "url": "assets/js/1.e4e5c049.js",
    "revision": "a2e90abde8ae08d1ae77d7580626e53e"
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
    "url": "assets/js/12.3ebee017.js",
    "revision": "462cba69c420c7e7ae4f27eca67d39b5"
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
    "url": "assets/js/18.6d46f75b.js",
    "revision": "0103038f07537f7a574e8e476806d890"
  },
  {
    "url": "assets/js/19.0e9199b5.js",
    "revision": "b655e318bb17791e3ba78e0da92f5ec1"
  },
  {
    "url": "assets/js/3.81c48d6d.js",
    "revision": "64ed31e7ad6d35f0431c03ebccbdbc8d"
  },
  {
    "url": "assets/js/4.09dfe353.js",
    "revision": "21a1576e97d0682e2d253d04672f2755"
  },
  {
    "url": "assets/js/5.eebd0c3e.js",
    "revision": "f362ea9cef10117985bcdf8f333598c0"
  },
  {
    "url": "assets/js/6.e2c3b535.js",
    "revision": "e57e52d7417eff84d77951f3b631b8ea"
  },
  {
    "url": "assets/js/7.7e07fd8d.js",
    "revision": "b5f29b872c204364327517229cc3a461"
  },
  {
    "url": "assets/js/8.18a3e5e7.js",
    "revision": "46c1525c9eb47153f21c612aeffb872f"
  },
  {
    "url": "assets/js/9.3bd9fe0f.js",
    "revision": "583101274bd7fb14f5513765f06479c2"
  },
  {
    "url": "assets/js/app.c177f54d.js",
    "revision": "ce31778ff48338073d9036b406eb2adf"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "f998417f628a9aef9d86587670becae9"
  },
  {
    "url": "categories/index.html",
    "revision": "bffb64826d241aadedd8b701b6ffa344"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "57cb10a78e1a33d84f0531f75d7d1287"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "baabf37c4c8c9593cf6f1af421ddb922"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "2a68627d45b5bc089a4604f249b989ef"
  },
  {
    "url": "guide/10min分享-跨专业申请英国心理学硕士可以吗.html",
    "revision": "611fd168fb9fd0d9ace5ce2d6564374e"
  },
  {
    "url": "guide/10min分享-香港博士申请奖学金.html",
    "revision": "1d2b6ad3b47405c1d521b875a7a6259d"
  },
  {
    "url": "guide/index.html",
    "revision": "4de2633fe242972e90144995e93c27dd"
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
    "revision": "6c51003ef1497272351e2a32f30a7edc"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "5bb64a9eed3fd137656717d126e87395"
  },
  {
    "url": "tag/index.html",
    "revision": "cf6eab7bbd3a183a73c91444cf7e425a"
  },
  {
    "url": "timeline/index.html",
    "revision": "49b0541ba5262432da87db31acc764d9"
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

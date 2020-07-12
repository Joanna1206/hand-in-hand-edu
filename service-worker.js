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
    "revision": "23e17a10fa594e9aa73bc4aa77919155"
  },
  {
    "url": "assets/css/0.styles.9e20c02a.css",
    "revision": "8b72b499a29350a61817dbeffc13ee74"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/tinaam_logo.014a085e.svg",
    "revision": "014a085e2c03ca4a9fa7d6a0ae614701"
  },
  {
    "url": "assets/img/xxx.6d1cab97.jpg",
    "revision": "6d1cab97d729de19496d3dc37b182bbf"
  },
  {
    "url": "assets/js/1.4e61f59b.js",
    "revision": "c781ff48373244c39c98ce434701a4fc"
  },
  {
    "url": "assets/js/10.976480a0.js",
    "revision": "9cc0e2748c5ac26aeafa5b7fb9ee5ed3"
  },
  {
    "url": "assets/js/11.9f217581.js",
    "revision": "443b61dd369bb0738219cdfe3baf65d1"
  },
  {
    "url": "assets/js/12.aeabe633.js",
    "revision": "a277f5889733dbee3a99767ab9059396"
  },
  {
    "url": "assets/js/13.47dce7fb.js",
    "revision": "9ef42b45b8ebd1d56e3cb206dca80b16"
  },
  {
    "url": "assets/js/14.57012d7c.js",
    "revision": "96cc5ef6d8dfb6b3a97c1f7d7159f58b"
  },
  {
    "url": "assets/js/15.be1a0aff.js",
    "revision": "b4b53d93a3f031adcf48e46b06c3f2b4"
  },
  {
    "url": "assets/js/16.f97e19b8.js",
    "revision": "5005f43b7808088d868045c18679b5e4"
  },
  {
    "url": "assets/js/17.4105394b.js",
    "revision": "2ca71e822b0078bbf76498febbd71871"
  },
  {
    "url": "assets/js/18.71925aca.js",
    "revision": "203ece29824222f5389ecffa7c4ebeaa"
  },
  {
    "url": "assets/js/19.17d306bb.js",
    "revision": "9302c54259cea821af70ea770465515d"
  },
  {
    "url": "assets/js/20.3cddcba0.js",
    "revision": "8943ecad2faa54408f2dc4c65788aaad"
  },
  {
    "url": "assets/js/21.be2293f2.js",
    "revision": "8e65af6a55b731c492f6a0f8e19a95fd"
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
    "url": "assets/js/9.db5c1462.js",
    "revision": "8ea094879f2c2faa22ff986b3630697a"
  },
  {
    "url": "assets/js/app.ac63eb98.js",
    "revision": "b116e2ba82f5f8512d3f02d0c73f35ac"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "28a2e9e09d916031bedfc7292d8fae5d"
  },
  {
    "url": "categories/bbb/index.html",
    "revision": "f7b95b6ae3f9b57801b4363ad81a807a"
  },
  {
    "url": "categories/index.html",
    "revision": "aa530250d9a6cb9b0d1929ae01e3fac9"
  },
  {
    "url": "categories/文书/index.html",
    "revision": "3650e40b31bc76f382a46746234af744"
  },
  {
    "url": "categories/选项目/index.html",
    "revision": "5a0222905b0e3e3dd19e0d56f15981f0"
  },
  {
    "url": "categories/选项目1/index.html",
    "revision": "e23a93973252247f9f70917c1d8246f4"
  },
  {
    "url": "config/index.html",
    "revision": "e0a1360b605d982b1dc9a974d53f8a06"
  },
  {
    "url": "guide/10min分享-帝国理工学院（IC）的8个CS硕士项目到底选哪个呢？.html",
    "revision": "75aa9967e76905a35d714ad807cfdbfc"
  },
  {
    "url": "guide/index.html",
    "revision": "d87c113b9594ab1069e2be6100e45ece"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "327582d2a670de41059b46f084063738"
  },
  {
    "url": "guide/xxx.html",
    "revision": "64d13449e36af02a9e53f018b9f3d876"
  },
  {
    "url": "guide/yyy.html",
    "revision": "8e457a8466aa63b31a9ea33f92112db7"
  },
  {
    "url": "img/tinaam_logo.svg",
    "revision": "014a085e2c03ca4a9fa7d6a0ae614701"
  },
  {
    "url": "img/xxx.jpg",
    "revision": "6d1cab97d729de19496d3dc37b182bbf"
  },
  {
    "url": "index.html",
    "revision": "988204cb804fe2f39bbba5e3d703f59a"
  },
  {
    "url": "tag/10min分享/index.html",
    "revision": "4a73b8bbbd40acaa1f562d3d06f3a150"
  },
  {
    "url": "tag/index.html",
    "revision": "ea0d8478e2ff7c9cdb3f33dbf6bc14ee"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc67fd3e10bfc85a23d5ecc9b4d6ae66"
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

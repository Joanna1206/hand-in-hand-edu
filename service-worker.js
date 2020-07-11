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
    "revision": "cd653df3accba8eaf6eb101fd759babe"
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
    "url": "assets/js/1.edf6f876.js",
    "revision": "35574b3a9248706b3a14883cd0fb7ade"
  },
  {
    "url": "assets/js/10.bd07315c.js",
    "revision": "ffaa7a82ac8ebcbf0f5830265d671629"
  },
  {
    "url": "assets/js/11.f998e656.js",
    "revision": "67b2d05a2f46c9b90b94d29d935e2d7c"
  },
  {
    "url": "assets/js/12.aeabe633.js",
    "revision": "a277f5889733dbee3a99767ab9059396"
  },
  {
    "url": "assets/js/13.f61588c1.js",
    "revision": "8421a75b0ae7b9de6e8cafa4501312d6"
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
    "url": "assets/js/16.a95f8b90.js",
    "revision": "8b043c5f5be5ea728b390d4aba84480d"
  },
  {
    "url": "assets/js/17.d5bfca1c.js",
    "revision": "212b5067a09f9a17794fb6a41c2b7812"
  },
  {
    "url": "assets/js/18.324ab366.js",
    "revision": "e528a7ce9a7b2f05248dbc20821b77df"
  },
  {
    "url": "assets/js/19.0e9199b5.js",
    "revision": "b655e318bb17791e3ba78e0da92f5ec1"
  },
  {
    "url": "assets/js/3.a1094f0c.js",
    "revision": "717e81b78baf6e7dab856a14c9ee7137"
  },
  {
    "url": "assets/js/4.53c483ef.js",
    "revision": "7bfa6595a480ed7bc8f9649a086d486f"
  },
  {
    "url": "assets/js/5.d0710370.js",
    "revision": "b28c0672252754794b6d78cb66c08e3f"
  },
  {
    "url": "assets/js/6.f8d9213b.js",
    "revision": "f9624b8e9d02edbf3af8f28bd4a6d604"
  },
  {
    "url": "assets/js/7.7e07fd8d.js",
    "revision": "b5f29b872c204364327517229cc3a461"
  },
  {
    "url": "assets/js/8.4a755bb4.js",
    "revision": "7d74724b433164afb7a060229799e0f5"
  },
  {
    "url": "assets/js/9.3bd9fe0f.js",
    "revision": "583101274bd7fb14f5513765f06479c2"
  },
  {
    "url": "assets/js/app.8062de17.js",
    "revision": "bf9c440c1511173522692bdc07daf154"
  },
  {
    "url": "categories/aaa/index.html",
    "revision": "e3cdabdd8feddbb0f314fb29bd11595d"
  },
  {
    "url": "categories/bbb/index.html",
    "revision": "d623adb24b3c02d8244942dd60d8112f"
  },
  {
    "url": "categories/index.html",
    "revision": "51ddfbf05011c030d048fd09141af501"
  },
  {
    "url": "config/index.html",
    "revision": "79c74c479137041b428293568b574ba8"
  },
  {
    "url": "guide/index.html",
    "revision": "a5381cb825a81aafe32a2939b8fb5cd8"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "e4c5ee0a79fc22b30fbec8d864786b84"
  },
  {
    "url": "guide/xxx.html",
    "revision": "bf972dd356f4a9e881d8553c29024ae9"
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
    "revision": "4ec7039c9bfbbcab8cd33307bfeadb3d"
  },
  {
    "url": "tag/index.html",
    "revision": "6e5b15f53556406eabcdc53649a7c1e4"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba0f3ab69565519719f66bada994108c"
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

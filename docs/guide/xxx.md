---
author: Ace Han
date: 2020-06-29
categories:
  - aaa
---
# Using Vue in Markdown

## Browser API Access Restrictions


treqtretrewfkfadsfdafadsfadsfadsfadsfadsjdaskf;

![xxx](./../.vuepress/public/img/xxx.jpg)

![yfudsiap](./../.vuepress/public/img/tinaam_logo.svg)
Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

Make a change, again

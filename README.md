<p align='center'>
  <img src='https://user-images.githubusercontent.com/11247099/111864893-a457fd00-899e-11eb-9f05-f4b88987541d.png' alt='Vitesse - Opinionated Vite Starter Template' width='600'/>
</p>

<h6 align='center'>
<a href="https://vitesse-lite.netlify.app/">Live Demo</a>
</h6>

<h5 align='center'>
<b>Lightweight version of <a href="https://github.com/antfu/vitesse">Vitesse</a></b>
</h5>

<br>

## Dropped Features

- ~~i18n~~
- ~~SSG~~
- ~~PWA~~
- ~~Markdown~~

## Features

- โก๏ธ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- ๐ [File based routing](./src/pages)

- ๐ฆ [Components auto importing](./src/components)

- ๐ [Use icons from any icon sets, with no compromise](./src/components)

- ๐ฅ Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- ๐ฆพ TypeScript, of course

- โ๏ธ Deploy on Netlify, zero-config

<br>

See [Vitesse](https://github.com/antfu/vitesse) for full featureset.

## Pre-packed

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [๐Icรดnes](https://icones.netlify.app/)
- [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) - icons as Vue components

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/antfu/vitesse-lite/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit antfu/vitesse-lite my-vitesse-app
cd my-vitesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

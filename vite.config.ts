import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    Pages(
      {
        extendRoute(route) {
          if (route.path === '/') {
          // Index is unauthenticated.
            return route
          }

          return {
            ...route,
            meta: { ...route.meta, auth: false },
          }
        },
      },
    ),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
    }),
    ViteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    ViteIcons(),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})

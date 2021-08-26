// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

import App from './App.vue'

import './styles/main.css'

const app = createApp(App)
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) return next('/')
  else next()
})
app.use(router)
app.mount('#app')

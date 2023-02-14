import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: async () => await import('../layout/index.vue'),
    children: []
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

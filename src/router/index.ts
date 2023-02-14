import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: async () => await import('../layout/index.vue'),
    children: [
      {
        path: '',
        component: async () => await import('../views/design/index.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'visitor number screen',
      component: () => import('../views/VisitorNumberView.vue')
    },
    {
      path: '/data',
      name: 'my data screen',
      component: () => import('../views/MyDataView.vue')
    }
  ]
})

export default router

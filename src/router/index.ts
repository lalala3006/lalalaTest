import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
        path: '/wxBell',
        name: 'wxBell',
        component: () => import('../views/WxBell.vue'),
    }
  ],
})

export default router

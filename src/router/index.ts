import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About me',
      component: HomeView
    },
    // {
    //   path: '/work',
    //   name: 'Experience',
    //   component: () => import()
    // }
  ]
})

export default router

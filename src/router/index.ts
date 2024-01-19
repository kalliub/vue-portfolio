import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About me',
      component: HomeView
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('@/views/WorkView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      path: '/project/:projectName',
      name: 'Project',
      component: () => import('@/views/ProjectPageView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404.vue')
    }
  ]
})

export default router

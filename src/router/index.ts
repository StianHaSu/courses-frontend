import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Testing from '../views/Testing.vue'
import NewCourseView from '../views/NewCourseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new',
      name: 'new',
      component: NewCourseView
    },
    {
      path: '/testing',
      name: 'testing',
      component: Testing
    }
  ]
})

export default router

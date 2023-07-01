import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Testing from '../views/Testing.vue'
import NewCourseView from '../views/NewCourseView.vue'
import CommentScreen from '../views/CommentScreen.vue'
import LoginScreen from '../views/LoginScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginScreen
    },
    {
      path: '/new',
      name: 'new',
      component: NewCourseView
    },
    {
      path: '/:course/comments',
      name: 'comments',
      component: CommentScreen,
      props: route => ({ code: route.params.course })
    },
    {
      path: '/testing',
      name: 'testing',
      component: Testing
    }
  ]
})

export default router

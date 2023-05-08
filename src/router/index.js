import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import ActivateAccount from '../views/ActivateAccount.vue'
import step1 from '../views/step1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/activate-account',
      name: 'Activate Account',
      component: ActivateAccount
    },
  ]
})

export default router

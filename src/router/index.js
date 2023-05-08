import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import LoginConsumer from '../views/LoginConsumer.vue'
import Dashboard from '../views/Dashboard.vue'
import PaymentChannels from '../views/PaymentChannels.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/loginconsumer',
      name: 'loginconsumer',
      component: LoginConsumer
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/consumer',
      name: 'consumer',
      component: HomeView
    }, 
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentChannels
    }, 
    ,    {
      path: '/activate-account',
      name: 'Activate Account',
      component: ActivateAccount
    },
 ]
})

export default router

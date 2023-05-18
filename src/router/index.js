import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import LoginConsumer from '../views/LoginConsumer.vue'
import PaymentChannels from '../views/PaymentChannels.vue'
import Transactions from '../views/Transactions.vue'
import ActivateAccount from '../views/ActivateAccount.vue'
import Dashboard from '../views/Dashboard.vue'
import ActivateStepII from  '../views/ActivateStepII.vue'
import MainLayout from '../components/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/admin/login',
      name: 'admin.login',
      component: Login
    },
    {
      path: '/',
      name: 'consumer.login',
      component: LoginConsumer
    },
    {
      path: '/consumer/registration',
      name: 'consumer.registration',
      component: Registration
    },
    {
      path: '/admin',
      component: MainLayout,
      children: [

      ]
    },
    {
      path: '/consumer',
      component: MainLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        }, 
        {
          path: '/activate-StepII',
          name: 'consumer.activate-account.step2',
          component: ActivateStepII
        },
        {
          path: '/activate-account',
          name: 'consumer.activate-account',
          component: ActivateAccount
        },
        {
          path: '/payments',
          name: 'consumer.payments',
          component: PaymentChannels
        }, 
        {
          path: '/transactions',
          name: 'consumer.transactions',
          component: Transactions
        },
        {
          path: '/dashboard',
          name: 'consumer.dashboard',
          component: Dashboard
        },
      ],
    },
 ]
})
export default router
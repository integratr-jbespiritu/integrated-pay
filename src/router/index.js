import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import LoginConsumer from '../views/LoginConsumer.vue'
import PaymentChannels from '../views/PaymentChannels.vue'
import Transactions from '../views/Transactions.vue'
import ActivateAccount from '../views/ActivateAccount.vue'
import ActivateStepII from  '../views/ActivateStepII.vue'

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
      path: '/payments',
      name: 'payments',
      component: PaymentChannels
    }, 
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    },
    {
      path: '/activate-account',
      name: 'Activate Account',
      component: ActivateAccount
    },
    {
      path: '/activate-StepII',
      name: 'ActivateStepII',
      component: ActivateStepII
    },
 ]
})

export default router

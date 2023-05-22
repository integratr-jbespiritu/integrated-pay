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
import DisbursementPage from '../views/DisbursementPage.vue'
import Viewtransaction from '../views/Viewtransaction.vue'
import ActivateStep1 from '../views/ActivateStep1.vue'
import RequestRefund from '../views/RequestRefund.vue'
import ActivateBusinessInformation from  '../views/ActivateBusinessInformation.vue'
import ActivateGovernmentUnit from '../views/ActivateGovernmentUnit.vue'
import Modal from '../views/Modal.vue'
import AccessManagementListandDetails from '../views/AccessManagementListandDetails.vue'


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
          path: '/activate-account-step1',
          name: 'consumer.activate-account.step1',
          component: ActivateStep1
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
        {
          path: '/DisbursementPage',
          name: 'DisbursementPage',
          component: DisbursementPage
        },
        {
          path: '/view-transaction',
          name: 'consumer.view-transaction',
          component: Viewtransaction
        },
        {
          path: '/request-refund',
          name: 'consumer.request-refund',
          component: RequestRefund
        },
        {
          path: '/activate-account-businessinformation',
          name: 'consumer.activate-step3-businessinformation',
          component: ActivateBusinessInformation
        },
        {
          path: '/activate-account-governmentunit',
          name: 'consumer.activate-step3-governmentunit',
          component: ActivateGovernmentUnit
        },
        {
          path: '/modal',
          name: 'consumer.modal',
          component: Modal
        },
        {
          path: '/access-management-list-and-details',
          name: 'consumer.access-management-list-and-details',
          component: AccessManagementListandDetails
        },
      ],
    },
 ]
})
export default router
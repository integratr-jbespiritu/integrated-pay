<template>
   <div class="h-100">
      <div class="sidebar" style="position: sticky !important;">
         <div class="sidebar-header">
            <div class="row gx-0 g-0 pad-bottom-10p">
               <div class="col-12 justify-content-center d-flex pt-1">
                  <img src="src\assets\images\Logo_White.svg">
               </div>
               <div class="col-12 justify-content-center d-flex pb-2">
                  <img src="src\assets\images\avatar.svg" class="h-100">
               </div>
               <div class="col-12 mb-2">
                  <div class="account">
                     <a href="#">Juan Dela Cruz</a> 
                  </div>
               </div>
            </div>
         </div>
         <div class="h-75 scrollable">
            <nav class="nav flex-column">
               <li>
                  <div class="row gx-0 g-0 pe-4">
                     <div class="col text-nowrap">
                        <router-link class="text-sm-center nav-link text-light" :to="{name: 'consumer.dashboard'}">
                           <i class="icon isax isax-category5 me-2"></i>
                           Dashboard
                        </router-link>
                     </div>
                     <div class="col my-auto justify-content-end d-flex">
                        <div class="badge badge-notification">3</div>
                     </div>
                  </div>
               </li>
            </nav>
            <nav class="nav flex-column">
               <li>
                  <div class="row gx-0 g-0 pe-3">
                     <div class="col-9 text-nowrap">
                        <router-link class="text-sm-center nav-link text-light" :to="{name: 'consumer.activate-account'}">
                           <i class="icon isax isax-user-tick me-2"></i>
                           Activate Account
                        </router-link>
                      </div>
                     <div class="col my-auto justify-content-end d-flex">
                        <span class="badge badge-count">4/4</span>
                     </div>
                  </div>
               </li>
            </nav>
            <template v-for="module_services in modules" :key="module_services">
               <p class="sub-menu">{{module_services.title}}</p>
               <div class="height-auto scrollable">
                  <template v-for="module_type in module_services.module_types" :key="module_type">
                     <nav class="nav flex-column">
                        <router-link class="text-sm-center text-decoration-none text-light" :to="{name: module_type.route}" >
                           <li><a class="text-md-center text-nowrap nav-link text-light" href="#"><i class="isax isax-dcube5 me-2"></i>{{module_type.name}}</a></li>
                        </router-link>
                     </nav>
                  </template>
               </div>
            </template>
            <nav class="nav flex-column">
               <li><a class="text-sm-center nav-link text-light" href="#"><i class="isax isax-user-tick me-2"></i>Account</a></li>
               <li><router-link class="text-sm-center nav-link text-light" :to="{name: 'consumer.login'}"><i class="isax isax-logout5 me-2"></i>Logout</router-link></li>
            </nav>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         modules: [
            {
               title: 'Services',
               module_types: [
                  {
                     name: 'Transactions',
                     route: 'consumer.transactions'
                  },
                  {
                     name: 'Disbursement',
                     route: ''
                  },

                  {
                     name: 'Payment Channels',
                     route: 'consumer.payments'
                  },

                  {
                     name: 'Developers',
                     route: ''
                  }
               ]
            },
            {
               title: 'Settings',
               module_types: [
                  {
                     name: 'Disbursement Account',
                     route: ''
                  },
                  
               ]
            }
         ]
      }

   }
}
</script>
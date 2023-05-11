<template>
   <div class="row gx-0 g-0">
      <div class="sidebar">
         <div class="sidebar-header">
            <div class="row gx-0 g-0 pad-bottom-10p">
               <div class="col-12 justify-content-center d-flex">
                  <img src="src\assets\images\Logo_White.svg">
               </div>
               <div class="col-12 justify-content-center d-flex">
                  <img src="src\assets\images\avatar.svg" class="h-100">
               </div>
               <div class="col-12 bg-black mb-4">
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
                        <div class="text-sm-center nav-link text-light" href="#">
                           <i class="icon isax isax-category5 me-2"></i>
                           Dashboard
                        </div>
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
                        <div class="text-sm-center nav-link text-light">
                           <router-link class="text-sm-center nav-link text-light" :to="{name: 'stepone'}" >
                           <i class="icon isax isax-user-tick me-2"></i>
                           Activate Account
                           </router-link>
                        </div>
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
                           <li><a class="text-md-center text-nowrap nav-link text-light" href="#"><i class="isax isax-dcube5 me-2"></i>{{module_type.name}}</a></li>
                     </nav>
                  </template>
               </div>
            </template>
            <nav class="nav flex-column">
               <li><a class="text-sm-center nav-link text-light" href="#"><i class="isax isax-setting5  me-2"></i>Settings</a></li>
               <li><router-link class="text-sm-center nav-link text-light" :to="{name: 'login'}" ><i class="isax isax-logout5 me-2"></i>Logout</router-link></li>

            </nav>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {5
      return {
         modules: [
            {
               title: 'Services',
               module_types: [
                  {
                     name: 'Transactions',
                     route: 'viewtransaction'
                  },
                  {
                     name: 'Disbursement'
                  },
                  {
                     name: 'Payment Channels'
                  },
                  {
                     name: 'Developers'
                  }
               ]
            },
            {
               title: 'Settings',
               module_types: [
               
               ]
            }
         ]
      }

   }
}
</script>
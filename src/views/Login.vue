<template>
   <!-- <Logoheader/> -->
   <div class="row gx-0 g-0">
      <div class="col image-column p-5">
         <div class="title-1 text-white">Amplify your payments</div>
         <div class="d-flex">
            <div class="title-1 text-white">with</div>
            <div class="text-blue title-1">&nbsp;ampliPAY.</div>
         </div>
      </div>
      <div class="col bg-purple container-box pad-x-40p">
         <div class="card-box pad-x-10p p-4">
            <p class="title-2 mx-6 mt-0">Sign in to your account</p>
            <div class="form-floating border-light mb-3 mt-3">
               <input type="email" class="form-control input-text" id="floatingInput" placeholder="name@example.com" value="juandelacruz@gmail.com">
               <label for="floatingInput">Email address</label>
            </div>
            <div class="password-container form-floating border-light">
               <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
               <i class="isax isax-eye-slash password-toggle fs-4"></i>
               <label for="floatingPassword">Password</label>
            </div>
            <div class="d-flex justify-content-between align-items-center">
               <div class="form-check mb-0 pt-2">
                  <input class="form-check-input me-2" type="checkbox" value="" id="cbox" />
                  <label class="form-check-label" for="cbox">Remember me</label>
               </div>
               <a href="#!" class="forgot-pass text-decoration-none text-purple fw-bold mt-2">Forgot password?</a>
            </div>
            <div class="text-center mt-3 pt-1">
               <router-link :to="{name: 'home'}" class="button-1 text-decoration-none" style="">Login</router-link>
               <div class="mt-4 mb-0">
                  <a href="#" class="link-danger text-decoration-none text-purple fw-bold">Sign up</a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <Footer/>
</template>

<!-- <script>
import Logoheader from '../components/Logoheader.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Login",
   components: {
      Logoheader,
      Footer
   }
};
</script> -->
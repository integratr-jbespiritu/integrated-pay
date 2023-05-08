<template>
<Header/>
  <div class="consumer-login-page justify-content-center align-items-center">
    <div class="col col-xl-5">
      <div class="image-fluid">
        <div class="box bg-transparent text-center">
          <div class="title-9 text-white">Amplify your payments</div>
            <div class="title-9 text-center text-white">with<span class="text-blue text-center title-9"> ampliPAY</span></div>
          </div>
          <div class="form col bg-white pad-x-10p">
            <div class="py-3 me-6 px-3 mt-5">
            <p class="title-2 mx-6 mt-0 mb-2">Sign in to your account</p>
            <div class="form-floating mt-2 mb-3 border-light">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value="juandelacruz@gmail.com">
                <label for="floatingInput"  class="title-8 text-gray">Email address</label>
            </div>
            <div class="form-floating border-light">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <i class="isax isax-eye-slash password-toggle fs-4"></i>
                <label for="floatingPassword" class="title-8 text-gray">Password</label>
            </div>
             <div class="d-flex justify-content-between align-items-center">
               <div class="form-check mb-0 pt-2">
                  <input class="form-check-input me-2" type="checkbox" value="" id="cbox" />
                  <label class="form-check-label title-8" for="cbox">Remember Me</label>
               </div>
               <a href="#!" class="forgot-pass text-decoration-none style-2 text-purple title-7 fw-bold mt-2">Forgot password?</a>
            </div>
             <div class="text-center mt-5 pt-8">
            <router-link :to="{name: 'home'}" class="button-1 text-light text-decoration-none title-8" style="">Login</router-link>
            <div class="mt-4 mb-2">
                <router-link :to="{name: 'registration'}" href="#" class="text-decoration-none style-2 text-purple title-7 fw-bold">Sign up</router-link>
            </div>
         </div> 
          </div>
         </div>
     </div>
  </div>
</div>
  <Footer/>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'LoginConsumer',
    components: {
    Header,
    Footer
  },
  methods: {
    redirectToRegistration() {
      this.$router.push('/registration');
    }
  }
}
</script>
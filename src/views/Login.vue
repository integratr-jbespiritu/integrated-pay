<template>
   <Header/>
   <section class="vh-100">
      <div class="container-fluid h-custom">
         <div class="row d-flex h-100">
            <div class="col-md-10 col-lg-6 image-column">
               <div class="carousel-caption d-md-block">
                  <div class="text-start">
                  <h2>Amplify your payments</h2>
                  <h2>with<span>ampliPAY.</span></h2>
                  </div>
               </div>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
               <form>
                  <div class="divider d-flex my-4">
                     <p class="text-heading mx-6">Sign in to your account</p>
                  </div>    
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value="juandelacruz@gmail.com">
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div class="password-container form-floating">
                     <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                     <i class="isax isax-eye-slash password-toggle"></i>
                     <label for="floatingPassword">Password</label>
                    </div>
                  <div class="d-flex justify-content-between align-items-center">
                     <div class="form-check mb-0 pt-2">
                        <input class="form-check-input me-2" type="checkbox" value="" id="cbox" />
                        <label class="form-check-label" for="cbox">Remember me</label>
                     </div>
                     <a href="#!" class="forgot-pass">Forgot password?</a>
                  </div>
                  <div class="text-center mt-8 pt-8">
                     <router-link :to="{name: 'home'}" class="login-button btn btn-primary btn-lg" style="">Login</router-link>
                     <br>
                     <a href="#" class="link-danger">Sign up</a>
                  </div>
               </form> 
            </div>
         </div>
      </div>
   </section>
   <Footer/>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
<<<<<<< HEAD
  methods: {
    redirectToRegistration() {
      this.$router.push('/registration');
    }
  }
}
</script>
=======
  name: "Login",
   components: {
      Header,
      Footer
   }
};
</script>
>>>>>>> develop

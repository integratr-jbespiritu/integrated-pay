<template>
  <div class="registration-page justify-content-center align-items-center">
    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <div class="image-fluid"></div>
               <form>
                  <div class="divider d-flex my-3 justify-content-center mx-6">
                     <p class="text-center mx-6">Create an Account</p>
                  </div>  
                  <hr class="hr">
                  <div class="form-content">
                  <div class="form-floating mb-3">
                        <input type="fname" class="form-control" id="fname" placeholder="name@example.com" value="Juan">
                        <label for="fname">First Name</label>
                   </div>
                   <div class="form-floating mb-3">
                        <input type="lname" class="form-control" id="lname" placeholder="name@example.com">
                        <label for="lname">Last Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="email" placeholder="name@example.com">
                        <label for="email">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="mobile" class="form-control" id="mobile" placeholder="name@example.com">
                        <label for="mobile">Mobile Number</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" placeholder="Password">
                        <i class="isax isax-eye-slash password-toggle"></i>
                        <label for="password">Password</label>
                    </div>
                    <div class="form-floating">
                        <input type="Confirmpassword" class="form-control" id="Confirmpassword" placeholder="Password">
                        <i class="isax isax-eye-slash password-toggle"></i>
                        <label for="Confirmpassword">Confirm Password</label>
                    </div>
                    </div>
                  <div class="d-flex mb-3 justify-content-between align-items-center">
                     <div class="form-check mb-3">
                        <input class="form-check-input me-2" type="checkbox" id="checkBox" />
                        <label class="form-check-label" for="checkBox">I accept the terms of the offer of the<span> privacy policy</span></label>
                     </div>
                  </div>
                  <div class="text-center mt-8 pt-8">
                     <button type="button" class="login-button btn btn-primary btn-lg" style="">Register</button>
                  </div>  
               </form> 
            </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'Registration',
  components: {
    Footer
  },
  data() {
    return {
      fname: '',
      lname: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    register() {
    }
  }
}
</script>


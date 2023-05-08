<template>
<Header/>
   <div class="registration-page justify-content-center align-items-center py-4">
    <div class="col-lg-5 p-5">
      <div class="image-fluid">
          <div class="form col bg-white mb-2">
            <div class="py-2 mt-0">
              <div class="border-bottom mb-3">
             <p class="title-10 mb-1 text-center">Create an Account</p>
            </div>
             <div class="form-floating mt-2 mb-3 border-light pad-x-10p px-3 pad-x-10p px-3">
                <input type="fname" class="reg-input form-control" id="floatingInput" placeholder="First Name" value="Juan">
                <label for="floatingInput"  class="title-8 text-gray mx-3">First Name</label>
            </div>
             <div class="form-floating mt-2 mb-3 border-light pad-x-10p px-3">
                <input type="lname" class="reg-input form-control" id="floatingInput" placeholder="Last Name">
                <label for="floatingInput"  class="title-8 text-gray mx-3">Last Name</label>
            </div>
            <div class="form-floating mt-2 mb-3 border-light pad-x-10p px-3">
                <input type="email" class="reg-input form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput"  class="title-8 text-gray mx-3">Email address</label>
            </div>
             <div class="form-floating mt-2 mb-3 border-light pad-x-10p px-3">
                <input type="number" class="reg-input form-control" id="floatingInput" placeholder="Mobile Number" >
                <label for="floatingInput"  class="title-8 text-gray mx-3">Mobile Number</label>
            </div>
            <div class="form-floating border-light pad-x-10p px-3">
                <input type="password" class="reg-input form-control" id="floatingPassword" placeholder="Password">
                <i class="isax isax-eye-slash password-toggle fs-4 me-4"></i>
                <label for="floatingPassword" class="title-8 text-gray mx-3">Password</label>
            </div>
             <div class="form-floating mt-3 border-light pad-x-10p px-3">
                <input type="password" class="reg-input form-control" id="floatingPassword" placeholder="Confirm Password">
                <i class="isax isax-eye-slash password-toggle fs-4 me-4"></i>
                <label for="floatingPassword" class="title-8 text-gray mx-3"> Confirm Password</label>
            </div>
             <div class="d-flex justify-content-between align-items-center">
               <div class="form-check mb-0 pt-2 mx-3">
                  <input class="form-check-input me-2" type="checkbox" value="" id="cbox" />
                  <label class="form-check-label title-8" for="cbox">I accept the terms of the offer of the <span class="text-purple text-center title-8">privacy policy</span></label>
               </div>
            </div>
             <div class="text-center mt-1 mb-4 pt-4">
            <router-link :to="{name: 'home'}" class="button-1 text-light text-decoration-none title-8" style="">Register</router-link>
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
  name: 'Registration',
  components: {
    Header,
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

<template>
  <div class="consumer-login-page justify-content-center align-items-center">
    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <div class="image-fluid">
        <div class=" box p-3 mb-2 bg-transparent text-white">
          <h2>Amplify your payment</h2>
            <h2>with<span> ampliPAY</span>.</h2>
          </div>
               <form>
                  <div class="divider d-flex my-3 justify-content-center mx-6">
                     <p class="text-center mx-6">Sign in to your account</p>
                  </div>  
                  <div class="form-content">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" value="juandelacruz@gmail.com">
                        <label for="email">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="password" placeholder="Password">
                        <i class="isax isax-eye-slash password-toggle"></i>
                        <label for="password">Password</label>
                    </div>
                    </div>
                  <div class="d-flex mb-4 justify-content-between align-items-center">
                     <div class="form-check mb-0 pt-2">
                        <input class="form-check-input me-2" type="checkbox" value="" id="cbox" />
                        <label class="form-check-label" for="cbox">Remember me</label>
                     </div>
                     <a href="#!" class="forgot-pass">Forgot password?</a>
                  </div>
                  <div class="text-center mt-8 pt-8">
                     <button type="button" class="login-button btn btn-primary btn-lg" style="">Login</button> <br>
                      <a href="#" class="link-danger" @click= "redirectToRegistration" >Sign up</a>
                  </div> 
               </form> 
            </div>
        </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToRegistration() {
      this.$router.push('/registration');
    }
  }
}
</script>
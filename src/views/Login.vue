<template>
  <div class="login-form row gx-0 g-0">
    <div class="col image-column p-5">
      <div class="title-9 text-white">Amplify your payments</div>
      <div class="d-flex">
        <div class="title-9 text-white">with<span class="text-blue title-9"> ampliPAY</span>.</div>
      </div>
    </div>
    <div class="col bg-purple container-box py-5 px-4 px-md-5">
      <div class="card-box w-md-75 mx-md-4 mx-3 py-2 px-3">
        <p class="title-2 mx-6 mt-0">Sign in to your account</p>
        <div class="form-floating border-light mb-3 mt-2">
          <input type="email" class="form-control input-text" id="floatingInput" placeholder="name@example.com" value="juandelacruz@gmail.com" />
          <label for="floatingInput" class="title-8 text-gray">Email Address</label>
        </div>
        <div class="password-container form-floating border-light">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <i class="isax isax-eye-slash password-toggle fs-4 me-2"></i>
          <label for="floatingPassword" class="title-8 text-gray">Password</label>
        </div>
        <div class="d-flex justify-content-between align-items-center my-2">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="cbox" />
            <label class="form-check-label title-8 mx-2" for="cbox">Remember Me</label>
          </div>
          <a href="#!" class="forgot-pass text-decoration-none style-1 text-purple title-7 fw-bold mt-1">Forgot password?</a>
        </div>
        <div class="text-center mt-4">
          <router-link :to="{name: '/admin/home'}" class="button-1 text-light text-decoration-none title-8" style="">Login</router-link>
          <div class="mt-4 mb-2">
            <router-link :to="{name: 'consumer.login'}" href="#" class="text-decoration-none style-1 text-purple title-7 fw-bold">Sign up</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
  import Logoheader from "../components/Logoheader.vue";
  import Footer from "../components/Footer.vue";

  export default {
    name: "Login",
    components: {
      Logoheader,
      Footer,
    },
  };
</script>
<template>
  <div class="pad-x-10p ms-1 pad-end-20p pad-x-20p">
    <div class="row gx-0 g-0">
      <div class="col">
        <h1 class="fw-bold title-10 pad-top-20p  text-nowrap">Developers</h1>
      </div>
      <div class="container bg-white border margin-y-20p pad-bottom-10p ">
        <div class="row gx-5 margin-y-20p pad-x-20p">
          <div class="align-items-center d-flex justify-content-between">
            <div class="title-6 text-nowrap">Test API Keys</div>
            <button type="button" class="title-5 button-blue mt-1 bg-transparent text-nowrap ms-2 border border-2">API Documentation</button>
          </div>
             
        </div>
        <div class="border-top"></div>
        <div class="row gx-5 pad-x-20p">
          <div class="d-flex justify-content-between pad-top-10p align-items-center">
            <div class=" title-6">Public Key</div>
            <div >
            <input :type="showPassword ? 'text' : 'password'" v-model="password" class="developer-input-box-password border">
           <i class="fas mt-1" :class="showPassword ? 'fa-eye-slash' : 'isax isax-eye3'" @click="togglePasswordVisibility"></i>
          </div>
          </div>
          
        </div>
        <div class="row gx-5 pad-top-10p pad-x-20p">
          <div class="d-flex justify-content-between ">
            <div class="title-6 text-nowrap">Secret Key</div>
            <div class="d-flex align-items-center">
            <span><i class="isax isax-document-copy bg-transparent color-purple-icon mx-2 text-purple" @click="copyToClipboard"></i></span>
            <span>{{ sp_test_ZZprYs9nmb1udiia4FqFvw91 }}</span>
            <span class="title-8 r-developer-fontsize me-2" >sp_test_ZZprYs9nmb1udiia4FqFvw91</span>
            <span> <i class="isax isax-eye-slash color-purple-icon fs-0 text-purple"></i></span>
          </div>
          </div>
        </div>
    </div>
    <div class="col">
          <button type="button" class="btn bg-purple text-white title-8 d-flex align-items-center">
            <span class="isax isax-refresh icon  me-1">
          </span> <span class=""> Generate API Key</span></button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      password: '',
      showPassword: false,
      type: "password",
      textToCopy: "sp_test_ZZprYs9nmb1udiia4FqFvw91"   
     };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.textToCopy)
        .then(() => {
          console.log("Text copied to clipboard:", this.textToCopy);
        })
        .catch((error) => {
          console.error("Unable to copy text to clipboard:", error);
        });
      },
  },
};
</script>

<template>
  <div class="pad-x-10p ms-1 pad-end-20p">
    <div class="row gx-0 g-0">
      <div class="col">
        <h1 class="fw-bold title-10 pad-top-20p text-nowrap">Refund Requests</h1>
      </div>
      <div class="container bg-white border mt-3">
        <div class="row gx-5 p-3">
          <div class="col">
            <div class="text-start title-6 ms-3">Test API Keys</div>
          </div>
          <div class="col justify-content-end d-flex">
            <button type="button" class=" title-5 border-blue text-blue bg-transparent text-nowrap">API Documentation</button>
          </div>
        </div>
      </div>
      <div class="container bg-white border">
        <div class="row gx-5 p-3">
          <div class="col">
            <div class="text-start title-6 ms-3">Public Key</div>
          </div>
          <div class="col justify-content-end d-flex">
            <input type="password" class="border-white" :type="type">
            <button @click="toggle">
              <i class="isax isax-eye bg-transparente"></i>
            </button>
          </div>
        </div>
        <div class="row gx-5 p-3">
          <div class="col">
            <div class="text-start title-6 ms-3">Secret Key</div>
          </div>
          <div class="col justify-content-end d-flex">
            <i class="isax isax-document-copy bg-transparent color-purple"></i>
            <p>sp_test_ZZprYs9nmb1udiia4FqFvw91</p>
            <i class="isax isax-eye-slash color-purple"></i>
          </div>
        </div>
      </div>
      <div class="col mt-3">
          <button class="button-generate"><i class="isax isax-refresh  px-1 fs-0"></i>Generate Key</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      type: "password",
    };
  },
  methods: {
    toggle() {
      this.type = this.type === "password" ? "text" : "password";
    },
  },
};
</script>

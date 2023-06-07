<template>
  <div class="row gx-0 g-0 header" style="height: 65px;">
    <div class="col">
      <div class="row gx-0 g-0">
        <div class="col-auto my-auto" v-if="!showSearchBar">
            <i class="isax isax-search-status-1 fs-4 text-white" @click="showSearchBar = true"></i>
        </div>
        <div class="container-header bg-white border-top-0 w-auto position-absolute top-50 start-0 translate-middle-y" v-if="showSearchBar">
        <span><i class="isax isax-search-status-1 fs-3 ms-3 align-center pe-1 text-purple icon-search-status-purple"></i></span>
          <input type="text" id="search-input" placeholder="Search" class=" bg-white border-bottom-white search-bar shadow-none border-color-none px-2" @focusout="showSearchBar = false">
        </div>
    </div>
    </div>
    <div class="col justify-content-end d-flex">
      <div class="notification-button">
        <i class="isax isax-notification5 fs-4"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearchBar: false,
    };
  },
  methods: {
    toggleSearchBar() {
      this.showSearchBar = !this.showSearchBar;
    },
  },
};
</script>
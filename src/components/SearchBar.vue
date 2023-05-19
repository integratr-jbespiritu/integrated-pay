<template>
    <div class="header">
      <div class="logo fs-3"></div>
      <div class="search-icon" @click="toggleSearchBar">
        <i class="isax isax-search-status-1 fs-4 text-white"></i>
      </div>
      <div v-if="showSearchBar" class="search-bar">
        <input type="text" placeholder="Search"/>
      </div>
      <div class="notification-button">
        <i class="isax isax-notification5 fs-4"></i>
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
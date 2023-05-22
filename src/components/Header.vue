<template>
    <div class="row gx-0 g-0 header">
      <div class="col">
        <div class="row gx-0 g-0">
          <div class="col-auto my-auto">
            <div class="search-icon" @click="toggleSearchBar">
              <i class="isax isax-search-status-1 fs-4 text-white"></i>
            </div>
          </div>
          <div class="col-auto">
            <div v-if="showSearchBar" class="search-bar">
              <input type="text" placeholder="Search"/>
            </div>
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
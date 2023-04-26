<template>
  <div class="sidebar">
        <div class="account">
            <h5>Juan Dela Cruz</h5>
            <p>Admin</p>
      </div>  
       <div class="notification-row">
    <i class="icon isax isax-category5"></i>
    <h3>Dashboard</h3>
    <span class="notification-number">3{{ notificationCount }}</span>
  </div>
      <p class="services">services</p>
      <div class="menu">
        <ul>
          <div class="main-menu">
            <i class="isax isax-dcube5"></i>
            <a href="#">Reports</a>
          </div>
          <div class="main-menu">
            <i class="isax isax-dcube5"></i> 
            <a href="#">Payment Channels</a>
          </div>
          <div class="main-menu">
            <i class="isax isax-dcube5"></i> 
            <a href="#">Service 4</a>
          </div>
           <div class="main-menu">
            <i class="isax isax-dcube5"></i> 
            <a href="#">Service 5</a>
          </div>
          <div class="main-menu">
            <i class="isax isax-dcube5"></i> 
            <a href="#">Service 6</a>
          </div>
          <div class="main-menu">
            <i class="isax isax-dcube5"></i> 
            <a href="#">Service 7</a>
          </div>
          <div class="main-menu">
            <i class="isax isax-dcube5"></i> 
            <a href="#">Service 8</a>
          </div>
          <div class="main-menu">
            <i class="isax isax-dcube5"></i> 
            <a href="#">Service 9</a>
          </div>
          <div class="main-menu">
            <i class="isax isax-dcube5"></i> 
            <a href="#">Service 10</a>
          </div>
          <div class="xtended-menu">
            <i class="isax isax-setting5"></i>
            <a href="#">Settings</a>
          </div>
          <div class="xtended-menu">
            <i class="isax isax-logout5"></i>
            <a href="#">Logout</a>
          </div>
          </ul>
          </div>
      </div>
</template>

<script>

export default {
  data() {
    return {
      accountName: 'Juan Dela Cruz',
      notificationNumber: 3,
    };
  },
};

</script>

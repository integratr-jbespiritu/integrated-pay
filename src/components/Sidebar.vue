<template>
    <div class="container-fluid">
       <div class="sidebar">
          <div class="sidebar-header">
             <div class="account">
                <a href="#">{{ accountName }}</a> 
                <p>Admin</p>
             </div>
          </div>
          <div class="dashboard">
             <a href="#"><i class="icon isax isax-category5"></i> Dashboard</a> 
             <div class="notification-row"> <span class="notification-number">{{ notificationCount }}</span> </div>
             <p class="services">Services</p>
          </div>
          <nav class="nav flex-column">
             <li><a class="text-md-center nav-link text-light" href="#"><i class="isax isax-dcube5"></i>Reports</a></li>
             <li><a class="text-sm-center nav-link text-light" href="#"><i class="isax isax-dcube5"></i>Payment Channels</a></li>
             <li><a class="text-sm-center nav-link text-light" href="#"><i class="isax isax-dcube5"></i>Service 4</a></li>
             <li><a class="text-sm-center nav-link text-light" href="#"><i class="isax isax-dcube5"></i>Service 5</a></li>
             <li><a class="text-sm-center nav-link text-light" href="#"><i class="isax isax-dcube5"></i>Service 6</a></li>
             <li><a class="text-sm-center nav-link text-light" href="#"><i class="isax isax-dcube5"></i>Service 7</a></li>
             <li><a class="text-sm-center nav-link text-light" href="#"><i class="isax isax-setting5"></i>Settings</a></li>
             <li><router-link class="text-sm-center nav-link text-light" :to="{name: 'login'}" ><i class="isax isax-logout5"></i>Logout</router-link></li>
          </nav>
       </div>
    </div>
 </template>
 <script>
    export default { 
        data() { 
            return { 
                accountName: 'Juan Dela Cruz',
                notificationCount: 3 }; 
        },
    };
</script>
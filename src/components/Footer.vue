<template>
<footer class="footer mt-auto py-3">
  <div class="container">
    <div class="row justify-content-start">
        <div class="col-md-5 col-sm-6 mb-1">
          <div class="logo ">
            <img src="src/assets/images/Logo.svg" alt="Logo">
          </div>
          <ul class="nav sitemap d-flex justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Terms of Use</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <nav class="nav justify-content-end social fs-4 mt-0 pt-0">
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </nav>
        <div class="col-md-4 col-sm-12 d-flex justify-content-end">
          <span class="text-body-secondary">&copy; 2022 Integratr Corporation, All Rights Reserved</span>
        </div>
      </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
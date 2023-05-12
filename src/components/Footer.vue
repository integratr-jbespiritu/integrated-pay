<template>
    <footer class="footer">
      <div class="row gx-0 g-0">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="col">
            <img class="img-fluid px-5" src="src/assets/images/Logo.svg" alt="Logo">
          </div>
         <div class="col-12">
          <div class="row gx-0 g-0 px-md-5 px-5">
            <div class="col">
              <div class="d-flex flex-wrap justify-content-start justify-content-md-start justify-content-lg-start">
                <template v-for="quick_link in quick_links" :key="quick_link">
                  <a class="quick-links text-decoration-none text-purple me-5 mb-3" href="#">{{quick_link.name}}</a>
                </template>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6 fs-5">
          <div class="row gx-0 g-0 px-5">
            <div class="col-12 justify-content-start justify-content-md-end justify-content-lg-end flex-wrap d-flex">
              <div class="mt-1 pe-3h">
                <template v-for="account in social_media" :key="account">  
                  <a href="#"><i class="fab text-purple pe-3" :class="account.icon"></i></a>
                </template>
              </div>
            </div>
            <div class="col justify-content-start justify-content-md-end justify-content-lg-end d-flex">
              <div class="fs-6 pe-3 mt-4 text-nowrap">&copy; 2022 Integratr Corporation, All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      quick_links: [
        {
          name: 'About Us'
        },
        {
          name: 'Contact Us'
        },
        {
          name: 'Terms of Use'
        },
        {
          name: 'Privacy Policy'
        },
      ],
      social_media: [
        {
          icon: 'fab fa-twitter'
        },
        {
          icon: 'fab fa-facebook-f'
        },
        {
          icon: 'fab fa-youtube'
        },
        {
          icon: 'fab fa-instagram'
        }
      ]
    }
  }
};
</script>
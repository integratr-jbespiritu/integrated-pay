<template>  
<div class="row me-0 ms-2">
  <div class="mb-5">
        <div class="row">
          <div class="col">
            <div class="me-4 pb-4 bg-transparent">

          <div class="row gx-0 g-0 justify-content-center mb-3 mt-5">
            <div class="col-9 text-center p-0 mb-2">
              <div class="px-0 pb-0 mt-3 mb-3">
                <form id="form">
                  <div class="step2-progressbar">
                    <div class="activate-step1">
                      <span><img src="/src/assets/images/check.svg" alt="" /> </span>
                    </div>
                    <a class="activate-step2-circle" title="General Information" data-bs-toggle="tooltip" data-bs-placement="top">
                      <div class="inner-circle position-absolute top-50 start-50 translate-middle"></div>
                    </a>
                    <div class="activate-step3-circle">
                      <div class="step3-inner-circle position-absolute top-50 start-50 translate-middle"></div>
                    </div>
                    <div class="activate-step4"></div>
                  </div>
                </form>
              </div>
            </div>

            <!--Heading-->
        <div class="container p-3 bg-white pb-3">
          <div class="py-1 text-center">
              <h1 class="inter-h1-black fw-bold mb-3" style="font-size: 32px; color: var(--vt-c-black);">
                Are you a?...</h1>
              <div class="border-bottom mb-2"></div>
        </div>
        
        <div class="container">
            <div class="row gy-5">   
              <div class="col-12 col-md-12 col-lg-6">
                   <div class="container p-3 d-flex">
                    <div class="rectangle border d-flex">
                          <div class="icons isax isax-shop4 mt-5 ms-4"></div>
                          <div class="container">
                            <div class="col text-wrap">
                              <h5 class="title-6 text-start mt-3">Business</h5>
                            </div>
                            <div class="col mt-2">
                              <p class="inter-regular me-3 text-break">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                          </div>
                         </div>
                        </div>
                        <div class="col">
                          <div class="p-3 container d-flex">
                            <div class="rectangle border d-flex">
                            <div class="icons isax isax-bank mt-5 ms-4"></div>
                            <div class="container">
                              <div class="col">
                                <h5 class="title-6 text-start mt-3 text-break">Government Unit</h5>
                              </div>
                              <div class="col mt-2">
                                <p class="inter-regular me-2 text-break">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                          
                    <div class="col-12 col-md-12 col-lg-6">
                      <div class="p-3">
                        <div class="container d-flex">
                            <div class="d-flex mt-3 mb-3">
                                <img src="/src/assets/images/character.svg" class="activate-image img img-fluid" />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <!--Button-->
              <div class="mt-4 py-4 mb-4 me-3">
                <a class="position-absolute bottom-0 end-0 px-0 text-decoration-none" href="#">
                  <router-link :to="{name: 'consumer.activate-account'}" class="text-decoration-none"><span class="px-3 text-purple">Back</span></router-link>
                  <router-link :to="{name: 'consumer.activate-step3-businessinformation'}"> <button type="button" class="activate-button">Continue</button> </router-link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>
<script>

  export default {

    mounted() {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    },
  };
</script>
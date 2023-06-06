<template>
    <div class="row me-0 ms-2"> 
        <div class="col-12">
      <div class="mb-5">
        <div class="row">
          <div class="col">
            <div class="p-3 me-5 pb-4">
                  <!-- progressbar -->
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
    <div class="container p-3 bg-white pb-3">
      <div class="py-1 text-center">
           <h1 class="inter-h1-black fw-bold mb-3" style="font-size: 32px; color: var(--vt-c-black);">
            General Information</h1>
          <div class="border-bottom mb-2"></div>
     </div>
          <div class="container row gx-0 g-0 pt-2">
            <div class="col-12">
              <div class="row gx-2 g-0">
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- input first name -->
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="text" class="input-height form-control" id="floatingInputValue" placeholder="name@example.com" value="Juan" />
                      <label for="floatingInputValue">First Name</label>
                    </form>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- input field lastname  -->
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Lastname" />
                      <label for="floatingInputValue">Last Name</label>
                    </form>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- input field email -->
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Email" />
                      <label for="floatingInputValue">Email</label>
                    </form>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- input mobile number -->
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Mobile Number" />
                      <label for="floatingInputValue">Mobile Number</label>
                    </form>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- input field date of birth -->
                  <div class="input-group mb-3 px-1">
                    <form style="width: 100%;">
                      <input type="text" class="input-height form-control" placeholder="Date of Birth" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <i class="icon-activate isax isax-calendar-1 password-toggle"></i>
                    </form>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- input nationality -->
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Nationality" />
                      <label for="floatingInputValue">Nationality</label>
                    </form>
                  </div>
                </div>

                <div class="col-12 col-md-12 col-lg-6">
                  <!-- input country of birth -->
                  <div class="input-group mb-3 px-1">
                    <select class="input-height form-select1 text-silver-gray" aria-label="Default select example">
                      <option selected>Country of Birth</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- input city of birth -->
                  <div class="input-group mb-3 px-1">
                    <select class="input-height form-select1 text-silver-gray" aria-label="Default select example">
                      <option selected>City of Birth</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
              </div>
              <p class="col-12 inter-body-semibold text-start text-dark ms-2 mb-3">Current Address</p>
              <div class="row gx-2 g-0">
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- housing address -->
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="House/Unit/Bldg.No" />
                      <label for="floatingInputValue">House/Unit/Bldg.No</label>
                    </form>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- building name -->
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Building Name" />
                      <label for="floatingInputValue">Building Name</label>
                    </form>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- street name -->
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Street Name" />
                      <label for="floatingInputValue">Street Name</label>
                    </form>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- region -->
                  <div class="input-group mb-3 px-1">
                    <select class="input-height form-select1 text-silver-gray" aria-label="Default select example">
                      <option selected>Region</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- province -->
                  <div class="input-group mb-3 px-1">
                    <select class="input-height form-select1 text-silver-gray" aria-label="Default select example">
                      <option selected>Province</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- city / municipality -->
                  <div class="input-group mb-3 px-1">
                    <select class="input-height form-select1 text-silver-gray" aria-label="Default select example">
                      <option selected>City or Municipality</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                  <!-- barangay -->
                  <div class="input-group mb-3 px-1">
                    <select class="input-height form-select1 text-silver-gray" aria-label="Default select example">
                      <option selected>Barangay</option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <!-- Zipcode -->
                <div class="col-12 col-md-12 col-lg-6">
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Zipcode" />
                      <label for="floatingInputValue">Zip Code</label>
                    </form>
                  </div>
                </div>
              </div>
              <!-- button -->
              <div class="container py-2 mt-5">
                <a class="position-absolute bottom-0 end-0 px-1 mb-2 text-decoration-none" href="#">
                  <router-link :to="{name: 'consumer.activate-account.step1'}" class="text-decoration-none"><span class="px-3 text-purple">Back</span></router-link>
                  <router-link :to="{name: 'consumer.activate-account.step2'}"> <button type="button" class="activate-button">Continue</button> </router-link>
                </a>
              </div>
            </div>
          </div>
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

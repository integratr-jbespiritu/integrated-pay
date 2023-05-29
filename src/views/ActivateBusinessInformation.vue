<template>
<div class="row me-0 ms-2">
  <div class="mb-5">
        <div class="row">
          <div class="col">
            <div class="me-4 pb-4 bg-transparent">
              <!-- progressbar -->
          <!-- <div class="row gx-0 g-0 justify-content-center mb-3 mt-5">
            <div class="col-9 text-center p-0 mb-2">
              <div class="px-0 pb-0 mt-3 mb-3">
                <form id="form">
                  <div class="step3-progressbar">
                    <div class="activate-step1">
                      <span><img src="/src/assets/images/check.svg" alt="" /> </span>
                    </div>
                    <div class="activate-step1">
                      <span><img src="/src/assets/images/check.svg" alt="" /> </span>
                    </div>
                    <a class="activate-step2-circle" title="Business Information" data-bs-toggle="tooltip" data-bs-placement="top">
                      <div class="inner-circle position-absolute top-50 start-50 translate-middle"></div>
                    </a>
                    <div class="activate-step4"></div>
                  </div>
                </form>
              </div>
          </div>     -->
          <div class="row gx-0 g-0 justify-content-center mb-3 mt-5">
                    <div class="col-9 text-center p-0 mb-2">
                       <div class="px-0 pb-0 mt-3 mb-3">
                          <form id="form">
                             <div class="step2-progressbar">
                                <div class="activate-step1">
                                   <span><img src="/src/assets/images/check.svg" alt="" /> </span>
                                </div>
                                <div class="activate-step1">
                                  <span><img src="/src/assets/images/check.svg" alt="" /> </span>
                                </div>
                                <a class="activate-step2-circle" title="Business Information" data-bs-toggle="tooltip" data-bs-placement="top">
                                  <div class="inner-circle position-absolute top-50 start-50 translate-middle"></div>
                                </a>
                                <div class="activate-step4"></div>
                             </div>
                          </form>
                       </div>
                    </div>
          <div class="container p-3 bg-white ">
            <div class="py-1 text-center">
              <h1 class="title-10 fw-bold mb-3">
                Business Information
              </h1>
              <div class="border-bottom mb-2"></div>
            </div>

            <p class="col-12 inter-body-semibold text-start text-dark ms-2 mb-1">Business Information</p>
            <div class="container row gx-0 g-0 pt-2">
              <div class="col-12">
                <div class="row gx-2 g-0">
                  <div class="col-12 col-md-12 col-lg-6">
                    <!-- input type of business -->
                    <div class="input-group mb-3 px-1">
                      <form class="form-floating">
                        <select class="input-height form-select1" aria-label="Default select example" id="floatingInputValue">
                          <option selected>Sole Proprietorship</option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                        </select>
                        <label for="floatingInputValue">Type of Business</label>
                      </form>
                    </div>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6">
                      <!-- type of business-->
                      <div class="input-group mb-3 px-1">
                        <input class="form-control input-height" type="text" placeholder="Flower Snack Shop" aria-label="default input example">
                      </div>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6">
                    <!-- input field date of birth -->
                    <div class="input-group mb-3 px-1">
                      <form style="width: 100%;">
                        <input type="email" class="input-height form-control text-dark" id="exampleInputEmail1" aria-describedby="emailHelp" value="August 27, 2023" />
                        <i class="icon-activate isax isax-calendar-1 password-toggle"></i>
                      </form>
                    </div>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6">
                    <!-- business 6years -->
                    <div class="input-group mb-3 px-1">
                      <select class="input-height form-select1 text-dark" aria-label="Default select example">
                        <option selected>6 Years</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6">
                    <!-- Food and beverage -->
                    <div class="input-group mb-3 px-1">
                      <select class="input-height form-select1 text-dark" aria-label="Default select example">
                        <option selected>Food and Beverage</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6">
                    <!-- business income -->
                    <div class="input-group mb-3 px-1">
                      <select class="input-height form-select1 text-dark" aria-label="Default select example">
                        <option selected>Business Income</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                </div>
                <p class="col-12 inter-body-semibold text-start text-dark ms-2 mb-3">Bank Details</p>
                <p class="col-12 title-13 text-dark ms-2 mb-4">
                  Note: Bank account should be under the name of the registered business or the name of the person to whom the DTI Certificate of Registration is issued to.
                </p>
                <div class="row gx-2 g-0">
                  <div class="col-12 col-md-12 col-lg-6">
                    <!-- bank details-->
                    <div class="input-group mb-3 px-1">
                      <select class="input-height form-select1 text-dark" aria-label="Default select example">
                        <option selected>BDO</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6">
                    <!-- business name -->
                      <div class="input-group mb-3 px-1">
                        <input class="form-control input-height" type="text" aria-label="default input example" value="Flower Snack Shop Inc.">
                      </div>
                  </div>
                  <div class="col-12 col-md-12 col-lg-6">
                    <!-- account number -->
                      <div class="input-group mb-3 px-1">
                        <input class="form-control input-height" type="text" aria-label="default input example" value="12062017110419960">
                      </div>
                    </div>
                  </div>
                <p class="col-md-6 inter-body-semibold text-start text-dark ms-1 mb-1">Submission of required identification documents</p>
                <h6 class="col-md-6 title-13 text-danger ms-1 mb-3">
                  You have documents that are declined. Please re-submit the documents needed.
                </h6>

                <div class="container row gx-0 g-0 pt-1">
                    <div class="col-12">
                      <div class="row g-3">

                  <!-- col-1 -->
                  <div class="col-12 col-md-6">
                        <div class="ms-c-1">
                      <p class="title-18 ms-1">Upload file of your valid ID (for Individual, Sole Proprietorship, Partnership, Corporation)</p>
                      <div class="input-group input-group-xl">
                        <span class="input-group-text bg-grayish text-white" id="inputGroup-sizing-lg">Choose File</span>
                        <input type="text" class="form-control text-grayish" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="valid_ID.jpeg">
                      </div>
                    </div>
                  </div>
                
                  <!-- col 2 -->
                  <div class="col-sm-2 mb-c-1 my-auto">
                      <div class="ms-c-1">
                         <button type="button" class="button-outline-green px-3 bg-transparent mt-3">Approved</button>
                       </div>
                  </div> 
                  <!-- col 3 -->
                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="ms-c-1">
                      <p class="title-18 ms-1">Upload file of your DTI Business Registration Certificate (for Sole Proprietorship)</p>
                      <div class="input-group input-group-xl">
                        <span class="input-group-text bg-grayish text-white" id="inputGroup-sizing-lg">Choose File</span>
                        <input type="text" class="form-control text-grayish" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="regcert.pdf"/>
                      </div>
                    </div>
                  </div>
                  <!-- col 4 -->
                  <div class="col-sm-2 mb-c-1 my-auto">
                      <div class="ms-c-1 gx-0">
                         <button type="button" class="button-outline-green py-0 px-3 bg-transparent mt-3">Approved</button>
                      </div>
                   </div>
                  <!-- col 5 -->
                  <div class="col-12 col-md-6">
                        <div class="ms-c-1">
                      <p class="title-18 ms-1">Upload file of your SEC Certificate of Partnership (for Partnership, Corporation)</p>
                      <div class="input-group input-group-xl">
                        <span class="input-group-text bg-grayish text-white" id="inputGroup-sizing-lg">Choose File</span>
                        <input type="text" class="form-control text-grayish" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="SEC.jpeg"/>
                      </div>
                    </div>
                  </div>
                  <!-- col 6 -->
                  <div class="col-sm-2 mb-c-1 my-auto">
                      <div class="ms-c-1 gx-0">
                         <button type="button" class="button-outline-green py-0 px-3 bg-transparent mt-3">Approved</button>
                      </div>
                   </div>
                  <!-- col 7 -->
                  <div class="col-12 col-md-6">
                        <div class="ms-c-1">
                      <div class="col-12">
                      <p class="title-18 ms-1">Upload file of your Articles of Partnership (for Partnership, Corporation)</p>
                      </div>
                      <div class="input-group input-group-xl">
                        <span class="input-group-text bg-purple text-white" id="inputGroup-sizing-lg">Choose File</span>
                        <input type="text" class="step3 form-control" placeholder="Upload a file (maximum file size of 2 mb)" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                      </div>
                    </div>
                  </div>
                  <!-- col 8 -->
                  <div class="col-sm-2 mb-c-1 my-auto">
                      <div class="ms-c-1 gx-0">
                         <button type="button" class="button-outline-red py-0 px-3 bg-transparent mt-3">Declined</button>
                      </div>
                   </div>
                  <!-- col 9 -->
                  <div class="col-12 col-md-6">
                        <div class="ms-c-1">
                      <p class="title-18 ms-1">Upload file of your By Laws (for Corporation)</p>
                      <div class="input-group input-group-xl">
                        <span class="input-group-text bg-purple text-white" id="inputGroup-sizing-lg">Choose File</span>
                        <input type="text" class=" step3 form-control text-purple" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="ByLaws.pdf"/>
                        <i class="isax isax-add password-toggle-1 icon-hover"></i>
                      </div>
                    </div>
                  </div>
                  <!-- col 10 -->
                  <div class="col-sm-2 mb-c-1 my-auto">
                      <div class="ms-c-1 gx-0">
                         <button type="button" class="button-outline-red py-0 px-3 bg-transparent mt-3 ">Declined</button>
                      </div>
                   </div>
                </div>
                </div>
              </div>
                <!-- button -->
                <div class="container py-2 mt-5">
                  <a class="position-absolute bottom-0 end-0 px-1 mb-2 text-decoration-none" href="#">
                    <router-link :to="{name: 'consumer.activate-account.step2'}" class="text-decoration-none"><span class="px-3 text-purple">Back</span></router-link>
                    <router-link :to="{name: 'consumer.activate-step3-governmentunit'}"> <button type="button" class="activate-button">Continue</button> </router-link>
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

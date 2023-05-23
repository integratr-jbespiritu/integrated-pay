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
                    <div class="step3-progressbar">
                      <div class="activate-step1">
                        <span><img src="/src/assets/images/check.svg" alt="" /> </span>
                      </div>
                      <div class="activate-step1">
                        <span><img src="/src/assets/images/check.svg" alt="" /> </span>
                      </div>
                      <a class="activate-step2-circle" title="Government Unit Information" data-bs-toggle="tooltip" data-bs-placement="top">
                        <div class="inner-circle position-absolute top-50 start-50 translate-middle"></div>
                      </a>
                      <div class="activate-step4"></div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="container p-3 bg-white">
                <div class="py-1 text-center">
                  <h1 class="title-10 mb-3">
                    Government Unit Information
                  </h1>
                  <div class="border-bottom mb-2"></div>
                </div>
                <p class="col-12 inter-body-semibold text-start text-dark ms-2 mb-1">Government Unit Information</p>

                <div class="container row gx-0 g-0 pt-2">
                  <div class="col-12">
                    <div class="row gx-2 g-0">
                      <div class="col-12 col-md-12 col-lg-6">
                        <!-- input type of business -->
                        <div class="input-group mb-3 px-1">
                          <select class="input-height form-select1 text-silver-gray" aria-label="Default select example" id="floatingInputValue">
                            <option selected>Type of Government Unit (LGU, Trusted Charities/NGO, Government Body)</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                          </select>
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-6">
                        <!-- designation-->
                        <div class="input-group mb-3 px-1">
                          <input class="form-control input-height" type="text" placeholder="Designation" aria-label="default input example" />
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-6">
                        <!-- name of gov't unit-->
                        <div class="input-group mb-3 px-1">
                          <input class="form-control input-height" type="text" placeholder="Name of Government Unit" aria-label="default input example" />
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-6">
                        <!-- ID number -->
                        <div class="input-group mb-3 px-1">
                          <input class="form-control input-height" type="text" placeholder="Employee ID number" aria-label="default input example" />
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-6">
                        <!-- date of incorporation-->
                        <div class="input-group mb-3 px-1">
                          <form style="width: 100%;">
                            <input type="email" class="input-height form-control" placeholder="Date of Incorporation" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <i class="icon-activate isax isax-calendar-1 password-toggle"></i>
                          </form>
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-6">
                        <!-- gov period -->
                        <div class="input-group mb-3 px-1">
                          <select class="input-height form-select1 text-silver-gray" aria-label="Default select example" id="floatingInputValue">
                            <option selected>How long have you been in a government unit?</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                          </select>
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-6">
                        <!-- nature of work -->
                        <div class="input-group mb-3 px-1">
                          <select class="input-height form-select1 text-silver-gray" aria-label="Default select example" id="floatingInputValue">
                            <option selected>Nature of work</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <p class="col-12 inter-body-semibold text-start text-dark ms-2 mb-3">Bank Details</p>
                    <p class="col-12 title-13 text-dark ms-2 mb-3 text-wrap">
                      Note: Bank account should be under the name of the registered business or the name of the person to whom the DTI Certificate of Registration is issued to.
                    </p>

                    <div class="row gx-2 g-0">
                      <div class="col-12 col-md-12 col-lg-6">
                        <!-- select bank -->
                        <div class="input-group mb-3 px-1">
                          <select class="input-height form-select1 text-silver-gray" aria-label="Default select example" id="floatingInputValue">
                            <option selected>Select Bank</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                          </select>
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-6">
                        <!-- account name-->
                        <div class="input-group mb-3 px-1">
                          <input class="form-control input-height" type="text" placeholder="Account Name" aria-label="default input example" />
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-6">
                        <!-- account number -->
                        <div class="input-group mb-3 px-1">
                          <input class="form-control input-height" type="text" placeholder="Account Number" aria-label="default input example" />
                        </div>
                      </div>
                    </div>

                    <p class="col-md-6 inter-body-semibold text-start text-dark ms-2 mb-1">Submission of required identification documents</p>
                    <h6 class="col-md-6 title-13 text-danger ms-2 mb-3">
                      You have documents that are declined. Please re-submit the documents needed.
                    </h6>

                    <div class="container row gx-0 g-0 pt-2">
                      <div class="col-12">
                        <div class="row g-3">
                          <!-- col 1 -->
                          <div class="col-12 col-md-6">
                            <div class="ms-c-1">
                              <p class="title-18">Upload file of your valid ID.</p>
                              <div class="input-group input-group-xl">
                                <span class="input-group-text bg-purple text-white" id="inputGroup-sizing-lg">Choose File</span>
                                <input type="text" class="step3 form-control text-purple" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="Valid_ID.jpeg" />
                                <span><img src="/src/assets/images/Union.svg" class="password-toggle me-1" /></span>
                              </div>
                            </div>
                          </div>
                          <!-- col-2 -->
                          <div class="col-sm-2 mb-c-1 my-auto">
                            <div class="me-c-1">
                              <button type="button" class="button-outline-red px-3 bg-transparent mt-3">Declined</button>
                            </div>
                          </div>
                          <!-- col-3 -->
                          <div class="col-12 col-md-6">
                            <div class="ms-c-1">
                              <p class="title-18">Upload file of your valid ID.</p>
                              <div class="input-group input-group-xl">
                                <span class="input-group-text bg-purple text-white" id="inputGroup-sizing-lg">Choose File</span>
                                <input type="text" class="step3 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="Upload a file (maximum file size of 2 mb)" />
                              </div>
                            </div>
                          </div>
                          <!-- col-4 -->
                          <div class="col-sm-2 mb-c-1 my-auto">
                            <div class="me-c-1">
                              <button type="button" class="button-outline-red px-3 bg-transparent mt-3">Declined</button>
                            </div>
                          </div>
                          <!-- col-5 -->
                          <div class="col-12 col-md-6">
                            <div class="ms-c-1">
                              <p class="title-18">Upload file of your valid ID.</p>
                              <div class="input-group input-group-xl">
                                <span class="input-group-text bg-grayish text-white" id="inputGroup-sizing-lg">Choose File</span>
                                <input type="text" class="form-control ng-purple" placeholder="SEC.pdf" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                              </div>
                            </div>
                          </div>
                          <!-- col-6 -->
                          <div class="col-sm-2 mb-c-1 my-auto">
                            <div class="me-c-1">
                              <button type="button" class="button-outline-green px-3 bg-transparent mt-3">Approved</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- button -->
                  <div class="container py-2 mt-5">
                    <a class="position-absolute bottom-0 end-0 px-1 mb-2 text-decoration-none" href="#">
                      <router-link :to="{name: 'consumer.activate-step3-businessinformation'}" class="text-decoration-none"><span class="px-3 text-purple">Back</span></router-link>
                      <router-link :to="{name: 'consumer.activate-account-step4'}"> <button type="button" class="activate-button">Continue</button> </router-link>
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
  <!-- </div>
      </div>
    </div> -->
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

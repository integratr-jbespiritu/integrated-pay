<template>
  <div class="row me-0 ms-2">
    <div class="mb-5">
      <div class="row">
        <div class="col">
          <div class="me-4 pb-4 bg-transparent">

            <!-- progressbar -->
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
                                <a class="activate-step2-circle" title="Government Unit" data-bs-toggle="tooltip" data-bs-placement="top">
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

                    <p class="col inter-body-semibold text-start text-dark ms-1 mb-1">Submission of required identification documents</p>
                    <p class="col-md-6 title-13 text-danger mb-3 ms-1 gx-0">
                      You have documents that are declined. Please re-submit the documents needed.
                    </p>

                    <div class="container row gx-0 g-0 pt-2">
                      <div class="col-12">
                        <div class="row g-3">
                          <!-- col 1 -->
                          <div class="col-12 col-md-6">
                            <div class="ms-c-1">
                              <p class="title-18 ms-1">Upload file of your valid ID.</p>
                              <div class="input-group input-group-xl">
                                <span class="input-group-text bg-purple text-white" id="inputGroup-sizing-lg">Choose File</span>
                                <input type="text" class="step3 form-control text-purple" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="Valid_ID.jpeg" />
                                <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" class=" password-toggle me-1" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.335202 10.0462C-0.111734 10.4931 -0.111734 11.2178 0.335202 11.6647C0.782139 12.1116 1.50677 12.1116 1.9537 11.6647L6.00004 7.61836L10.0465 11.6648C10.4935 12.1118 11.2181 12.1118 11.665 11.6648C12.112 11.2179 12.112 10.4933 11.665 10.0463L7.61854 5.99986L11.6647 1.9537C12.1116 1.50676 12.1116 0.782138 11.6647 0.335202C11.2178 -0.111734 10.4931 -0.111734 10.0462 0.335202L6.00004 4.38136L1.95403 0.335356C1.5071 -0.11158 0.78247 -0.11158 0.335534 0.335356C-0.111403 0.782292 -0.111403 1.50692 0.335533 1.95385L4.38154 5.99986L0.335202 10.0462Z" fill="#44435F"/>
                                </svg>
                             </span>
                              </div>
                            </div>
                          </div>
                          <!-- col-2 -->
                          <div class="col-sm-2 mb-c-1 my-auto">
                            <div class="ms-c-1 gx-0">
                              <button type="button" class="button-outline-red px-3 bg-transparent mt-3">Declined</button>
                            </div>
                          </div>
                          <!-- col-3 -->
                          <div class="col-12 col-md-6">
                            <div class="ms-c-1">
                              <p class="title-18 ms-1">Upload file of your valid ID.</p>
                              <div class="input-group input-group-xl">
                                <span class="input-group-text bg-purple text-white" id="inputGroup-sizing-lg">Choose File</span>
                                <input type="text" class="step3 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value="Upload a file (maximum file size of 2 mb)" />
                              </div>
                            </div>
                          </div>
                          <!-- col-4 -->
                          <div class="col-sm-2 mb-c-1 my-auto">
                            <div class="ms-c-1 gx-0">
                              <button type="button" class="button-outline-red px-3 bg-transparent mt-3">Declined</button>
                            </div>
                          </div>
                          <!-- col-5 -->
                          <div class="col-12 col-md-6">
                            <div class="ms-c-1">
                              <p class="title-18 ms-1">Upload file of your valid ID.</p>
                              <div class="input-group input-group-xl">
                                <span class="input-group-text bg-grayish text-white" id="inputGroup-sizing-lg">Choose File</span>
                                <input type="text" class="form-control" placeholder="SEC.pdf" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                              </div>
                            </div>
                          </div>
                          <!-- col-6 -->
                          <div class="col-sm-2 mb-c-1 my-auto">
                            <div class="ms-c-1 gx-0">
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

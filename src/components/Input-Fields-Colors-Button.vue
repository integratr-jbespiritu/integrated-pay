<template>
    <main class="container d-flex col-md-9 ms-sm-auto col-lg-10">
      <br />
      <div class="d-flex justify-content-between flex-wrap pt-3 pb-2 px-2">
        <div class="container gx-0 g-0" style="margin-left: 15rem;">
          <h1 class="inter px-3">Colors</h1>
          <div class="d-flex flex-row">
            <!-- color1  -->
            <div class="m-2">
              <div class="purple d-flex"></div>
              <h1 class="inter fs-5 mx-2 px-3">#7755D6</h1>
            </div>
            <!-- color2  -->
            <div class="m-2">
              <div class="blue"></div>
              <p class="inter fs-5 mx-1 px-3">#7DA7F1</p>
            </div>
            <!-- color3  -->
            <div class="m-2">
              <div class="black"></div>
              <p class="inter fs-5 mx-1 px-3">#000000</p>
            </div>
            <!-- color4  -->
            <div class="m-2">
              <div class="light-black"></div>
              <p class="inter fs-5 mx-1 px-3">#2B2B2B</p>
            </div>
            <!-- color5  -->
            <div class="m-2">
              <div class="default-white"></div>
              <p class="inter fs-5 mx-1 px-3">#FFFFFF</p>
            </div>
            <!-- color6  -->
            <div class="m-2">
              <div class="white"></div>
              <p class="inter fs-5 mx-1 px-3">#F9F9F9</p>
            </div>
          </div>
          <br />
  
          <!-- input fields -->
          <div class="container">
            <h1 class="inter">Input Fields</h1>
            <div class="flex-container">
              <div class="col-sm-6">
                <!-- default field -->
                <div class="input-group mb-3">
                  <input type="email" class="input-default form-control" placeholder="Default Field" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <!-- selected field -->
                <div class="input-group mb-3">
                  <form class="form-floating">
                    <input type="email" class="input-default form-control" id="floatingInputValue" placeholder="name@example.com" value="Selected Field" />
                    <label for="floatingInputValue">Field Label</label>
                  </form>
                </div>
                <!-- default password field -->
                <div class="input-group mb-3">
                  <form class="form-floating">
                    <input type="password" class="input-default form-control" id="floatingPassword" placeholder="Default Password Field" />
                    <i class="icon isax isax-eye-slash password-toggle"></i>
                    <label for="floatingPassword">Default Password Field</label>
                  </form>
                </div>
                <!-- selected password field -->
                <div class="input-group mb-3">
                  <form class="form-floating">
                    <input type="password" class="input-default form-control" id="floatingPassword" placeholder="Default Password Field" />
                    <i class="icon isax isax-eye-slash password-toggle"></i>
                    <label for="floatingPassword">Selected Password Field</label>
                  </form>
                </div>
                <!-- default search black -->
                <div class="input-group mb-3">
                  <input type="text" class="text bg-dark form-control" placeholder="Default Search" aria-label="Selected-Field" aria-describedby="basic-addon2" />
                  <div class="position-absolute top-0 start-0 ms-4 pt-2">
                    <i class="icon-white-bg isax isax-search-status-1 position-absolute top-50 start-0 translate-middle mt-3"></i>
                  </div>
                </div>
                <!-- selected search -->
                <div class="input-group mb-3">
                  <input type="text" class="input-selected-search form-control" placeholder="Selected Search" aria-label="Selected-Field" aria-describedby="basic-addon2" />
                  <div class="position-absolute top-0 start-0 ms-4 pt-2">
                    <i class="icon-select isax isax-search-status-1 position-absolute top-50 start-0 translate-middle mt-3"></i>
                  </div>
                </div>
                <!-- default search -->
                <div class="input-group mb-3">
                  <span class="icon-span input-group-text"><i class="isax isax-search-status-1"></i></span>
                  <input type="text" class="input-sm form-control" placeholder="Default Search" aria-label="Selected-Field" />
                </div>
  
                <!-- default search purple border -->
                <div class="input-group mb-3">
                  <span class="span-purple-border input-group-text rounded-0"><i class="isax isax-search-status-1"></i></span>
                  <input type="text" class="input-purple-border form-control" placeholder="Default Search" aria-label="Selected-Field" aria-describedby="basic-addon2" />
                </div>
                <!-- default duration -->
                <div class="default-duration input-group mb-3">
                  <span class="span-icon input-group-text rounded-0"><i class="isax isax-clock"></i></span>
                  <select class="input-sm form-select" aria-label="Default select example">
                    <option selected>Default Duration</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
  
                <!-- selected duration -->
                <div class="input-group mb-3">
                  <span class="span-purple-border input-group-text rounded-0"><i class="isax isax-clock"></i></span>
                  <select class="input-purple-border form-select" aria-label="Default select example">
                    <option selected>Selected Duration</option>
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                  </select>
                </div>
                <!-- default date range -->
                <div class="input-group mb-3">
                  <span class="span-icon input-group-text rounded-0"><i class="isax isax-calendar-1"></i></span>
                  <input type="text" class="input-sm form-control" placeholder="Default Date Range" aria-label="Selected-Field" aria-describedby="basic-addon2" />
                </div>
                <!-- selected date range -->
                <div class="selected-date-range input-group mb-3">
                  <span class="span-purple-border input-group-text rounded-0"><i class="isax isax-calendar-1"></i></span>
                  <input type="text" class="input-purple-border form-control" placeholder="Selected Date Range" aria-label="Selected-Field" aria-describedby="basic-addon2" />
                </div>
              </div>
  
              <!-- button -->
              <div class="container">
                <br />
                <div class="container d-flex">
                  <div class="row d-flex">
                    <div class="col-md"><button type="button" class="button-default">Default</button></div>
                    <div class="col-md"><button type="button" class="button-default-hover">Click/Hover</button></div>
                    <div class="col-md"><button type="button" class="button-disabled">Disabled</button></div>
                  </div>
                </div>
                <br />
                <!-- button outline -->
                <div class="container d-flex">
                  <div class="row">
                    <div class="col-md"><button type="button" class="button-default-outline">Default</button></div>
                    <div class="col-md"><button type="button" class="button-hover-outline">Click/Hover</button></div>
                    <div class="col-md"><button type="button" class="button-disabled-outline">Disabled</button></div>
                  </div>
                </div>
                <br />
                <!-- button outline purple-->
                <div class="container d-flex">
                  <div class="row">
                    <div class="col-md"><button type="button" class="button-default-outline-purple">Default</button></div>
                    <div class="col-md"><button type="button" class="button-hover-outline-purple">Click/Hover</button></div>
                    <div class="col-md"><button type="button" class="button-disabled-outline">Disabled</button></div>
                  </div>
                </div>
                <br />
                <!-- button outline with icon -->
                <div class="container d-flex">
                  <div class="row">
                    <div class="col-md">
                      <button type="button" class="button-default-icon">
                        <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <span class="position-absolute top-50 end-0 translate-middle-y me-4">Default</span>
                      </button>
                    </div>
                    <div class="col-md">
                      <button type="button" class="button-hover-icon">
                        <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <span class="position-absolute top-50 end-0 translate-middle-y me-4">Click/Hover</span>
                      </button>
                    </div>
                    <div class="col-md">
                      <button type="button" class="disabled-icon">
                        <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <span class="position-absolute top-50 end-0 translate-middle-y me-4">Disabled</span>
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                <!-- button outline with icon purple -->
                <div class="container d-flex">
                  <div class="row">
                    <div class="col-md">
                      <button type="button" class="button-default-icon-purple">
                        <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <span class="position-absolute top-50 end-0 translate-middle-y me-4">Default</span>
                      </button>
                    </div>
                    <div class="col-md">
                      <button type="button" class="button-hover-icon-purple">
                        <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <span class="position-absolute top-50 end-0 translate-middle-y me-4">Click/Hover</span>
                      </button>
                    </div>
                    <div class="col-md">
                      <button type="button" class="disabled-icon">
                        <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <span class="position-absolute top-50 end-0 translate-middle-y me-4">Disabled</span>
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                <!-- text -->
                <div class="container d-flex">
                  <div class="row">
                    <div class="col-md"><p class="text-default ms-2">Default</p></div>
                    <div class="col-md"><p class="text-hover ms-2">Click/Hover</p></div>
                    <div class="col-md"><p class="text-disabled ms-2">Disabled</p></div>
                  </div>
                </div>
                <div class="container d-flex">
                  <div class="row">
                    <div class="col-md"><i class="arrow isax isax-arrow-left-2"></i></div>
                    <div class="col-md"><p class="text-previous">Previous</p></div>
                    <div class="col-md"><p class="text-one ms-2">1</p></div>
                    <div class="col-md"><p class="text-disabled ms-2">2</p></div>
                    <div class="col-md"><p class="text-next ms-2">Next</p></div>
                    <div class="col-md"><i class="arrow-right isax isax-arrow-right-3"></i></div>
                  </div>
                </div>
  
                <!-- checkboxes -->
                <div class="container">
                  <div class="row align-items-start">
                    <div class="col-sm-3">
                      <div class="form-check">
                        <input class="checkbox form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label mt-1 ms-3" for="flexCheckDefault">Checkbox</label>
                      </div>
                      <div class="form-check">
                        <input class="checkbox form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label mt-1 ms-3" for="flexCheckChecked">Checkbox </label>
                      </div>
                    </div>
  
                    <!-- close button -->
                    <div class="col d-flex">
                      <div class="close-icon isax isax-close-circle5"></div>
                      <div class="close-icon2 isax isax-close-circle5"></div>
                    </div>
  
                    <!-- filter button -->
                    <div class="container d-flex mt-3">
                      <div class="input-group mb-3">
                        <span class="span-btn-default input-group-text rounded-0"> <i class="icon isax isax-filter-search"></i></span>
                        <button type="button" class="btn-filter-default" aria-label="Selected-Field" aria-describedby="basic-addon2">Default Filter</button>
                      </div>
                    </div>
  
                    <div class="input-group mb-3">
                      <span class="span-btn-filter-purple input-group-text rounded-0"> <i class="icon-filter isax isax-filter-search"></i></span>
                      <button type="button" class="btn-filter-purple" aria-label="Selected-Field" aria-describedby="basic-addon2">Default Filter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
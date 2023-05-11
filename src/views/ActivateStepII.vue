<template>
    <Sidebar/>
      <main class="container d-flex col-md-9 col-lg-12  " style="margin-left: 12rem;">
        <div class="container ms-5 mt-3 pb-5" >
  
            <div class="row justify-content-center mb-3 mt-5 ">
			<div class="col-8 text-center p-0 mb-2 ps-5">
				<div class="px-0 pb-0 mt-3 mb-3">
					<form id="form">
            <div class="progressbar">
              <div class="steps1"> <span class="check"></span> </div>
              <div class="step2-circle">
                <div class="inner-circle position-absolute top-50 start-50 translate-middle"></div>
              </div>
              <div class="step3-circle">
                <div class="step3-inner-circle position-absolute top-50 start-50 translate-middle"></div>
              </div>
              <div class="steps4"></div>
            </div>
          </form>
        </div>  
      </div>
      </div>


  <div class="container pe-5 pb-3 ms-4 bg-white"   >
      <div class="py-2 text-center">
        <h1 class="inter-h1-black fw-bold py-2" style="font-size: 32px; color: var(--vt-c-black);">
           Are you a?...</h1>
        <div class="border-bottom"> </div> 
      </div>
    <div class="container pt-3">
          <div class="row">
           <div class="col-md-6">
             <div class="rectangle d-flex mt-4 mb-3 ms-3">
              <div class="icons isax isax-shop4 ms-4 mt-0"></div>
    <div class="container">
            <div class="col">
                    <h5 class="inter-subheading-bold text-start text-black mt-3">Business</h5>
            </div> 
              <div class="col">
                  <p class="inter-regular me-3">Lorem ipsum dolor sit amet, consectetur adipiscing <br>
                   elit, sed do eiusmod tempor incididunt ut labore et <br>
                    dolore magna aliqua.</p>
                </div>
              </div>
            </div>
      <div class="rectangle d-flex mt-4 mb-3 ms-3">
            <div class="icons isax isax-bank ms-4 mt-0"></div>
              <div class="container">
                <div class="col">
                    <h5 class="fw-bold text-black mt-3">Government Unit</h5>
                </div> 
          <div class="col">
                    <p class="inter-regular me-3">Lorem ipsum dolor sit amet, consectetur adipiscing <br>
                   elit, sed do eiusmod tempor incididunt ut labore et <br>
                    dolore magna aliqua.</p>
                </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex mt-4 mb-3 ms-2">
              <img src="/src/assets/images/Step2.svg" class="activate-image">
          </div>
        </div>
        <!-- button -->
     <div class="mt-4 py-4 mb-4 me-3">
        <a class="position-absolute bottom-0 end-0 px-0 text-decoration-none"  href="#"> <span class="px-3 pe-4 text-purple">Back</span>
          <button type="button" class="click-hover-button">Continue</button>
        </a>
      </div>
    </div>
        </div>
          </div>
           </div>
  </main> 
  </template>
    <script>
  
  import Header from '../components/Header.vue';
  import Sidebar from '../components/Sidebar.vue';
  
  export default {
    name: "Login",
     components: {
        Header,
        Sidebar
     }
  };
  </script>
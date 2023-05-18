<template>
<MainLayout />  
  <main class="container gx-2 g-0 d-flex" style="margin-left: 12rem;">
   <div class="container ms-5 mt-3 pb-5" >
        <div class="container">
          <div class="row gx-0 g-0 justify-content-center mb-3 mt-5 ">
		      	<div class="col-9 text-center p-0 mb-2 ps-1 ms-5">
			      	<div class="px-0 pb-0 mt-3 mb-3">
                 <form id="form">
                    <div class="progressbar">
                      <div class="step1"> <span><img src="/src/assets/images/check.svg" alt=""> </span> </div>
                         <a class="step2-circle" title="General Information" data-bs-toggle="tooltip" data-bs-placement="top">
                            <div class="inner-circle position-absolute top-50 start-50 translate-middle"></div>
                         </a>
                       <div class="step3-circle">
                            <div class="step3-inner-circle position-absolute top-50 start-50 translate-middle"></div>
                      </div>
                            <div class="step4"></div>
                     </div>
                  </form>
                </div>  
            </div>
          </div>

      <div class="container p-3 bg-white pb-3 ms-4">
         <div class="py-1 text-center">
           <h1 class="inter-h1-black fw-bold mb-3" style="font-size: 32px; color: var(--vt-c-black);">
              Are you a?...</h1>
            <div class="border-bottom mb-2"></div>
         </div>

      <div class="container row gx-0 g-0 pt-2">
        <div class="col-12">
          <div class="row gx-0 g-0">
             <div class="col-md-6">
                <div class="gx-0 g-0">
                  <div class="container d-flex justify-content-center gx-0 g-0">
                    <div class="rectangle d-flex mt-4 mb-3 ms-3">
                      <div class="icons isax isax-shop4 ms-4 mx-3"></div>
                        <div class="container">
                          <div class="col">
                            <h5 class=" title-6 text-start mt-3">Business</h5>
                          </div> 
                            <div class="col mt-2">
                          <p class="inter-regular me-3 text-break">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua.</p>
                          </div>
                        </div>
                      </div> 
                    </div>  
                     <div class="container d-flex justify-content-center">
                        <div class="rectangle d-flex mt-2 mb-3 ms-3">
                          <div class="icons isax isax-bank ms-4 mx-3"></div>
                            <div class="container">
                               <div class="col">
                                  <h5 class=" title-6 text-start mt-3">Government Unit</h5>
                               </div> 
                        <div class="col mt-2">
                          <p class="inter-regular me-3 text-break">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua.</p>
                        </div>
                            </div>
                          </div> 
                    </div>  
                 </div>
              </div>
       
             <div class="col-md-6">
                <div class="d-flex mt-4 mb-3 ">
                  <img src="src/assets/images/Step2.svg" class="activate-image ms-2">
                </div>
            </div>
                <!-- button -->
            <div class="mt-4 py-4 mb-3 me-5">
               <a class="position-absolute bottom-0 end-0 px-0 text-decoration-none"  href="#"> 
                <router-link :to="{name: 'consumer.activate-account'}" class="text-decoration-none"><span class="px-3 pe-4 text-purple">Back</span></router-link>
                <button type="button" class="activate-button me-2">Continue</button> </a>
           </div> 
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</main> 
</template>

<script>

  export default {
    name: "LoginPage",
   components: {
   } , mounted(){
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
   }
};
  </script>
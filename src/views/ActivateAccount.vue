<template>
  <Header/>
  <Sidebar/>
    <main class="container d-flex col-md-9 col-lg-10 " style="margin-left: 12rem;">
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
     
    <div class="container bg-white pb-3 ms-3">
    <div class="py-2 text-center">
      <h1 class="inter-h1-black fw-bold py-2" style="font-size: 32px; color: var(--vt-c-black);">
         General Information</h1>
      <div class="border-bottom "></div>
    </div>
        <div class="container pt-3">
          <div class="row">
        <div class="col-md-6">

          <!-- input field name -->
          <div class="input-group mb-3">
            <form class="form-floating">
              <input type="text" class="input-height form-control" id="floatingInputValue" placeholder="name@example.com"  value="Juan">
              <label for="floatingInputValue">First Name</label>
            </form>
          </div>

           <!-- input field email -->
           <div class="input-group mb-3">
            <form class="form-floating">
              <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Email">
              <label for="floatingInputValue">Email</label>
            </form>
          </div>

          <!-- input field date of birth -->
          <div class="input-group mb-3">
            <form style="width: 100% ">
              <input type="text" class="input-height form-control" placeholder="Date of Birth" id="exampleInputEmail1" aria-describedby="emailHelp">
              <i class="icon isax isax-calendar-1 password-toggle"></i>
             </form>
          </div>
      
           <!-- input country of birth -->
          <div class="input-group mb-3">
             <select class="input-height form-select" aria-label="Default select example">
                <option selected>Country of Birth</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
          </div>
          <div>
            <p class="inter-body-semibold text-start text-dark   mb-3" >Current Address</p>
          </div>

        <!-- housing address -->
        <div class="input-group mb-3">
            <form class="form-floating">
              <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="House/Unit/Bldg.No">
              <label for="floatingInputValue">House/Unit/Bldg.No</label>
            </form>
        </div>

         <!-- street name -->
         <div class="input-group mb-3">
            <form class="form-floating">
              <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Street Name">
              <label for="floatingInputValue">Street Name</label>
            </form>
        </div>

          <!-- province -->
           <div class="input-group mb-3">
             <select class="input-height form-select" aria-label="Default select example">
                <option selected>Province</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
          </div> 

            <!-- baranggay -->
            <div class="input-group mb-3">
             <select class="input-height form-select" aria-label="Default select example">
                <option selected>Barangay</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
          </div>
        </div>
        
      <!-- column 2 -->
         <div class="col-md-6">
          <!-- input field lastname  -->
             <div class="input-group mb-3">
            <form class="form-floating">
              <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Lastname">
              <label for="floatingInputValue">Last Name</label>
            </form>
          </div>  

            <!-- input mobile number -->
            <div class="input-group mb-3">
            <form class="form-floating">
              <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Mobile Number">
              <label for="floatingInputValue">Mobile Number</label>
            </form>
          </div>

              <!-- input nationality -->
            <div class="input-group mb-3">
            <form class="form-floating">
              <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Nationality">
              <label for="floatingInputValue">Nationality</label>
            </form>
          </div>

           <!-- input city of birth -->
           <div class="input-group mb-3">
             <select class="input-city form-select" aria-label="Default select example">
                <option selected>City of Birth</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
          </div>

          <div>
            <h5 class="Inter fw-bold mb-3" > &nbsp;</h5>
          </div>

            <!-- building name -->
            <div class="input-group mb-3">
            <form class="form-floating">
              <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Building Name">
              <label for="floatingInputValue">Building Name</label>
            </form>
        </div>

            <!-- region -->
          <div class="input-group mb-3">
              <select class="input-height form-select" aria-label="Default select example">
                <option selected>Region</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
          </div>

             <!-- city / municipality -->
             <div class="input-group mb-3">
             <select class="input-height form-select" aria-label="Default select example">
                <option selected>City or Municipality</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
          </div>

           <!-- Zipcode -->
           <div class="input-group mb-3">
            <form class="form-floating">
              <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Zipcode">
              <label for="floatingInputValue">Zip Code</label>
            </form>
        </div>
     </div>
  </div> 

            <!-- button -->
  <div class="mt-4 py-3 mb-2 ">
      <a class="position-absolute bottom-0 end-0 px-0 text-decoration-none"  href="#"> <span class="px-3 text-purple">Back</span>
        <router-link :to="{name: 'ActivateStepII'}">
        <button type="button" class="click-hover-button">Continue</button> </router-link>
      </a>
  </div>

         </div>
       </div>
    </div>
</main>
</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  name: "Login",
   components: {
      Header,
      Footer,
      Sidebar
   }
};
</script>
<template>
  <Sidebar />
  <div class="dashboard container px-5 mt-2" style="margin-left: 10rem;">
    <div class="row mx-5">
      <header class="header bg-light lh-1 p-3 px-5">
        <div class="col-12">
          <a class="title-2 text-decoration-none text-dark" href="#">Dashboard</a>
        </div>
      </header>
      <div class="position-relative px-5">
        <img class="img-fluid" src="src/assets/images/Row.svg" alt="background image">
        <div class="overlay">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-6 text-white text-start">
                <div class="title-11 ms-4 mt-4">Hello, Juan!</div>
                <p class="title-8 ms-4 mx-4">Complete the KYC process to activate your account and take full advantage of the features offered by AmpliPAY.</p>
                <div class="d-flex ms-4">
                  <div class="row d-flex">
                  <div class="col-md"><button type="button" class="activate-btn click-hover-button text-nowrap mt-1">Activate Account</button></div>
                </div>
               </div>
                <p class="title-12 text-start ms-4 mt-1">Wednesday, Feb 23, 2023 3:40 PM PST</p>
              </div>
               <div class="col-md-6 col-lg-6 mt-3">
                <img class="img-fluid" src="src/assets/images/Char 09.svg" alt="character image">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
       <div class="col-md-4 duration-btn input-group mb-3 ms-5 mt-3">
        <span class="icon-span input-group-text rounded-start"><i class="isax isax-clock"></i></span>
        <select class="form-select title-8 rounded-end" aria-label="Default select example">
        <option selected>[Daily, Weekly, Monthly, Yearly]</option>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        </select>
        </div>
        <div class="col-md-4 date-range input-group mb-3 ms-4 mt-3">
            <span class="icon-span input-group-text rounded-start"><i class="isax isax-calendar-1"></i></span>
            <input type="calendar" class="selected-duration form-control rounded-end" placeholder="Feb 17, 2023 - Feb 23, 2023" aria-label="Selected-Field" aria-describedby="basic-addon2"> 
        </div> 
        <div class="col-md-4">
            <button type="button" class="export-btn click-hover-outline bg-light mt-3">Export Reports</button>
        </div>
    </div>
    </div> 
    <div class="row ms-5 px-5 py-3 justify-content-between bg-white">
    <div class="col-4 title-6">
      Net Revenue Income
    </div>
    <div class="col-4">
      <i class="isax isax-refresh fs-4 text-purple" aria-hidden="true"></i>
    </div>
  </div>
   <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <div class="btn-toolbar mb-2 mb-md-0">
          
        </div>
      </div>
      <div>
        <BarChart />
    <bar-chart ref="chart" style="height: 300px; width: 600px;">
      
      <!-- <canvas class="my-4 w-100 chartjs-render-monitor" id="myChart" width="1261" height="532" style="display: block; height: 426px; width: 1009px;"></canvas> -->
    </bar-chart>
  </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
// import { Bar } from "vue-chartjs";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
  }
};
</script>

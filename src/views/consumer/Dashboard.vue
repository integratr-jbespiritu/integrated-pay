<template>
   <div class="gx-0 g-0">
      <div class="heading title-10 mx-3 my-2">
         Dashboard
      </div>
          <div v-if="active_account"  class="row gx-0 g-0 margin-x-20p"> <!--active_account-->
         <div class=" pe-4 ps-3 dash-image d-flex justify-content-between ">
            <div class="">
               <div class="justify-content-start align-items-start p-5 text-white">
                  <p class="title-11">Hello, Juan!</p>
                  <p class="title-24">Welcome back to Amplipay, we've missed you..</p>
                  <p class="title-12 text-start mt-1">Wednesday, Feb 23, 2023 3:40 PM PST</p>
               </div>
            </div>
            <div class="mt-3">
               <img src="/src/assets/images/character.svg" class="img-fluid d-none d-sm-none d-xl-block" alt="Overlay Image" />
            </div>
         </div>
      </div>

      <div  v-if="!active_account"  class="row gx-0 g-0 margin-x-20p">
         <div class=" pe-4 ps-3 dash-image d-flex justify-content-between ">
            <div class="">
               <div class="justify-content-start align-items-start p-5 text-white">
                  <p class="title-11">Hello, Juan!</p>
                  <p class="title-24">Complete the KYC process to activate your account and take full advantage of the features offered by
                     AmpliPAY.</p>
                  
           <div class="col-12 col-md-4 d-flex pt-1">
               <button type="button" class="button-hover-icon-purple bg-blue border-0 text-white">
                <span class="title-8 translate-middle-y text-nowrap mx-1"> Activate Account </span></button>    
          </div>
                  <p class="title-12 text-start mt-1">Wednesday, Feb 23, 2023 3:40 PM PST</p>
               </div>
            </div>
            <div class="mt-3">
               <img src="/src/assets/images/character.svg" class="img-fluid d-none d-sm-none d-xl-block" alt="Overlay Image" />
            </div>
         </div>
      </div>

      <div class="row gx-0 g-0 my-3 text-nowrap margin-x-20p">
         <div class="col-12 col-xl-6 pt-1 pb-1  mb-2 mb-xl-0">
            <div class="col bg-white me-0 me-xl-3">
               <div class="tool-tip-top">
                  <a class="title-8 text-decoration-none text-dark custom-tooltip text-center mx-5">
                  Disbursement Release Schedule
                  <i class="isax isax-info-circle5 mx-1" data-bs-placement="top" data-toggle="tooltip"></i>
                  <span class="tooltip-text title-15 text-wrap">
                  Check the payout release schedule to know when you'll receive your funds.
                  </span>
                  </a>
                  
               </div>
               <div class="calendar-date mx-5">
                  <a class="title-8 text-decoration-none text-blue title-11 no-hover"><i class="isax isax-calendar-1"></i>
                  Monday,
                  February 01, 2023</a>
               </div>
            </div>
         </div>
         <div class="col-12 col-xl-6 pt-1 pb-1">
            <div class="col bg-white ms-0 ms-xl-3 ">
               <div class="tool-tip-top">
                  <a class="title-8 text-decoration-none text-dark custom-tooltip text-center mx-5">
                  Disbursement Release Schedule
                  <i class="isax isax-info-circle5 mx-1" data-bs-placement="top" data-bs-toggle="tooltip"></i>
                  <span class="tooltip-text title-15 text-wrap">
                  Check the payout release schedule to know when you'll receive your funds.
                  </span>
                  </a>
               </div>
               <div class="calendar-date mx-5">
                  <a class="title-8 text-decoration-none text-blue title-11 no-hover"><i class="isax isax-calendar-1"></i> Monday,
                  February 01, 2023</a>
               </div>
            </div>
         </div>
      </div>
      <div class="row gx-0 g-0 ms-3 margin-right-20p d-flex justify-content-start">
         <div class="col-12 col-md-auto d-flex me-0 me-xxl-1" style="width:520px;">
            <div class="duration-btn input-group mb-3 mt-3 w-100">
               <span class="icon-span input-group-text rounded-start"><i class="isax isax-clock"></i></span>
               <select class="form-select title-8 rounded-end" aria-label="Default select example">
                  <option v-for="duration in durations" :key="duration" :value="duration.value">{{ duration.name }}</option>
               </select>
            </div>
         </div>
         <div class="col-12 col-md-auto ms-0 ms-xxl-3" style="width:520px;">
            <div class="date-range input-group mb-3 mt-3 w-100">
               <span class="icon-span input-group-text rounded-start"><i class="isax isax-calendar-1"></i></span>
               <input type="calendar" class="selected-duration form-control rounded-end"
                  placeholder="Feb 17, 2023 - Feb 23, 2023" aria-label="Selected-Field" aria-describedby="basic-addon2" />
            </div>
         </div>
         <div class="col-12 col-md-auto d-flex align-items-center d-flex justify-content-end ms-auto mb-3 mb-lg-0">
            <button type="button" class="button-default-outline title-5 bg-transparent">Export</button>
         </div>
      </div>
         
      <div class="mb-5 mx-3">
         <div class="row gx-0 g-0">
            <div class="col-12">
               <div class="bg-white">
                  <div class="col-12 border-bottom py-2 title-4 d-flex justify-content-between">
                     <span class="title-6 mx-3">Net Revenue Income</span>
                         <img src="/src/assets/images/sync.svg" class="me-3">
                  </div>
                   <div class="d-flex mx-5 pt-3">
                     <p class="title-8"><span class="badge rounded-pill bg-purple">&nbsp;</span> GCash</p>
                     <p class="title-8 ms-3"><span class="badge rounded-pill bg-black">&nbsp;</span> BPI</p>
                     </div> 
                  <div class="row gx-0 g0">
                     <div class="col mt-3 mx-5">
                        <p class="title-12">Total Revenue&nbsp;<span class="title-6">PHP 1,000,000.00&nbsp;</span>
                           <i class="isax isax-arrow-up-34 text-blue"></i>
                           <span class="text-blue">+ 2% higher</span>
                        </p>
                     </div>
                     <div class="col-auto me-5">
                        <div class="d-flex">
                           <p class="title-12 mt-4">February 2023&nbsp; {{ typeof active_account}}</p>
                           <i class="isax isax-calendar-circle5 fs-4 text-blue mt-4" style="bottom: 4px;"></i>
                        </div>
                     </div>
                  </div>
                  <canvas v-if="active_account" id="lineChart" class="bg-white"></canvas> <!--active account-->
                  <div v-else class="d-flex flex-row justify-content-center" style="background-color: white; height: 400px;"> <!--not active-->
                     <div class="d=flex flex-column justify-content-center text-center my-auto ">
                           <img src="/src/assets/images/Rectangle.png" >
                           <div class="title-7 text-purple pt-2">Activate Account</div>
                           <p class="title-12 pt-2">Accessing this feature requires the completion of KYC process</p>
                           <div class="pt-2">
                                 <button type="button" class="button-hover-icon-purple bg-purple border-0 text-white" >
                                 <span class="title-8 translane-middle-y text-nowrap mx-2 align-text-bottom"> Activate Account </span>
                                 </button>
                           </div>
                     </div>
                  </div>
                   <canvas id="myChart"></canvas>
               </div>
            </div>
         </div>
      </div>
      <div class="row gx-0 g-0 mx-4 mb-4">
         <div class="col">
            <div class="row gx-0 g-0 ">
               <div class="col-12 col-lg-6">
                  <div class=" bg-white me-2">
                  <div class="row border-bottom mx-0 ">
                     <div class="col-6 justify-content-start d-flex">
                        <p class="title-6 mx-2 mt-2 mb-2">Gross Revenue</p>
                     </div>
                     <div class="col-6 justify-content-end d-flex my-auto">
                        <span class="me-2">
                        <img src="/src/assets/images/sync.svg">
                        </span>
                     </div>
                  </div>
                   <div class="d-flex justify-content-center mt-3" >
                     <p class="title-8 pe-2"><span class="badge rounded-pill bg-purple mx-1">&nbsp;</span> GCash</p>
                     <p class="title-8 pe-2"><span class="badge rounded-pill bg-black mx-1">&nbsp;</span> BPI</p>
                     <p class="title-8 pe-2"><span class="badge rounded-pill bg-blue mx-1">&nbsp;</span> Maya</p>
                     </div> 
                  <div class="row gx-0 g-0 mb-3 flex-box">
                     <div class="col mt-3 d-flex justify-content-center gap-4">
                        <p class="title-12">Total Revenue&nbsp;<span class="title-6">PHP 1,000,000.00&nbsp;</span>
                           <i class="isax isax-arrow-up-34 text-blue"></i>
                           <span class="text-blue">+ 2% higher</span>
                        </p>
                        <div class="col-auto">
                           <div class="d-flex mt-2">
                              <p class="title-12">February 2023&nbsp;</p>
                              <i class="isax isax-calendar-circle5 fs-4 text-blue mx-1" style="bottom: 4px;"></i>
                           </div> 
                        </div>
                     </div>
                  </div>

                   <canvas v-if="active_account" id="barChart" class="bg-white"></canvas> <!--revenue_account-->
                   <div v-else class="d-flex flex-row justify-content-center" style="background-color: white; height: 260px;">
                     <div class="d=flex flex-column justify-content-center text-center my-auto ">
                           <div class="title-7 text-purple pt-2">Activate Account</div>
                           <p class="title-12 pt-2">Accessing this feature requires the completion of KYC process</p>
                     </div>
                   </div> 
               </div>

               </div>
               <div  v-if="active_account" class="col-12 col-lg-6 ">
                  <div class=" bg-white overflow-hidden ms-2">
                     <div class="row gx-0 g-0 border-bottom">
                        <div class="col justify-content-start d-flex">
                         <p class="title-6 mx-3 mt-2 mb-2">Channel Ranking</p>
                        </div>
                        <div class="col-6 justify-content-end d-flex my-auto">
                             <span class="text-purple me-3">
                                <img src="/src/assets/images/sync.svg">
                             </span>
                        </div>
                  </div>
                  <div class="col-12 mt-3 mx-4">
                     <div class="row">
                        <div class="col-auto pb-4">
                           <i class="isax isax-arrow-up-34 text-blue ms-1"></i>
                           <p class="title-22 text-blue">+ 2%</p>
                        </div>
                        <div class="col-4">
                           <div>
                              <span><img src="/src/assets/images/gcashlogo.svg" alt="gcashlogo" class="img-fluid" />Gcash</span>
                           </div>
                        </div>
                        <div class="col justify-content-end d-flex me-5">
                           <div>
                              PHP 1,000,000.00
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 mt-1 mx-4">
                     <div class="row">
                        <div class="col-auto pb-4">
                           <i class="isax isax-arrow-up-34 text-blue ms-1"></i>
                           <p class="title-22 text-blue">+ 2%</p>
                        </div>
                        <div class="col-4">
                           <div>
                              <span><img src="/src/assets/images/bpi-logo.svg" alt="gcashlogo" class="img-fluid" />BPI</span>
                           </div>
                        </div>
                        <div class="col justify-content-end d-flex me-5">
                           <div>
                              PHP 500,000.00
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 mt-1 mx-4">
                     <div class="row">
                        <div class="col-auto pb-4">
                           <i class="isax isax-arrow-down text-danger ms-1"></i>
                           <p class="title-22 text-danger">+ 2%</p>
                        </div>
                        <div class="col-4">
                           <div>
                              <span><img src="/src/assets/images/ub-logo.svg" alt="gcashlogo" class="img-fluid" />BPI</span>
                           </div>
                        </div>
                        <div class="col justify-content-end d-flex me-5">
                           <div>
                              PHP 100,000.00
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 mt-1 mx-4">
                     <div class="row">
                        <div class="col-auto pb-4">
                           <i class="isax isax-arrow-down text-danger ms-1"></i>
                           <p class="title-22 text-danger">+ 2%</p>
                        </div>
                        <div class="col-4">
                           <div>
                              <span><img src="/src/assets/images/bdo-logo.svg" alt="gcashlogo" class="img-fluid" />BDO</span>
                           </div>
                        </div>
                        <div class="col justify-content-end d-flex me-5">
                           <div>
                              PHP 100,000.00
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 mt-1 mx-4">
                     <div class="row">
                        <div class="col-auto pb-4">
                           <i class="isax isax-arrow-down text-danger ms-1"></i>
                           <p class="title-22 text-danger">+ 2%</p>
                        </div>
                        <div class="col-4">
                           <div>
                              <span><img src="/src/assets/images/landbank-logo.svg" alt="gcashlogo"
                                 class="img-fluid" />Landbank</span>
                           </div>
                        </div>
                        <div class="col justify-content-end d-flex me-5">
                           <div>
                              PHP 100,000.00
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               </div>
               <div v-if="!active_account" class="col-12 col-lg-6 ">
                  <div class=" bg-white overflow-hidden ms-2">
                     <div class="row gx-0 g-0 border-bottom">
                        <div class="col justify-content-start d-flex">
                         <p class="title-6 mx-3 mt-2 mb-2">Channel Ranking</p></div>
                        <div class="col-6 justify-content-end d-flex my-auto">
                             <span class="text-purple me-3">
                                <img src="/src/assets/images/sync.svg">
                             </span>
                        </div>
                     </div>

                  <div class="col-12 mt-1 mx-4">
                     <div class="row">
                        <canvas class="bg-white"></canvas> <!--channel_ranking-->
                        <div class="d-flex flex-row justify-content-center" style="background-color: white; height: 210px;">
                           <div class="d=flex flex-column justify-content-center text-center my-auto mt-5 ">
                              <div class="title-7 text-purple pt-2">Activate Account</div>
                              <p class="title-12 pt-2">Accessing this feature requires the completion of KYC process</p>
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
   import Chart from "chart.js/auto" ;

    export default {
      data() {
       return {
         active_account: false,
        
         durations: [
        {
           name: "[Daily, Weekly, Monthly, Yearly]",
            },
          ],
        };
      },
   
     export_reports_modal: false,
     mounted() {
       const label = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
   
       const lineData = {
         labels: label,
         datasets: [
           {
             label: "Gcash",
             backgroundColor: "rgba(119, 85, 214)",
             borderColor: "rgba(119, 85, 214)",
             data: [195, 50, 110, 75, 100, 40, 45, 110, 85, 190, 150, 220],
             tension: 0.0,
           },
           {
             label: "BPI",
             backgroundColor: "rgba(0,0,0)",
             borderColor: "rgba(0,0,0)",
             data: [55, 85, 30, 45, 50, 100, 150, 120, 110, 105, 70, 250],
             tension: 0.0,
           },
         ],
       };
       const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
   
       const barData = {
         labels: labels,
         font: {
           size: 10,
         },
         datasets: [
           {
             label: "Gcash",
             backgroundColor: "rgba(119, 85, 214)",
             borderColor: "rgba(119, 85, 214)",
             data: [35, 35, 35, 35, 35, 35, 35],
           },
           {
             label: "BPI",
             backgroundColor: "rgba(0,0,0)",
             borderColor: "rgba(0,0,0)",
             data: [20, 20, 20, 20, 20, 20, 20],
           },
           {
             label: "Maya",
             backgroundColor: "rgba(125, 167, 241)",
             borderColor: "rgba(125, 167, 241)",
             data: [65, 65, 65, 65, 65, 65, 65],
           },
         ],
       };
   
       const lineConfig = {
         type: "line",
         data: lineData,
         options: {
           plugins: {
             title: {
               display: true,
               // text: "Total Revenue PHP 1,000,000.00 + 2% higher February 2023 ",
               font: {
                 family: "Inter, sans-serif",
                 size: 20,
                 weight: "Bold",
               },
               color: "black",
             },
           },
           scales: {
             x: {
               grid: {
                 display: true,
                 color: "rgba(220, 220, 220)",
                 lineWidth: 0,
               },
             },
             y: {
               grid: {
                 display: true,
                 color: "rgba(220, 220, 220)",
                 lineWidth: 0,
               },
             },
           },
         },
       };
   
       const barConfig = {
         type: "bar",
         data: barData,
         options: {
           plugins: {
             title: {
               display: true,
               // text: "Total Revenue PHP 1,000,000.00 + 2% higher",
               font: {
                 family: "Arial",
                 size: 18,
                 weight: "regular",
                 color: "green",
               },
             },
           },
           scales: {
             x: {
               grid: {
                 display: true,
                 color: "rgba(220, 220, 220)",
                 lineWidth: 0,
               },
             },
             y: {
               grid: {
                 display: true,
                 color: "rgba(220, 220, 220)",
                 lineWidth: 0,
               },
             },
           },
         },
       };
      
       new Chart(document.getElementById("lineChart"), lineConfig);
       new Chart(document.getElementById("barChart"), barConfig);
     },
   };
</script>
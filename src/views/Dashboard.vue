<template>
  <Sidebar />
  <div class="dashboard container px-5 mt-2" style="margin-left: 10rem;">
    <div class="row mx-5">
      <header class="header bg-light lh-1 p-2 px-5">
        <div class="col-12">
          <a class="title-2 text-decoration-none text-dark" href="#">Dashboard</a>
        </div>
      </header>
      <div class="col d-flex px-5">
        <div class="me-5">
          <img class="img" src="/src/assets/images/Row.svg" alt="background image" />
        </div>
        <div class="overlay">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-6 text-white text-start mt-5 mb-5">
                <div class="title-11 ms-4">Hello, Juan!</div>
                <p class="title-8 ms-4">Welcome back to AmpliPAY, we’ve missed you.</p>
                <p class="title-12 text-start mt-1 ms-4">Wednesday, Feb 23, 2023 3:40 PM PST</p>
              </div>
              <div class="col-md-6 col-lg-6 mt-3" style="max-width: 250px; margin-left: 15rem;">
                <img class="img-fluid" src="/src/assets/images/Char 09.svg" alt="character image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row gx-0 g-0"></div>
    <div class="container mt-4">
    <div class="row justify-content-between ms-5 px-5">
      <div class="row justify-content-between">
        <div class="col-5 bg-white">
          <div class="ms-3">
          <a href="#" class="title-8 text-decoration-none text-dark">
            Disbursement Release Schedule <i class="isax isax-info-circle5 mx-1" data-bs-placement="top-end" data-toggle="tooltip" title="Check the payout release schedule to know when you'll receive your funds."></i>
          </a>
        </div>
        <div class="calendar-date ms-3">
          <a class="title-8 text-decoration-none text-blue title-11 no-hover"><i class="isax isax-calendar-1"></i> Monday, February 01, 2023</a>
        </div>
        </div>
        <div class="col-6 bg-white">
          <div class="ms-3">
            <a href="#" class="title-8 text-decoration-none text-dark">
              Receive disbursement on or before <i class="isax isax-info-circle5 mx-1" data-bs-placement="top" data-toggle="tooltip" title="You can expect to receive your disbursement on or before the specified date."></i>
            </a>
            <div class="calendar-date">
              <a class="title-8 text-decoration-none text-blue title-11 no-hover"><i class="isax isax-calendar-1"></i> Tuesday, Feb 02, 2023</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
    <div class="row ms-5 px-5">
      <div class="col-md-4 duration-btn input-group mb-3 mt-3">
        <span class="icon-span input-group-text rounded-start"><i class="isax isax-clock"></i></span>
        <select class="form-select title-8 rounded-end" aria-label="Default select example">
          <option v-for="duration in durations" :key="duration" :value="duration.value">{{duration.name}}</option>
        </select>
      </div>
      <div class="col-md-4 date-range input-group mb-3 ms-3 mt-3">
        <span class="icon-span input-group-text rounded-start"><i class="isax isax-calendar-1"></i></span>
        <input type="calendar" class="selected-duration form-control rounded-end" value="Feb 17, 2023 - Feb 23, 2023" aria-label="Selected-Field" aria-describedby="basic-addon2" />
      </div>
      <div class="col-md-4">
        <button type="button" class="export-btn click-hover-outline bg-light mt-3" @click="export_reports_modal=true">{{export_reports_modal}}Export Reports</button>
      </div>
    </div>
    <div class="container px-5 ms-5">
      <div class="row">
        <div class="col-9 title-15">Net Revenue Income</div>
        <div class="col-4 pt-4 ms-4">
          <div class="row justify-content-start">
            <div class="col-4">
              <p class="title-8"><span class="badge rounded-pill bg-purple">&nbsp;</span> GCash</p>
            </div>
            <div class="col-4">
              <p class="title-8"><span class="badge rounded-pill bg-dark">&nbsp;</span> BPI</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-end ms-3 mt-3 mb-5">
          <div class="col mt-1">
            <p class="title-12">Total Revenue &nbsp;<span class="title-6"> PHP 1,000,000.00&nbsp;</span><i class="isax isax-arrow-up-34 text-blue"></i>+ 2%higher</p>
          </div>
          <div class="col-auto mt-2">
            <p class="title-12">February 2023&nbsp;</p>
          </div>
          <div class="col-auto mt-1">
            <i class="isax isax-calendar-circle5 fs-4 text-blue"></i>
          </div>
        </div>
        <table class="table ms-5 text-gray mt-5">
          <thead class="title-12">
            <tr>
              <th scope="col">January</th>
              <th scope="col">February</th>
              <th scope="col">March</th>
              <th scope="col">April</th>
              <th scope="col">May</th>
              <th scope="col">June</th>
              <th scope="col">July</th>
              <th scope="col">August</th>
              <th scope="col">September</th>
              <th scope="col">October</th>
              <th scope="col">November</th>
              <th scope="col">December</th>
            </tr>
          </thead>
        </table>
         <div class="row justify-content-between border bg-white">
          <div class="col-4 title-6">
            Gross Revenue
          </div>
          <div class="col-auto mt-1">
            <i class="isax isax-refresh fs-4 text-purple"></i>
          </div>
          <div class="col-4 title-6">
            Channel Ranking
          </div>
          <div class="col-auto mt-1">
            <i class="isax isax-refresh fs-4 text-purple"></i>
          </div>
          <div class="col-5 row justify-content-center mt-4">
            <div class="col-4">
              <p class="title-8"><span class="badge rounded-pill bg-purple">&nbsp;</span> GCash</p>
            </div>
            <div class="col-4">
              <p class="title-8"><span class="badge rounded-pill bg-dark">&nbsp;</span> BPI</p>
            </div>
            <div class="col-4">
              <p class="title-8"><span class="badge rounded-pill bg-blue">&nbsp;</span> Maya</p>
            </div>
            <div class="col mt-1">
             <p class="title-12">Total Revenue &nbsp;<span class="title-6"> PHP 1,000,000.00&nbsp;</span><i class="isax isax-arrow-up-34 text-blue"></i>+ 2%higher</p>
          </div>
           <!-- <div class="col-auto mt-2">
            <p class="title-12">February 2023&nbsp;</p>
          </div>
          <div class="col-auto mt-1">
            <i class="isax isax-calendar-circle5 fs-4 text-blue"></i>
          </div> -->
           <table class="table ms-5 text-gray mt-5">
          <thead>
            <tbody class="title-12">
              <tr>
                <th scope="row">100</th>
              </tr>
              <tr>
                <th scope="row">80</th>
              </tr>
              <tr>
                <th scope="row">60</th>
              </tr>
              <tr>
                <th scope="row">40</th>
              </tr>
              <tr>
                <th scope="row">20</th>
              </tr>
              <tr>
                <th scope="row">0</th>
              </tr>
            </tbody>
            <tr class="title-12">
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
              <th scope="col">Sunday</th>
            </tr>
          </thead>
        </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-around mt-5 mx-5">
    <div class="col-4 border bg-white w-50">
      <div class="col title-6 border">
        Gross Revenue
        <i class="isax isax-refresh fs-4 text-purple"></i>
      </div>
       <div class="col-4 border">
          <p class="title-8"><span class="badge rounded-pill bg-purple">&nbsp;</span> GCash</p>
          <p class="title-8"><span class="badge rounded-pill bg-dark">&nbsp;</span> BPI</p>
          <p class="title-8"><span class="badge rounded-pill bg-blue">&nbsp;</span> Maya</p>
        </div>
         <div class="col mt-3 border">
             <p class="title-12">Total Revenue &nbsp;<span class="title-6"> PHP 1,000,000.00&nbsp;</span><i class="isax isax-arrow-up-34 text-blue"></i>+ 2%higher</p>
          </div>
          <table class="table text-gray mt-5 border">
          <thead>
            <tbody class="title-12">
              <tr>
                <th scope="row">100</th>
              </tr>
              <tr>
                <th scope="row">80</th>
              </tr>
              <tr>
                <th scope="row">60</th>
              </tr>
              <tr>
                <th scope="row">40</th>
              </tr>
              <tr>
                <th scope="row">20</th>
              </tr>
              <tr>
                <th scope="row">0</th>
              </tr>
            </tbody>
            <tr class="title-12">
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
              <th scope="col">Sunday</th>
            </tr>
          </thead>
        </table>
    </div>
    <div class="col-4 border bg-white">
      Channel Ranking
    </div>
  </div>
  <!-- <div class="row justify-content-between">
    <div class="col-4 border bg-white">
      One of two columns
    </div>
    <div class="col-4 border bg-white">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-evenly">
    <div class="col-4 border bg-white">
      One of two columns
    </div>
    <div class="col-4 border bg-white">
      One of two columns
    </div>
  </div> -->
    <!-- <div class="ms-5 mx-5">
      <canvas id="myChart"></canvas>
    </div> -->
  </div>
  <Teleport>
    <Modal class="w-100">
      <template #header>
        testasfadgafasjdfbas f,asjdbaksdn 
      </template>
      <template #body>
        test
      </template>
      <template #footer>
        test
      </template>
    </Modal>
  </Teleport>
</template>

<script>
  import Sidebar from "../components/Sidebar.vue";
  import Modal from "../components/Modal.vue";
  // import { Line } from "vue-chartjs";

  export default {
    name: "DashBoard",
    components: {
      Sidebar,
      Modal,
    },
  };
</script>

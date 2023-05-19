<template>
  <div class="container">
  <div class="row me-0 ">
    <header class="header bg-light lh-1">
      <div class="col-12">
        <a class="title-10 text-decoration-none text-dark mx-1" href="#">Dashboard</a>
      </div>
    </header>
    <div class="col w-50">
   <div class="cover-image">
    <img src="/src/assets/images/row.svg" class="img img-fluid" alt="Cover Image">
    </div>
    <div class="overlay d-flex">
      <div class="row align-items-start p-5 text-white">
        <p class="title-11">Hello, Juan!</p>
        <p class="title-8">Welcome back to AmpliPAY, we’ve missed you.</p>
        <p class="title-12 text-start mt-1">Wednesday, Feb 23, 2023 3:40 PM PST</p>
      </div>
      <div class="row align-items-end border">
        <img src="/src/assets/images/character.svg" class="img img-fluid mb-4" alt="Overlay Image">
      </div>
    </div>
  </div>
    <div class="container mt-4">
      <div class="row justify-content-between">
        <div class="row justify-content-between">
          <div class="col-5 bg-white">
            <div class="">
              <a href="#" class="title-8 text-decoration-none text-dark">
                    Disbursement Release Schedule <i class="isax isax-info-circle5" data-bs-placement="top-end"
                  data-toggle="tooltip"
                  title="Check the payout release schedule to know when you'll receive your funds."></i>
              </a>
            </div>
            <div class="calendar-date">
              <a class="title-8 text-decoration-none text-blue title-11 no-hover"><i class="isax isax-calendar-1"></i>
                Monday, February 01, 2023</a>
            </div>
          </div>
          <div class="col-6 bg-white">
            <div class="">
              <a href="#" class="title-8 text-decoration-none text-dark">
                   Receive disbursement on or before <i class="isax isax-info-circle5 mx-1" data-bs-placement="top" data-toggle="tooltip"
                  title="You can expect to receive your disbursement on or before the specified date."></i>
              </a>
              <div class="calendar-date">
                <a class="title-8 text-decoration-none text-blue title-11 no-hover"><i class="isax isax-calendar-1"></i>
                  Tuesday, Feb 02, 2023</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class="row border">
    <div class="col-md-4 col-sm-6 duration-btn input-group mb-3 mt-3 border">
      <span class="icon-span input-group-text rounded-start"><i class="isax isax-clock"></i></span>
      <select class="form-select title-8 rounded-end" aria-label="Default select example">
        <option v-for="duration in durations" :key="duration" :value="duration.value">{{ duration.name }}</option>
      </select>
    </div>
    <div class="col-md-4 col-sm-6 date-range input-group mb-3 mt-3 border">
      <span class="icon-span input-group-text rounded-start"><i class="isax isax-calendar-1"></i></span>
      <input type="calendar" class="selected-duration form-control rounded-end" placeholder="Feb 17, 2023 - Feb 23, 2023"
        aria-label="Selected-Field" aria-describedby="basic-addon2" />
    </div>
    <div class="col-md-4 col-sm-12 pe-5 border">
      <button type="button" class="export-btn text-blue h-50 bg-light mt-3" @click="export_reports_modal = true">Export Reports</button>
    </div>
  </div>

    <div class="col">
      <div>
        <div class="row justify-content-end mt-3 mb-5">
          <p class="title-6 mb-5">Net Revenue Income</p>
          <div class="col mt-1">
            <p class="title-12">Total Revenue &nbsp;<span class="title-6"> PHP 1,000,000.00&nbsp;</span> 
              <i class="isax isax-arrow-up-34 text-blue"></i>+ 2%higher</p>
          </div>
          <div class="col-auto">
            <p class="title-12 mt-2">February 2023&nbsp;</p>
          </div>
          <div class="col-auto mt-1">
            <i class="isax isax-calendar-circle5 fs-4 text-blue"></i>
          </div>
        </div>
        <canvas id="lineChart" class="bg-white rounded-3"></canvas>

        <div class="row justify-content-end mt-3 mb-5">
          <p class="title-6 mb-5">Gross Income</p>
          <div class="col mt-1">
            <p class="title-12">Total Revenue &nbsp;<span class="title-6"> PHP 1,000,000.00&nbsp;</span> <i
                class="isax isax-arrow-up-34 text-blue"></i>+ 2%higher</p>
            <div class="col-auto">
              <p class="title-12 mt-2">February 2023&nbsp;</p>
            </div>
            <div class="col-auto mt-1">
              <i class="isax isax-calendar-circle5 fs-4 text-blue"></i>
            </div>
          </div>
        </div>

        <canvas id="barChart" class="w-50 bg-white rounded-3"></canvas>
      </div>
    </div>
  </div>
  </div>
  <Teleport to="body">
    <ModalLarge :show="export_reports_modal" @close="export_reports_modal = false" class="w-100">
      <template #header>
        test
      </template>
      <template #body>
        <div class="row gx-0 g-0">
          Test
        </div>
      </template>
      <template #footer>
        <div class="row gx-0 g-0 mb-1 justify-content-end pad-top-20p">
          Test
        </div>
      </template>
    </ModalLarge>
  </Teleport>
</template>

<script>
import Chart from "chart.js/auto";

export default {
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
          tension: .0,
        },
        {
          label: "BPI",
          backgroundColor: "rgba(0,0,0)",
          borderColor: "rgba(0,0,0)",
          data: [55, 85, 30, 45, 50, 100, 150, 120, 110, 105, 70, 250],
          tension: .0,
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
        title: {
          display: true,
          text: " dnjsabdhj",
          titleAlign: "left",
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
              lineWidth: 2,
            },
          },
        },
      },
    };

    const barConfig = {
      type: "bar",
      data: barData,
      dislay: true,
      options: {
        title: {
          display: true,
          text: "Chart JS Gridlines - Line Chart Example",
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

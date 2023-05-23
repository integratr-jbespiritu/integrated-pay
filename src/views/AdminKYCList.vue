<!-- <template>
    <div class="container">
      <div class="row mt-1">
        <header class="header bg-light lh-1 ms-2">
          <div class="col-12">
            <a class="title-10 text-decoration-none text-dark" href="#">KYC</a>
          </div>
        </header>
        <div class="search input-group ms-2">
          <span class="input-group-text bg-light rounded-0" id="basic-addon1"><i class="isax isax-search-status-1 fs-4"></i></span>
          <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
        </div>
        <div class="col">
          <div class="input-group mb-3">
            <span class="span-btn-default input-group-text rounded-0"><i class="icon isax isax-filter-search"></i></span>
            <button type="button" class="filter-btn bg-white" aria-label="Selected-Field" aria-describedby="basic-addon2">Filter</button>
          </div>
        </div>
        <div class="col d-flex">
          <div class="row ms-5">
            <div class="col-md ms-3">
              <div class="col-md">
                <button type="button" class="button-hover-icon-purple">
                  <span class="position-absolute refund-request top-50 end-0 translate-middle-y me-4">Refund Request</span>
                </button>
              </div>
            </div>
            <div class="col-md">
              <button type="button" class="button-default-outline">Export</button>
            </div>
          </div>
        </div>
        <div class="border-bottom mt-2 mb-5"></div>
        <div class="row gx-0 g-0">
          <div class="table-responsive">
            <table class="kyc-table ms-3 my-auto">
              <thead>
                <tr class="text-purple title-13">
                  <th scope="col">Email Address</th>
                  <th scope="col">Account Name</th>
                  <th scope="col">Type of Account</th>
                  <th scope="col">KYC Status</th>
                  <th scope="col">Date Submitted</th>
                  <th scope="col">assess</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(transaction_record, index) in transaction_records" :key="transaction_record">
                  <tr data-bs-toggle="collapse" @click="focusItem(index)" :class="selected==index?'table-hover':''" :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`collapse${index}`" class="title-8">
                    <td scope="row" class="kyc-td">
                      {{ transaction_record.emailaddress}}
                    </td>
                    <td class="text-no-wrap">{{ transaction_record.accountname }}</td>
                    <td>{{ transaction_record.typeofAccount }}</td>
                    <td><div class="btn py-0 rounded-0 title-17 text-center px-2" :class="getStatus(transaction_record.status)">{{ transaction_record.status }}</div></td>
                    <td>{{ transaction_record.time_stamp }}</td>
                    <td><div class="assess text-center px-2">Assess</div>{{ transaction_record.assess }}</td>

                  </tr>
                  <tr>  
                  </tr>
                </template>
              </tbody>
            </table>
            <div class="col d-flex justify-content-end align-items-end me-4 mt-3">
              <div class="row">
                <div class="col-md"><i class="arrow isax isax-arrow-left-2"></i></div>
                <div class="col-md"><p class="text-previous">Previous</p></div>
                <div class="col-md"><p class="text-one ms-2">1</p></div>
                <div class="col-md"><p class="text-disabled ms-2">2</p></div>
                <div class="col-md"><p class="text-next ms-2">Next</p></div>
                <div class="col-md"><i class="arrow-right isax isax-arrow-right-3"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "DashBoard",
      components: {},
      data() {
        return {
          selected: -1,
          transaction_records: [
            {
              emailaddress: "juandelacruz@gmail.com",
              accountname: "Jayden Delos Santos",
              typeofAccount: "Business",
              status: "Pending",
              time_stamp: "01/01/2023 7:28 AM",
            },
            {
              emailaddress: "jaydenlee@gmail.com",
              accountname: "Juan Dela Cruz",
              typeofAccount: "Business",
              status: "Approved",
              time_stamp: "01/01/2023 7:28 AM",
            },
            {
              emailaddress: "mariaclara@gmail.com",
              accountname: "Maria Clara",
              typeofAccount: "Business",
              status: "Declined",
              time_stamp: "01/01/2023 7:28 AM",
            },
            {
              emailaddress: "mark@gmail.com",
              accountname: "Mark Jose",
              typeofAccount: "Business",
              status: "Declined",
              time_stamp: "01/01/2023 7:28 AM",
            },
            {
              emailaddress: "karina@gmail.com",
              accountname: "Karina Santos",
              typeofAccount: "Business",
              status: "Declined",
              time_stamp: "01/01/2023 7:28 AM",
            },
            {
              emailaddress: "thomas@gmail.com",
              accountname: "Thomas Gabriel",
              typeofAccount: "Government Unit",
              status: "Declined",
              time_stamp: "01/01/2023 7:28 AM",
            },
            {
              emailaddress: "louis@gmail.com",
              accountname: "Loius Reyes",
              typeofAccount: "Government Unit",
              status: "Approved",
              time_stamp: "01/01/2023 7:28 AM",
            },
            {
              emailaddress: "angel@gmail.com",
              accountname: "Angel Cordova",
              typeofAccount: "Government Unit",
              status: "Approved",
              time_stamp: "01/01/2023 7:28 AM",
            },
            {
              emailaddress: "clarice@gmail.com",
              accountname: "Clarice San Jose",
              typeofAccount: "Government Unit",
              status: "Pending",
              time_stamp: "01/01/2023 7:28 AM",
            },
            {
              emailaddress: "jaydenlee@gmail.com",
              accountname: "Angelica Demaga",
              typeofAccount: "Government Unit",
              status: "Pending",
              time_stamp: "01/01/2023 7:28 AM",
            },
          ],
        };
      },
  
      methods: {
        getStatus(data) {
          return `status-${data.toLowerCase()}`;
        },
        focusItem(index){
          this.selected = index
        }
        
      },
    };
  </script>
   -->

<template>
              <div class="table-responsive">
    <div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Email Address</th>
        <th>Account Name</th>
        <th>Type of Account</th>
        <th>Status</th>
        <th>Date Created</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>juandelacruz@gmail.com</td>
        <td>Juan Dela Cruz</td>
        <td>Business</td>
        <td>Pending</td>
        <td>Janaury 01, 2023 7:59 am</td>
      </tr>
      <!-- Add more rows here if needed -->
    </tbody>
  </table>
</div>
</div>

</template>

<style>
.table-container {
  overflow-x: auto;
  max-width: 100%;
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  white-space: nowrap;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

@media (max-width: 600px) {
  th, td {
    display: block;
    width: auto;
  }
}

</style>

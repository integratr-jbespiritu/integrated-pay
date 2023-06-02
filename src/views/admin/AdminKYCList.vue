<template>
  <div class="row me-0">
   <div class="col-12">
    <div class="col">
     <div class="p-3">
      <a class="title-10 text-decoration-none text-dark m-1" href="#">KYC</a>
      <div class="align-items-center">
       <div class="row gx-2 g-0 ms-0">
        <div class="col-12 col-md-4">
         <div class="search input-group mt-3 w-100">
          <span class="input-group-text bg-white rounded-0" id="basic-addon1">
           <i class="isax isax-search-status-1 fs-4"></i>
          </span>
          <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
         </div>
        </div>
        <div class="col-12 col-md-4">
         <div class="input-group mb-2 mt-3">
          <span class="span-btn-default input-group-text rounded-0">
           <i class="icon isax isax-filter-search"></i>
          </span>
          <button type="button" class="filter-btn bg-white w-25" aria-label="Selected-Field" aria-describedby="basic-addon2">Filter</button>
         </div>
        </div>
       </div>
      </div>
      <div class="border-bottom mt-3"></div>
      <div class="table-responsive mt-3" width="100%">
       <table class="table">
        <thead>
         <tr class="table-rows text-purple title-13">
          <th class="table-heading" width="16%">
           <div class="d-flex align-items-center ps-2">
            <span>Email Address</span>
           </div>
          </th>
          <th class="table-heading" width="18%">
           <div class="d-flex align-items-center">
            <span>Account Name</span>
           </div>
          </th>
          <th class="table-heading" width="20%">
           <div class="d-flex align-items-center">
            <span>Type of Account</span>
           </div>
          </th>
          <th class="table-heading" width="10%">
           <div class="d-flex align-items-center">
            <span>KYC Status</span>
           </div>
          </th>
          <th class="table-heading" width="10%">
           <div class="d-flex align-items-center">
            <span>Date Submitted</span>
           </div>
          </th>
          <th class="table-heading" width="5%">
           <div class="d-flex align-items-center">
            <span>Assess</span>
           </div>
          </th>
         </tr>
        </thead>
        <tbody>
         <template v-for="(transaction_record, index) in transaction_records" :key="transaction_record">
          <tr class="size-table-data title-8 border-color-white transaction-table-hover">
           <td class="py-4 ps-4">{{ transaction_record.emailaddress }}</td>
           <td class="py-4">{{ transaction_record.accountname }}</td>
           <td class="py-4">{{ transaction_record.typeofAccount }}</td>
           <td class="py-4">
            <div class="py-0 my-auto rounded-0 title-19 text-center " :class="getStatus(transaction_record.status)">{{ transaction_record.status }}</div>
           </td>
           <td class="py-4">{{ transaction_record.time_stamp }}</td>
           <td class="py-3 pe-3">
            <div>
              <button type="button" class="assess">Assess
               </button>
            </div>
           </td>
          </tr> 
          <span class="mt-1"></span>
         </template>
        </tbody>
       </table>
      </div>
      <!-- pagination  -->
      <nav aria-label="Page navigation">
       <ul class="pagination justify-content-end me-1 px-2">
        <li class="page-item disabled mt-2">
         <i class="arrow isax isax-arrow-left-2"></i>
        </li>
        <li class="page-item disabled">
         <a class="page-link bg-light border-0" href="#" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item"><a class="page-link bg-light border-0 text-purple" href="#">1</a></li>
        <li class="page-item disabled"><a class="page-link bg-light border-0" href="#">2</a></li>
        <li class="page-item">
         <a class="page-link bg-light border-0 text-purple" href="#">Next</a>
        </li>
        <li class="page-item mt-2">
         <i class="arrow isax isax-arrow-right-3 text-purple"></i>
        </li>
       </ul>
      </nav>
      <!-- pagination  -->
     </div>
    </div>
   </div>
  </div>
 </template>

 <script>
  export default {
   data() {
    return {
      // typeofAccount: true, // or false based on your logic
      // routeA: '/consumer.activate-account.step2',
      // routeB: '/consumer.activate-account-step4',
      transaction_records: [
      {
       emailaddress: "juandelacruz@gmail.com",
       accountname: "Jayden Dela Cruz",
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
       typeofAccount: "Government Unit ",
       status: "Declined",
       time_stamp: "01/01/2023 7:28 AM",
      },
      {
       emailaddress: "louis@gmail.com",
       accountname: "Louis Reyes",
       typeofAccount: "Government Unit",
       status: "Approved",
       time_stamp: "01/01/2023 7:28 AM",
      },
      {
       emailaddress: "angel@gmail.com",
       accountname: "Angel Cordova",
       typeofAccount: "Government Unit",
       status: "Pending",
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
       accountname: "Angel Demaga",
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
  },
};
</script>

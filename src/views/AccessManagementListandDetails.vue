<template>
   <div class="pad-x-10p ms-1 pad-end-20p">
      <div class="row gx-0 g-0">
         <div class="col">
            <h1 class="fw-bold title-10 pad-top-20p text-nowrap">Users</h1>
         </div>
      </div>
      <div class="row gx-0 g-0 pad-top-20p">
         <div class="col-12 col-md-3 ">
            <div class="search input-group mt-2 w-100 pe-3">
               <span class="input-group-text bg-white rounded-0" id="basic-addon1">
                  <i class="isax isax-search-status-1"></i>
               </span>
               <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
            </div>
         </div>
         <div class="col-3 col-md-4">
            <div class="input-group mb-2 mt-2">
               <span class="span-btn-default input-group-text rounded-0">
                  <i class="icon isax isax-filter-search"></i>
               </span>
               <button type="button" class="filter-btn bg-white pe-2 px-2" aria-label="Selected-Field" aria-describedby="basic-addon2">Filter</button>
            </div>
         </div>
         <div class="col-4 col-md-5 d-flex justify-content-end">
         <div class="row">
            <div class="mt-2 ">
               <button type="button" class="title-5 button-outline-user pe-3 mx-0 bg-transparent text-blue d-flex align-items-center ps-2"><i class="isax isax-add text-blue fs-3"></i>User</button>
            </div>
         </div>
      </div>
      </div>
      <div class="ms-0">
         <div class="border-bottom mb-3 mt-2"></div>
      </div>
      <div class="table-responsive mt-2">
         <table class="table">
            <thead>
               <tr class="table-rows text-purple title-13">
                  <th class="table-heading ">
                     <div class="d-flex align-items-center px-3">
                        <span>Email Address</span>
                     </div>
                  </th>
                  <th class="table-heading">
                     <div class="d-flex align-items-center">
                        <span>Role(s)</span>
                     </div>
                  </th>
                  <th class="table-heading">
                     <div class="d-flex justify-content-end" style="margin-right: 90px;">
                        <span>Date Updated</span>
                     </div>
                  </th>
               </tr>
            </thead>
            <table></table>
            <tbody>
               <template v-for="(transaction_record,) in transaction_records" :key="transaction_record">
                  <tr class="size-table-data column title-8">
                     <td class="font-table-text py-3 px-4">
                        {{ transaction_record.email_address }}
                     </td>
                     <td class="font-table-blue py-3">{{ transaction_record.role }}</td>
                     <td class="font-table-text text-end py-3 my-auto pe-4">{{ transaction_record.date_updated }}</td>
                  </tr>
               </template>
            </tbody>
         </table>
      </div>
      <!-- pagination  -->
      <nav aria-label="Page navigation" class="ms-3">
         <ul class="pagination justify-content-end pe-3 me-1">
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
</template>

<script>
   export default {
      name: "RequestRefund",
      methods: {},
      data() {
         return {
            transaction_records: [
               {
                  email_address: "juandelacruz@gmail.com",
                  role: "Account Owner",
                  date_updated: "01/01/2023 7:28 AM",
               },
               {
                  email_address: "jaydenlee@gmail.com",
                  role: "Admin",
                  date_updated: "01/01/2023 7:28 AM",
               },
               {
                  email_address: "mariaclara@gmail.com",
                  role: "Admin ",
                  date_updated: "01/01/2023 7:28 AM",
               },
               {
                  email_address: "mark@gmail",
                  role: "Admin ",
                  date_updated: "01/01/2023 7:28 AM",
               },
               {
                  email_address: "karina@gmail.com",
                  role: "Admin ",
                  date_updated: "01/01/2023 7:28 AM",
               },
               {
                  email_address: "thomas@gmail.com",
                  role: "Admin ",
                  date_updated: "01/01/2023 7:28 AM",
               },
               {
                  email_address: "louis@gmail.com",
                  role: "Admin ",
                  date_updated: "01/01/2023 7:28 AM",
               },
               {
                  email_address: "angel@gmail.com",
                  role: "Admin ",
                  date_updated: "01/01/2023 7:28 AM",
               },
               {
                  email_address: "clarice@gmail.com",
                  role: "Admin ",
                  date_updated: "01/01/2023 7:28 AM",
               },
               {
                  email_address: "jaydenlee@gmail.com",
                  role: "Admin ",
                  date_updated: "01/01/2023 7:28 AM",
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

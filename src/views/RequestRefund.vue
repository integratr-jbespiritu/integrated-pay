<template>
   <div class="pad-x-10p ms-1 pad-end-20p">
    <div class="row gx-0 g-0">
      <div class="col">
        <h1 class="fw-bold title-10 pad-top-20p text-nowrap">Refund Requests</h1>
      </div>
      <div class="col my-auto justify-content-end d-flex pad-top-20p  ">
        <div class="row gx-0 g-0">
          <div class="col-auto pt-1 ">
            <i class="icon-arrow isax isax-arrow-left-35"></i>
          </div>
          <div class="col-auto my-auto title-7 margin-x-10p">
            <span>Back</span>
          </div>
        </div>
      </div>
          <div class="row gx-0 g-0 ms-3">
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
        <span class="span-btn-default input-group-text rounded-0 ms-3">
        <i class="icon isax isax-filter-search"></i>
        </span>
        <button type="button" class="filter-btn bg-white w-25" aria-label="Selected-Field" aria-describedby="basic-addon2">Filter</button>
        </div>
        </div>

        <div class="col-12 col-lg-4 col-md-6 col-sm-2 d-flex mt-2">
        <button type="button" class="button-hover-icon-purple bg-transparent">
        <span class="title-5 refund-request translate-middle-y text-nowrap mx-2">
        Refund Request
        </span>
        </button>
        <div>

        <button type="button" class="title-5 button-default-outline pe-2 mx-5  bg-transparent">Export</button>
          </div>
        </div>

      </div>
          <div class="ms-1">
            <div class="border-bottom mb-2 mt-3">
              <p class="mb-3 ms-1">Total result <span class="badge-red bg-transparent title-7 align-items-end ">24</span></p>
            </div>
          </div>
          <div class="table-responsive mt-2 me-3 ">
            <table class="table">
              <thead>
                <tr class="table-rows text-purple title-13">
                  <th class="table-heading">
                    <div class="d-flex align-items-center">
                      <span>Transaction No.</span>
                    </div>
                  </th>
                  <th class="table-heading">
                    <div class="d-flex align-items-center">
                      <span>Amount Refunded</span>
                    </div>
                  </th>
                  <th class="table-heading">
                    <div class="d-flex align-items-center">
                      <span>Offer</span>
                    </div>
                  </th>
                  <th class="table-heading">
                    <div class="d-flex align-items-center">
                      <span>Issued By</span>
                    </div>
                  </th>
                  <th class="table-heading">
                    <div class="d-flex align-items-center">
                      <span>Date Refunded</span>
                    </div>
                  </th>
                  <th class="table-heading">
                    <div class="d-flex align-items-center">
                      <span>Date Issued</span>
                    </div>
                  </th>
                  <th class="table-heading">
                    <div class="d-flex align-items-center">
                      <span>Status</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(transaction_record,) in transaction_records" :key="transaction_record">
                  <tr  class="size-table-data column title-8">
                    <td class="py-3">
                     {{ transaction_record.transaction_no }}</td>
                    <td class="py-3">{{ transaction_record.amount_refunded }}</td>
                    <td class="py-3">
                      <router-link :to="{name: 'consumer.view-transaction'}" class="text-decoration-none text-dark">{{ transaction_record.offer }}</router-link></td>
                    <td class="py-3">{{ transaction_record.issued_by }}</td>
                    <td class="py-3">{{ transaction_record.date_refunded }}</td>
                    <td class="py-3">{{ transaction_record.date_issued }}</td>
                    <td class="py-3">
                      <div class="py-0 my-auto px-2 rounded-0 title-17 w-100 text-center" :class="getStatus(transaction_record.status)">{{
                        transaction_record.status }}</div>
                    </td>
                    </tr>
                </template>
              </tbody>
            </table>
          </div>
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
  methods: {
  
  },
  data() {
    return {
      transaction_records: [
        {
          transaction_no: "2201010000112221",
          amount_refunded: "PHP 10,000.00",
          offer: "Full Refund",
          issued_by: "Maria Clara",
          date_refunded: "01/01/2023 7:28 AM",
          date_issued: "01/01/2023 7:28 AM",
          status: "Requested",
          
        },
        {
          transaction_no: "2201010000112222",
          amount_refunded: "PHP 100.00",
          offer: "Partial Refund",
          issued_by: "Maria Clara",
          date_refunded: "01/01/2023 7:28 AM",
          date_issued: "01/01/2023 7:28 AM",
          status: "Requested",
          
        },
        {
          transaction_no: "2201010000112223",
          amount_refunded: "PHP 10,000.00",
          offer: "Full Refund",
          issued_by: "Maria Clara",
          date_refunded: "01/01/2023 7:28 AM",
          date_issued: "01/01/2023 7:28 AM",
          status: "Authorized",
          
        },
        {
          transaction_no: "2201010000112224",
          amount_refunded: "PHP 8,000.00",
          offer: "Full Refund",
          issued_by: "Maria Clara",
          date_refunded: "01/01/2023 7:28 AM",
          date_issued: "01/01/2023 7:28 AM",
          status: "Authorized",
          
        },
        {
          transaction_no: "2201010000112225",
          amount_refunded: "PHP 5,000.00",
          offer: "Partial Refund",
          issued_by: "Maria Clara",
          date_refunded: "01/01/2023 7:28 AM",
          date_issued: "01/01/2023 7:28 AM",
          status: "Success",
          
        },
        {
          transaction_no: "2201010000112226",
          amount_refunded: "PHP 10,000.00",
          offer: "Full Refund",
          issued_by: "Maria Clara",
          date_refunded: "01/01/2023 7:28 AM",
          date_issued: "01/01/2023 7:28 AM",
          status: "Success",
          
        },
        {
          transaction_no: "2201010000112227",
          amount_refunded: "PHP 1,000.00",
          offer: "Partial Refund",
          issued_by: "Maria Clara",
          date_refunded: "01/01/2023 7:28 AM",
          date_issued: "01/01/2023 7:28 AM",
          status: "Success",
          
        },
        {
          transaction_no: "2201010000112228",
          amount_refunded: "PHP 1,500.00",
          offer: "Partial Refund",
          issued_by: "Maria Clara",
          date_refunded: "01/01/2023 7:28 AM",
          date_issued: "01/01/2023 7:28 AM",
          status: "Success",
          
        },
        {
          transaction_no: "2201010000112229",
          amount_refunded: "PHP 200.00",
          offer: "Full Refund",
          issued_by: "Maria Clara",
          date_refunded: "01/01/2023 7:28 AM",
          date_issued: "01/01/2023 7:28 AM",
          status: "Success",
          
        },
        {
          transaction_no: "2201010000112220",
          amount_refunded: "PHP 1,000.00",
          offer: "Full Refund",
          issued_by: "Maria Clara",
          date_refunded: "01/01/2023 7:28 AM",
          date_issued: "01/01/2023 7:28 AM",
          status: "Success",
          
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

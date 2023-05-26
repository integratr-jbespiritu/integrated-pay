<template>
    <div class="container">
      <div class="">
        <div class="bor-style-solid m-auto">
          <header class="header bg-light lh-1 ms-2">
            <div class="col-12">
              <a class="title-10 text-decoration-none text-dark" href="#">Transactions</a>
            </div>
          </header>
          <div class="align-items-center">
            <div class="gx-0 g-0 mb-5 ms-1">
              <div class="row mt-2 ms-2">
                <template v-for="transaction, index in transactions" :key="transaction">
                  <div class="col-auto me-5 pe-4 align-self-start" :class="index != 2 ? 'border-end' : ''">
                    <div class="title-8 me-3">
                      {{ transaction.label }}
                    </div>
                    <div class="col-auto title-11 text-blue me-3">
                      {{ transaction.value }}
                    </div>
                    <div class="col-auto title-12 text-uppercase mt-2 me-5">
                      {{ transaction.transaction_count }} Transactions
                    </div>
                  </div>
                </template>
              </div>
            </div>
           
            </div>

            <div class="row gx-2 g-0 ms-3">
                 <div class="col-12 col-md-4">
                  <div class="search input-group mt-2 w-100">
                      <span class="input-group-text bg-white rounded-0" id="basic-addon1">
                        <i class="isax isax-search-status-1 fs-4"></i>
                        </span>
                      <input type="text" class="form-control" placeholder="Search" aria-label="Search"
                        aria-describedby="basic-addon1" />
                    </div>
                    </div>
                   <div class="col-12 col-md-4">
                    <div class="input-group mb-2 mt-2">
                        <span class="span-btn-default input-group-text rounded-0">
                          <i class="icon isax isax-filter-search"></i>
                        </span>
                        <button type="button" class="filter-btn bg-white w-25" aria-label="Selected-Field"
                          aria-describedby="basic-addon2">Filter</button>
                      </div>
                 </div>
                  <div class="col-12 col-md-4 d-flex">
                    <button type="button" class="button-hover-icon-purple mt-1">
                            <span class="refund-request translate-middle-y text-nowrap mx-3">
                              Refund Request
                            </span>
                    </button>
                    <div>
                    <button type="button" class="button-default-outline pe-2 mx-5 mt-1">Export</button>
                    </div>
                  </div>
              </div>
              </div>
          <div class="ms-0">
            <div class="border-bottom mb-3 mt-2">
              <p class="mb-4 ms-1">Total result <span class="badge-red bg-transparent title-7">24</span></p>
            </div>
          </div>
          <div class="table-responsive ms-4 mt-2 me-5">
            <table class="table ">
              <thead>
                <tr class="text-purple title-13">
                  <th class="text-start px-20px pb-10px padding-top-none">
                    <div class="d-flex align-items-center">
                      <span class="font-table-column me-10px">Transaction No.</span>
                    </div>
                  </th>
                  <th class="text-start px-20px pb-10px padding-top-none">
                    <div class="d-flex align-items-center">
                      <span class="font-table-column me-10px">Amount</span>
                    </div>
                  </th>
                  <th class="text-start px-20px pb-10px padding-top-none">
                    <div class="d-flex align-items-center">
                      <span class="font-table-column me-10px">Channel</span>
                    </div>
                  </th>
                  <th class="text-start px-20px pb-10px padding-top-none">
                    <div class="d-flex align-items-center">
                      <span class="font-table-column me-10px">Service/Product</span>
                    </div>
                  </th>
                  <th class="text-start px-20px pb-10px padding-top-none">
                    <div class="d-flex align-items-center">
                      <span class="font-table-column me-10px">Status</span>
                    </div>
                  </th>
                  <th class="text-start px-20px pb-10px padding-top-none">
                    <div class="d-flex align-items-center">
                      <span class="font-table-column me-10px">Date</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(transaction_record, index) in transaction_records" :key="transaction_record">
                  <tr data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true"
                    :aria-controls="`collapse${index}`" class="size-table-data column title-8">
                    <td class="font-table-text py-3">{{
                      transaction_record.transaction_no }}</td>
                    <td class="font-table-text py-3">{{ transaction_record.amount }}</td>
                    <td class="font-table-text py-3">{{ transaction_record.channel }}</td>
                    <td class="font-table-text py-3">{{ transaction_record.service_product }}</td>
                    <td class="font-table-text py-3">
                      <div class="py-0 my-auto rounded-0 title-19 text-center px-3" :class="getStatus(transaction_record.status)">{{
                        transaction_record.status }}</div>
                    </td>
                    <td class="text-start px-20px vertical-alignment-center">{{ transaction_record.time_stamp }}</td>
                  </tr>
                  <tr>
                    <td colspan="6">
                      <div :id="`collapse${index}`" class="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <div class="container card-body bg-black text-light w-auto">
                            <div class="row gx-0 g-0">
                              <div class="col">
                                <div class="row gx-0 g-0">
                                  <div class="col-12">
                                    <p class="title-8">Transaction No.</p>
                                    <p class="title-7 text-blue">2201010000112221</p>
                                  </div>
                                  <div class="col-12 mt-4">
                                    <img src="/src/assets/images/gcashlogo.svg" class="img-fluid" alt="Gcashlogo" />
                                    <p class="title-8">Ending in <span class="title-7">2095</span></p>
                                  </div>
                                </div>
                              </div>
                              <div class="col">
                                <div class="row gx-0 g-0">
                                  <div class="col-12">
                                    <div class="row gx-0 g-0">
                                      <div class="col">
                                        <div class="title-11 text-blue">PHP 10,000.00</div>
                                      </div>
                                      <div class="col-auto my-auto justify-content-end d-flex">
                                        <p class="title-5 text-blue">Refund</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-12">
                                    <p class="title-8">[Product Name]</p>
                                  </div>
                                  <div class="col border-bottom-dashed">
                                    &nbsp;
                                  </div>
                                  <div class="col-12 pt-3">
                                    <div class="row gx-0 g-0">
                                      <div class="col">
                                        <p class="title-12">Amount</p>
                                      </div>
                                      <div class="col-auto">
                                        <p class="title-12">9,975.00</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-12">
                                    <div class="row gx-0 g-0">
                                      <div class="col">
                                        <p class="title-12 text-uppercase">Convenience Fee</p>
                                      </div> 
                                      <div class="col-auto">
                                        <p class="title-12">25.0</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col">
                                <div class="row gx-0 g-0">
                                  <div class="col-12 justify-content-center d-flex title-16">
                                    <div class="status-paid w-25 title-16 py-0 px-2 rounded-0 text-center">Paid</div>
                                  </div>
                                  <div class="col-12 justify-content-center d-flex">
                                    <div class="title-8 pt-1">01/01/2023 7:28 AM</div>
                                  </div>
                                  <div class="col-12 pt-3 justify-content-center d-flex">
                                    <p class="title-14">Juan Dela Cruz</p>
                                  </div>
                                  <div class="col-12 justify-content-center d-flex">
                                    <p class="title-8">juandelacruz@gmail.com</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
           <!-- pagination  -->
             <nav aria-label="Page navigation" class="ms-4">
              <ul class="pagination justify-content-end pe-5 me-3">
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
   
    <Teleport to="body">
      <ModalLarge :show="refund_request_modal" @close="refund_request_modal = false" class="w-100">
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
import ModalLarge from "../components/ModalLarge2.vue"

export default {
  name: "DashBoard",
  components: {
    ModalLarge
  },
  data() {
    return {
      refund_request_modal: false,
      transactions: [
        {
          label: "Expected Amount",
          value: "PHP 100,000.00",
          transaction_count: "24",
        },
        {
          label: "Total Amount of Completed Transactions",
          value: "PHP 80,000.00",
          transaction_count: "18",
        },
        {
          label: "Total Amount of Refunded Transactions",
          value: "PHP 20,000.00",
          transaction_count: "6",
        },
      ],
      transaction_records: [
        {
          transaction_no: "2201010000112221",
          amount: "PHP 10,000.00",
          channel: "Over-the-counter",
          service_product: "Business Licensing Permit",
          status: "Paid",
          time_stamp: "01/01/2023 7:28 AM",
        },
        {
          transaction_no: "2201010000112222",
          amount: "PHP 100.00",
          channel: "GCash",
          service_product: "Community Tax Certificate",
          status: "Refunded",
          time_stamp: "01/01/2023 7:28 AM",
        },
        {
          transaction_no: "2201010000112223",
          amount: "PHP 10,000.00",
          channel: "Debit/Credit",
          service_product: "Real Property Tax",
          status: "Pending",
          time_stamp: "01/01/2023 7:28 AM",
        },
        {
          transaction_no: "2201010000112224",
          amount: "PHP 8,000.00",
          channel: "Debit/Credit",
          service_product: "Business Licensing Permit",
          status: "Paid",
          time_stamp: "01/01/2023 7:28 AM",
        },
        {
          transaction_no: "2201010000112225",
          amount: "PHP 5,000.00",
          channel: "Debit/Credit",
          service_product: "Business Licensing Permit",
          status: "Refunded",
          time_stamp: "01/01/2023 7:28 AM",
        },
        {
          transaction_no: "2201010000112226",
          amount: "PHP 100,000.00",
          channel: "Debit/Credit",
          service_product: "Business Licensing Permit",
          status: "Paid",
          time_stamp: "01/01/2023 7:28 AM",
        },
        {
          transaction_no: "2201010000112227",
          amount: "PHP 1,000.00",
          channel: "Debit/Credit",
          service_product: "Real Property Tax",
          status: "Paid",
          time_stamp: "01/01/2023 7:28 AM",
        },
        {
          transaction_no: "2201010000112228",
          amount: "PHP 1,500.00",
          channel: "Debit/Credit",
          service_product: "Community Tax Certificate",
          status: "Pending",
          time_stamp: "01/01/2023 7:28 AM",
        },
        {
          transaction_no: "2201010000112229",
          amount: "PHP 200.00",
          channel: "Debit/Credit",
          service_product: "Local Civil Registry",
          status: "Refunded",
          time_stamp: "01/01/2023 7:28 AM",
        },
        {
          transaction_no: "2201010000112230",
          amount: "PHP1,000.00",
          channel: "Debit/Credit",
          service_product: "Building Permit",
          status: "Paid",
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

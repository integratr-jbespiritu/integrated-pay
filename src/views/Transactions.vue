<template>
  <div class="gx-0 g-0">
    <header class="header bg-light lh-1">
      <div class="col-12 mx-1">
        <a class="title-10 text-decoration-none text-dark">Transactions</a>
      </div>
    </header>
    <div class="row gx-0 g-0 px-2">
      <div class="row mt-2 d-flex justify-content-between pb-5">
        <template v-for="transaction, index in transactions" :key="transaction">
          <div class="col-auto align-self-start lh-sm" :class="index != 2 ? 'border-end' : ''">
            <div class="col-auto title-8 pe-5 me-5  ">
              {{ transaction.label }}
            </div>
            <div class="col-auto title-11 text-blue">
              {{ transaction.value }}
            </div>
            <div class="col-auto title-12 text-uppercase mt-2 pb-">
              {{ transaction.transaction_count }} Transactions
            </div>
          </div>
        </template>
      </div>
      <div class="row gx-0 g-0">
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
        <div class="col-9 col-md-4 d-flex pt-2 d-flex justify-content-end">
          <button type="button" class="button-hover-icon-purple bg-transparent">
            <span class="title-5 refund-request translate-middle-y text-nowrap">
              Refund Request
            </span>
          </button>
          <div class="px-3">
            <button type="button" class="title-5 button-default-outline pe-2 bg-transparent">Export</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-4">
      <div class="border-bottom mb-3 mt-2">
        <p class="mb-4">Total result <span class="badge-red bg-transparent title-7">24</span></p>
      </div>
    </div>
    <div class="table-responsive px-3">
      <table class="table">
        <thead>
          <tr class="table-rows text-purple title-13">
            <th class="text-start px-4" width="18%">
              <div class="d-flex align-items-center">
                <span class="font-table-column">Transaction No.</span>
              </div>
            </th>
            <th class="text-start">
              <div class="d-flex align-items-center">
                <span class="font-table-column">Amount</span>
              </div>
            </th>
            <th class="text-start">
              <div class="d-flex align-items-center">
                <span class="font-table-column">Channel</span>
              </div>
            </th>
            <th class="text-start">
              <div class="d-flex align-items-center">
                <span class="font-table-column">Service/Product</span>
              </div>
            </th>
            <th class="text-start">
              <div class="d-flex align-items-center">
                <span class="font-table-column">Status</span>
              </div>
            </th>
            <th class="text-start" width="15%">
              <div class="d-flex align-items-center">
                <span class="font-table-column">Date</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(transaction_record, index) in transaction_records" :key="transaction_record">
            <tr data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true"
              :aria-controls="`collapse${index}`"
              class="size-table-data column title-8 title-8 border-color-white transaction-table-hover">
              <td class="py-4 px-4">{{ transaction_record.transaction_no }}</td>
              <td class="py-4">{{ transaction_record.amount }}</td>
              <td class="py-4">{{ transaction_record.channel }}</td>
              <td class="py-4">{{ transaction_record.service_product }}</td>
              <td class="py-4">
                <div class="py-0 my-auto rounded-0 title-19 text-center me-5 px-1"
                  :class="getStatus(transaction_record.status)">{{ transaction_record.status }}</div>
              </td>
              <td class="py-4 text-start">{{ transaction_record.time_stamp }}</td>
            </tr>
            <span class="mt-1"></span>

            <!-- Accordion Collapse -->
            <tr>
              <td colspan="6">
                <div :id="`collapse${index}`" class="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="container card-body bg-black text-light w-auto" style="min-width: 100%;">
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
                                  <p class="title-5 text-blue" @click="refund_request_modal = true">Refund</p>
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
                              <div class="status-paid w-25 title-17 py-0 px-2 rounded-0 text-center">Paid</div>
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
import ModalLarge from "../components/ModalLarge2.vue";

export default {
  name: "DashBoard",
  components: {
    ModalLarge,
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

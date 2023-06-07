<template>
  <div class="gx-0 g-0">
    <header class="header bg-light lh-1">
      <div class="col-12">
        <a class="title-10 text-decoration-none text-dark">Disbursement</a>
      </div>
    </header>
    <div class="row gx-0 g-0 px-3">
      <div class="align-items-center">
        <div class="gx-0 g-0 mb-5 ms-1">
          <div class="row mt-2">
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
      <div class="row gx-0 g-0">
          <div class="col-12 col-md-4">
              <div class="search input-group w-100 pe-4 pt-2">
                <span class="input-group-text bg-white rounded-0 py-2" id="basic-addon1">
                  <i class="isax isax-search-status-1 fs-4"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search" aria-label="Search"
                  aria-describedby="basic-addon1" />
              </div>
            </div>
            <div class="col-12 col-md-4 pe-5">
              <div class="input-group mb-2 pt-2 pe-5">
                <span class="span-btn-default input-group-text rounded-0 py-2">
                  <i class="icon isax isax-filter-search"></i>
                </span>
                <button type="button" class="filter-btn bg-white w-25" aria-label="Selected-Field"
                  aria-describedby="basic-addon2">Filter</button>
              </div>
            </div>
            <div class="col-12 col-md-4 d-flex pt-2">
              <button type="button" class="button-hover-icon-purple bg-transparent">
                <span class="title-5 refund-request translate-middle-y text-nowrap mx-2">
                  Refund Request
                </span>
              </button>
              <div class="">
                <button type="button" class="title-5 button-default-outline pe-2 mx-5 bg-transparent">Export</button>
              </div>
            </div>
      </div>
    </div>
    <div class="px-3">
      <div class="border-bottom mb-3 mt-2">
        <p class="mb-4 ms-1">Total result <span class="badge-red bg-transparent title-7">24</span></p>
      </div>
    </div>
    <div class="table-responsive ms-4 mt-2 me-5">
        <table class="table">
          <thead>
            <tr class="text-purple title-13">
              <th class="text-start" width="15%">
                <div class="d-flex align-items-center">
                  <span class="font-table-column me-10px">Amount</span>
                </div>
              </th>
              <th class="text-start" width="20%">
                <div class="d-flex align-items-center">
                  <span class="font-table-column me-10px">Channel</span>
                </div>
              </th>
              <th class="text-start" width="18%">
                <div class="d-flex align-items-center">
                  <span class="font-table-column me-10px">Gross Amount</span>
                </div>
              </th>
              <th class="text-start" width="18%">
                <div class="d-flex align-items-center">
                  <span class="font-table-column me-10px">Net Amount</span>
                </div>
              </th>
              <th class="text-start" width="18%">
                <div class="d-flex align-items-center">
                  <span class="font-table-column me-10px">Disbursement </span>
                </div>
              </th>
              <th class="text-start" width="10%">
                <div class="d-flex align-items-center">
                  <span class="font-table-column me-10px">Status</span>
                </div>
              </th>
]            </tr>
              <span class="mt-1"></span>
          </thead>
          <tbody>
            <template v-for="(transaction_record, index) in transaction_records" :key="transaction_record">
              <tr data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`collapse${index}`" class="size-table-data column title-8">
                <td class="font-table-text py-3">{{ transaction_record.amount }}</td>
                <td class="py-3 pe-5"><img :src="transaction_record.bank_channel" class="img-fluid" /> {{ transaction_record.channel }}</td>
                <td class="ms-2 py-3">{{ transaction_record.grossAmount }}</td>
                <td class="font-table-text py-3">{{ transaction_record.netAmount }}</td>
                <td class="font-table-text py-3">{{transaction_record.disbursementRelease }}</td>
                <td class="font-table-text py-3 text-start">
                  <div class="py-0 my-auto rounded-0 title-19 text-center px-3" :class="getStatus(transaction_record.status)">{{ transaction_record.status }}</div>
                </td>
              </tr>
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
                                  <p class="title-5 text-blue" @click="refund_request_modal=true">Refund</p>
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
                              <div class="status-paid w-25 title-17 py-0 px-2 rounded-0 text-center">Paid
                              </div>
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
     <ModalSmall :show="refund_request_modal" @close="refund_request_modal = false" class="w-100">
        <template #header>
           <div class="container pad-x-10p">
              <div class="row gx-0 g-0">
                 <div class="col">
                    <div class="title-10 ms-2" style="line-height: 25px;">
                       Issue Refund
                    </div>
                    <div class="col text-nowrap ms-2">Provide necessary information for the refund request.</div>
                 </div>
                 <div class="col d-flex justify-content-end">
                    <button @click="refund_request_modal =false" class="icon-purple isax isax-close-circle5"></button>
                 </div>
              </div>
           </div>
        </template>
        <template #body>
           <div class="row gx-0 g-0">
              <form class="form-group modal-form">
                 <div class="form-floating modal-floating ">
                    <select class="form-select modal-select rounded-0 title-21 shadow-none" id="floatingselect" aria-label="Floating label select">
                       <option selected>[Partial Admin]</option>
                    </select>
                    <label for="floatingSelect" class="modal-hover title-23">Offer</label>
                 </div>
                 <div class="form-floating modal-floating mb-3">
                    <select class="form-select modal-select mt-3 rounded-0 title-21 shadow-none" id="floatingselect mt-5" aria-label="Floating label select">
                       <option selected>BPI</option>
                    </select>
                    <label for="floatingSelect" class="mt-3 title-23">Bank</label>
                 </div>
                 <div class="input-group  mb-3">
                    <form class="form-floating modal-floating ">
                       <input type="text" class="input-height form-control title-21 shadow-none" id="floatingInputValue" placeholder="name@example.com" value="123456789012" />
                       <label for="floatingInputValue" class="title-23">Account Number</label>
                    </form>
                 </div>
                 <div class="input-group  mb-3">
                    <form class="form-floating modal-floating">
                       <input type="text" class="input-height form-control title-21 shadow-none" id="floatingInputValue" placeholder="name@example.com" value="PHP 10,000.00" />
                       <label for="floatingInputValue" class="title-23 ">Amount</label>
                    </form>
                 </div>
                 <div class="input-group ">
                    <form class="form-floating modal-floating">
                       <input type="text" class="input-height form-control title-21 shadow-none" style="height: 100px; padding-bottom: 50px;" id="floatingInputValue" placeholder="name@example.com" value="Double Payment" />
                       <label for="floatingInputValue " class="title-23 ">Reason</label>
                    </form>
                 </div>
              </form>
           </div>
        </template>
        <template #footer>
           <div class="row d-flex justify-content-center me-3">
              <button class="button-default bg-purple bg-transparent text-purple title-21">Cancel</button>
              <button class="button-x color-white text-nowrap button-process rounded title-21">Process Refund</button>
           </div>
        </template>
     </ModalSmall>

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
            amount: "PHP 10,000.00",
            bank_channel: "/src/assets/images/landbank-sm.svg",
            channel: "Landbank",
            grossAmount: "PHP 100,000.00",
            netAmount: "PHP 95,000.00",
            disbursementRelease: "01/01/2023 7:28AM",
            status: "Pending",
          },
          {
            amount: "PHP 100.00",
            bank_channel: "/src/assets/images/landbank-sm.svg",
            channel: "Landbank",
            grossAmount: "PHP 100,000.00",
            netAmount: "PHP 95,000.00",
            disbursementRelease: "01/01/2023 7:28AM",
            status: "Completed",
          },
          {
            amount: "PHP 10,000.00",
            bank_channel: "/src/assets/images/landbank-sm.svg",
            channel: "Landbank",
            grossAmount: "PHP 100,000.00",
            netAmount: "PHP 95,000.00",
            disbursementRelease: "01/01/2023 7:28AM",
            status: "Completed",
          },
          {
            amount: "PHP 8,000.00",
            bank_channel: "/src/assets/images/landbank-sm.svg",
            channel: "Landbank",
            grossAmount: "PHP 100,000.00",
            netAmount: "PHP 95,000.00",
            disbursementRelease: "01/01/2023 7:28AM",
            status: "Completed",
          },
          {
            amount: "PHP 5,000.00",
            bank_channel: "/src/assets/images/landbank-sm.svg",
            channel: "Landbank",
            grossAmount: "PHP 100,000.00",
            netAmount: "PHP 95,000.00",
            disbursementRelease: "01/01/2023 7:28AM",
            status: "Completed",
          },
          {
            amount: "PHP 100,000.00",
            bank_channel: "/src/assets/images/postbank-sm.svg",
            channel: "Postbank",
            grossAmount: "PHP 100,000.00",
            netAmount: "PHP 95,000.00",
            disbursementRelease: "01/01/2023 7:28AM",
            status: "Completed",
          },
          {
            amount: "PHP 1,000.00",
            bank_channel: "/src/assets/images/postbank-sm.svg",
            channel: "Postbank",
            grossAmount: "PHP 100,000.00",
            netAmount: "PHP 95,000.00",
            disbursementRelease: "01/01/2023 7:28AM",
            status: "Completed",
          },
          {
            amount: "PHP 1,500.00",
            bank_channel: "/src/assets/images/postbank-sm.svg",
            channel: "Postbank",
            grossAmount: "PHP 100,000.00",
            netAmount: "PHP 95,000.00",
            disbursementRelease: "01/01/2023 7:28AM",
            status: "Completed",
          },
          {
            amount: "PHP 200.00",
            bank_channel: "/src/assets/images/postbank-sm.svg",
            channel: "Postbank",
            grossAmount: "PHP 100,000.00",
            netAmount: "PHP 95,000.00",
            disbursementRelease: "01/01/2023 7:28AM",
            status: "Completed",
          },
          {
            amount: "PHP 1,000.00",
            bank_channel: "/src/assets/images/postbank-sm.svg",
            channel: "Postbank",
            grossAmount: "PHP 100,000.00",
            netAmount: "PHP 95,000.00",
            disbursementRelease: "01/01/2023 7:28AM",
            status: "Completed",
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

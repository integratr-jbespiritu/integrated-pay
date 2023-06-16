<template>
  <div class="container">
    <div class="gx-0 g-0">
      <div class="mt-2">
        <header class="header bg-light lh-1">
          <div class="col-12">
            <a class="title-10 text-decoration-none text-dark" href="#">Disbursement</a>
          </div>
        </header>
        <div class="align-items-center">
          <div class="gx-0 g-0 mb-5 ">
            <div class="row mt-2 ms-1">
              <div class="align-middle"></div>
              <div class="col-auto me-5 pe-4 align-self-start border-end">
                <div class="title-8 me-3">
                  Expected Amount
                </div>
                <div class="col-auto title-11 text-blue me-3">
                  PHP 100,000.00
                </div>
                <div class="col-auto title-12 text-uppercase mt-2 me-5">
                  10 Transactions
                </div>
                <div class="d-flex mt-3">
                  <i class="fs-4 isax isax-calendar-1"></i> <p class="title-12 ms-2 mt-1">Disbursement Release</p>
                  <p class="ms-2 title-13">Mon, Feb 01, 2023</p>
                  <a class="text-decoration-none text-dark disbursement-tooltip text-center ">
                    <i class="isax isax-info-circle5" data-bs-placement="top" data-toggle="tooltip"></i>
                    <span class="tooltip-text title-15">
                      Check the payout release schedule to know when you'll receive your funds.
                    </span>
                  </a>
              </div>
              <div class="d-flex">
                  <i class="fs-4 isax isax-calendar-1"></i> <p class="title-12 ms-2 mt-1">Receive on or before</p>
                  <p class="ms-2 title-13">Tue, Feb 02, 2023</p>
                  <a class="text-decoration-none text-dark disbursement-tooltip text-center ">
                    <i class="isax isax-info-circle5" data-bs-placement="top" data-toggle="tooltip"></i>
                    <span class="tooltip-text title-15">
                      Check the payout release schedule to know when you'll receive your funds.
                    </span>
                  </a>
              </div>
              </div>
              <div class="col-auto me-5  align-self-start border-end">
                <div class="title-8 me-3">
                  Disbursement Release Schedule
                </div>
                <div class="col-auto title-11 text-blue me-3 d-flex">
                  <i class="fs-4 isax isax-calendar-1"></i> <p class="title-11 text-blue mx-3">Monthly</p> <i class="isax isax-arrow-down5"></i>
                </div>
                <div class="col-auto title-12 text-Capitalletter mt-2 me-5">
                  <p class="title-7">Every 1st day</p>
                  <p class=" lh-1 text-wrap">Disbursements occurring on a holiday will</p>    
                  <p style="bottom:10px; text-wrap">be handled the following banking day.</p>
                </div>
              </div>
              <div class="col-auto me-5 pe-4 align-self-start">
                <div class="title-8 me-3">
                  Bank/E-Wallet Account
                </div>
                <div class="col-auto title-11 text-blue me-3 d-flex">
                  <i class="fs-4 isax isax-card"></i> <p class="lh-1 title-11 text-blue mx-3">Department of </p> <i class="isax isax-arrow-right-25"></i> 
                </div>
               <p class="lh-1 title-11 text-blue mx-4" style="left:16px;"> Lorem Ipsum</p>
                <div class="col-auto title-12 text-Capitalletter mt-2 me-5">
                  <p class="title-7">LandBank</p>
                  <p class=" lh-1 text-wrap">department@loremipsum.gov.ph</p>
                  <p style="bottom:10px;"> Account ID: 11230981812.</p>
                </div>
              </div>
              
              <!-- <template v-for="transaction, index in transactions" :key="transaction">
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
                  <div class="col-12 title-12 mt-2 me-5 border">
                   <div class="title-13"> <i class="fs-4 isax isax-calendar-1"></i> <p class="title-12">Disbursement Release</p> {{ transaction.release }}</div>
                  </div>
                </div>
              </template> -->
            </div>
          </div>
        </div>
        <div class="row gx-0 g-0 mt-3">
        <div class="col-12 col-md-3 d-flex justify-content-start align-items-start px-3">
          <div class="search input-group mt-2 w-100 pe-3">
            <span class="input-group-text bg-white rounded-0" id="basic-addon1">
              <i class="isax isax-search-status-1 fs-4"></i>
            </span>
            <input type="text" class="form-control" placeholder="Search" aria-label="Search"
              aria-describedby="basic-addon1" />
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="input-group mb-2 mt-2 ps-3 ps-md-0">
            <span class="span-btn-default input-group-text rounded-0">
              <i class="icon isax isax-filter-search"></i>
            </span>
            <button type="button" class="filter-btn bg-white pe-1 px-3" aria-label="Selected-Field"
              aria-describedby="basic-addon2">Filter</button>
          </div>
        </div>
        <div class="col-9 col-md-5 d-flex align-items-end justify-content-start justify-content-md-end mb-2 mt-2 px-3">
          <button type="button" class="button-default-outline title-5 pe-2 bg-transparent mx-4 h-100 me-3">Export</button>
        </div>
      </div>
      </div>
      <div class="ms-3">
        <div class="border-bottom mb-3 mt-2">
          <p class="mb-4">Total result <span class="badge-red bg-transparent title-7">22</span></p>
        </div>
      </div>

      <!-- TABLES >> -->
      <div class="table-responsive px-5">
        <table class="table">
          <thead>
            <tr class="table-rows text-purple title-13">
              <th class="text-start px-3" width="18%">
                <div class="d-flex align-items-center">
                  <span class="font-table-column">Amount</span>
                </div>
              </th>
              <th class="text-start px-3">
                <div class="d-flex align-items-center">
                  <span class="font-table-column">Channel</span>
                </div>
              </th>
              <th class="text-start px-3">
                <div class="d-flex align-items-center">
                  <span class="font-table-column">Gross Amount</span>
                </div>
              </th>
              <th class="text-start px-3">
                <div class="d-flex align-items-center">
                  <span class="font-table-column">Net Amount</span>
                </div>
              </th>
              <th class="text-start px-3">
                <div class="d-flex align-items-center">
                  <span class="font-table-column">Disbursement Release </span>
                </div>
              </th>
              <th class="text-start px-3">
                <div class="d-flex align-items-center">
                  <span class="font-table-column">Status</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(transaction_record, index) in transaction_records" :key="transaction_record">
              <tr data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`collapse${index}`" class="size-table-data column title-8 border-color-white transaction-table-hover">
                <td class="py-4 px-3">{{ transaction_record.amount }}</td>
                <td class="py-4 px-3 z-index-front"><img :src="transaction_record.bank_channel" class="img-fluid" /> {{ transaction_record.channel }}</td>
                <td class="py-4 px-3">{{ transaction_record.grossAmount }}</td>
                <td class="py-4 px-3">{{ transaction_record.netAmount }}</td>
                <td class="py-4 px-3">{{transaction_record.disbursementRelease }}</td>
                <td class="py-4 text-start">
                  <div class="py-0 my-auto rounded-0 title-19 text-center px-4" :class="getStatus(transaction_record.status)">{{ transaction_record.status }}</div>
                </td>
              </tr>
              <span class="mt-1"></span>

              <!-- Accordion Collapse -->
              <tr>
                <td colspan="6">
                  <div :id="`collapse${index}`" class="accordion-collapse collapse" aria-labelledby="headingOne" 
                  data-bs-parent="#accordionExample">
                    <div class="accordion-body ">
                      <div class="container pad-bottom-20p card-body bg-light text-dark w-auto border border-purple px-5 pb-20px" style="min-width: 100%;">
                        <div class="row gx-0 g-0">
                          <div class="col">
                            <div class="row gx-0 g-0">
                              <div class="col-12">
                                <p class="title-6 text-dark">Payment Details</p>
                              </div>
                            </div>
                          </div>
                          <div class="text-purple col">
                            <div class="row gx-0 g-0">
                              <div class="col-12 justify-content-end d-flex">
                                <i class="icon isax isax-printer me-2"></i>
                                <span><p class="title-7">Print</p></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom mt-3"></div> 
                        <!-- 2nd column -->
                        <div class="row gx-0 g-0">
                          <div class="col">
                            <div class="row gx-0 g-0 text-dark">
                              <div class="col-12">
                                <div class="title-12 pt-1 mt-3">Transaction No.</div>
                                <div class="title-8 pt-1 fw-bold">2201010000112221</div>
                                <div class=" status-in-transit w-5 text-center mt-2 title-17 ">In Transit</div>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="row gx-0 g-0">
                              <div class="col-12 justify-content-end d-flex text-dark">
                                <div class="title-12 pt-1" style="top:17px;" >GROSS AMOUNT</div>
                              </div>
                              <div class="col-12 d-flex justify-content-end title-11 text-dark" style="top:17px;">PHP 100,000.00</div>
                              <div class="col-12 justify-content-end d-flex text-dark title-12" style="top:17px;">Feb 01, 2023 at 7:28:00 AM PST</div>
                            </div>
                          </div>
                        </div>
                        <!-- third column -->   
                        <table class="table table-borderless" >
                        </table>
                        <div class="border-bottom mt-3" ></div>
                        <div class="col">
                          <div class="row gx-0 g-0">
                            <div class="col-12 d-flex">
                              <div class="col-3 text-dark title-12 my-auto">PAYMENT SENT TO</div>
                              <div class=" col-2 text-dark title-8 my-auto text-wrap">Department of Lorem Ipsum</div>
                              <div class="col-4 ms-5 text-dark title-8 my-auto">department@loremipsum.gov.ph</div>
                              <div class="col-3 text-dark title-3 d-flex justify-content-center col-md-3">
                                <img src="/src/assets/images/landbank-md.svg" class="img-fluid md-5 " />
                                <span class="ms-3 title-8 my-5 text-nowrap me-5">Ending in <strong>2095</strong></span>
                              </div>
                            </div>
                            <div class="w-100 mb-4"></div>
                            <div class="col-12 d-flex">
                              <div class="col-3 text-dark title-12 my-auto " style="bottom:50px;">SOURCE</div>
                              <div class="col-2 text-dark title-8 my-auto " style="bottom:50px;">Integratr Corp</div>
                              <div class="col-4 ms-5 text-dark title-8 my-auto" style="bottom:50px;">loremipsum@integratrcorp.com</div>
                              <div class="me-5 col-3 d-flex justify-content-center" style="bottom:50px;">
                                <img src="/src/assets/images/integratr-logo-md.svg" class="img-fluid me-5" />
                              </div>
                            </div>
                          </div>
                        </div>  
                        <div class="border-bottom mt-3" style="bottom:50px;"></div>
                        <div class="col">
                          <div class="row gx-0 g-0">
                            <div class="col-12 d-flex mt-3">
                              <div class="col-3 text-dark title-12 my-auto" style="bottom:50px;">PAYMENT DETAILS</div>
                              <div class="col-2 text-dark title-12 my-auto text-wrap" style="bottom:50px;">GROSS AMOUNT</div>
                              <div class="col-5 ms-5 text-dark title-8 my-auto" style="bottom:50px;"></div>
                              <div class="col-2 text-dark title-12 d-flex justify-content-center" style="bottom:50px;">
                                <div class=" me-5 text-dark title-12 my-auto ms-5" style="bottom:3px;">100,000.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">
                          <div class="row gx-0 g-0">
                            <div class="col-12 d-flex">
                                <div class="col-3 text-dark title-12 my-auto" style="bottom:50px;"></div>
                              <div class="col-2 text-dark title-12 my-auto text-wrap" style="bottom:50px;">CONVENIENCE FEE</div>
                              <div class="col-4 ms-5 text-dark title-8 my-auto" style="bottom:50px;"></div>
                              <div class="col-3 text-dark title-12 d-flex justify-content-sm-end" style="bottom:50px;">
                                <div class=" me-4 col-4 text-dark title-12 my-auto" style="bottom:3px;">5,000.00</div>
                              </div>
                            </div>
                          </div>
                          <div class="w-100"></div> 
                          <div class="col-8 mt-3 "></div>
                            <div class="row align-items-start">
                              <div class="col-3">
                              </div>
                              <div class="col-9 border-bottom-dashed-dark mt-3" style="bottom:50px;"> </div>
                              </div>
                              <div class="w-100 mt-3"></div>

                              <div class="row gx-0 g-0">
                            <div class="col-12 d-flex">
                                <div class="col-3 text-dark title-12 my-auto"></div>
                              <div class="col-2 text-dark title-12 my-auto text-wrap">NET AMOUNT</div>
                              <div class="col-4 ms-5 text-dark title-8 my-auto"></div>
                              <div class="col-3 text-dark title-12 d-flex justify-content-sm-end">
                                <div class="me-4 col-4 text-dark title-12 my-auto">95,000.00</div>
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
            release: "Mon, Feb 01, 2023",
          },
          {
            label: "Disbursement Release Schedule",
            value: "PHP 80,000.00",
            transaction_count: "18",
          },
          {
            label: "Bank/E-Wallet Account",
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
 

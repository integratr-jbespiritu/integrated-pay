<template>
  <Sidebar />
  <Logoheader />
  <div class="transactions container bg-light ps-5 mt-2" style="margin-left: 11rem;">
    <div class="row mx-5">
      <header class="header bg-light lh-1 p-3 ms-1 px-1">
        <div class="col-12">
          <a class="title-2 text-decoration-none text-dark mx-2" href="#">Transactions</a>
        </div>
      </header>
      <div class="gx-4 g-3 mb-5 ms-2">
        <div class="row gx-5 g-0">
          <template v-for="transaction, index in transactions" :key="transaction">
            <div class="col-auto pe-4 me-5 align-self-start" :class="index!=2?'border-end':''">
              <div class="title-8">
                {{transaction.label}}
              </div>
              <div class="col-auto title-11 text-blue me-5">
                {{transaction.value}}
              </div>
              <div class="col-auto title-12 text-uppercase mt-2">
                {{transaction.transaction_count}} Transactions
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="search input-group px-4">
        <span class="input-group-text bg-light rounded-0" id="basic-addon1"><i class="isax isax-search-status-1 fs-4"></i></span>
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
      </div>
      <div class="col d-flex">
        <div class="input-group mb-3 w-75">
          <span class="btn-default input-group-text"> <i class="icon isax isax-filter-search fs-5"></i></span>
          <button type="button" class="filter-btn w-25 h-100 border-1 bg-white" aria-label="Selected-Field" aria-describedby="basic-addon2">Filter</button>
        </div>
      </div>
      <div class="col d-flex justify-content-end">
        <div class="row">
          <div class="col-md">
            <button type="button" class="click-hover-icon refund-request">
              <span class="position-absolute top-50 end-0 translate-middle-y me-3 text-purple">Refund Request</span>
            </button>
          </div>
          <div class="col-md"><button type="button" class="default-outline">Export</button></div>
        </div>
      </div>
    </div>
    <div class="col title-7 border-bottom">
      <div class="mx-5 px-4">Total result <span class="badge-red bg-transparent">24</span></div>
    </div>
    <div class="row  gx-0 g-0">
      <div class="table-responsive px-5 ms-3">
        <table class="table table-bordered table-padding">
          <thead>
            <tr class="text-purple title-13">
              <th scope="col">Transaction No.</th>
              <th scope="col">Amount</th>
              <th scope="col">Channel</th>
              <th scope="col">Service/Product</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
            <tbody>
            <tr data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" class="" v-for="transaction_record in transaction_records" :key="transaction_record">
                <td scope="row">
                  {{ transaction_record.transaction_no }}
                </td>
                <td>{{ transaction_record.amount }}</td>
                <td>{{ transaction_record.channel }}</td>
                <td>{{ transaction_record.service_product }}</td>
                <td><div  class="btn py-0 rounded-0 title-16 w-75" :class="getStatus(transaction_record.status)">{{ transaction_record.status }}</div></td>
                <td>{{ transaction_record.time_stamp }}</td>
            </tr>
            <tr>
              <td colspan="6">
                 <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="container card card-body bg-black text-light w-auto">
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
                            <div class="col  border-bottom-dashed">
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
                                    <p class="title-12">Convenience Fee</p>
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
                                <div class="btn py-0 rounded-0 status-paid w-25 title-16">Paid</div>
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
          </tbody>
        </table>
        <div class="col d-flex justify-content-end align-items-end">
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
</template>

<script>
  import Sidebar from "../components/Sidebar.vue";
  import Logoheader from '../components/Logoheader.vue';

  export default {
    name: "DashBoard",
    components: {
      Sidebar,
      Logoheader,
    },
    data() {
      return {
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
          transaction_no: '2201010000112221',
          amount: 'PHP 10,000.00',
          channel: 'Over-the-counter',
          service_product: 'Business Licensing Permit',
          status: 'Paid',
          time_stamp: '01/01/2023 7:28 AM',
        },
        {
          transaction_no: '2201010000112222',
          amount: 'PHP 100.00',
          channel: 'GCash',
          service_product: 'Community Tax Certificate',
          status: 'Refunded',
          time_stamp: '01/01/2023 7:28 AM',
        },
        {
          transaction_no: '2201010000112223',
          amount: 'PHP 10,000.00',
          channel: 'Debit/Credit',
          service_product: 'Real Property Tax',
          status: 'Pending',
          time_stamp: '01/01/2023 7:28 AM',
        },
        {
          transaction_no: '2201010000112224',
          amount: 'PHP 8,000.00',
          channel: 'Debit/Credit',
          service_product: 'Business Licensing Permit',
          status: 'Paid',
          time_stamp: '01/01/2023 7:28 AM',
        },
        {
          transaction_no: '2201010000112225',
          amount: 'PHP 5,000.00',
          channel: 'Debit/Credit',
          service_product: 'Business Licensing Permit',
          status: 'Refunded',
          time_stamp: '01/01/2023 7:28 AM',
        },
        {
          transaction_no: '2201010000112226',
          amount: 'PHP 100,000.00',
          channel: 'Debit/Credit',
          service_product: 'Business Licensing Permit',
          status: 'Paid',
          time_stamp: '01/01/2023 7:28 AM',
        },
        {
          transaction_no: '2201010000112227',
          amount: 'PHP 1,000.00',
          channel: 'Debit/Credit',
          service_product: 'Real Property Tax',
          status: 'Paid',
          time_stamp: '01/01/2023 7:28 AM',
        },
        {
          transaction_no: '2201010000112228',
          amount: 'PHP 1,500.00',
          channel: 'Debit/Credit',
          service_product: 'Community Tax Certificate',
          status: 'Pending',
          time_stamp: '01/01/2023 7:28 AM',
        },
        {
          transaction_no: '2201010000112229',
          amount: 'PHP 200.00',
          channel: 'Debit/Credit',
          service_product: 'Local Civil Registry',
          status: 'Refunded',
          time_stamp: '01/01/2023 7:28 AM',
        },
        {
          transaction_no: '2201010000112230',
          amount: 'PHP1,000.00',
          channel: 'Debit/Credit',
          service_product: 'Building Permit',
          status: 'Paid',
          time_stamp: '01/01/2023 7:28 AM',
        }
      ]
      };
    },

    methods: {
      getStatus(data){
  return `status-${data.toLowerCase()}`;
}
    }
  };
</script>
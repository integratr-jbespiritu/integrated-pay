<template>
    <Sidebar/>
    <Header />
    <div class="transactions container bg-light px-5 mt-2" style="margin-left: 11rem;">
        <div class="row mx-5">
            <header class="header bg-light lh-1 p-3 ms-1 px-1">
                <div class="col-12">
                <a class="title-2 text-decoration-none text-dark mx-2" href="#">Transactions</a>
                </div>
            </header>
            <div class="gx-4 g-3 mb-5 ms-2" style="margin-left: 2rem;">
            <div class="row gx-5 g-0">
                <template v-for = "transaction, index in transactions" :key="transaction">
                    <div class="col-auto pe-4 me-5 align-self-start" :class="index!=2?'border-end':''">
                        <div class="title-8">
                          {{transaction.label}}
                        </div>
                    <div class="col-auto title-11 text-blue">
                        {{transaction.value}}
                    </div>
                    <div class="col-auto title-12 text-uppercase mt-2">
                        {{transaction.transaction_count}}
                        Transactions
                    </div>
                    </div>
                </template>
            </div>
            </div>
            <div class="search input-group px-4">
                <span class="input-group-text bg-light rounded-0" id="basic-addon1"><i class="isax isax-search-status-1 fs-4"></i></span>
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
            </div>  
            <div class="col d-flex">
                <div class="input-group mb-3">
                    <span class="btn-default input-group-text"> <i class="icon isax isax-filter-search fs-4"></i></span>
                    <button type="button" class="btn-default-icon" aria-label="Selected-Field" aria-describedby="basic-addon2">Filter</button>
                </div>
            </div>
             <div class="col d-flex mx-4 px-5">
                <div class="row">
                    <div class="col-md">
                        <button type="button" class="click-hover-icon">
                            <span class="position-absolute top-50 end-0 translate-middle-y me-3">Refund Request</span>
                         </button>
                    </div>
                    <div class="col-md"><button type="button" class="default-outline">Export</button></div>
                </div>
            </div>
            
        </div>
         <div class="col mb-5 title-7">
                 <div class="mx-5 px-4">Total result <span class="badge-red bg-transparent">24</span></div>
            </div>
  
       
 <div class="container col-md-8 ms-5 col-lg-10 px-md-5">
      <div class="table-responsive">
       <table class="table table-sm" style="border:none;">
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
  <tbody class="title-8">
    <tr data-toggle="collapse" data-target="#row1" class="accordion-toggle">
      <td>2201010000112221</td>
      <td>PHP 10,000.00</td>
      <td>Over-the-counter</td>
      <td>Business Licensing Permit</td>
      <td><button type="button" class="btn btn-outline-success py-0">Paid</button></td>
      <td>01/01/2023 7:28 AM</td>
    </tr>
    <tr>
      <td colspan="6" class="hiddenRow">
        <div class="accordian-body collapse" id="row1">Content 1</div>
      </td>
    </tr>
    <tr data-toggle="collapse" data-target="#row2" class="accordion-toggle">
      <td>2201010000112222</td>
      <td>PHP 100.00</td>
      <td>GCash</td>
      <td>Community Tax Certificate</td>
      <td><button type="button" class="btn btn-outline-danger py-0">Refunded</button></td>
      <td>01/01/2023 7:28 AM</td>
    </tr>
    <tr>
      <td colspan="6" class="hiddenRow">
        <div class="accordian-body collapse" id="row2">Content 2</div>
      </td>
    </tr>
    <!-- Repeat for each row -->
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
import Header from "../components/Header.vue";

export default {
    name: "Dashboard",
    components: {
      Sidebar,
      Header
    },
    data () {
        return {
            transactions: [
                {
                    label: 'Expected Amount',
                    value: 'PHP 100,000.00',
                    transaction_count: '24'
                },
                {
                    label: 'Total Amount of Completed Transactions',
                    value: 'PHP 80,000.00',
                    transaction_count: '18'
                }, 
                {
                    label: 'Total Amount of Refunded Transactions',
                    value: 'PHP 20,000.00',
                    transaction_count: '6'
                }
            ]
        }
    }
}

</script>

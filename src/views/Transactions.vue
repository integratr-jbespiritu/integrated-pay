<template>
    <Sidebar/>
    <div class="transactions container bg-light" style="margin-left: 12rem;">
        <div class="row gx-1 mx-5">
            <header class="header bg-light lh-1 p-3 px-3">
                <div class="col-12">
                <a class="title-2 text-decoration-none text-dark mx-3" href="#">Transactions</a>
                </div>
            </header>
            <div class="gx-4 g-3 mb-5 ms-5" style="margin-left: 2rem;">
            <div class="row gx-5 g-0">
                <template v-for = "transaction, index in transactions" :key="transaction">
                    <div class="col-auto px-0 pe-5 me-5 align-self-start" :class="index!=2?'border-end':''">
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
            <div class="default-search-light input-group px-3 mx-4 mb-3 py-2">
                <span class="input-group-text bg-light rounded-0" id="basic-addon1"><i class="isax isax-search-status-1 fs-4"></i></span>
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
            </div>  
            <div class="col d-flex mt-3">
                <div class="input-group mb-3">
                    <span class="btn-default input-group-text"> <i class="icon isax isax-filter-search fs-4"></i></span>
                    <button type="button" class="btn-default-icon" aria-label="Selected-Field" aria-describedby="basic-addon2">Filter</button>
                </div>
            </div>
        </div>
        <div class="col mx-5 px-5 title-7 border-bottom">
            <div>Total result <span class="badge-red bg-transparent">24</span></div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
    name: "Dashboard",
    components: {
      Sidebar,
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

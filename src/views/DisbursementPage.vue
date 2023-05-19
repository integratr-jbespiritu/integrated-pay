<template>
  <main class="container gx-2 g-0 d-flex" style="margin-left: 12rem;">
    <div class="container mt-3 pb-5 border">
      <h4 class="inter- fw-bold">Disbursement</h4>
      <div class="container border">
        <div class="gx-0 g-0 justify-content-center" style="margin-left: solid 2rem;">
          <div class="row gx-0 g-0">
            <template v-for="transaction, index in transactions" :key="transaction">
              <div class="col-auto pe-4 me-5 align-self-start" :class="index!=2?'border-end':''">
                <div class="title-8">
                  {{transaction.label}}
                </div>
                <div class="col-auto title-11 text-blue">
                  {{transaction.value}}
                </div>
                <div class="col-auto title-12 text-uppercase mt-2">
                  {{transaction.transaction_count}} Transactions
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Sidebar from "../components/Sidebar.vue";
  import Logoheader from "../components/Logoheader.vue";

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
      };
    },

    methods: {
      getStatus(data) {
        return `status-${data.toLowerCase()}`;
      },
    },
  };
</script>

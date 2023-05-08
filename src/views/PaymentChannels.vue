<template>
  <Sidebar />
  <Header />
  <div class="payments container bg-light" style="margin-left: 12rem;">
    <div class="row gx-1 mx-5">
      <header class="header bg-light lh-1 p-4">
        <div class="col-12">
          <a class="title-2 text-decoration-none text-dark mx-3" href="#">Payment Channels</a>
        </div>
      </header>
      <div class="gx-5 g-3" style="margin-left: 2rem;">
        <div class="row">
          <div class="col">
            <div class="p-4 pe-5 px-5 bg-white">
              <div class="title-4">
                Payment Options
              </div>
              <p>Choose the appropriate payment methods can boost customer satisfaction and sales, while minimizing the chance of fraud and disputes. These are some of the common payment options you can offer to your clients:</p>
              <div class="paymentMethods">
                <div class="title-4">
                  Accepted Payment Methods
                </div>
                <div class="row mt-2">
                  <div class="col">
                    <img src="src/assets/images/Visa.svg" class="img-fluid me-3" alt="Visa" />
                    <img src="src/assets/images/MasterCard.svg" class="img-fluid me-3" alt="MasterCard" />
                    <img src="src/assets/images/GCash.svg" class="img-fluid me-3" alt="GCash" />
                    <img src="src/assets/images/PayMaya.svg" class="img-fluid me-3" alt="PayMaya" />
                    <img src="src/assets/images/ECPay.svg" class="img-fluid me-3" alt="ECPay" />
                  </div>
                </div>
              </div>
              <div class="creditCards">
                <div class="title-5 text-uppercase">
                  Debit/Credit Cards
                </div>
                <div class="input-border row border mx-0 mt-3 group1">
                  <div class="col order-first mt-4">
                    <img src="src/assets/images/Visa.svg" class="img-fluid me-3" alt="Visa" />
                  </div>
                  <div class="col mt-3 title-6">
                    Visa
                  </div>
                  <div class="col mt-3 title-7">
                    2%
                  </div>
                  <div class="col order-last mt-3">
                    <div class="form-check form-switch title-8">
                      <input class="form-check-input fs-4" type="checkbox" id="switch" v-model="isChecked" />
                      <label class="form-check-label" for="switch">Set as Accepted Payment Method</label>
                    </div>
                    <div v-if="isChecked">
                      Accepted Payment Method
                    </div>
                  </div>
                </div>
                <div class="row border mx-0 mt-3 group2">
                  <div class="col order-first mt-4">
                    <img src="src/assets/images/MasterCard.svg" class="img-fluid me-3" alt="masterCard" />
                  </div>
                  <div class="col mt-3 title-6">
                    MasterCard
                  </div>
                  <div class="col mt-3 title-7">
                    2%
                  </div>
                  <div class="col order-last mt-3">
                    <div class="form-check form-switch title-8">
                      <input class="form-check-input switch-blue" type="checkbox" id="switch" v-model="isChecked" />
                      <label class="form-check-label" for="switch">Set as Accepted Payment Method</label>
                    </div>
                    <div v-if="isChecked">
                      Accepted Payment Method
                    </div>
                  </div>
                </div>
                <div class="row border mx-0 mt-3 group3">
                  <div class="col order-first mt-4">
                    <img src="src/assets/images/Maestro.svg" class="img-fluid me-3" alt="Maestro" />
                  </div>
                  <div class="col mt-3 title-6">
                    Maestro
                  </div>
                  <div class="col mt-3 title-7">
                    2%
                  </div>
                  <div class="col order-last mt-3">
                    <div class="form-check form-switch title-8">
                      <input class="form-check-input switch-blue" type="checkbox" id="switch" v-model="isChecked" />
                      <label class="form-check-label" for="switch">Set as Accepted Payment Method</label>
                    </div>
                    <div v-if="isChecked">
                      Accepted Payment Method
                    </div>
                  </div>
                </div>
                <div class="row border mx-0 mt-3 group4">
                  <div class="col order-first mt-4">
                    <img src="src/assets/images/AMEX.svg" class="img-fluid me-3" alt="Amex" />
                  </div>
                  <div class="col mt-3 title-6">
                    AMEX
                  </div>
                  <div class="col mt-3 title-7">
                    2%
                  </div>
                  <div class="col order-last mt-3">
                    <div class="form-check form-switch title-8">
                      <input class="form-check-input switch-blue" type="checkbox" id="switch" v-model="isChecked" />
                      <label class="form-check-label" for="switch">Set as Accepted Payment Method</label>
                    </div>
                    <div v-if="isChecked">
                      Accepted Payment Method
                    </div>
                  </div>
                </div>
                <div class="e-wallets">
                  <div class="title-5 text-uppercase mt-3">
                    E-Wallets
                  </div>
                  <div class="row border mx-0 mt-3 group5">
                    <div class="col order-first mt-4">
                      <img src="src/assets/images/GCash.svg" class="img-fluid me-3" alt="GCash" />
                    </div>
                    <div class="col mt-3 title-6">
                      GCash
                    </div>
                    <div class="col mt-3 title-7">
                      2%
                    </div>
                    <div class="col order-last mt-3">
                      <div class="form-check form-switch title-8">
                        <input class="form-check-input switch-blue" type="checkbox" id="switch" v-model="isChecked" />
                        <label class="form-check-label" for="switch">Set as Accepted Payment Method</label>
                      </div>
                      <div v-if="isChecked">
                        Accepted Payment Method
                      </div>
                    </div>
                  </div>
                  <div class="row border mx-0 mt-3 group6">
                    <div class="col order-first mt-4">
                      <img src="src/assets/images/PayMaya.svg" class="img-fluid me-3" alt="PayMaya" />
                    </div>
                    <div class="col mt-3 title-6">
                      PayMaya
                    </div>
                    <div class="col mt-3 title-7">
                      2%
                    </div>
                    <div class="col order-last mt-3">
                      <div class="form-check form-switch title-8">
                        <input class="form-check-input switch-blue" type="checkbox" id="switch" v-model="isChecked" />
                        <label class="form-check-label" for="switch">Set as Accepted Payment Method</label>
                      </div>
                      <div v-if="isChecked">
                        Accepted Payment Method
                      </div>
                    </div>
                  </div>
                  <div class="row border mx-0 mt-3 group7">
                    <div class="col order-first mt-4">
                      <img src="src/assets/images/GrabPay.svg" class="img-fluid me-3" alt="grabPay" />
                    </div>
                    <div class="col mt-3 title-6">
                      GrabPay
                    </div>
                    <div class="col mt-3 title-7">
                      2%
                    </div>
                    <div class="col order-last mt-3">
                      <div class="form-check form-switch title-8">
                        <input class="form-check-input switch-blue" type="checkbox" id="switch" v-model="isChecked" />
                        <label class="form-check-label" for="switch">Set as Accepted Payment Method</label>
                      </div>
                      <div v-if="isChecked">
                        Accepted Payment Method
                      </div>
                    </div>
                  </div>
                  <div class="outlets-centers">
                    <div class="title-5 text-uppercase mt-3">
                      Payment Outlet/Centers
                    </div>
                    <div class="row border mx-0 mt-3 group8">
                      <div class="col order-first mt-4">
                        <img src="src/assets/images/ECPay.svg" class="img-fluid me-3" alt="ecPay" />
                      </div>
                      <div class="col mt-3 title-6">
                        ECPay
                      </div>
                      <div class="col mt-3 title-7">
                        1% + PHP 30.00
                      </div>
                      <div class="col order-last mt-3">
                        <div class="form-check form-switch title-8">
                          <input class="form-check-input switch-blue" type="checkbox" id="switch" v-model="isChecked" />
                          <label class="form-check-label" for="switch">Set as Accepted Payment Method</label>
                        </div>
                        <div v-if="isChecked">
                          Accepted Payment Method
                        </div>
                      </div>
                    </div>
                    <div class="row border mx-0 mt-3 group9">
                      <div class="col order-first mt-4">
                        <img src="src/assets/images/BayadCenter.svg" class="img-fluid me-3" alt="bayadCenter" />
                      </div>
                      <div class="col mt-3 title-6">
                        Bayad Center
                      </div>
                      <div class="col mt-3 title-7">
                        1% + PHP 30.00
                      </div>
                      <div class="col order-last mt-3">
                        <div class="form-check form-switch title-8">
                          <input class="form-check-input switch-blue" type="checkbox" id="switch" v-model="isChecked" />
                          <label class="form-check-label" for="switch">Set as Accepted Payment Method</label>
                        </div>
                        <div v-if="isChecked">
                          Accepted Payment Method
                        </div>
                      </div>
                    </div>
                    <div class="row border mx-0 mt-3 group10">
                      <div class="col order-first mt-4">
                        <img src="src/assets/images/Cebuana.svg" class="img-fluid me-3" alt="cebuanaLhuillier" />
                      </div>
                      <div class="col mt-3 title-6">
                        Cebuana Lhuillier
                      </div>
                      <div class="col mt-3 title-7">
                        1% + PHP 30.00
                      </div>
                      <div class="col order-last mt-3">
                        <div class="form-check form-switch title-8">
                          <input class="form-check-input switch-blue" type="checkbox" id="switch" v-model="isChecked" />
                          <label class="form-check-label" for="switch">Set as Accepted Payment Method</label>
                        </div>
                        <div v-if="isChecked">
                          Accepted Payment Method
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    name: "PaymentChannels",
    components: {
      Sidebar,
      Header
    },
    data() {
      return {
        isChecked: false,
      };
    },
  };
</script>
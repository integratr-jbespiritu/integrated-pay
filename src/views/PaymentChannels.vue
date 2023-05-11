<template>
  <Sidebar />
  <Header />
  <div class="payments container bg-light" style="margin-left: 12rem;">
    <div class="row gx-1 mx-5">
      <header class="header bg-light lh-1 p-3">
        <div class="col-12">
          <a class="title-2 text-decoration-none text-dark mx-3" href="#">Payment Channels</a>
        </div>
      </header>
      <div class="gx-4 g-3 mb-5 ms-4" style="margin-left: 2rem;">
        <div class="row">
          <div class="col">
            <div class="p-3 pe-5 px-4 pb-4 bg-white">
              <div class="title-4">
                Payment Options
              </div>
              <p>Choose the appropriate payment methods can boost customer satisfaction and sales, while minimizing the chance of fraud and disputes. These are some of the common payment options you can offer to your clients:</p>
              <div class="paymentMethods">
                <div class="title-4">
                  Accepted Payment Methods
                </div>
                <div class="row mt-3">
                  <div class="col">
                    <img src="/src/assets/images/Visa.svg" class="img-fluid me-3" alt="Visa" />
                    <img src="/src/assets/images/MasterCard.svg" class="img-fluid me-3" alt="MasterCard" />
                    <img src="/src/assets/images/GCash.svg" class="img-fluid me-3" alt="GCash" />
                    <img src="/src/assets/images/PayMaya.svg" class="img-fluid me-3" alt="PayMaya" />
                    <img src="/src/assets/images/ECPay.svg" class="img-fluid me-3" alt="ECPay" />
                  </div>
                </div>
              </div>
              <div class="creditCards">
                <template v-for="payment_channel,j in payment_channels" :key="payment_channel">
                  <div class="title-5 text-uppercase mt-4">
                    {{ payment_channel.channel}}
                  </div>
                  <template v-for="payment_method,i in payment_channel.mode_of_payments" :key="payment_method">
                     <div class="input-border row gx-4 g-0 border mt-4 py-2 ms-0 group1">
                      <div class="col order-first mt-3">
                        <img :src="payment_method.logo" class="img-fluid" alt="Visa" />
                      </div>
                      <div class="col mt-3 mb-2 title-6">
                        {{ payment_method.name}}
                      </div>
                      <div class="col mt-3 mb-2 title-7">
                        {{ payment_method.percentage}}
                      </div>
                      <div class="col-4">
                      <div class="pt-2 mt-2">
                          <input type="checkbox" class="toggle" :id="'switch'+i+j" v-model="payment_method.is_accepted">
                          <label class="title-8" :for="'switch'+i+j">{{ payment_method.is_accepted==true?'Accepted Payment Method':'Set as Accepted Payment Method' }}</label>
                      </div>
                      </div>
                    </div>
                  </template> 
                </template>
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
        payment_channels: [
          {
            channel: 'Debit/Credit Cards',
            mode_of_payments: [
              {
                logo: '/assets/images/Visa.svg',
                name: 'Visa',
                percentage: '2%',
                is_accepted: true
              },
              {
                logo: '/assets/images/MasterCard.svg',
                name: 'MasterCard',
                percentage: '2%',
                is_accepted: true
              },
              {
                logo: '/assets/images/Maestro.svg',
                name: 'Maestro',
                percentage: '2%',
                is_accepted: false
              },
              {
                logo: '/assets/images/AMEX.svg',
                name: 'Amex',
                percentage: '2%',
                is_accepted: false  
              }
            ]

          },
          {
            channel: 'E-Wallets',
            mode_of_payments: [
              {
                logo: '/assets/images/GCash.svg',
                name: 'Gcash',
                percentage: '2%',
                is_accepted: true  
              },
              {
                logo: '/assets/images/PayMaya.svg',
                name: 'PayMaya',
                percentage: '2%',
                is_accepted: true  
              },
              {
                logo: '/assets/images/GrabPay.svg',
                name: 'GrabPay',
                percentage: '2%',
                is_accepted: false  
              }
            ]
          },
          {
            channel: 'Payment Outlet/Centers',
            mode_of_payments: [
              {
                logo: '/assets/images/ECPay.svg',
                name: 'ECPay',
                percentage: '1% + PHP 30.00%',
                is_accepted: true 
              },
              {
                logo: '/assets/images/BayadCenter.svg',
                name: 'Bayad Center',
                percentage: '1% + PHP 30.00%',
                is_accepted: false 
              },
              {
                logo: '/assets/images/Cebuana.svg',
                name: 'Cebuana Lhuillier',
                percentage: '1% + PHP 30.00%',
                is_accepted: false 
              }
            ]
          }
        ]
      };
    },
  };
</script>
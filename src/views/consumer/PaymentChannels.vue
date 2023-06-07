<template>
    <div class="row mx-2">
      <header class="header bg-light lh-1">
        <div class="col-12" style="right: 5px;">
          <div class="title-10 text-decoration-none text-dark">Payment Channels</div>
        </div>
      </header>
      <div class="mb-4 pt-1">
        <div class="row">
          <div class="col">
            <div class="pb-3 me-3 px-1 bg-white">
              <div class="title-4 px-3 pt-2">
                Payment Options
              </div>
              <p class="mx-4 me-5 lh-sm">Choose the appropriate payment methods can boost customer satisfaction and sales, while minimizing the chance of fraud and disputes. These are some of the common payment options you can offer to your clients:</p>
              <div class="paymentMethods mx-2">
                <div class="title-4 px-2 pb-1">
                  Accepted Payment Methods
                </div>
                <div class="row gx-0 g-0 pt-3 px-2 pb-2">
                  <div class="col-12">
                    <img src="/src/assets/images/visa.svg" class="img-fluid me-4" alt="Visa" />
                    <img src="/src/assets/images/mastercard.svg" class="img-fluid me-4" alt="MasterCard" />
                    <img src="/src/assets/images/gcash.svg" class="img-fluid me-4" alt="GCash" />
                    <img src="/src/assets/images/paymaya.svg" class="img-fluid me-4" alt="PayMaya" />
                    <img src="/src/assets/images/ecpay.svg" class="img-fluid me-4" alt="ECPay" />
                  </div>
                </div>
              </div>
              <div class="table-responsive text-nowrap">
                <div class="pe-5 mx-3 mb-3 d-flex flex-column justify-content-between" style="min-width: 1000px;">
                <template v-for="payment_channel,j in payment_channels" :key="payment_channel">
                  <div class="title-5 text-uppercase pt-3">
                    {{ payment_channel.channel}}
                  </div>
                  <template v-for="payment_method,i in payment_channel.mode_of_payments" :key="payment_method">
                     <div class="input-border row gx-0 g-0 mt-3 py-2 pe-5" style="min-width: 104.4%;">
                        <div class="col py-3 mx-4">
                          <img :src="payment_method.logo" class="img-fluid"/>
                        </div>
                        <div class="col-2 py-3 title-6 ps-5"> 
                          {{ payment_method.name}}
                        </div>
                        <div class="col-2 mt-4 title-7 ps-5 ms-5" style="bottom: 4px;">
                          {{ payment_method.percentage}}
                        </div>
                      <div class="col-4 d-flex ms-2 ps-3 me-5 ps-md-1 ms-md-1 ps-lg-5 ms-lg-0">
                        <div class="pt-2 mt-2 form-check form-switch-btn px-5 mx-5">
                          <input class="form-check-input fs-5" type="checkbox" :id="'switch' + i + j" v-model="payment_method.is_accepted">
                          <label class="form-check-label title-8 mt-1" :for="'switch' + i + j">
                            {{ payment_method.is_accepted ? 'Accepted Payment Method' : 'Set as Accepted Payment Method' }}
                          </label>
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

  export default {
    name: "PaymentChannels",
    components: {
      
    },
    data() {
      return {
        isChecked: false,
        payment_channels: [
          {
            channel: 'Debit/Credit Cards',
            mode_of_payments: [
              {
                logo: '/src/assets/images/visa.svg',
                name: 'Visa',
                percentage: '2%',
                is_accepted: true
              },
              {
                logo: '/src/assets/images/mastercard.svg',
                name: 'MasterCard',
                percentage: '2%',
                is_accepted: true
              },
              {
                logo: '/src/assets/images/maestro.svg',
                name: 'Maestro',
                percentage: '2%',
                is_accepted: false
              },
              {
                logo: '/src/assets/images/amex.svg',
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
                logo: '/src/assets/images/gcash.svg',
                name: 'Gcash',
                percentage: '2%',
                is_accepted: true  
              },
              {
                logo: '/src/assets/images/paymaya.svg',
                name: 'PayMaya',
                percentage: '2%',
                is_accepted: true  
              },
              {
                logo: '/src/assets/images/grabpay.svg',
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
                logo: '/src/assets/images/ecpay.svg',
                name: 'ECPay',
                percentage: '1% + PHP 30.00',
                is_accepted: true 
              },
              {
                logo: '/src/assets/images/bayadcenter.svg',
                name: 'Bayad Center',
                percentage: '1% + PHP 30.00',
                is_accepted: false 
              },
              {
                logo: '/src/assets/images/cebuana.svg',
                name: 'Cebuana Lhuillier',
                percentage: '1% + PHP 30.00',
                is_accepted: false 
              }
            ]
          }
        ]
      };
    },
    mounted(){
      this.transformImageLinks()
    },
    methods: {
       toDataURL(src, callback, outputFormat) {
          var img = new Image();
          img.crossOrigin = 'Anonymous';
          img.onload = function() {
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var dataURL;
            canvas.height = this.naturalHeight;
            canvas.width = this.naturalWidth;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL(outputFormat);
            callback(dataURL);
          };
          img.src = src;
          if (img.complete || img.complete === undefined) {
            img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            img.src = src;
          }
      },
      transformImageLinks(){
      this.payment_channels.forEach((payment_channel) => {
        payment_channel.mode_of_payments.forEach(mode_of_payment => {
            this.toDataURL(mode_of_payment.logo, function callbackURL(dataUrl){
              mode_of_payment.logo = dataUrl;
            })
          })
        });
      }
    }
  };
</script>
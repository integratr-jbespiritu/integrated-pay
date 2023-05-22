<template>
    <div class="row me-0 ms-2">
        <header class="header bg-light lh-1">
            <div class="col-12">
                <a class="title-10 text-decoration-none text-dark mx-1" href="#">Payment Channels</a>
            </div>
        </header>
        <div class="mb-5">
            <div class="row">
                <div class="col">
                    <div class="pb-4">
                           <div class="gx-0 g-0 mb-3">
                  <div class="row mt-2">
                    <template v-for="transaction, index in transactions" :key="transaction">
                      <div class="col-auto align-self-start me-5" :class="index != 2 ? 'border-end' : ''">
                        <div class="title-8">
                          {{ transaction.label }}
                        </div>
                        <div class="col-auto title-11 text-blue me-5">
                          {{ transaction.value }}
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
                   <div class="row gx-2 g-0">
                   <div class="col-12 col-md-4">
                    <div class="search input-group w-100">
                        <span class="input-group-text bg-white rounded-0" id="basic-addon1">
                          <i class="isax isax-search-status-1 fs-4"></i>
                          </span>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search"
                          aria-describedby="basic-addon1" />
                      </div>
                      </div>
                     <div class="col-12 col-md-4">
                      <div class="input-group ">
                          <span class="span-btn-default input-group-text rounded-0">
                            <i class="icon isax isax-filter-search"></i>
                          </span>
                          <button type="button" class="filter-btn bg-white w-25" aria-label="Selected-Field"
                            aria-describedby="basic-addon2">Filter</button>
                        </div>
                   </div>
                </div>
                 <div class="ms-1">
                <div class="border-bottom mb-3 mt-3">
                  <p class="mb-4 ms-1">Total result <span class="badge-red bg-transparent title-7">24</span></p>
                </div>
              </div>
              <div class="row gx-4 g-0 ms-0">
                <div class="col-3 title-13 text-purple">
                  Payment Methods
                </div>
                <div class="col-3 title-13 text-purple">
                    Processing Fee
                  </div>
                  <div class="col-3 title-13 text-purple">
                    Rate
                  </div>
                  <div class="col-3 title-13 text-purple">
                    Status
                  </div>
              </div>
                        <div class="creditCards mx-2">
                            <template v-for="payment_channel, j in payment_channels" :key="payment_channel">
                                <div class="title-5 text-uppercase mt-4">
                                    {{ payment_channel.channel }}
                                </div>
                                <template v-for="payment_method, i in payment_channel.mode_of_payments"
                                    :key="payment_method">
                                    <div class="input-border-rows row gx-4 g-0 mt-4 py-2 ms-0">
                                        <div class="col order-first mt-3">
                                            <img :src="payment_method.logo" class="img-fluid" />
                                        </div>
                                        <div class="col mt-3 mb-2 title-6">
                                            {{ payment_method.name }}
                                        </div>
                                        <div class="col mt-3 mb-2 title-7">
                                              {{ payment_method.percentage_fee }}
                                          </div>
                                          <div class="col mt-3 mb-2 title-7">
                                              {{ payment_method.additional }}
                                          </div>
                                        <div class="col mt-3 mb-2 title-7">
                                            {{ payment_method.percentage }}
                                        </div>
                                       <div class="col-4 d-flex">
                        <div class="pt-2 mt-2 form-check form-switch-btn">
                         <input class="form-check-input fs-5" type="checkbox" :id="'switch' + i + j" v-model="payment_method.is_accepted">
                         <label class="form-check-label title-8 mt-1 d-flex" :for="'switch' + i + j">
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
</template>

<script>

export default {
    name: "AdminPaymentChannels",
    components: {

    },
    data() {
        return {
            transactions: [
                {
                    label: "Lowest Rate",
                    value: "1% + PHP 30.00",
                },
                {
                    label: "Lowest Rate",
                    value: "1% + PHP 30.00",
                },
                {
                    label: "Processing Fee",
                    value: "PHP 5.00",
                },
                {
                    label: "Convenience Fee",
                    value: "PHP 5.00",
                },
            ],
            isChecked: false,
            payment_channels: [
                {
                    channel: '',
                    mode_of_payments: [
                        {
                            logo: '/src/assets/images/visa.svg',
                            name: 'Visa',
                            percentage_fee: 'PHP 5.00',
                            additional: '+',
                            percentage: '2%',
                            is_accepted: true
                        },
                        {
                            logo: '/src/assets/images/mastercard.svg',
                            name: 'MasterCard',
                            percentage_fee: 'PHP 5.00',
                            additional: '+',
                            percentage: '2%',
                            is_accepted: true
                        },
                        {
                            logo: '/src/assets/images/maestro.svg',
                            name: 'Maestro',
                            percentage_fee: 'PHP 5.00',
                            additional: '+',
                            percentage: '2%',
                            is_accepted: false
                        },
                        {
                            logo: '/src/assets/images/amex.svg',
                            name: 'Amex',
                            percentage_fee: 'PHP 5.00',
                            additional: '+',
                            percentage: '2%',
                            is_accepted: false
                        }
                    ]
                },
                {
                    channel: '',
                    mode_of_payments: [
                        {
                            logo: '/src/assets/images/gcash.svg',
                            name: 'Gcash',
                            percentage_fee: 'PHP 5.00',
                            additional: '+',
                            percentage: '2%',
                            is_accepted: true
                        },
                        {
                            logo: '/src/assets/images/paymaya.svg',
                            name: 'PayMaya',
                            percentage_fee: 'PHP 5.00',
                            additional: '+',
                            percentage: '2%',
                            is_accepted: true
                        },
                        {
                            logo: '/src/assets/images/grabpay.svg',
                            name: 'GrabPay',
                            percentage_fee: 'PHP 5.00',
                            additional: '+',
                            percentage: '2%',
                            is_accepted: false
                        }
                    ]
                },
                {
                    channel: '',
                    mode_of_payments: [
                        {
                            logo: '/src/assets/images/ecpay.svg',
                            name: 'ECPay',
                            percentage_fee: 'PHP 5.00',
                            additional: '+',
                            percentage: '1% + PHP 30.00%',
                            is_accepted: true
                        },
                        {
                            logo: '/src/assets/images/bayadcenter.svg',
                            name: 'Bayad Center',
                            percentage_fee: 'PHP 5.00',
                            additional: '+',
                            percentage: '1% + PHP 30.00%',
                            is_accepted: false
                        },
                        {
                            logo: '/src/assets/images/cebuana.svg',
                            name: 'Cebuana Lhuillier',
                            percentage_fee: 'PHP 5.00',
                            additional: '+',
                            percentage: '1% + PHP 30.00%',
                            is_accepted: false
                        }
                    ]
                }
            ]
        };
    },
    mounted() {
        this.transformImageLinks()
    },
    methods: {
        toDataURL(src, callback, outputFormat) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
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
        transformImageLinks() {
            this.payment_channels.forEach((payment_channel) => {
                payment_channel.mode_of_payments.forEach(mode_of_payment => {
                    this.toDataURL(mode_of_payment.logo, function callbackURL(dataUrl) {
                        mode_of_payment.logo = dataUrl;
                    })
                })
            });
        }
    }
};
</script>
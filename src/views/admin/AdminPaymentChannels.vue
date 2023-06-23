<template>
    <div class="row me-0 gx-0 g-0">
        <div class="col-12">
                <div class="pt-2 px-3">
                    <a class="title-10 text-decoration-none text-dark px-1" href="#">Payment Channels</a>
                    <div class="align-items-center">
                        <div class="row mt-2 gx-0 d-flex justify-content-between px-1">
                            <template v-for="transaction, index in transactions" :key="transaction">
                                <div class="col-auto align-self-start pe-5" :class="index != 3 ? 'border-end' : ''">
                                    <div class="title-8 me-4">
                                         {{ transaction.label }}
                                    </div>
                                    <div :class="{ 'col-auto': true, 'title-11': true, 'text-blue': true, '': true, 'lh-sm':true, '':true, 'pb-4': transaction.value }">
                                        {{ transaction.value }}
                                    </div>
                                    <div :class="{ 'col-auto': true, 'text-blue':true, 'title-11': true, 'me-4': true, 'lh-sm': true, 'pe-3': true, 'pb-4': transaction.fees }" v-if="transaction.fees">
                                        <span class="me-3">{{ transaction.fees }} <i class="isax isax-arrow-right-25 fs-5" style="top: .5px;"></i></span>
                                    </div>
                                    <div class="col-auto title-7 me-5 lh-sm pb-1" style="white-space: pre-line;">
                                        {{ transaction.values }}
                                    </div>
                                </div>
                            </template>
                        </div>
                        <div class="row gx-0 g-0 mt-3">
                            <div class="col-12 col-md-3 d-flex justify-content-start align-items-start">
                            <div class="search input-group mt-2 w-100 pe-3">
                                <span class="input-group-text bg-white rounded-0" id="basic-addon1">
                                <i class="isax isax-search-status-1 fs-4"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Search" aria-label="Search"
                                aria-describedby="basic-addon1" />
                            </div>
                            </div>
                            <div class="col-12 col-md-4">
                            <div class="input-group mb-2 mt-2 ps-md-0">
                                <span class="span-btn-default input-group-text rounded-0">
                                <i class="icon isax isax-filter-search"></i>
                                </span>
                                <button type="button" class="filter-btn bg-white pe-3 px-3" aria-label="Selected-Field"
                                aria-describedby="basic-addon2">Filter</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="ms-1 me-1">
                        <div class="border-bottom mb-3 mt-3">
                            <p class="mb-4 ms-1">Total result <span class="badge-red bg-transparent title-7">24</span></p>
                        </div>
                    </div>
                    <div class="table-responsive mt-3">
                        <table class="table table-data">
                            <thead>
                                <tr class="table-rows text-purple title-13 text-nowrap">
                                    <th class="table-heading" width="18%">
                                        <div class="d-flex align-items-center ms-3">
                                            <span>Payment Methods</span>
                                        </div>
                                    </th>
                                    <th class="table-heading">
                                        <div class="d-flex align-items-center">
                                            <span></span>
                                        </div>
                                    </th>
                                    <th class="table-heading" width="15%">
                                        <div class="d-flex align-items-center">
                                            <span>Processing Fee</span>
                                        </div>
                                    </th>
                                    <th class="table-heading" width="10%">
                                        <div class="d-flex align-items-center">
                                            <span></span>
                                        </div>
                                    </th>
                                    <th class="table-heading">
                                        <div class="d-flex align-items-center">
                                            <span>Rate <i class="isax isax-arrow-down5"></i></span>
                                        </div>
                                    </th>
                                    <th class="table-heading" width="23%">
                                        <div class="d-flex align-items-center">
                                            <span>Status</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="payment_channel, j in payment_channels" :key="j">
                                    <tr class="gx-0 g-0 mt-4 py-2 border-color-white payments-table-hover size-table-data">
                                        <td class="py-4 ps-4"><img :src="payment_channel.logo" class="img-fluid" /></td>
                                        <td class="py-4 pb-3 title-8 ">{{ payment_channel.name }}</td>
                                        <td class="py-4 title-8 ">{{ payment_channel.processing_fee }}</td>
                                        <td class="py-4 title-8 ">{{ payment_channel.additional }}</td>
                                        <td class="py-4 title-8 ">{{ payment_channel.rate }}</td>
                                        <td class=" px-3">
                                            <div class="pt-2 mt-2 form-check form-switch-btn">
                                                <input class="form-check-input fs-5" type="checkbox" :id="'switch' + i + j"
                                                    v-model="payment_channel.is_accepted" />
                                                <label class="form-check-label title-8 mt-1 d-flex payments-table-weight" :for="'switch' + i + j">
                                                    {{ payment_channel.is_accepted ? 'Enabled service provider' : 'Disabled service provider' }}
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                  <span class="mt-1"></span>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <!-- pagination  -->
                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-end me-1 px-2">
                            <li class="page-item disabled mt-2">
                                <i class="arrow isax isax-arrow-left-2"></i>
                            </li>
                            <li class="page-item disabled">
                                <a class="page-link bg-light border-0" href="#" tabindex="-1"
                                    aria-disabled="true">Previous</a>
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            transactions: [
                {
                    label: "Lowest Rate",
                    value: "1% + PHP 30.00",
                },
                {
                    label: "Lowest Rate: Payment Methods",
                    values: "EC Pay\nBayad Center\nCebuana Lhuillier",
                },
                {
                    label: "Processing Fee",
                    fees: "PHP 5.00",
                },
                {
                    label: "Convenience Fee",
                    fees: "PHP 5.00",
                },
            ],
            isChecked: false,
            payment_channels: [
                {
                    logo: "/src/assets/images/visa.svg",
                    name: "Visa",
                    processing_fee: "PHP 5.00",
                    additional: "+",
                    rate: "2%",
                    is_accepted: true,
                },
                {
                    logo: "/src/assets/images/mastercard.svg",
                    name: "MasterCard",
                    processing_fee: "PHP 5.00",
                    additional: "+",
                    rate: "2%",
                    is_accepted: false,
                },
                {
                    logo: "/src/assets/images/maestro.svg",
                    name: "Maestro",
                    processing_fee: "PHP 5.00",
                    additional: "+",
                    rate: "2%",
                    is_accepted: false,
                },
                {
                    logo: "/src/assets/images/amex.svg",
                    name: "Amex",
                    processing_fee: "PHP 5.00",
                    additional: "+",
                    rate: "2%",
                    is_accepted: false,
                },

                {
                    logo: "/src/assets/images/gcash.svg",
                    name: "Gcash",
                    processing_fee: "PHP 5.00",
                    additional: "+",
                    rate: "2%",
                    is_accepted: false,
                },
                {
                    logo: "/src/assets/images/paymaya.svg",
                    name: "PayMaya",
                    processing_fee: "PHP 5.00",
                    additional: "+",
                    rate: "2%",
                    is_accepted: false,
                },
                {
                    logo: "/src/assets/images/grabpay.svg",
                    name: "GrabPay",
                    processing_fee: "PHP 5.00",
                    additional: "+",
                    rate: "2%",
                    is_accepted: false,
                },

                {
                    logo: "/src/assets/images/ecpay.svg",
                    name: "ECPay",
                    processing_fee: "PHP 5.00",
                    additional: "+",
                    rate: "1% + PHP 30.00",
                    is_accepted: false,
                },
                {
                    logo: "/src/assets/images/bayadcenter.svg",
                    name: "Bayad Center",
                    processing_fee: "PHP 5.00",
                    additional: "+",
                    rate: "1% + PHP 30.00",
                    is_accepted: false,
                },
                {
                    logo: "/src/assets/images/cebuana.svg",
                    name: "Cebuana Lhuillier",
                    processing_fee: "PHP 5.00",
                    additional: "+",
                    rate: "1% + PHP 30.00",
                    is_accepted: false,
                },
            ],
        };
    },
};
</script>

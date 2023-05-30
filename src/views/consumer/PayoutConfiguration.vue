<template>
    <div class="row gx-0 g-0">
        <header class="header bg-light lh-1">
            <div class="col-12">
                <a class="title-10 text-decoration-none text-dark" href="#">Disbursement Account</a>
                <p class="ms-1">Configure your payment methods and receive them in the form of payouts.</p>
            </div>
        </header>
        <div class="p-3 py-0 pe-5">
            <div class="row gx-0 g-0 border border-warning shadow-sm bg-body pe-5 p-2">
                <div class="col-1 fs-3 pt-1">
                    <i class="isax isax-danger ps-2 text-warning"></i>
                </div>
                <div class="col-11">
                    <p class="text-warning title-3">Reminder!</p>
                    <p class="title-21 text-dark">You are only allowed to choose one (1) Payout Channel.</p>
                </div>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <div class="row gx-0 p-3 g-0 mx-3 py-2 mt-3 bg-white"
                style="min-width: 1000px;">
                <template v-for="(payout_configuration, j) in payout_configurations" :key="j">
                    <div class="col-12 title-4 d-flex align-items-center justify-content-between">
                        {{ payout_configuration.channel }}
                        <i v-if="j === 0 || j === 2" class="isax isax-arrow-down-1 fs-6 mx-4"></i>
                    </div>
                    <div class="d-flex align-items-center justify-content-between pb-3">
                        <p class="title-8 text-capitalize d-flex align-items-center justify-content-start">{{ payout_configuration.guide }}</p>
                    </div>
                    <div class="row gx-0 g-0 input-border-hover justify-content-start">
                        <template v-for="(payment_method, i) in payout_configuration.mode_of_payments" :key="i">
                            <div class="col-4 py-5 ps-3">
                                <img :src="payment_method.logo" class="img-fluid" />
                            </div>
                            <template v-for="(payout_method, k) in payout_configuration.bank_payments" :key="k">
                                <div class="col-4 ps-3 pt-1" >
                                    <p class="title-6 mt-2">{{ payout_method.bank_name }}</p>
                                    <p class="title-7 py-2">Account Name: <span class="title-8">{{ payout_method.account_name
                                    }}</span></p>
                                    <p class="title-7">Account Number: <span class="title-8">{{ payout_method.account_num
                                    }}</span> {{ payout_method.expiration_date }}</p>
                                    <div class="form-check form-switch-btn mx-3 my-3">
                                        <input class="form-check-input fs-4" style="bottom: 5px;" type="checkbox"
                                            :id="'switch' + k + j" @change="update_payout_modal = $event.target.checked" v-model="payout_method.is_accepted" />
                                        <label class="form-check-label title-8" :for="'switch' + k + j">
                                            {{ payout_method.is_accepted ? 'Activated Payout Channel' : 'Set as a Payout Channel' }}
                                        </label>
                                    </div>
                                </div>
                            </template>
                            <div class="col-4 py-5 h-100 pe-5 d-flex justify-content-end">
                                <button type="button"
                                    class="btn bg-purple text-white rounded border border-white my-3 title-8" @click="update_payout_modal">Update Payout
                                    Details</button>
                            </div>
                        </template>
                    </div>
                     <div class="row gx-0 g-0">
                        <template v-for="(payout_method, a) in payout_configuration.debit_payments" :key="a">
                            <div class="col-4 mb-3 mt-3">
                                 <button type="button" class="btn btn-outline-blue text-blue rounded-0 pb-2"><i class="isax isax-add fs-4" style="top: 3px"></i> {{ payout_method.debit }}</button>
                            </div>
                            <div class="container-fluid">
                                <div class="col-12 pb-2">
                                    <div class="row bg-light py-2" style="right: 1.5px;">
                                    <div class="col-12"></div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </div>
    <Teleport to="body">
        <ModalLarge :show="update_payout_modal" @close="update_payout_modal = false" class="w-100">
        <template #header>
            <div class="row gx-0 g-0 ps-3 lh-1">
            <p class="title-10 lh-1">Configure Payout Details</p>
            <p class="title-8">Configure your payment methods and receive them in the form of payouts.</p>
            </div>
        </template>
        <template #body>
            <div class="row gx-0 g-0">
                <div class="col title-23 pb-2">
                    Upload the logo
                </div>
                <div class="input-group input-group-xl mb-3">
                    <span class="input-group-text bg-purple text-white" id="inputGroup-sizing-lg">Choose File</span>
                    <input type="text" class="step3 form-control" placeholder="Upload a file" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
                <div class="form-floating mb-3">
                    <select class="form-select step3 rounded-0" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Debit/Credit Card</option>
                        <option value="1">Debit/Credit Card</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect" class="text-purple">Payout Method</label>
                </div>
                <div class="form-floating mb-3">
                    <select class="form-select step3 rounded-0" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Unionbank</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect" class="">Payout Channel</label>
                </div>
                <form class="form-floating mb-3">
                    <input type="email" class="form-control step3" id="floatingInputValue" placeholder="123456789012" value="123456789012">
                    <label for="floatingInputValue">Account Number</label>
                </form>
                <form class="form-floating mb-3">
                        <input type="email" class="form-control step3" id="floatingInputValue" placeholder="LGU of Lorem Ipsum" value="LGU of Lorem Ipsum">
                        <label for="floatingInputValue">Account Name</label>
                </form>
                <form class="form-floating mb-3">
                        <input type="email" class="form-control step3" id="floatingInputValue" value="Payment must be completed within 30 minutes.">
                        <label for="floatingInputValue">Payment Instructions</label>
                </form>
            </div>
        </template>
        <template #footer>
            <div class="row">
                <div class="col border mx-5">
                    test
                </div>
            </div>  
        </template>
        </ModalLarge>
    </Teleport>
</template>

<script>
import ModalLarge from '../../components/ModalLarge2.vue'

export default {
    components: {
        ModalLarge
    },
    data() {
        return {
            update_payout_modal: false,
            isChecked: false,
            payout_configurations: [
                {
                    channel: "Debit/Credit Card",
                    guide: "Increase sales by accepting card payments. Over 70% of buyer prefer paying by card.",
                    mode_of_payments: [
                        {
                            logo: "/src/assets/images/postbank.svg",
                        },
                    ],
                    bank_payments: [
                        {
                            bank_name: "Postbank",
                            account_name: "LGU of Lorem Ipsum",
                            account_num: "Ending in",
                            expiration_date: '1206',
                            is_accepted: false,
                        },
                    ],
                },
                {
                    mode_of_payments: [
                        {
                            logo: "/src/assets/images/landbank-account.svg",
                        },
                    ],
                    bank_payments: [
                        {
                            bank_name: "Landbank",
                            account_name: "LGU of Lorem Ipsum",
                            account_num: "Ending in",
                            expiration_date: '9012',
                            is_accepted: true,
                        },
                    ],
                    debit_payments: [
                        {
                            debit: "Debit/Credit Card",
                        }
                    ]
                },
                {
                    channel: "E-Wallet",
                    guide: "Increase sales by accepting card payments. Over 70% of buyer prefer paying by card.",
                    mode_of_payments: [
                        {
                            logo: "/src/assets/images/gcash-account.svg",
                        },
                    ],
                    bank_payments: [
                        {
                            bank_name: "GCash",
                            account_name: "LGU of Lorem Ipsum",
                            account_num: "Ending in",
                            expiration_date: '1104',
                            is_accepted: false,
                        },
                    ],
                },
                {
                    mode_of_payments: [
                        {
                            logo: "/src/assets/images/maya-account.svg",
                        },
                    ],
                    bank_payments: [
                        {
                            bank_name: "Maya",
                            account_name: "LGU of Lorem Ipsum",
                            account_num: "Ending in",
                            expiration_date: '1105',
                            is_accepted: false,
                        },
                    ],
                    debit_payments: [
                        {
                            debit: "e-wallet",
                        }
                    ]
                },
            ],
        };
    },
};
</script>

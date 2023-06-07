<template>
    <div class="row gx-0 g-0">
        <header class="heading bg-light lh-1">
            <div class="col-12 px-3 pt-3 pb-2">
                <a class="title-10 text-decoration-none text-dark" href="#">Disbursement Account</a>
                <p class="ms-1">Configure your payment methods and receive them in the form of payouts.</p>
            </div>
        </header>
        <div class="px-3 pe-5 pb-2">
            <div class="row gx-0 g-0 border border-warning shadow-sm bg-body py-3">
                <div class="col-1 fs-3 text-center my-auto" style="width: 80px;">
                    <i class="isax isax-danger text-warning"></i>
                </div>
                <div class="col-9 my-auto">
                    <p class="text-warning title-3">Reminder!</p>
                    <p class="title-21 text-dark">You are only allowed to choose one (1) Payout Channel.</p>
                </div>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <div class="row gx-0 p-3 g-0 py-2" style="min-width: 1000px;">
                <template v-for="(payout_configuration, j) in payout_configurations" :key="j">
                    <div class="bg-white">
                        <div class="col-12 title-4 d-flex align-items-center justify-content-between mt-2 mx-3 pe-5 ">
                            {{ payout_configuration.channel }}
                            <img i v-if="j === 0 || j === 2" src="/src/assets/images/chevron-down.svg" alt=""
                                class="img-fluid fs-6 my-auto mx-4" />
                        </div>
                        <div class="d-flex align-items-center justify-content-between pb-3 mx-3">
                            <p class="title-8 text-capitalize d-flex align-items-center justify-content-start">{{
                                payout_configuration.guide }}</p>
                        </div>
                        <div class="row gx-0 g-0 input-border-hover justify-content-start mx-3">
                            <template v-for="(payment_method, i) in payout_configuration.mode_of_payments" :key="i">
                                <div class="col-4 py-5 ps-3">
                                    <img :src="payment_method.logo" class="img-fluid" />
                                </div>
                                <template v-for="(payout_method, k) in payout_configuration.bank_payments" :key="k">
                                    <div class="col-4 ps-3 pt-1">
                                        <p class="title-6 mt-2">{{ payout_method.bank_name }}</p>
                                        <p class="title-7 py-2">Account Name: <span class="title-8">{{
                                            payout_method.account_name }}</span></p>
                                        <p class="title-7">Account Number: <span class="title-8">{{
                                            payout_method.account_num }}</span> {{ payout_method.expiration_date }}</p>
                                        <div class="form-check form-switch-btn mx-3 my-3">
                                            <input class="form-check-input fs-4" style="bottom: 5px;" type="checkbox"
                                                :id="'switch' + k + j"
                                                @change="payout_channel_modal = $event.target.checked"
                                                v-model="payout_method.is_accepted" />
                                            <label class="form-check-label title-8" :for="'switch' + k + j">
                                                {{ payout_method.is_accepted ? 'Activated Payout Channel' : 'Set as a Payout Channel' }}
                                            </label>
                                        </div>
                                    </div>
                                </template>
                                <div class="col-4 py-5 h-100 pe-5 d-flex justify-content-end">
                                    <button type="button"
                                        class="btn bg-purple text-white rounded border border-white my-3 title-8"
                                        @click="update_payout_debit_modal = true">Update Payout Details</button>
                                </div>
                            </template>
                        </div>
                        <div class="row gx-0 g-0">
                            <template v-for="(payout_method, a) in payout_configuration.debit_payments" :key="a">
                                <div class="col-4 mb-4 mt-3 mx-3">
                                    <button type="button" class="btn btn-outline-blue text-blue rounded-0 pb-2"
                                        @click="update_payout_e_wallet_modal = true"><i class="isax isax-add fs-4"
                                            style="top: 3px;"></i> {{ payout_method.debit }}</button>
                                </div>
                                <div class="col-12 break-line">
                                    <div class="row bg-light py-2"></div>
                                    <br />
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>

    <!-- MODAL 1: << Modal for Settings > Payout Configuration > Edit > Set as a Payout Channel >> -->
    <Teleport to="body">
        <ModalLayoutSmall :show="payout_channel_modal" @close="payout_channel_modal = false">
            <template #header>
                <div class="row gx-0 g-0 ps-5">
                    <div class="col ms-5">
                        <img src="/src/assets/images/popup-icon.svg" alt="Modal Figure" class="img-fluid"
                            style="top: 15px; width: 130px;" />
                    </div>
                    <div class="col d-flex justify-content-evenly align-items-end">
                        <button type="button" class="close-icon isax isax-close-circle5 border-0 bg-transparent"
                            style="bottom: 60px; left: 116px;" @click="payout_channel_modal = false"
                            aria-label="Close"></button>
                    </div>
                </div>
            </template>
            <template #body>
                <div class="row gx-0 g-0">
                    <p class="title-27 text-center">Set this as a Payout Channel?</p>
                    <p class="title-8 text-center mb-1">You can always update and change the payout channel.</p>
                </div>
            </template>
            <template #footer>
                <div class="row gx-0 g-0 d-flex justify-content-center align-items-center" style="right: 33%;">
                    <div class="col mx-2">
                        <button type="button" class="btn btn-outline border-purple border-2 text-purple"
                            @click="payout_channel_modal = false">Cancel</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn bg-purple text-white border-2">Delete</button>
                    </div>
                </div>
            </template>
        </ModalLayoutSmall>
    </Teleport>

    <!-- MODAL 2: << Modal for Settings > Payout Configuration > Update Payout Details (Debit/Credit Card) >> -->
    <Teleport to="body">
        <ModalLayoutMedium :show="update_payout_debit_modal" @close="update_payout_debit_modal = false">
            <template #header>
                <div class="row gx-0 g-0 lh-1">
                    <div class="col-11 mb-2">
                        <p class="title-10">Configure Payout Details</p>
                        <p class="title-8 mt-2">Configure your payment methods and receive them in the form of payouts.</p>
                    </div>
                    <div class="col-1 d-flex justify-content-end">
                        <button type="button" class="close-icon isax isax-close-circle5 border-0 bg-transparent ms-2"
                            style="bottom: 8px;" @click="update_payout_debit_modal = false" aria-label="Close"></button>
                    </div>
                </div>
            </template>
            <template #body>
                <div class="row gx-0 g-0">
                    <div class="col title-23 pb-2">
                        Upload the logo
                    </div>
                    <div class="input-group input-group-xl mb-3">
                        <span class="input-group-text bg-purple text-white" id="inputGroup-sizing-lg">Choose File</span>
                        <input type="text" class="floating-label-border form-control" placeholder="Upload a file"
                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div class="form-floating floating-label-color mb-3">
                        <select class="form-select floating-label-border form-select2 rounded-0" id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected>Debit/Credit Card</option>
                            <option value="1">E-Wallet</option>
                            <option value="2">Payment Outlet/Centers</option>
                        </select>
                        <label for="floatingSelect">Payout Method</label>
                    </div>
                    <div class="form-floating floating-label-color mb-3">
                        <select class="form-select floating-label-border form-select2 rounded-0" id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected>Unionbank</option>
                            <option value="1">Gcash</option>
                        </select>
                        <label for="floatingSelect">Payout Channel</label>
                    </div>
                    <form class="form-floating floating-label-color mb-3">
                        <input type="mobile number" class="form-control floating-label-border" id="floatingInputValue"
                            placeholder="123456789012" value="123456789012" />
                        <label for="floatingInputValue">Account Number</label>
                    </form>
                    <form class="form-floating floating-label-color mb-3">
                        <input type="name" class="form-control floating-label-border" id="floatingInputValue"
                            placeholder="LGU of Lorem Ipsum" value="LGU of Lorem Ipsum" />
                        <label for="floatingInputValue">Account Name</label>
                    </form>
                    <form class="form-floating floating-label-color">
                        <input type="text" class="form-control floating-label-border" id="floatingInputValue"
                            value="Payment must be completed within 30 minutes." />
                        <label for="floatingInputValue">Payment Instructions</label>
                    </form>
                </div>
            </template>
            <template #footer>
                <div class="row gx-0 g-0 d-flex justify-content-center align-items-center" style="right: 39%;">
                    <div class="col mx-3">
                        <button type="button" class="btn btn-outline border-purple border-0 text-purple"
                            @click="update_payout_debit_modal = false">Cancel</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn bg-purple text-white border-2">Save</button>
                    </div>
                </div>
            </template>
        </ModalLayoutMedium>
    </Teleport>

    <!-- MODAL 3: << Modal for Settings > Payout Configuration > Update Payout Details (E-Wallet) >> -->
    <Teleport to="body">
        <ModalLayoutMedium :show="update_payout_e_wallet_modal" @close="update_payout_e_wallet_modal = false">
            <template #header>
                <div class="row gx-0 g-0 lh-1">
                    <div class="col-11 mb-2">
                        <p class="title-10">Configure Payout Details</p>
                        <p class="title-8 mt-2">Configure your payment methods and receive them in the form of payouts.</p>
                    </div>
                    <div class="col-1 d-flex justify-content-end">
                        <button type="button" class="close-icon isax isax-close-circle5 border-0 bg-transparent ms-2"
                            style="bottom: 8px;" @click="update_payout_e_wallet_modal = false" aria-label="Close"></button>
                    </div>
                </div>
            </template>
            <template #body>
                <div class="row gx-0 g-0">
                    <div class="col title-23 pb-2">
                        Upload the logo
                    </div>
                    <div class="input-group input-group-xl mb-3">
                        <span class="input-group-text bg-purple text-white" id="inputGroup-sizing-lg">Choose File</span>
                        <input type="text" class="floating-label-border form-control" placeholder="Upload a file"
                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div class="form-floating floating-label-color mb-3">
                        <select class="form-select floating-label-border form-select2 rounded-0" id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected>E-Wallet</option>
                            <option value="1">Debit/Credit Card</option>
                            <option value="2">Payment Outlet/Centers</option>
                        </select>
                        <label for="floatingSelect">Payout Method</label>
                    </div>
                    <div class="form-floating floating-label-color mb-3">
                        <select class="form-select floating-label-border form-select2 rounded-0" id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected>Gcash</option>
                            <option value="1">Unionbank</option>
                        </select>
                        <label for="floatingSelect">Payout Channel</label>
                    </div>
                    <form class="form-floating floating-label-color mb-3">
                        <input type="mobile number" class="form-control floating-label-border" id="floatingInputValue"
                            placeholder="+639123456789" value="+639123456789" />
                        <label for="floatingInputValue">Account Number</label>
                    </form>
                    <form class="form-floating floating-label-color mb-3">
                        <input type="name" class="form-control floating-label-border" id="floatingInputValue"
                            placeholder="LGU of Lorem Ipsum" value="LGU of Lorem Ipsum" />
                        <label for="floatingInputValue">Account Name</label>
                    </form>
                    <form class="form-floating floating-label-color">
                        <input type="text" class="form-control floating-label-border" id="floatingInputValue"
                            value="Payment must be completed within 30 minutes." />
                        <label for="floatingInputValue">Payment Instructions</label>
                    </form>
                </div>
            </template>
            <template #footer>
                <div class="row gx-0 g-0 d-flex justify-content-center align-items-center" style="right: 39%;">
                    <div class="col mx-3">
                        <button type="button" class="btn btn-outline border-purple border-0 text-purple"
                            @click="update_payout_e_wallet_modal = false">Cancel</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn bg-purple text-white border-2">Save</button>
                    </div>
                </div>
            </template>
        </ModalLayoutMedium>
    </Teleport>
</template>

<script>
import ModalLayoutSmall from "../../components/ModalLayoutSmall.vue";
import ModalLayoutMedium from "../../components/ModalLayoutMedium.vue";

export default {
    components: {
        ModalLayoutSmall,
        ModalLayoutMedium,
    },
    data() {
        return {
            update_payout_debit_modal: false,
            update_payout_e_wallet_modal: false,
            payout_channel_modal: false,
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
                            expiration_date: "1206",
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
                            expiration_date: "9012",
                            is_accepted: true,
                        },
                    ],
                    debit_payments: [
                        {
                            debit: "Debit/Credit Card",
                        },
                    ],
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
                            expiration_date: "1104",
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
                            expiration_date: "1105",
                            is_accepted: false,
                        },
                    ],
                    debit_payments: [
                        {
                            debit: "e-wallet",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        closeModal() {
            this.$emit("close");
        },
    },
};
</script>

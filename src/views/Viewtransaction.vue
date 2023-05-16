<template>
    <Sidebar />
    <SearchBar />
    <main class="container d-flex col-md-9 col-lg-12" style="margin-left: 12rem;">
        <div class="container ms-5 mt-3 pb-5">
            <h2 class="ms-4">Transaction Details</h2>
            <i class="icon-arrow isax isax-arrow-left-35 position-absolute top-0 start-100 translate-middle"></i>
            <div class="position-absolute top-0 start-100 translate-middle mt-2">
                <p>Back</p>
            </div>
            <div class="col d-flex mx-4 px-5">
                <div class="row position-absolute top-0 end-0">
                    <div class="col-md">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <span><i class="icon-search isax isax-printer position-absolute top-50 translate-middle ms-2"></i>
                                <button class="btn btn-download me-md-2 py-1" type="button">Download</button></span>
                            <span><i class="icon-print isax isax-printer position-absolute top-50 translate-middle ms-2"></i>
                                <button class="btn btn-print py-0" type="button">Print</button></span>
                        </div>
                    </div>
                    <div class="container-payment ms-4 px-md-1 pb-2 mt-3 bg-white">
                        <div class="container-fluid ">
                            <div class="row justify-content-around">
                                <div class="col align-self-start py-3 fw-bold">
                                    Payment Details
                                </div>
                                <div class="col-2 py-3 position-absolute top-0 end-0" style="color: var(--vt-c-blue); padding-left: 8.4rem;">
                                    Refund
                                </div>
                                <div class="border-top"></div>
                                <div class="row justify-content-between">
                                    <div class="col-4">
                                        <div class="button-green mt-3"></div>
                                        <button class="btn btn-paid me-md-2 py-0" type="button">Paid</button>
                                    </div>
                                    <div class="col-4 text-end">
                                        Total Amount
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-4">Transaction No.</div>
                                        <div class="col-md-4 offset-md-4 text-end fw-bold">PHP 10,000.00</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">2201010000112221</div>
                                    </div>
                                    <div class="row ">
                                        <div class="col-md-4 pe-2 offset-md-4 position-absolute top-50 end-0 translate-middle-y p-5 text-end">
                                            <p>Jan. 01, 2023 at 7:28:00 AM PST</p>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mt-4">
                                        <div class="col">
                                            Payment Details
                                        </div>
                                        <div class="col" style="margin-right: 18rem">
                                            Amount
                                        </div>
                                        <div class="col m-2 pe-2 position-absolute top-50 end-0 translate-middle-y p-5 text-end">
                                            9,950.00
                                        </div>
                                    </div>
                                    <div class="row align-items-end">
                                        <div class="col-md-3 offset-md-3 text-end">CONVENIENT FEE</div>
                                        <div class="col-md-3 offset-md-3 text-end">50.00</div>
                                    </div>
                                    <div class="border-total col-md-8 border-bottom"></div>
                                    <div>
                                        <div class="row align-items-end">
                                            <div class="col-md-3 offset-md-3 text-end">Total Amount</div>
                                            <div class="col-md-3 offset-md-3 text-end">50.00</div>
                                        </div>
                                    </div>
                                    <div class="border-top col-md-15 mt-3"></div>
                                    <div class="row align-items-center m-4">
                                        <div class="col">
                                            PAYMENT SENT BY
                                        </div>
                                        <div class="col">
                                            Juan Dela Cruz
                                        </div>
                                        <div class="col">
                                            juandelacruz@gmail.com
                                        </div>
                                        <div class="col text-end">
                                            <img src="/src/assets/images/Gcash.svg" alt="Image">
                                            Ending in 2095
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-refund ms-2 px-md-2 ms-4 mt-3 bg-white">
                        <div class="container-fluid ">
                            <div class="row justify-content-around">
                                <div class="col align-self-start py-3 fw-bold">
                                    Payment Details
                                </div>
                                <div class="col-2 py-3" style="color: var(--vt-c-blue); padding-left: 9rem;">
                                    Refund
                                </div>
                                <div class="border-top"></div>
                                <div class="button-red mt-3">
                                    <button class="btn btn-requested me-md-2 py-0" type="button">Requested</button>
                                </div>
                                <div class="container">
                                    <div class="container text-center">
                                        <div class="row justify-content-end mx-5  ">
                                            <div class="col-4">
                                                REFUND ID: <br>R12345678
                                            </div>
                                            <div class="col-4 text-center">
                                                REQUESTED BY:<br>Maria Clara
                                            </div>
                                            <div class="col-4 text-end ">
                                                REQUESTED BY: <br>Juan Dela Cruz
                                            </div>
                                        </div>
                                        <div class="border-top col-md-15 mt-3"></div>
                                        <div class="row justify-content-start">
                                            <div class="col-4 text-start">
                                                DATE REQUESTED:
                                            </div>
                                            <div class="col-4 text-start">
                                                DATE ISSUED:
                                            </div>
                                            <div class="col-4 text-start">
                                                DATE AUTHORIZED:
                                            </div>
                                            <div class="col-4 text-end position-absolute bottom-0 end-0 pe-3">
                                                DATE REFUNDED
                                            </div>
                                        </div>
                                        <div class="row justify-content-start">
                                            <div class="col-4 text-start">
                                                Jan 25,2023 at 12:39 PM ST
                                            </div>
                                            <div class="col-4 text-start">
                                                Jan 25,2023 at 12:39 PM ST
                                            </div>
                                            <div class="col-4 text-start">
                                                -
                                                <div class="col color-purple">
                                                    Resend Authorization
                                                </div>
                                            </div>
                                            <div class="col-4 text-start position-absolute bottom-0 end-0 pe-3">
                                                -
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
    </main>
</template>

<script>
    import SearchBar from '../components/SearchBar.vue';
    import Sidebar from '../components/Sidebar.vue';

    export default {
        name: "Viewtransaction",
        components: {
            SearchBar,
            Sidebar
        }

    };
</script>
<template>
    <Sidebar />
    <SearchBar/>
    <main class="container d-flex col-md-8 col-lg-11" style="margin-left: 11rem;">
        <div class="container ms-5 mt-3 pb-5">
            <h1 class="ms-5 fw-bold">Transaction Details</h1>
            <i class="icon-arrow isax isax-arrow-left-35 position-absolute top-0 start-100 translate-middle ms-0 pe-5 mb-2"></i>
            <div class="mt-2 position-absolute top-0 start-100 translate-middle">
                <p>Back</p>
            </div> 
            <div class="col d-flex mx-4 px-5">
                <div class="row position-absolute top-0 end-0 ">
                    <div class="col-md mb-3">
                        <div class="color-button d-grid gap-2 d-md-flex justify-content-md-end position-absolute top-50 end-0 translate-middle-y mx-md-0">
                            <span><i class="icon-search isax isax-printer position-absolute top-50 translate-middle ms-2"></i>
                                <button class="btn btn-download me-md-1 py-0 px-4" type="button">Download</button></span>
                            <span><i class="icon-print isax isax-printer position-absolute top-50 translate-middle ms-3"></i>
                                <button class="btn btn-print me-md-0 py-0" type="button">Print</button></span>
                        </div>
                    </div>
                    <div class="container-payment ms-4 px-md-1 pb-2 mt-3 bg-white col-lg-12 ">
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
                                    <div class="col-4 text-end pe-0">
                                        TOTAL AMOUNT
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-4">Transaction No.</div>
                                        <div class="font-size-col col-md-4 offset-md-4 text-end fw-bold">PHP 10,000.00</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 col-sm">2201010000112221</div>
                                    </div>
                                    <div class="row ">
                                        <div class="col-md-4 pe-2 offset-md-4 position-absolute top-50 end-0 translate-middle-y p-5 text-end">
                                            <p>Jan. 01, 2023 at 7:28:00 AM PST</p>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mt-4">
                                        <div class="col">
                                            PAYMENT DETAILS
                                        </div>
                                        <div class="col" style="margin-right: 20rem">
                                            AMOUNT
                                        </div>
                                        <div class="col m-2 pe-1 position-absolute top-50 end-0 translate-middle-y p-5 text-end">
                                            9,950.00
                                        </div>
                                    </div>
                                    <div class="row align-items-end">
                                        <div class="col-md-3 offset-md-3 text-end">CONVENIENT FEE</div>
                                        <div class="col-md-3 offset-md-3 text-end">50.00</div>
                                    </div>
                                    <div class="border-total col-md border-bottom"></div>
                                    <div>
                                        <div class="row align-items-end">
                                            <div class="col-md-3 offset-md-3 text-end pe-4">TOTAL AMOUNT</div>
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
                                        <div class="col text-end pe-0 me-0">
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
                                <div class="mt-2">
                                    <button class="btn button-red me-md-2 py-0" type="button">Requested</button>
                                </div>
                                <div class="container">
                                    <div class="container text-center">
                                        <div class="row justify-content-end mx-5 ">
                                            <div class="col-font-size col-4">
                                                REFUND ID: <br>R12345678
                                            </div>
                                            <div class="col-font-size col-4 text-center">
                                                REQUESTED BY:<br>Maria Clara
                                            </div>
                                            <div class="col-font-size col-4 text-end ">
                                                REQUESTED BY: <br>Juan Dela Cruz<br>******1200
                                            </div>
                                        </div>
                                        <div class="border-top col-md-15 mb-3"></div>
                                        <div class="row justify-content-start">
                                            <div class="col-size col-4  text-start" style="font-size: 13px;">
                                                DATE REQUESTED:
                                            </div>
                                            <div class="col-date col-4 text-start" style="font-size: 13px;">
                                                DATE ISSUED:
                                            </div>
                                            <div class="col-date col-4 text-start" style="font-size: 13px;">
                                                DATE AUTHORIZED:
                                            </div>
                                            <div class="col-date col-4 text-end position-absolute bottom-0 end-0 pe-3" style="font-size: 13px;">
                                                DATE REFUNDED
                                            </div>
                                        </div>
                                        <div class="row justify-content-start">
                                            <div class="col-4 text-start" style="font-size: 11px;">
                                                Jan 25,2023 at 12:39 PM ST
                                            </div>
                                            <div class="col-4 text-start" style="font-size: 13px;">
                                                Jan 25,2023 at 12:39 PM ST
                                            </div>
                                            <div class="col-4 text-start">
                                                -
                                                <div class="col color-purple" style="font-size: 13px;">
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
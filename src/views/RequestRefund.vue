<template>
    <Sidebar />
    <Header />
    <div class="refund container bg-light px-5 mt-0" style="margin-left: 11rem;">
        <div class="row mx-5">
            <header class="header bg-light lh-0 p-3 ms-1 px-1">
                <div class="col-12">
                    <a class="title-2 text-decoration-none text-dark mx-2">Request Refund</a>
                    <span class="position-absolute top-50 end-0 translate-middle-y mb-5">
                        <i class="icon-arrow isax isax-arrow-left-35 mx-3 mb-4  "></i>
                        <span clhhass="color-black text-decoration-none text-dark mx-4 mb-5 ms-0">Back</span>
                    </span>
                </div>
            </header>
            <div class="gx-4 g-3 mb-0 ms-2" style="margin-left: 3rem;">
            </div>
            <div class="search input-group px-4 ">
                <span class="input-group-text bg-light rounded-0 p-2" id="basic-addon1"><i class="isax isax-search-status-1 fs-4"></i></span>
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
            </div>
            <!--Search and Filer-->
            <div class="col d-flex">
                <div class="input-group px-5 bg-light rounded-0">
                    <span class="btn-default input-group-text"> <i class="filter-icon isax isax-filter-search fs-4"></i></span>
                    <button type="button" class="btn-default-icon" aria-label="Selected-Field" aria-describedby="basic-addon2">Filter</button>
                </div>
            </div>
            <div class="col d-flex">
                <div class="row position-absolute top-0 end-0">
                    <div class="col-md"><button type="button" class="default-outline-refund position-absolute top-50 end-0 translate-middle-y me-3 fw-bold">Refund Requests</button></div>
                    <div class="col-md"><button type="button" class="default-outline-export">Export</button></div>
                </div>
            </div>
        </div>
        <div class="col mb-1 pt-4 title-7">
            <div class="mx-5 px-4">Total result <span class="badge-red bg-transparent">24</span></div>
        </div>
        <div class="border-bottom pt-4" style="width:105%;">
        </div>
        <!--table heading-->
        <div class="container-fluid col-lg-10 ms-4">
            <div class="justify-content-between ">
                <div class="table-responsive text-nowrap table-hover">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="table-heading1">Transaction No.</th>
                                <th class="table-heading2">Amount</th>
                                <th class="table-heading2">Offer</th>
                                <th class="table-heading2">Issued by</th>
                                <th class="table-heading2">Date Issued</th>
                                <th class="table-heading2">Date Refunded</th>
                                <th class="table-heading2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table table-border">
                                <td class="text-start py-4">2201010000112221</td>
                                <td class="text-start py-4">PHP 10,000.00</td>
                                <td class="text-start py-4">Full Refund</td>
                                <td class="text-start py-4">Maria Clara</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td class="text-start py-4">02/01/2023 7:11 AM</td>
                                <td>
                                    <button type="button" class="btn btn-danger bg-transparent text-danger position-absolute top-50 start-50 translate-middle py-0 "><span class="table-badge-text-requested mx-0">Requested</span></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start py-4">2201010000112222</td>
                                <td class="text-start py-4">PHP 100.00</td>
                                <td class="text-start py-4">Partial Refund</td>
                                <td class="text-start py-4">Maria Clara</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td>
                                    <button type="button" class="btn btn-danger bg-transparent text-danger position-absolute top-50 start-50 translate-middle py-0"><span class="table-badge-text-requested">Requested</span></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start py-4">2201010000112223</td>
                                <td class="text-start py-4">PHP 10,000.00</td>
                                <td class="text-start py-4">Full Refund</td>
                                <td class="text-start py-4">Maria Clara</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td>
                                    <button type="button" class="btn btn-warning bg-transparent text-warning position-absolute top-50 start-50 translate-middle py-0"><span class="table-badge-text-authorized">Authorized</span></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start py-4">2201010000112224</td>
                                <td class="text-start py-4">PHP 8,000.00</td>
                                <td class="text-start py-4">Full Refund</td>
                                <td class="text-start py-4">Maria Clara</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td>
                                    <button type="button" class="btn btn-warning bg-transparent text-warning position-absolute top-50 start-50 translate-middle py-0"><span class="table-badge-text-authorized">Authorized</span></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start py-4">2201010000112225</td>
                                <td class="text-start py-4">PHP 5,000.00</td>
                                <td class="text-start py-4">Partial Refund</td>
                                <td class="text-start py-4">Maria Clara</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td>
                                    <button type="button" class="btn btn-success bg-transparent text-success position-absolute top-50 start-50 translate-middle py-0"><span class="table-badge-text-success">Success</span></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start py-4">2201010000112226</td>
                                <td class="text-start py-4">PHP 10,000.00</td>
                                <td class="text-start py-4">Full Refund</td>
                                <td class="text-start py-4">Maria Clara</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td>
                                    <button type="button" class="btn btn-success bg-transparent text-success position-absolute top-50 start-50 translate-middle py-0"><span class="table-badge-text-success">Success</span></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start py-4">2201010000112227</td>
                                <td class="text-start py-4">PHP 1,000.00</td>
                                <td class="text-start py-4">Partial Refund</td>
                                <td class="text-start py-4">Maria Clara</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td>
                                    <button type="button" class="btn btn-success bg-transparent text-success position-absolute top-50 start-50 translate-middle py-0"><span class="table-badge-text-success">Success</span></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start py-4">2201010000112228</td>
                                <td class="text-start py-4">PHP 1,500.00</td>
                                <td class="text-start py-4">Partial Refund</td>
                                <td class="text-start py-4">Maria Clara</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td>
                                    <button type="button" class="btn btn-success bg-transparent text-success position-absolute top-50 start-50 translate-middle "><span class="table-badge-text-success position-absolute top-50 start-50 translate-middle">Success</span></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start py-4">2201010000112229</td>
                                <td class="text-start py-4">PHP 200.00</td>
                                <td class="text-start py-4">Partial Refund</td>
                                <td class="text-start py-4">Maria Clara</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td>
                                    <button type="button" class="btn btn-success bg-transparent text-success position-absolute top-50 start-50 translate-middle"><span class="table-badge-text-success position-absolute top-50 start-50 translate-middle">Success</span></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start py-4">2201010000112230</td>
                                <td class="text-start py-4">PHP 1,000.00</td>
                                <td class="text-start py-4">Partial Refund</td>
                                <td class="text-start py-4">Maria Clara</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td class="text-start py-4">01/01/2023 7:28 AM</td>
                                <td>
                                    <button type="button" class="btn btn-success bg-transparent text-success position-absolute top-50 start-50 translate-middle"><span class="table-badge-text-success position-absolute top-50 start-50 translate-middle">Success</span></button>
                                </td>
                            </tr>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Sidebar from '../components/Sidebar.vue';

    export default {
        name: "RequestRefund",
        components: {
            Header,
            Sidebar
        }

    };
</script>
<template>
    <table>
        <div class="table-responsive text-nowrap">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th class="table-heading1">Transaction No.</th>
                        <th class="table-heading1">Amount Refunded</th>
                        <th class="table-heading1">Offer</th>
                        <th class="table-heading1">Issued by</th>
                        <th class="table-heading1">Date Issued</th>
                        <th class="table-heading1">Date Refunded</th>
                        <th class="table-heading1">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table table-border px-4">
                        <td class="text-start py-4">2201010000112221</td>
                        <td class="text-start py-4">PHP 10,000.00</td>
                        <td class="text-start py-4">Full Refund</td>
                        <td class="text-start py-4">Maria Clara</td>
                        <td class="text-start py-4">01/01/2023 7:28 AM</td>
                        <td class="text-start py-4">02/01/2023 7:11 AM</td>
                        <td>
                            <button type="button" class="btn btn-danger bg-transparent text-danger position-absolute top-50 start-50 translate-middle py-0 "><span class="table-badge-text-requested">Requested</span></button>
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
                            <button type="button" class="btn btn-success bg-transparent text-success"><span class="table-badge-text-success position-absolute top-50 start-50 translate-middle">Success</span></button>
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
                    <div class="container d-flex">
                        <div class="row">
                            <div class="col-md"><i class="arrow isax isax-arrow-left-2"></i></div>
                            <div class="col-md">
                                <p class="text-previous">Previous</p>
                            </div>
                            <div class="col-md">
                                <p class="text-one ms-2">1</p>
                            </div>
                            <div class="col-md">
                                <p class="text-disabled ms-2">2</p>
                            </div>
                            <div class="col-md">
                                <p class="text-next ms-2">Next</p>
                            </div>
                            <div class="col-md"><i class="arrow-right isax isax-arrow-right-3"></i></div>
                        </div>
                    </div>
                </tbody>
            </table>
        </div>
    </table>
</template>
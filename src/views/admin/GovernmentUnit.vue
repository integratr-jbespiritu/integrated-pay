<template>
    <div class="pad-x-10p ms-1 pad-end-20p">
        <div class="row gx-0 g-0">
            <div class="col mt-3 mb-2 ms-1">
                <h1 class="title-10 text-decoration-none text-dark">KYC Assessment</h1>
            </div>
            <div class="col my-auto justify-content-end d-flex pad-top-20p">
                <div class="row gx-0 g-0">
                    <div class="col-auto">
                        <i class="icon-arrow isax isax-arrow-left-35"></i>
                    </div>
                    <div class="col-auto my-auto title-7 mb-3 margin-x-10p" style="top: .3px;">
                        <span>Back</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row gx-0 g-0 gap-3 p-1">
            <div class="col bg-white border d-flex flex-column flex-start">
                <div class="lead title-6 mx-3 mt-3">
                    General Information
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col-6 title-5 col-sm-4">
                        Name:
                    </div>
                    <div class="col-3 title-8 col-sm-4">
                        Jayden Delos Reyes
                    </div>
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col-6 title-5 col-sm-4">
                        Email Address:
                    </div>
                    <div class="col-3 title-8 col-sm-4">
                        email@website.com
                    </div>
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col-6 title-5 col-sm-4">
                        Mobile Number:
                    </div>
                    <div class="col-3 title-8 col-sm-4">
                        091234567890
                    </div>
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col-6 title-5 col-sm-4">
                        Date of Birth:
                    </div>
                    <div class="col-3 title-8 col-sm-4">
                        November 04, 1996
                    </div>
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col-3">
                        <div class="title-5">KYC Status</div>
                        <div class="status-pending title-17 w-75 mt-2 text-center">Pending</div>
                    </div>
                </div>
            </div>
            <div class="col bg-white mx-1 border">
                <div class="lead title-6 mx-3 mt-3">
                    Government Unit Information
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col-6 title-5 col-sm-5">
                        Type of Government Unit:
                    </div>
                    <div class="title-8 col-md-6 col-lg-6">
                        Local Government Unit
                    </div>
                </div>
                <div class="row p-2 ps-3 text-nowrapr">
                    <div class="col-6 title-5 col-sm-5">
                        Designation:
                    </div>
                    <div class="col-3 title-8 col-sm-5">
                        Employee
                    </div>
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col title-5 col-sm-5">
                        Name of Government Unit:
                    </div>
                    <div class="col title-8 col-sm-5">
                        Local Government of Lorem Ipsum
                    </div>
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col-6 title-5 col-sm-5">
                        Employee Number:
                    </div>
                    <div class="col-3 title-8 col-sm-5">
                        2479475024582
                    </div>
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col-6 title-5 col-sm-5">
                        Date of Incorporation:
                    </div>
                    <div class="col-3 title-8 col-sm-5">
                        August 17, 2017
                    </div>
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col-10 title-5 col-sm-8">
                        How long have you been in the government?:
                    </div>
                    <div class="col-3 title-8 col-sm-4">
                        6 years
                    </div>
                </div>
                <div class="row p-2 ps-3 text-nowrap">
                    <div class="col-6 title-5 col-sm-5">
                        Nature of work:
                    </div>
                    <div class="col-3 title-8 col-sm-5 ms-2">
                        Government employee
                    </div>
                </div>
            </div>
        </div>
        <div class="row gx-0 g-0 p-1">
            <div class="col title-7 pt-4 pb-2">
                Bank Details
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
                <!-- bank details-->
                <div class="input-group mb-3 px-1">
                    <select class="input-height form-select1 text-dark" aria-label="Default select example">
                        <option selected>BDO</option>
                        <option>BPI</option>
                        <option>Landbank</option>
                        <option>Postbank</option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-6">
                <!-- business name -->
                <div class="input-group mb-3 px-1">
                    <input class="form-control input-height" type="text" aria-label="default input example"
                        value="Flower Snack Shop Inc." />
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-6">
                <!-- account number -->
                <div class="input-group mb-3 px-1">
                    <input class="form-control input-height" type="text" aria-label="default input example"
                        value="12062017110419960" />
                </div>
            </div>
        </div>
        <div class="row gx-0 g-0 p-1 pt-3 py-3">
            <div class="title-7 mb-3">Submission of required identification documents</div>
            <div class="col d-flex justify-content-start">
                <p class="text-nowrap me-3">Upload file of your Valid ID</p>
            </div>
            <div class="col d-flex align-items-end justify-content-start justify-content-md-end  gap-3">
                <button type="button" class="btn bg-danger text-white">Decline</button>
                <button type="button" class="btn bg-success text-white">Approve</button>
            </div>
            <div>
                <img src="/src/assets/images/tin-id.svg" alt="TIN ID" class="img-fluid mb-4 mt-3" />
            </div>
            <div class="col">
                <p class="text-nowrap">Upload file of your Certificate of Employment</p>
            </div>
            <div class="col d-flex align-items-end justify-content-start justify-content-md-end  gap-3">
                <button type="button" class="btn bg-danger text-white">Decline</button>
                <button type="button" class="btn bg-success text-white">Approve</button>
            </div>
            <div>
                <img src="/src/assets/images/certification.svg" alt="Certification" class="img-fluid mb-4 mt-3" />
            </div>
            <div class="col">
                <p class="text-nowrap">Upload file of your Certificate of Employment</p>
            </div>
            <div class="col d-flex align-items-end justify-content-start justify-content-md-end  gap-3">
                <button type="button" class="btn bg-danger text-white">Decline</button>
                <button type="button" class="btn bg-success text-white">Approve</button>
            </div>
            <div>
                <img src="/src/assets/images/immigrant-form.svg" alt="Immigrant Form" class="img-fluid mb-4 mt-3" />
            </div>
        </div>
    </div>
</template>
<template>
  <div class="pad-x-10p ms-1 pad-end-20p">
    <div class="row gx-0 g-0">
      <div class="col mt-3 mb-3 ms-1">
        <h1 class="title-10 text-decoration-none text-dark">KYC Assessment</h1>
      </div>
      <div class="col my-auto justify-content-end d-flex pad-top-20p">
        <div class="row gx-0 g-0">
          <div class="col-auto pt-1">
            <i class="icon-arrow isax isax-arrow-left-35"></i>
          </div>
          <div class="col-auto my-auto title-7 margin-x-10p">
            <span>Back</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row gx-0 g-0 gap-3 p-1">
      <div class="col bg-white border">
        <div class="lead title-6 mx-3 mt-3 pb-2">
          General Information
        </div>
        <div class="px-3">
          <div class="title-5 py-2">Name: <span class="title-8">Jayden Delos Reyes</span></div>
          <div class="title-5 py-2">Email Address: <span class="title-8 align-indention">email@website.com</span></div>
          <div class="title-5 py-2">Mobile Number: <span class="title-8">091234567890</span></div>
          <div class="title-5 py-2">Date of Birth: <span class="title-8">November 04, 1996</span></div>
          <div class="title-5 py-2">
            KYC Status <br />
            <span class="status-pending px-4 title-17">Pending</span>
          </div>
        </div>
      </div>
      <div class="col bg-white mx-1 border">
        <div class="lead title-6 mx-3 mt-3 py-2">
          Business Information
        </div>
        <div class="px-3">
          <div class="title-5 py-2">Type of Business: <span class="title-8">Sole Proprietorship</span></div>
          <div class="title-5 py-2">DTI Business Name: <span class="title-8">Flower Snack Shop</span></div>
          <div class="title-5 py-2">Date of Incorporation: <span class="title-8">August 23, 2017</span></div>
          <div class="title-5 py-2">How long have you been in business?: <span class="title-8">6 years</span></div>
          <div class="title-5 py-2">Nature of Business: <span class="title-8">Food and Beverage</span></div>
          <div class="title-5 py-2">Source of Income: <span class="title-8">Business Income</span></div>
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
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
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
    <div class="row gx-0 g-0 p-1 pt-3 py-3 ">
      <div class="title-7 mb-3">Submission of required identification documents</div>
       <div class="col">
          <p style="">Upload file of your Valid ID</p>
        </div>
        <div class="col d-flex justify-content-end gap-3">
          <button type="button" class="btn bg-danger text-white">Decline</button>
          <button type="button" class="btn bg-success text-white">Approve</button>
        </div>
        <div>
          <img src="/src/assets/images/tin-id.svg" alt="TIN ID" class="img-fluid mb-3">
        </div>
        <div class="col">
            <p style="">Upload file of your DTI Business Name Registration Certificate</p>
          </div>
          <div class="col d-flex justify-content-end gap-3">
            <button type="button" class="btn bg-danger text-white">Decline</button>
            <button type="button" class="btn bg-success text-white">Approve</button>
          </div>
          <div>
            <img src="/src/assets/images/dti-permit.svg" alt="DTI Permit" class="img-fluid">
          </div>
        
    </div>
    </div>
</template>
<template>
    <div class="pad-x-10p ms-1 pad-end-20p">
      <div class="row gx-0 g-0">
        <div class="col">
          <h1 class="fw-bold title-10 pad-top-20p text-nowrap">Transaction Details</h1>
        </div>
        <div class="col my-auto justify-content-end d-flex pad-top-20p">
          <div class="row gx-0 g-0">
            <div class="col-auto pt-1">
              <i class="icon-arrow isax isax-arrow-left-35"></i>
            </div>
            <div class="col-auto my-auto title-7">
              <span>Back</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row gx-0 g-0">
        <div class="col justify-content-end d-flex">
          <span><i class="isax isax-printer position-absolute top-50 translate-middle ms-3"></i></span>
          <button class="btn btn-download py-0 title-5 margin-x-10p" type="button">Download</button>
          <span><i class="icon-print isax isax-printer position-absolute top-50 translate-middle ms-4"></i></span>
          <button class="btn btn-print py-0 title-5" type="button">Print</button>
        </div>
      </div>
      <div class="container-payment bg-white mt-3">
        <div class="container-fluid">
          <div class="row justify-content-around">
            <div class="col align-self-start py-3 fw-bold pad-x-20p title-6">
              Payment Details
            </div>
            <div class="col-2 py-3 justify-content-end d-flex title-7 pad-x-20p title-7 color-blue">
              Refund
            </div>
          </div>
          <div class="border-color col-md border-top pad-x-40p"></div>
          <div class="row gx-0 g-0 pad-y-10p">
            <div class="col pad-x-10p">
              <button type="button" class="btn button-green height title-17 py-0">Paid</button>
            </div>
            <div class="col justify-content-end d-flex pad-x-20p title-15">
              TOTAL AMOUNT
            </div>
          </div>
          <div class="row gx-0">
            <div class="col pad-x-10p title-8">
              Transaction No.
            </div>
            <div class="col justify-content-end d-flex pad-x-10p col-auto my-auto title-11">
              PHP 10,000.00
            </div>
          </div>
          <div class="row gx-0 g-0">
            <div class="col pad-x-10p title-7">
              2201010000112221
            </div>
            <div class="col justify-content-end d-flex pad-x-10p title-12">
              Jan. 01, 2023 at 7:28:00 AM PST
            </div>
          </div>
          <div class="row justify-content-between title-12 pt-2">
            <div class="col-4 pad-x-20p">
              PAYMENT DETAILS
            </div>
            <div class="col-4 justify-content-start d-flex title-12">
              AMOUNT
            </div>
            <div class="col-4 justify-content-end d-flex pad-x-20p title-12">
              99500
            </div>
          </div>
          <div class="row justify-content-between title-12">
            <div class="col-4"></div>
            <div class="col-4 justify-content-start d-flex title-12">
              CONVENIENT FEE
            </div>
            <div class="col-4 justify-content-end d-flex pad-x-20p title-12">
              50.00
            </div>
          </div>
          <div class="border-total col-md border-bottom mt-3"></div>
          <div class="row justify-content-between title-12">
            <div class="col-4"></div>
            <div class="col-4 justify-content-start d-flex title-12 mt-3">
              TOTAL AMOUNT
            </div>
            <div class="col-4 justify-content-end d-flex pad-x-20p title-12 mt-2">
              50.00
            </div>
          </div>
          <div class="border-bottom pt-3"></div>
          <div class="row gx-0 g-0 pad-y-20p mt-4">
            <div class="col pad-x-10p title-12 text-nowrap">
              PAYMENT SENT BY
            </div>
            <div class="col title-8 text-nowrap">
              Juan Dela Cruz
            </div>
            <div class="col title-8">
              juandelacruz@gmail.com
            </div>
            <div class="col justify-content-end d-flex pad-x-10p title-8">
              <span><img src="/src/assets/images/Gcash.svg" alt="Image" /></span>
              Ending in 2095
            </div>
          </div>
        </div>
      </div>
      <div class="container-refund bg-white mt-3">
        <div class="container-fluid">
          <div class="row justify-content-around">
            <div class="col align-self-start py-3 fw-bold pad-x-20p title-6">
              Refund Details
            </div>
            <div class="col-2 py-3 justify-content-end d-flex title-7 pad-x-20p title-7 color-blue">
              Refund
            </div>
          </div>
          <div class="border-top"></div>
          <div class="row gx-0 g-0 pad-y-20p">
            <div class="col pad-x-10p">
              <button type="button" class="btn button-red height title-17 py-0">Requested</button>
            </div>
            <div class="col justify-content-center d-flex pad-x-10p title-12">
              REFUND ID: <br />
              R12345678
            </div>
            <div class="col justify-content-center d-flex pad-x-10p title-12 text-nowrap">
              REQUESTED BY: <br />
              R12345678
            </div>
  
            <div class="col justify-content-end d-flex pad-x-10p title-12">
              ACCOUNT DETAILS: <br />
              R12345678
            </div>
          </div>
          <div class="border-top col-md-15 mt-3"></div>
          <div class="row gx-0 g-0 pad-y-20p">
            <div class="col justify-content-start d-flex title-12">
              DATE REQUESTED: <br />
              Jan 25, 2023 at 12:39 PM PST
            </div>
            <div class="col justify-content-center d-flex title-12">
              DATE ISSUED: <br />
              Jan 25, 2023 at 12:39 PM PST
            </div>
            <div class="col justify-content-start mx-3 d-flex title-12">
              DATE AUTHORIZED: <br />
              -
            </div>
            <div class="col title-12">
              DATE REFUNDED: <br />
              -
            </div>
          </div>
        </div>
        <div class="row gx-0 g-0">
          <div class="col justify-content-center d-flex title-7 ms-5 mx-0 color-purple margin-right-20p">
            Resend Authorization
          </div>
        </div>
      </div>
    </div>
  </template>
  
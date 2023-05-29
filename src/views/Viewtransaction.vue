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
               <div class="col-auto my-auto title-7 margin-x-10p">
                  <span>Back</span>
               </div>
            </div>
         </div>
      </div>
      <div class="row gx-0 g-0">
         <div class="col justify-content-end d-flex">
            <button class="btn btn-download rounded-0 me-2 title-7"><i class="isax isax-printer px-1"></i>Download</button>
            <button class="btn btn-print rounded-0 me-2 title-7"><i class="isax isax-printer px-1"></i>Print</button>
         </div>
      </div>
      <div class="container bg-white border px-0 mt-3">
         <div class="row gx-5">
            <div class="col">
               <div class="p-3 text-start title-6 ms-2">Payment Details</div>
            </div>
            <div class="col">
               <div class="p-3 text-end text-blue">Refund</div>
            </div>
         </div>
      </div>
      <div class="container bg-white px-1">
         <div class="row gx-5">
            <div class="col mt-3">
               <div class="p-1 ms-3">
                  <span class="status-paid w-100">Paid</span>
               </div>
            </div>
            <div class="col">
               <div class="p-1 text-end me-4">Total Amount</div>
            </div>
         </div>
      </div>
      <div class="container bg-white px-1">
         <div class="row gx-5">
            <div class="col">
               <div class="ms-3">Transaction No.</div>
            </div>
            <div class="col">
               <div class="p-0 text-end title-11 me-3">PHP 10,000.00</div>
            </div>
         </div>
      </div>
      <div class="container bg-white px-1">
         <div class="row gx-5">
            <div class="col">
               <div class="ms-3 title-5">2201010000112221</div>
            </div>
            <div class="col">
               <div class="text-end me-3 title-12">Jan 01, 2023 at 7:28:00 AM PST</div>
            </div>
         </div>
      </div>
      <div class="container bg-white px-1 title-12">
         <div class="row gx-5">
            <div class="col">
               <div class="ms-3">PAYMENT DETAILS</div>
            </div>
            <div class="col">
               <div class="ms-4">AMOUNT</div>
            </div>
            <div class="col">
               <div class="text-end me-3">9,950.00</div>
            </div>
         </div>
         <div class="row gx-5">
            <div class="col">
               <div class="mx-4 text-end">CONVENIENCE FEE</div>
            </div>
            <div class="col">
               <div class="text-end me-3">50.00</div>
            </div>
         </div>
         <div class="border-top mt-3"></div>
         <div class="row gx-5 title-12">
            <div class="col">
               <div class="mx-5 text-end mt-3 mb-3">TOTAL AMOUNT</div>
            </div>
            <div class="col">
               <div class="text-end me-3">10,000.00</div>
            </div>
         </div>
         <div class="border-bottom"></div>
         <div class="row gx-5 mt-4 pb-4">
            <div class="col">
               <div class="ms-3">Payment sent BY</div>
            </div>
            <div class="col">
               <div class="ms-5 text-center">Juan Dela Cruz</div>
            </div>
            <div class="col">
               <div class="ms-1 text-end">juandelacruz@gmailc.om</div>
            </div>
            <div class="col">
               <div class="text-end me-3">
                  <img src="/src/assets/images/logogcash.svg" class="Image 1" />
                  <span>Ending in</span> <span class="title-5">2095</span>
               </div>
            </div>
         </div>
      </div>
      <div class="container bg-white border px-0 mt-3">
         <div class="row gx-5">
            <div class="col">
               <div class="p-3 text-start title-6 ms-2">Refund Details</div>
            </div>
            <div class="col">
               <div class="p-3 text-end text-blue">Refund</div>
            </div>
         </div>
         <div class="container bg-white border px-0">
            <div class="row gx-5">
               <div class="col">
                  <div class="p-3 text-start title-12 ms-2">
                     <span class="status-requested w-100">Requested</span>
                  </div>
               </div>
               <div class="col">
                  <div class="p-3 text-end title-12 ms-2">
                     REFUND ID: <br />
                     R12345678
                  </div>
               </div>
               <div class="col">
                  <div class="p-3 text-end title-12 ms-2">
                     REQUESTED BY: <br />
                     Maria Clara
                  </div>
               </div>
               <div class="col">
                  <div class="p-3 text-end title-12">
                     ACCOUNT DETAILS: <br />
                     Juan Dela Cruz <br />
                     ******1200
                  </div>
               </div>
            </div>
         </div>
         <div class="container">
            <div class="row align-items-center title-12">
               <div class="col ms-2">
                  DATE REQUESTED:
               </div>
               <div class="col text-center mx-5">
                  DATE ISSUED:
               </div>
               <div class="col text-center">
                  DATE AUTHORIZED:
               </div>
               <div class="col text-center">
                  DATE REFUNDED:
               </div>
            </div>
         </div>
         <div class="container">
            <div class="row align-items-center title-12">
               <div class="col ms-2">
                  Jan 01, 2023 at 7:28:00 AM PST
               </div>
               <div class="col text-end ms-4">
                  Jan 01, 2023 at 7:28:00 AM PST
               </div>
               <div class="col text-center">
                  - <br />
                  <p class="text-purple">Resend Authorization</p>
               </div>
               <div class="col text-center">
                  -
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

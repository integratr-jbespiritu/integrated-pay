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
               <div class="p-3 text-start title-6 ms-3">Payment Details</div>
            </div>
            <div class="col">
               <div class="p-3 text-end text-blue me-3">Refund</div>
            </div>
         </div>
      </div>
      <div class="container bg-white">
         <div class="row justify-content-between">
            <div class="col-4 text-start ms-4 mt-3">
               <span class="status-paid px-5">Paid</span><br>
               <span class="">Transaction No.</span><br>
               <span class="title-7">2201010000112221</span>
            </div>
            <div class="col-4 text-end">
               <p class="title-12 me-5">TOTAL AMOUNT</p>
               <p class="title-6 me-3">PHP 10,000.00</p>
               <p class="title-12 me-3">Jan 01, 2023 at 7:28:00 AM PST </p>
            </div>
            <div class="container">
               <div class="row align-items-center title-12 mt-3">
                  <div class="col text-start ms-4">
                     PAYMENT DETAILS
                  </div>
                  <div class="col">
                     AMOUNT
                  </div>
                  <div class="col text-end me-3">
                     9,950.00
                  </div>
               </div>
            </div>
            <div class="container">
               <div class="row align-items-center title-12">
                  <div class="col text-start ms-4"></div>
                  <div class="col">
                     CONVENIENCE FEE
                  </div>
                  <div class="col text-end me-3">
                     50.00
                  </div>
               </div>
               <div class="border-top mt-3 mb-3"></div>
            </div>
            <div class="container">
               <div class="row align-items-center title-12 mb-3">
                  <div class="col text-start ms-4">
                  </div>
                  <div class="col">
                     TOTAL AMOUNT
                  </div>
                  <div class="col text-end me-3">
                     10,000.00
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="container bg-white border px-0 ">
         <div class="container">
               <div class="row align-items-center title-12 mt-4 mb-4">
                  <div class="col text-start ms-4">
                     PAYMENT SENT BY
                  </div>
                  <div class="col text-center">
                     Juan Dela Cruz
                  </div>
                  <div class="col text-center">
                     juandelacruz@gmail.com
                  </div>
                  <div class="col text-end me-3">
                   <span><img src="/src/assets/images/gcashlogo.svg" class="fs-3 me-3" alt="Logo"></span>
                   <span class="me-2 title-8">Ending in</span><span class="title-7">2095</span>
                  </div>
               </div>
            
</div>
      </div>
      <div class="container bg-white border px-0 mt-3">
         <div class="row gx-5">
            <div class="col">
               <div class="p-3 text-start title-6 ms-3">Refund Details</div>
            </div>
            <div class="col">
               <div class="p-3 text-end text-blue me-3">Refund</div>
            </div>
         </div>
         </div>
          <div class="container bg-white">
               <div class="row align-items-center title-12 ">
                  <div class="col text-start ms-4 mt-3">
                     <span class="status-requested px-4 title-7">Requested</span><br>
                  </div>
                  <div class="col text-end">
                     REFUND ID: <br>
                     R12345678
                  </div>
                  <div class="col text-end">
                     REQUESTED BY: <br>
                     Maria Clara
                  </div>
                  <div class="col text-end me-3">
                     ACCOUNT DETAILS: <br>
                     Juan Dela Cruz <br>
                     ******1200
                  </div>
               </div>
               <div class="container">
               <div class="row align-items-center title-12 mt-3">
                  <div class="col text-start ms-3">
                     DATE REQUESTED: 
                     <div class="col">
                        Jan 25, 2023 at 7:28:00 AM PST
                     </div>
                  </div>
                  <div class="col text-center">
                     DATE ISSUED: 
                     <div class="col text-end border ms-5 ">
                        Jan 25, 2023 at 7:28:00 AM PST
                     </div>
                  </div>
                  <div class="col text-center">
                     DATE AUTHORIZED: <br>
                     -
                     <div class="col text-end mx-5  text-purple ">
                        Resend Authorization
                     </div>
                  </div>
                  <div class="col me-3">
                     DATE REFUNDED: <br>
                     -
                  </div>
               </div>
            </div>
            </div>
   </div>
</template>
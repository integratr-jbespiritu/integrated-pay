<template>
   <!-- main container  -->
   <div class="pad-20p">
      <!-- header  -->
      <div>
         <div class="align-middle d-flex justify-content-between margin-bot-20p">
            <span class="mt-1 title-10 text-nowrap">Transaction Details</span>
            <button class="border-color-none bg-transparent">
               <div class="d-flex align-center">
                  <i class="isax isax-arrow-left-35 mt-1 margin-right-20p"></i> 
                  <p class="m-0 title-7">Back</p>
               </div>
            </button>
            </div>
            <div class="d-flex align-items-end justify-content-start justify-content-md-end margin-bot-20p" style="gap: 10px">
            <button type="button" class="button-download-purple bg-transparent d-flex align-items-center shadow-none">
                  <span><i class="icon isax isax-printer ms-2 pe-2" style="top:2px"></i></span>
                  <span class="title-5 text-nowrap ms-0 me-2">Download </span>
            </button>
            <div>
               <button type="button" class="title-5 print-blue bg-transparent border-blue shadow-none ">
                  <div class="align-items-end d-flex mx-1 text-blue">
                  <span><i class="icon isax isax-printer mx-1"></i></span>
                  <span class="title-5 text-nowrap py-1 ">Print</span>
                  </div>
               </button>
               </div>
            </div>
         <div class="bg-white border  ">
            <div class="d-flex justify-content-between pad-x-40p pad-y-20p title-6 payment-border">
               <span>Payment Details</span>
               <span class="title-7 text-blue">Refund </span>
            </div>
            <div class="pad-y-20p">
               <div class="row p-0">
                  <div class="col-12 col-md-6 row pad-x-40p mb-3 mb-md-0">
                     <span class="title-19 status-green-paid text-center ms-4 align-middle"><span class="title-19">Paid</span></span>
                     <span class="mt-1 title-8 ms-2 text-nowrap"> Transaction No.</span>
                     <span class="title-7 ms-2">2201010000112221</span>
                  </div>
                  <div class=" col-12 col-md-6">
                     <div class="row pad-x-20p d-flex justify-content-end text-start text-md-end text-nowrap pe-3 ps-3 ms-2 ps-md-0 ms-md-0">
                        <span class="title-12 me-0 pe-5">Total Amount</span>
                        <span class="title-11  ps-md-4 ">PHP 10,000.00</span>
                        <span class="title-12">Jan 01, 2023 at 7:28:00 AM PST </span>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row pad-x-30p me-1 pad-x-30p mb-3">
               <div class="col-12 col-md-4 mb-3 mb-sm-0">
                  <span class="ms-2 title-12">Payment Details</span>
               </div>
               <div class="col-6 col-md-4 border-dot-page">
                  <div class="row mb-3 title-12">
                     <span class="mx-2">Amount</span>
                     <span class="mx-2">Convenience Fee</span>
                  </div>
               </div>
               <div class="col-6 col-md-4 pe-2 pe-md-2 border-dot-page">
                  <div class="row text-end title-12 ">
                     <span>9,950.00</span>
                     <span>50.00</span>
                  </div>
               </div>
            </div>
            <div class="row pad-x-30p pad-y-10p title-12  ">
               <div class="col-0 col-md-4 text-start">
               </div>
               <div class="col-6 col-md-4 text-start ps-1 title-12">
                  <span class="ms-3 ms-md-2">Total Amount</span>
               </div>
               <div class="col-6 col-md-4 text-end pe-4 title-12 ">
                  <span class="">10,000.00</span>
               </div>
            </div>
            <div class="border-top"></div>
            <div class="row pad-x-30p pad-y-10p title-12 text-nowrap">
               <div class="col-6 col-lg-3 text-start mt-2">
                  <span class="ms-2">PAYMENT SENT BY</span>
               </div>
               <div class="col-6 col-lg-3 mt-2 text-end text-lg-center ps-lg-0">
                  <span class="ms-5 ms-lg-4 me-12px">Juan Dela Cruz</span>
               </div>
               <div class="col-6 col-lg-3 mt-2 text-center ">
                  <span class="ms-0">juandelacruz@gmail.com</span>
               </div>
               <div class="col-6 col-lg-3 text-end  text-nowrap text-start ps-3">
                  <img src="/src/assets/images/gcashlogo.svg" class="img margin-right-5p pad-right-20p" style="height:30px"/>
                  <span class="title-12 me-2 pe-1 pe-lg-1">Ending in <span><strong>2095</strong></span></span>
               </div>
            </div>
         </div>
         <div class="bg-white mt-3">
            <div class="d-flex justify-content-between pad-x-40p pad-y-20p title-6 second-page-refund">
               <span>Refund Details</span>
               <span class="title-7 text-blue">Refund </span>
            </div>
            <div class="pad-y-20p bg-white border">
               <div class="row pad-x-20p ">
                  <div class="container pad-x-30p">
                     <div class="row">
                        <div class="col-6 col-lg-3 mb-5 mb--0">
                           <span class="title-19 status-red-requested text-center px-4 py-1">Requested</span>
                        </div>
                        <div class="col-6 col-lg-3 title-12">
                           <div class="row pad-x-30p text-end me-3 text-nowrap ">
                              <span class="me-5 pe-4">REFUND ID:</span>
                              <span class="title-8 pe-1 ">R12345678</span>
                           </div>
                        </div>
                        <div class="col-6 col-lg-3 title-12">
                           <div class="row text-start text-lg-center text-nowrap ">
                              <span>REQUESTED BY:</span>
                              <span class="title-8">Maria Clara</span>
                           </div>
                        </div>
                        <div class="col-6 text-end col-lg-3">
                           <div class="row text-nowrap text-start text-lg-end pe-2">
                              <span class="title-12 ms-1 ps-4 text-center text-lg-end">ACCOUNT DETAILS:</span>
                              <span class="title-8 ms-1 ps-4 text-center text-lg-end">Juan Dela Cruz</span>
                              <span class="title-8  ps-3 text-center text-lg-end">********1200</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="bg-white border pad-bottom-20p">
               <div class="me-1 mt-4 pad-x-40p text-nowrap row">
                  <div class="col-12 col-xl-4 mb-3 mb-xl-0">
                     <div class="row">
                        <span class=" title-12">Date Requested:  </span>
                        <span class="title-8">Jan 25, 2023 at 12:39 PM PST</span>
                     </div>
                  </div>
                  <div class="col-12 col-xl-4 mb-3 mb-xl-0">
                     <div class="row">
                        <span class=" title-12">Date Issued: </span>
                        <span class="title-8">Jan 25, 2023 at 12:39 PM PST</span>
                     </div>
                  </div>
                  <div class="col-6 col-xl-2 mb-3 mb-xl-0">
                     <div class="row">
                        <span class=" title-12">Date Authorized:  </span>
                        <span class="title-8">-</span>
                        <span class="title-7 text-purple">Resend Authorization</span>
                     </div>
                  </div>
                  <div class="col-6 col-xl-2 mb-3 mb-xl-0  text-xl-start">
                     <div class="row ">
                        <span class=" title-12">Date Refunded:  </span>
                        <span class="title-8">-</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
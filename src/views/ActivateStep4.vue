<template>
  <div class="row me-0 ms-2">
   <div class="mb-5">
    <div class="row">
     <div class="col">
      <div class="me-4 pb-4 bg-transparent">
       <div class="row gx-0 g-0 justify-content-center mb-3 mt-5">
        <div class="col-9 text-center p-0 mb-2">
         <div class="px-0 pb-0 mt-3 mb-3">
          <form id="form">
           <div class="step4-progressbar">
            <div class="activate-step1">
             <span><img src="/src/assets/images/check.svg" alt="" /> </span>
            </div>
            <div class="activate-step1">
             <span><img src="/src/assets/images/check.svg" alt="" /> </span>
            </div>
            <div class="activate-step1">
             <span><img src="/src/assets/images/check.svg" alt="" /> </span>
            </div>
            <a class="activate-step2-circle text-wrap" title="Statement of Acceptance" data-bs-toggle="tooltip" data-bs-placement="top">
             <div class="inner-circle position-absolute top-50 start-50 translate-middle"></div>
            </a>
           </div>
          </form>
         </div>
        </div>
 
        <div class="container p-3 g-0 bg-white">
         <div class="py-1 text-center">
          <h1 class="title-10 mb-3">
           Statement of Acceptance
          </h1>
          <div class="border-bottom mb-2"></div>
         </div>
         <div class="container">
          <p class="col-12 inter-body-semibold text-start text-dark px-3 mb-1 mt-2">Read our Statement of Acceptance before proceeding</p>
          <p class="text-wrap mt-3 px-3 title-8">
              As a valued customer, I fully acknowledge and accept the importance of the KYC process in ensuring the security and safety of financial transactions. I understand that in order to comply with regulatory requirements and prevent
              fraud and financial crime, it is necessary to provide accurate and up-to-date personal and financial information. Therefore, I hereby accept the terms of the KYC agreement and commit to providing all necessary information and
              documentation to the business or institution.
          </p>
          <p class="text-wrap mt-2 px-3 title-8">
              I further agree to cooperate with the business or institution in case additional information or verification is required to complete the KYC process. I understand that failure to provide accurate and complete information may
              result in delays in processing my transactions or the rejection of my application. By providing this statement of acceptance, I demonstrate my commitment to transparency and integrity, and I look forward to building a long-lasting
              and mutually beneficial relationship with the business or institution based on trust and cooperation.
          </p>
          <p class="col-12 inter-body-semibold text-start text-dark px-3 mt-4">Digital Signature</p>
          <p class="title-8 px-3">Sign on the given space below. It must only be within the given space and should not exceed the frame</p>
 
          <div class="border mt-3 mx-3">
            <!-- Signature -->
              <canvas ref="canvas" class="canvas"></canvas>
          </div>
 
          <!-- button -->
          <div class="container py-2 mt-5">
           <a class="position-absolute bottom-0 end-0 me-3 mb-0 text-decoration-none" href="#">
            <router-link :to="{name: 'consumer.activate-account.step2'}" class="text-decoration-none"><span class="px-3 text-purple">Back</span></router-link>
            <router-link :to="{name: ''}"> <button type="button" class="activate-button">Continue</button> </router-link>
           </a>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </template>
 
 <script>
  import SignaturePad from 'signature_pad';
  export default {
    mounted() {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
      
      this.signature();
    },
    data() {
      return {
        signaturePad: []
      }
    },
    methods: {
      signature() {
        const canvas = this.$refs.canvas
        canvas.width = window.outerWidth
        this.SignaturePad = new SignaturePad(canvas)
      } 
    }
  };
 </script>
 
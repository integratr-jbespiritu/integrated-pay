<template>
    <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
       <div class="modal-dialog" role="document">
           <div class="modal-content rounded-4 shadow" style="width: 42rem;">
                <div class="modal-header p-4 pb-4 border-bottom-0"> 
                   <h1 class="fw-bold mb-0 fs-2">Issue Refund</h1>
                   <p class="text-start position-absolute bottom-0 start-0 mb-0 m-4">Provide necessary information for refund request.</p>
                   <button class="icon-x">
                       <div class="rotate-45 ms-1" style="rotate:45deg;"><i class="isax isax-add "></i></div>
                   </button>
               </div>
               <div class="modal-body p-5 pt-0">
                   <form class="">
                       <div class="form-floating mb-3">
                           <select class="form-select mt-3" id="floatingselect" aria-label="Floating label select">
                               <option selected>[Partial Admin]</option>
                           </select>
                           <label for="floatingSelect" class="mt-3 color-purple">Offer</label>
                       </div>
                       <div class="form-floating mb-3">
                           <select class="form-select mt-3" id="floatingselect mt-5" aria-label="Floating label select">
                               <option selected>BPI</option>
                           </select>
                           <label for="floatingSelect" class="mt-3 color-purple">Bank</label>
                       </div>
                       <div class="form-floating mb-3">
                           <select class="form-select mt-3" id="floatingselect mt-5" aria-label="Floating label select">
                               <option selected>Juan Dela Cruz</option>
                           </select>
                           <label for="floatingSelect" class="mt-3 color-purple">Card Name</label>
                           <div class="form-floating mb-3">
                           <select class="form-select mt-3" id="floatingselect mt-5" aria-label="Floating label select">
                               <option selected>123456789012</option>
                           </select>
                           <label for="floatingSelect" class="mt-3 color-purple">Account Number</label>
                       </div>
                       <div class="form-floating mb-3">
                           <select class="form-select mt-3" id="floatingselect mt-5" aria-label="Floating label select">
                               <option selected>PHP 10,000.00</option>
                           </select>
                           <label for="floatingSelect" class="mt-3 color-purple">Amount</label>
                       </div>
                       <div class="form-floating mb-3">
                           <select class="form-select mt-3" id="floatingselect mt-5" aria-label="Floating label select">        
                               <option selected>Double Payment</option>
                           </select>
                           <label for="floatingSelect" class="mt-3 color-purple">Reason</label>
                       </div>
                       <div>
                           <label class="label-cancel pt-2 m-1 mx-5 px-5">Cancel</label>
                           <button class="btn-process m-3 mx-5">Process Refund</button>
                       </div>
                       </div>
                   </form>
               </div>
           </div>
       </div>
    </div> 
</template>

<script>
export default {
  name: "Modal",
};
</script>
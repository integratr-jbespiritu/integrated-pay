<template>

<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>

<div id="id01" class="modal">
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
                           <select class="form-select mt-3 rounded-0" id="floatingselect" aria-label="Floating label select">
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
                       <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="text" class="input-height form-control" id="floatingInputValue" placeholder="name@example.com" value="123456789012" />
                      <label for="floatingInputValue">Account Number</label>
                    </form>
                  </div>
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="text" class="input-height form-control" id="floatingInputValue" placeholder="name@example.com" value="PHP 10,000.00" />
                      <label for="floatingInputValue">Amount</label>
                    </form>
                  </div>
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="text" class="input-height form-control" id="floatingInputValue" placeholder="name@example.com" value="Double Payment" />
                      <label for="floatingInputValue">Reason</label>
                    </form>
                  </div>
                  <div class="input-group mb-3 px-1">
                    <form class="form-floating">
                      <input type="text" class="input-height form-control" id="floatingInputValue" placeholder="name@example.com" value="Juan" />
                      <label for="floatingInputValue">First Name</label>
                    </form>
                  </div>
                    </form>
                    <div class="container py-2 mt-5">
                        <div class="row gx-0 g-0 justify-content-center d-flex">
                <a class="position-absolute bottom-0 end-0 px-1 mb-2 text-decoration-none" href="#"><span class="px-3 text-purple">Back</span>
                <button type="button" class="activate-button">Continue</button> 
                </a>
              </div>
              </div>
             </div>
              
            </div>
               </div>
           </div>
       </div>
</template>

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
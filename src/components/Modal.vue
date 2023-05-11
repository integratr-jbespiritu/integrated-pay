<template>
    <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                 <div class="modal-header p-5 pb-4 border-bottom-0"> 
                    <h1 class="fw-bold mb-0 fs-2">Issue Refund</h1>
                    <p class="position-absolute m-0 mt-5">Provide necessary information for refund request.</p>
                        <button type="button" class="close-button btn-close" disabled aria-label="Close"></button> 
                 </div>
                <div class="modal-body p-5 pt-0">
                    <form class="">
                        <div class="form-floating mb-3">
                            <select class="form-select" id="floatingselect mt-5" aria-label="Floating label select">
                                <option selected>[Partial Admin]</option>
                            </select>
                            <label for="floatingSelect">Offer</label>
                        </div>
                        <div class="form-floating mb-3">
                            <select class="form-select" id="floatingselect mt-5" aria-label="Floating label select">
                                <option selected>BPI</option>
                            </select>
                            <label for="floatingSelect">Bank</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="name" class="form-control input-text" id="floatingInput" placeholder="name@example.com" value="Juan Dela Cruz">
                            <label for="floatingInput" class="form-control input-text">Card Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <select class="form-select" id="floatingselect mt-5" aria-label="Floating label select">
                                <option selected>123456789012</option>
                            </select>
                            <label for="floatingSelect">Account Number</label>
                        </div>
                        <div class="form-floating mb-3">
                            <select class="form-select" id="floatingselect mt-5" aria-label="Floating label select">
                                <option selected>PHP 10,000.00</option>
                            </select>
                            <label for="floatingSelect">Amount</label>
                        </div>
                        <div class="form-floating mb-3">
                            <select class="form-select" id="floatingselect mt-5" aria-label="Floating label select">
                                <option selected>Double Payment</option>
                            </select>
                            <label for="floatingSelect">Reason</label>
                        </div>
                        <div class="">
                            <div class="d-grid gap-2 d-md-block">
                                <button class="btn btn-link" type="button">Cancel</button>
                                <button class="button-process btn btn-primary px-2 " type="button">Process Refund</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     </div> 
</template>
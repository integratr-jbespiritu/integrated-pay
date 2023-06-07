<template>
  <div class="pad-x-10p pad-end-20p">
  <div class="row gx-0 g-0">
     <div class="col">
        <h1 class="fw-bold title-10 pad-top-20p text-nowrap">User Details</h1>
     </div>
     <div class="col my-auto justify-content-end d-flex pad-top-20p  ">
        <div class="row gx-0 g-0">
           <div class="col-auto pt-1 ">
              <i class="icon-arrow isax isax-arrow-left-35"></i>
           </div>
           <div class="col-auto my-auto title-7 margin-x-10p">
              <span>Back</span>
           </div>
        </div>
     </div>
     <span class="title-6 margin-top-20p">User Information</span>
     </div>
     <div class="">
         <div class="container row gx-0 g-0 pt-1">
         <div class="col-12">
           <div class="row gx-2 g-0">
             <div class="col-12 col-md-12 col-lg-6">
               <!-- access control level -->
               <div class="input-group mb-3">
                 <select class="input-height form-select1 text-silver-gray" aria-label="Default select example">
                   <option selected>Access Control Level</option>
                   <option value=""></option>
                   <option value=""></option>
                   <option value=""></option>
                 </select>
               </div>
             </div>
             <div class="col-12 col-md-12 col-lg-6">
               <!-- input field lastname  -->
               <div class="input-group mb-3">
                 <form class="form-floating">
                   <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Lastname" />
                   <label for="floatingInputValue">First Name</label>
                 </form>
               </div>
             </div>
             <div class="col-12 col-md-12 col-lg-6">
               <!-- input field email -->
               <div class="input-group mb-3">
                 <form class="form-floating">
                   <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Email Address" />
                   <label for="floatingInputValue">Email Address</label>
                 </form>
               </div>
             </div>
             <div class="col-12 col-md-12 col-lg-6">
               <!-- lastname -->
               <div class="input-group mb-3">
                 <form class="form-floating">
                   <input type="email" class="input-height form-control" id="floatingInputValue" placeholder="Last Name" />
                   <label for="floatingInputValue">Last Name</label>
                 </form>
               </div>
             </div>
           </div>
           <p class="col-12 inter-body-semibold text-start text-dark ms-2 mb-3">Enter Password</p>
           <div class="row gx-1 g-0">
             <div class="col-12 col-md-12 col-lg-6">
               <!-- password -->
               <div class="input-group mb-3">
                 <form style="width: 100%;">
                   <input type="text" class="input-height form-control" placeholder="Password" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   <i class="icon-activate isax isax-eye-slash password-toggle"></i>
                 </form>
               </div>
             </div>
             <div class="col-12 col-md-12 col-lg-6">
               <!-- confirm password -->
               <div class="input-group mb-3 px-1">
                 <form style="width: 100%;">
                   <input type="text" class="input-height form-control" placeholder="Confirm Password" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   <i class="icon-activate isax isax-eye-slash password-toggle"></i>
                 </form>
               </div>
             </div>
           
           <!-- button -->
           <div class="py-2 mt-5 d-flex align-middle">
             <a class="position-absolute bottom-0 end-0 px-1 mb-2 text-decoration-none" href="#">
               <span class="px-3 text-purple">Cancel</span>
               <button type="button" class="activate-button">Save</button>
             </a>
           </div>
           </div>
         </div>
       </div>
     </div>
     </div>
</template>
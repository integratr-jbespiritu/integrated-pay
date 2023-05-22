<template>
    <div class="pad-x-10p ms-1 pad-end-20p">
           <div class="row gx-0 g-0">
               <div class="col">
                   <h1 class="fw-bold title-10 pad-top-20p text-nowrap">Access Management</h1>
               </div>
         <div class="gx-0 g-0 mb-3 ms-1"></div>
         <div class="search input-group ms-2">
           <span class="input-group-text bg-light rounded-0" id="basic-addon1"><i class="isax isax-search-status-1 fs-4"></i></span>
           <input type="text" class="title-8 form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
         </div>
         <div class="col ms-3">
           <div class="input-group mb-3">
             <span class="span-btn-default input-group-text rounded-0"><i class="icon isax isax-filter-search"></i></span>
             <button type="button" class="title-8 filter-btn bg-white" aria-label="Selected-Field" aria-describedby="basic-addon2">Filter</button>
           </div>
         </div>
         <div class="col justify-content-end d-flex">
           <div class="row ms-5">
             <div class="col-md margin-x-20p">
               <button type="button" class="title-5 button-default-outline">Export</button>
             </div>
           </div>
         </div>
         <div class="ms-0">
           <div class="border-bottom mb-3 mt-2">
           </div>
         </div>
         </div>
     <div class="row gx-5 ">
        <div class="container">
                 <div class="table-responsive" >
                    <table class="table font-table-text" >
                       <thead>
                          <tr class="title-13"> 
                             <th class="text-start px-20px pb-10px padding-top-none">
                                <div class="d-flex align-items-center">
                                   <span class="font-table-column me-10px text-purple">Transaction No.</span>
                                </div>
                              </th>
                              <th class="text-start px-20px  pb-10px padding-top-none">
                                <div class="d-flex align-items-center">
                                   <span class="font-table-column me-10px text-purple">Amount Refunded</span>
                                </div>
                              </th>
                              <th class="text-start px-20px  pb-10px padding-top-none">
                                <div class="d-flex align-items-center">
                                   <span class="font-table-column me-10px text-purple">Offer</span>
                                </div>
                              </th>
                          </tr>
                       </thead>
                    </table>
                    <div class="mt-20px mb-20px">
                 <div class="d-flex flex-row justify-content-between me-20px ms-20px font-table-pagination d-flex align-items-center row">
               <div class="col d-flex justify-content-end align-items-end me-4">
               <div class="row pagination">
                 <div class="col-md"><i class="arrow isax isax-arrow-left-2"></i></div>
                 <div class="col-md"><p class="text-previous">Previous</p></div>
                 <div class="col-md"><p class="text-one ms-2">1</p></div>
                 <div class="col-md"><p class="text-disabled ms-2">2</p></div>
                 <div class="col-md"><p class="text-next ms-2">Next</p></div>
                 <div class="col-md"><i class="arrow-right isax isax-arrow-right-3"></i></div>
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
   
       export default {
         name: "RequestRefund",
         methods: {
           getStatus(data){
             return `status-${data.toLowerCase()}`;
     }
         }
       };
     </script>
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
          <div class="col-auto my-auto title-7 margin-x-20p">
            <span>Back</span>
          </div>
        </div>
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
          <div class="col-md ms-3">
            <div class="col-md">
              <button type="button" class="button-hover-icon-purple">
                <router-link :to="{name: 'consumer.request-refund'}" class="title-5 position-absolute refund-request top-50 end-0 translate-middle-y me-3 text-decoration-none text-purple">Refund Request</router-link>
              </button>
            </div>
          </div>
          <div class="col-md margin-x-20p">
            <button type="button" class="title-5 button-default-outline">Export</button>
          </div>
        </div>
      </div>
      <div class="ms-0">
        <div class="border-bottom mb-3 mt-2">
          <p class="mb-4 ms-1">Total result <span class="badge-red bg-transparent title-7">24</span></p>
        </div>
      </div>
      <div class="container">
        <div class="table-responsive">
          <table class="table font-table-text">
            <thead>
              <tr class="table-rows title-13">
                <th class="text-start">
                  <div class="d-flex align-items-center">
                    <span class="font-table-column text-purple">Transaction No.</span>
                  </div>
                </th>
                <th class="text-start px-20px pb-10px padding-top-none">
                  <div class="d-flex align-items-center">
                    <span class="font-table-column me-10px text-purple">Amount Refunded</span>
                  </div>
                </th>
                <th class="text-start px-20px pb-10px padding-top-none">
                  <div class="d-flex align-items-center">
                    <span class="font-table-column me-10px text-purple">Offer</span>
                  </div>
                </th>
                <th class="text-start px-20px pb-10px padding-top-none">
                  <div class="d-flex align-items-center">
                    <span class="font-table-column me-10px text-purple">Issued By</span>
                  </div>
                </th>
                <th class="text-start px-20px pb-10px padding-top-none">
                  <div class="d-flex align-items-center">
                    <span class="font-table-column me-10px text-purple">Date Issued</span>
                  </div>
                </th>
                <th class="text-start px-20px pb-10px padding-top-none">
                  <div class="d-flex align-items-center">
                    <span class="font-table-column me-10px text-purple">Date Refunded</span>
                  </div>
                </th>
                <th class="text-start px-20px pb-10px padding-top-none">
                  <div class="d-flex align-items-center">
                    <span class="font-table-column me-10px text-purple">Status</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- row1  -->
              <tr class="size-table-data text-decoration-none">
                <td class="text-start px-20px vertical-alignment-center py-3">2201010000112221</td>
                <td class="text-start px-20px vertical-alignment-center py-3">PHP 100.00</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Partial Refund</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Maria Clara</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td>
                  <button type="button" class="btn btn-danger bg-transparent text-danger py-0 rounded-0"><span class="table-badge-text-requested mx- fw-bold title-17">Requested</span></button>
                </td>
              </tr>
              <!--row 2-->
              <tr class="size-table-data">
                <td class="text-start px-20px vertical-alignment-center py-3">2201010000112222</td>
                <td class="text-start px-20px vertical-alignment-center py-3">PHP 100.00</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Partial Refund</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Maria Clara</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td>
                  <button type="button" class="btn btn-danger bg-transparent text-danger py-0 rounded-0"><span class="table-badge-text-requested mx- fw-bold title-17">Requested</span></button>
                </td>
              </tr>
              <!-- row3  -->
              <tr class="size-table-data">
                <td class="text-start px-20px vertical-alignment-center py-3">2201010000112223</td>
                <td class="text-start px-20px vertical-alignment-center py-3">PHP 100,000</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Partial Refund</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Maria Clara</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td>
                  <button type="button" class="btn btn-warning bg-transparent text-warning py-0 rounded-0"><span class="table-badge-text-authorized mx-0 fw-bold title-17">Authorized</span></button>
                </td>
              </tr>
              <!-- row4  -->
              <tr class="size-table-data">
                <td class="text-start px-20px vertical-alignment-center py-3">2201010000112224</td>
                <td class="text-start px-20px vertical-alignment-center py-3">PHP 10,000.00</td>
                <td class="text-start px-20px vertical-alignment-center py-3">FullRefund</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Maria Clara</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td>
                  <button type="button" class="btn btn-warning bg-transparent text-warning py-0 rounded-0"><span class="table-badge-text-authorized mx-0 fw-bold title-17">Authorized</span></button>
                </td>
              </tr>
              <!-- row5  -->
              <tr class="size-table-data">
                <td class="text-start px-20px vertical-alignment-center py-3">2201010000112225</td>
                <td class="text-start px-20px vertical-alignment-center py-3">PHP 8,000</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Full Refund</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Maria Clara</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td>
                  <button type="button" class="btn btn-success bg-transparent text-success py-0 rounded-0"><span class="table-badge-text-requested mx-0 fw-bold title-17">Success</span></button>
                </td>
              </tr>
              <!-- row6  -->
              <tr class="size-table-data">
                <td class="text-start px-20px vertical-alignment-center py-3">2201010000112226</td>
                <td class="text-start px-20px vertical-alignment-center py-3">PHP 8,000</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Ful Refund</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Maria Clara</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td>
                  <button type="button" class="btn btn-success bg-transparent text-success py-0 rounded-0"><span class="table-badge-text-requested mx-0 fw-bold title-17">Success</span></button>
                </td>
              </tr>
              <!-- row7  -->
              <tr class="size-table-data">
                <td class="text-start px-20px vertical-alignment-center py-3">2201010000112227</td>
                <td class="text-start px-20px vertical-alignment-center py-3">PHP 5,000</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Partial Refund</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Maria Clara</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td>
                  <button type="button" class="btn btn-success bg-transparent text-success py-0 rounded-0"><span class="table-badge-text-requested mx-0 fw-bold title-17">Success</span></button>
                </td>
              </tr>
              <!-- row8 -->
              <tr class="size-table-data">
                <td class="text-start px-20px vertical-alignment-center py-3">2201010000112228</td>
                <td class="text-start px-20px vertical-alignment-center py-3">PHP 5,000</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Partial Refund</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Maria Clara</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td>
                  <button type="button" class="btn btn-success bg-transparent text-success py-0 rounded-0"><span class="table-badge-text-requested mx-0 fw-bold title-17">Success</span></button>
                </td>
              </tr>
              <!-- row 9 -->
              <tr class="size-table-data">
                <td class="text-start px-20px vertical-alignment-center py-3">2201010000112229</td>
                <td class="text-start px-20px vertical-alignment-center py-3">PHP 5,000</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Partial Refund</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Maria Clara</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td>
                  <button type="button" class="btn btn-success bg-transparent text-success py-0 rounded-0"><span class="table-badge-text-requested mx-0 fw-bold title-17">Success</span></button>
                </td>
              </tr>
              <!-- row 10 -->
              <tr class="size-table-data">
                <td class="text-start px-20px vertical-alignment-center py-3">2201010000112220</td>
                <td class="text-start px-20px vertical-alignment-center py-3">PHP 5,000</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Partial Refund</td>
                <td class="text-start px-20px vertical-alignment-center py-3">Maria Clara</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td class="text-start px-20px vertical-alignment-center py-3">01/01/2023 7:28 AM</td>
                <td>
                  <button type="button" class="btn btn-success bg-transparent text-success py-0 rounded-0"><span class="table-badge-text-requested mx- fw-bold title-17">Success</span></button>
                </td>
              </tr>
            </tbody>
          </table>
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
</template>

<script>
  export default {
    name: "RequestRefund",
    methods: {
      getStatus(data) {
        return `status-${data.toLowerCase()}`;
      },
    },
  };
</script>

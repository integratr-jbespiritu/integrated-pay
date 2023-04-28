<template>
    <hr> <div class="container" style="background-color: var(--vt-c-default-white)"><br>
        <h1 class="inter">Colors</h1>  
       <div class="d-flex flex-row">
             <!-- color1  -->
             <div class="m-2">
                <div class="purple d-flex"></div>
                <h1 class="inter px-3">#7755D6</h1>
             </div>
             <!-- color2  -->
             <div class="m-2">
                <div class="blue"></div>
                <p class=" inter px-3">#7DA7F1</p>
             </div>
             <!-- color3  -->
             <div class="m-2">
                <div class="black"></div>
                <p class=" inter px-3">#000000</p>
             </div>
             <!-- color4  -->
             <div class="m-2">
                <div class="light-black"></div>
                <p class="inter px-3">#2B2B2B</p>
             </div>
             <!-- color5  -->
             <div class="m-2">
                <div class="default-white"></div>
                <p class="inter px-3">#FFFFFF</p>
             </div>
             <!-- color6  -->
             <div class="m-2">
                <div class="white"></div>
                <p class="inter px-3">#F9F9F9</p>
             </div>
          </div>
            </div><br>
        

<!-- input fields -->
<div class="container">
  <h1 class="inter">Input Fields</h1>
  <div class="flex-container">
  <div class="row ms-auto">
  <div class="input-fields col-sm-4 " style="background: var(--vt-c-default-white); column-gap: 3rem;">

    <!-- default field -->
    <div class="input-group mb-3">
        <input type="email" class="default form-control" placeholder="Default Field" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div> 
     <!-- selected field -->
     <div class="input-group mb-3">
     <form class="form-floating">
        <input type="email" class="selected form-control" id="floatingInputValue" placeholder="name@example.com" value="Selected Field">
        <label for="floatingInputValue">Field Label</label>
    </form>
    </div>
     <!-- default password field -->
     <div class="input-group mb-3">
    <form class="form-floating">
        <input type="password" class="default-password form-control" id="floatingPassword" placeholder="Default Password Field">
         <i class="icon isax isax-eye-slash password-toggle"></i>
         <label for="floatingPassword">Default Password Field</label>
    </form>
    </div>
     <!-- selected password field -->
    <div class="input-group mb-3">
    <form class="form-floating">
        <input type="password" class="selected-password form-control" id="floatingPassword" placeholder="Default Password Field">
        <i class="icon isax isax-eye-slash password-toggle"></i>
        <label for="floatingPassword">Selected Password Field</label>
    </form>
    </div>
     <!-- default search black -->
    <div class="input-group mb-3">
        <input type="text" class="default-search form-control" placeholder="Default Search" aria-label="Selected-Field" aria-describedby="basic-addon2"> 
        <div class="position-absolute top-0 start-0 ms-4 pt-2">
        <i class="icon-eye isax isax-search-status-1"></i>
        </div>
    </div>      
     <!-- selected search -->
    <div class="input-group mb-3">
        <input type="text" class="selected-search form-control" placeholder="Selected  Search" aria-label="Selected-Field" aria-describedby="basic-addon2"> 
        <div class="position-absolute top-0 start-0 ms-4 pt-2">
        <i class="icon isax isax-search-status-1"></i>
        </div>
    </div> 
     <!-- default search -->
    <div class="default-search-light input-group mb-3">
        <span class="icon-span input-group-text"><i class="isax isax-search-status-1"></i></span>
        <input type="text" class="form-control" placeholder="Default Search" aria-label="Selected-Field" aria-describedby="basic-addon2"> 
    </div> 
     <!-- default search purple border -->
    <div class="default-search-purple input-group mb-3">
        <span class="icon-span-purple input-group-text"><i class="icon-search isax isax-search-status-1"></i></span>
        <input type="text" class="form-control" placeholder="Default Search" aria-label="Selected-Field" aria-describedby="basic-addon2" style="border: 1px solid #7755D6;"> 
    </div> 
     <!-- default duration -->
    <div class="default-duration input-group mb-3">
        <span class="icon-span input-group-text"><i class="isax isax-clock"></i></span>
        <select class="form-select" aria-label="Default select example">
        <option selected>Default Duration</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        </select>
    </div>
  
     <!-- selected duration -->
    <div class="default-duration input-group mb-3">
        <span class="icon-span-purple input-group-text"><i class="icon-search isax isax-clock"></i></span>
        <select class="form-select" aria-label="Default select example" style="border: 1px solid #7755D6;">
        <option selected>Selected Duration</option>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        </select>
    </div> 
     <!-- default date range -->
    <div class="default-date-range input-group mb-3">
        <span class="icon-span input-group-text"><i class="isax isax-calendar-1"></i></span>
        <input type="text" class="form-control" placeholder="Default Date Range" aria-label="Selected-Field" aria-describedby="basic-addon2"> 
    </div> 
     <!-- selected date range -->
    <div class="selected-date-range input-group mb-3">
        <span class="icon-span-purple input-group-text"><i class="icon-search isax isax-calendar-1"></i></span>
        <input type="text" class="form-control" style="border: 1px solid #7755D6;" placeholder="Selected Date Range" aria-label="Selected-Field" aria-describedby="basic-addon2"> 
    </div> 
    </div>

    <!-- button -->
    <div class="button col-md- ms-auto"><br>
        <div class="container d-flex">
            <div class="row d-flex">
            <div class="col-md"><button type="button" class="default-button">Default</button></div>
            <div class="col-md"><button type="button" class="click-hover-button">Click/Hover</button></div>
            <div class="col-md"><button type="button" class="disabled-button">Disabled</button></div>
            </div>
        </div><br>
        <!-- button outline -->
    <div class="container d-flex">
          <div class="row">
            <div class="col-md"><button type="button" class="default-outline">Default</button></div>
            <div class="col-md"><button type="button" class="click-hover-outline">Click/Hover</button></div>
            <div class="col-md"><button type="button" class="disabled-outline">Disabled</button></div>
        </div>
        </div><br>
       <!-- button outline purple-->
    <div class="container d-flex">
        <div class="row">
            <div class="col-md"><button type="button" class="default-outline-purple">Default</button></div>
            <div class="col-md"><button type="button" class="click-hover-outline-purple">Click/Hover</button></div>
            <div class="col-md"><button type="button" class="disabled-outline">Disabled</button></div>
        </div>
     </div><br>
    <!-- button outline with icon -->
    <div class="container d-flex">
        <div class="row">
            <div class="col-md"><button type="button" class="default-icon">
                <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <span class="position-absolute top-50 end-0 translate-middle-y me-4">Default</span>
            </button></div>
            <div class="col-md"><button type="button" class="click-hover-icon">
                <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <span class="position-absolute top-50 end-0 translate-middle-y me-4">Click/Hover</span>
            </button></div>
            <div class="col-md"><button type="button" class="disabled-icon">
                <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <span class="position-absolute top-50 end-0 translate-middle-y me-4">Disabled</span>
            </button></div>
        </div>
    </div><br>  
     <!-- button outline with icon purple -->
     <div class="container d-flex">
        <div class="row">
            <div class="col-md"><button type="button" class="default-purple">
                <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <span class="position-absolute top-50 end-0 translate-middle-y me-4">Default</span>
            </button></div>
            <div class="col-md"><button type="button" class="click-hover-purple">
                <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <span class="position-absolute top-50 end-0 translate-middle-y me-4">Click/Hover</span>
            </button></div>
            <div class="col-md"><button type="button" class="disabled-icon">
                <i class="icon isax isax-add position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <span class="position-absolute top-50 end-0 translate-middle-y me-4">Disabled</span>
            </button></div>
        </div>
        </div><br>
    <!-- text -->
    <div class="container d-flex">
        <div class="row">
            <div class="col-md"><p class="text-default ms-2">Default</p></div>
            <div class="col-md"><p class="text-click-hover ms-2">Click/Hover</p></div>
            <div class="col-md"><p class="text-disabled ms-2">Disabled</p></div>
        </div>
     </div>
    <div class="container d-flex">
        <div class="row">
            <div class="col-md"><i class="arrow isax isax-arrow-left-2"></i></div>
            <div class="col-md"><p class="text-previous">Previous</p></div>
            <div class="col-md"><p class="text-one ms-2">1</p></div>
            <div class="col-md"><p class="text-disabled ms-2">2</p></div>
            <div class="col-md"><p class="text-next ms-2">Next</p></div>
            <div class="col-md"><i class="arrow-right isax isax-arrow-right-3"></i></div>
        </div>
    </div>

        <!-- checkboxes -->
    <div class="container">
        <div class="row align-items-start">
         <div class="col-sm-3">
        <div class="form-check">    
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
            Checkbox
            </label>
    </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
            Checkbox
            </label>
        </div>
    </div>
    <!-- close button -->
        <div class="col">
            <button type="button" class="close-button btn-close" disabled aria-label="Close"></button>
            <button type="button" class="close-button btn-close" style="margin-left: 1rem;" disabled aria-label="Close"></button>
         </div>
    <!-- filter button -->
     <div class="container d-flex mt-3">
     <div class="btn-purple btn-group me-3" role="group" aria-label="Basic example">
            <button type="button" class="btn-default btn btn px-4">
                <i class="icon isax isax-filter-search position-absolute top-50 start-50 translate-middle"></i>
            </button>
            <button type="button" class="btn-default btn btn">Default Filter</button>
    </div>
    <div class="btn-purple btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn-purple-filter btn btn px-4">
                <i class="icon-filter isax isax-filter-search position-absolute top-50 start-50 translate-middle"></i>
            </button>
            <button type="button" class="btn-filter">Default Filter</button>
    </div>
     </div>
        </div>
     </div>
    </div>
     </div>
    </div>
 </div>
</template>
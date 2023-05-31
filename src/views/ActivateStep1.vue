<template>
    <main class="container">
      <div class="d-flex justify-content-between pad-x-40p pad-top-40p">
        <div class="container gx-0 g-0">

                <!-- progressbar -->
          <div class="row gx-0 g-0 justify-content-center mb-3 mt-3">
                    <div class="col-9 text-center p-0 mb-2">
                       <div class="px-0 pb-0 mt-3 mb-3">
                          <form id="form">
                            <div class="progressbar">
                                <a class="step1" data-bs-toggle="tooltip" data-bs-placement="top"  data-bs-custom-class="tooltip"  data-bs-title="What is KYC?">
                                    <div class="inner-circle position-absolute top-50 start-50 translate-middle"></div>
                                </a>
                                <div class="step2-circle">
                                    <div class="inner-circle position-absolute top-50 start-50 translate-middle"></div>
                                </div>
                                <div class="step3-circle">
                                    <div class="step3-inner-circle position-absolute top-50 start-50 translate-middle"></div>
                                </div>
                                <div class="steps4"></div>
                            </div>
                          </form>
                       </div>
                    </div>

            <!--Heading-->
            <div class="container-carousel ms-0 bg-white">
                <div class="py-2 text-center">
                    <h1 class="inter-h1-black fw-bold py-2 title-10" style="font-size: 32px; color: var(--vt-c-purple);">
                        Welcome to AmpliPay!</h1>
                </div>
           <!-- Indicators -->
           <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                  
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="1000">
                            <!--First Slide-->
                            <div class="container pb-2">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-6 mt-5">
                                        <div class="title-4 text-center mt-5">What is KYC?
                                            <div class="container">
                                            <p class="title-26 text-wrap">"Know Your Customer" (KYC) is a procedure that
                                                involves confirming the identity and other pertinent details of a customer, client or user.</p>
                                        </div>
                                        </div>
                                        </div>
                                        <div class="col-md-6 col-lg-6 d-flex justify-content-center">
                                        <!-- <div class="container d-flex justify-content-center"> -->
                                            <img src="/src/assets/images/first.svg" class= "g-0 image-1 img-fluid" alt="Image 1">
                                        </div>
                                        <!-- </div> -->
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="carousel-item " data-bs-interval="1000">
                            <!--Second Slide-->
                            <div class="container pb-1 d-flex justify-content-center">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-6 mt-5">
                                        <div class="title-4 text-center mt-5">What is the purpose of KYC?
                                            <div class="container">
                                            <p class="title-26 text-wrap">KYC aims to avoid fraudulent activities, money laundering,
                                                 and other unlawful practices, while also adhering to legal and regulatory obligations.</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-md-6 d-flex-justify-content-center">
                                            <img src="/src/assets/images/second.svg" class="g-0 image-2 img-fluid" alt="Image 1">
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    
                        <div class="carousel-item " data-bs-interval="1000">
                            <!--Second Slide-->
                            <div class="container px-4">
                                <div class="row">
                                    <div class="col">
                                    <h2 class="title-4 text-center mt-4">PROCESS OF KYC</h2>
                                        <p class="ms-3 mt-1 title-24 text-wrap"> The exact of process of KYC may differ depending on the specific indsutry or 
                                            government body involved. However, a typical KYC process may include the following steps:</p>
                                            <p class="title-24 ms-3 mt-1">1.<strong class="title-25"> Customer Indentification </strong>: This involves obtaining and verifying the customer's identification documents such as a passport or driver's license. </p>
                                            <p class="title-24 ms-3 mt-1">2.<strong class="title-25">Address verification:</strong> This involves the verifying customer's address through various means such as passport or driver's license.</p>   
                                            <p class="title-24 ms-3 mt-1">3. <strong class="title-25"> Risk assessment: </strong>This involves assessing the customer's level of risk for money laundering, fraud, or other illicit activities based on various factors such as their profile, transaction, history, and other relevant.</p> 
                                            <p class="title-24 ms-3 mt-1">4. <strong class="title-25"> Ongoing monitoring: </strong> This involves monitoring the customer's activities on and ongoing basis to ensure that they continue to comply with the KYC requirements and to detect any suspicious or unusual activities.</p>
                                    </div>
                                    <div class="col-md-6 col-lg-6 d-flex justify-content-center">
                                        <img src="/src/assets/images/third.svg" class="py-0 image-3 img-fluid" alt="Image 1">
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div class="carousel-indicators mb-0 pt-5">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                    </div> 
                    
                <!--Button new changes-->
                <div class="mt-5 py-4 mb-4 me-3">
                    <a class="position-absolute bottom-0 end-0 px-0 text-decoration-none"> <span class="px-3 pe-4 text-purple">Back</span>
                        <router-link :to="{name: 'consumer.activate-account'}"> <button type="button" class="activate-button">Continue</button> </router-link>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </main>
  </template>

 <!--New Changes-->
<script>

export default {
 mounted(){

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})
}
};
</script>

<template>
    <main class="container">
      <div class="d-flex justify-content-between pad-x-40p pad-top-40p">
        <div class="container gx-0 g-0">

            <div class="row justify-content-center ">
                <div class="col-8 text-center p-0 mb-2 ps-5">
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
            </div>
            <!--Heading-->
            <div class="container-carousel ms-0 bg-white">
                <div class="py-2 text-center">
                    <h1 class="inter-h1-black fw-bold py-2" style="font-size: 32px; color: var(--vt-c-purple);">
                        Welcome to AmpliPay!</h1>
                </div>
           <!-- Indicators -->
          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="1000">
                            <!--First Slide-->
                            <div class="container">
                                <div class="row justify-content-between mt-5">
                                    <div class="col-md-6">
                                        <div class="d-flex mb-5 ms-0"></div>
                                        <div class="col">
                                            <h5 class="inter-subheading-bold text-center text-black mt-3 ">What is KYC?</h5>
                                        </div>
                                         <!--New Changes-->
                                        <div class="col">
                                            <p class="inter-regular ms-3">"Know Your Customer" (KYC) is a procedure that
                                                involves confirming the identity and other pertinent details of a customer, client or user.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-5 pt-5">
                                        <div class="col-md-6 position-absolute bottom-0 end-0 mt-4">
                                            <img src="/src/assets/images/first.svg" class="img img-fluid" style="object-fit:contain" alt="Image 1">
                                            <div class="carousel-caption d-none d-md-block">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item " data-bs-interval="1000">
                            <!--Second Slide-->
                            <div class="container">
                                <div class="row justify-content-between mt-5">
                                    <div class="col-md-6">
                                        <div class="d-flex mb-5 ms-0"></div>
                                        <div class="col"> 
                                             <!--New Changes-->
                                            <h5 class="inter-subheading-bold text-center text-black mt-3 ">What is KYC?</h5>
                                        </div>
                                        <div class="col">
                                            <p class="inter-regular ms-3">KYC aims to avoid fraudulent activities, money laundering,
                                                and other unlawful practices, while also adhering to legal and regulatory obligations.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-5 pt-5">
                                        <div class="col-md-6 position-absolute bottom-0 end-0 mt-4">
                                            <img src="/src/assets/images/second.svg" class="img img-fluid" style="object-fit:contain" alt="Image 1">
                                            <div class="carousel-caption d-none d-md-block"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item " data-bs-interval="1000">
                            <!--Second Slide-->
                            <div class="container">
                                <div class="row gx-5">
                                    <div class="col-md-6">
                                        <div class="d-flex mb-5 ms-0"></div>
                                        <div class="col"> 
                                             <!--New Changes-->
                                            <h5 class="inter-subheading-bold text-center text-black mt-3 ">Process of KYC</h5>
                                        </div>
                                        <div class="col">
                                            <p class="inter-regular ms-3"> The exact of process of KYC may differ depending on the specific indsutry or 
                                            government body involved. However, a typical KYC process may include the following steps:</p>
                                            <p class="inter-regular ms-3">Customer Indentification: This involves obtaining and verifying the customer's identification documents such as a passport or driver's license. </p>
                                            <p class="inter-regular ms-3">Address verification: This involves the verifying customer's address through various means such as passport or driver's license.</p>   
                                            <p class="inter-regular ms-3">Risk assessment: This involves assessing the customer's level of risk for money laundering, fraud, or other illicit activities based on various factors such as their profile, transaction, history, and other relevant.</p> 
                                            <p class="inter-regular ms-3">Ongoing monitoring: This involves monitoring the customer's activities on and ongoing basis to ensure that they continue to comply with the KYC requirements and to detect any suspicious or unusual activities.</p>
                                            
                                        </div>
                                    </div>
                                    <div class="mt-5 pt-5">
                                        <div class="col-md-6 my-auto position-absolute bottom-0 end-0 mt-4">
                                            <img src="/src/assets/images/third.svg" class="img img-fluid" style="object-fit:contain" alt="Image 1">
                                            <div class="carousel-caption d-none d-md-block"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Button new changes-->
                <div class="mt-4 py-4 mb-5 me-3">
                    <a class="position-absolute bottom-0 end-0 px-0 text-decoration-none"> <span class="px-3 pe-4 text-purple">Back</span>
                        <router-link :to="{name: 'consumer.activate-account'}"> <button type="button" class="activate-button">Continue</button> </router-link>
                    </a>
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

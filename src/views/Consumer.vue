<template>
    <Sidebar />
    <div class="container">
        <div class="step-wizard">
        <div class="step-wizard-list">
            <div class="step-wizard-item">
                <span class="progress-img"><img src="src/assets/images/Ellipse 3.svg" alt="Logo"></span>
            </div>
            <div class="step-wizard-item current-item">
                <span class="progress-img"><img src="src/assets/images/Ellipse 3.svg" alt="Logo"></span>
            </div>
            <div class="step-wizard-item">
                <span class="progress-img"><img src="src/assets/images/Ellipse 3.svg" alt="Logo"></span>
            </div>
            <div class="step-wizard-item">
                <span class="progress-img"><img src="src/assets/images/Ellipse 3.svg" alt="Logo"></span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
    name: Consumer, 
    components: {
        Sidebar
    }
}
</script>
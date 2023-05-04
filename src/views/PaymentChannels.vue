<template>
    <Sidebar />
    <div class="container" style="margin-left:20rem">
        <div class="dashboard">
            <h2>
             Dashboard
            </h2>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
    name: "PaymentChannels",
    components: {
        Sidebar
    }
}
</script>

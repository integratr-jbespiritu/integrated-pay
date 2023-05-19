<template>
    <HeaderComponent />
    <Sidebar />
        <div class="container bg-dark">
            <a class="title-10 text-decoration-none text-dark mx-3" href="#">Payment Channels</a>
        </div>
</template>

<script>
import MainLayout from "../components/MainLayout.vue";

export default {
    name: "PaymentChannels",
    components: {
        MainLayout,
    }
};
</script>

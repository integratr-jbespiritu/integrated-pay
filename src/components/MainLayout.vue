<template>
    <div class="d-flex flex-row">
         <div class="w-auto">
            <Sidebar />
        </div>
        <div class="w-100">
            <HeaderComponent />
            <main class="w-auto">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
    name: "LoginPage",
    components: {
        HeaderComponent,
        Sidebar
    }
};
</script>

<style>

@media (min-width: 576px) {
    .main-layout-size-sm {
        margin-left: 1rem !important;
    }
}

.main-layout-size-sm {
    margin-left: 12.8rem !important;
}
</style>
<template>
    <div class="d-flex flex-row">
        <div class="w-auto">
            <AdminSidebar />
        </div>
        <div class="d-flex">
             <div class="w-auto">
                <HeaderComponent />
                <main class="w-auto">
                    <RouterView />
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';
import AdminSidebar from '../components/AdminSidebar.vue';

export default {
    name: "LoginPage",
    components: {
        HeaderComponent,
        AdminSidebar,
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
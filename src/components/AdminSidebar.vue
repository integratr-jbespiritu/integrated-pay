<template>
    <div class="h-100">
        <div class="ad-sidebar" style="position: sticky !important;">
            <div class="ad-sidebar-header bg-blue">
                <div class="row gx-0 g-0 pad-bottom-10p">
                    <div class="ad-sidebar-logo bg-black px-2">
                      <div class="col-12 justify-content-start d-flex pt-1">
                            <img src="/src/assets/images/logo_white.svg" class="img img-fluid">
                        </div>
                    </div>
                    <div class="col-12 mb-2 mt-3 d-flex">
                        <div class="account text">
                            <a class="title-3 text-white text-decoration-none ms-5" href="home">John Doe</a>
                            <p class="title-17 text">Super Admin</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-75">
                <nav class="nav flex-column">
                    <li>
                        <div class="row gx-0 g-0 pe-4">
                            <div class="col text-nowrap title-3">
                                <router-link class="text-sm-center nav-link text-light" :to="{ name: 'consumer.dashboard' }">
                                    <i class="icon isax isax-category5 me-2"></i>
                                    Dashboard
                                </router-link>
                            </div>
                            <div class="col my-auto justify-content-end d-flex">
                                <div class="badge badge-notification">3</div>
                            </div>
                        </div>
                    </li>
                </nav>
                <template v-for="module_services in modules" :key="module_services">
                    <p class="sub-menu">{{ module_services.title }}</p>
                    <div class="height-auto scrollable">
                        <template v-for="module_type in module_services.module_types" :key="module_type">
                            <nav class="nav flex-column title-3">
                                <router-link class="text-sm-center text-decoration-none text-light"
                                    :to="{ name: module_type.route }">
                                    <li><a class="text-md-center text-nowrap nav-link text-light" href="#"><i
                                                class="isax isax-dcube5 me-2"></i>{{ module_type.name }}</a></li>
                                </router-link>
                            </nav>
                        </template>
                    </div>
                </template>
                <nav class="nav flex-column title-3">
                    <li><a class="text-sm-center nav-link text-light" href="#"><i
                                class="isax isax-setting5 me-2"></i>Settings</a></li>
                    <li><router-link class="text-sm-center nav-link text-light" :to="{ name: 'admin.login' }"><i
                                class="isax isax-logout5 me-2"></i>Logout</router-link></li>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modules: [
                {
                    title: 'Services',
                    module_types: [
                        {
                            name: 'Reports',
                            route: 'consumer.transactions'
                        },
                        {
                            name: 'Transactions',
                            route: 'consumer.transactions'
                        },
                        {
                            name: 'Disbursement',
                            route: 'DisbursementPage'
                        },

                        {
                            name: 'Payment Channels',
                            route: 'admin.payment-channels'
                        },
                        {
                            name: 'KYC',
                            route: ''
                        },
                        {
                            name: 'Service 4',
                            route: ''
                        },
                        {
                            name: 'Service 5',
                            route: ''
                        },
                        
                    ]
                },
            ]
        }

    }
}
</script>
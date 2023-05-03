<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
import Sidebar from '../components/Sidebar.vue'
import TheTypography from '../components/TheTypography.vue'
import InputFieldsColorsButton from '../components/Input-Fields-Colors-Button.vue';
import Table from '../components/Table.vue';
import Login from '../views/Login.vue'
import LoginConsumer from '../views/LoginConsumer.vue'


</script>

<template>
  <main>  

    <Login />
    <LoginConsumer />
    <Header />
    <Sidebar/>
    <TheTypography />
    <InputFieldsColorsButton/>
    <Table /> 
    <Footer />
  </main>
</template>



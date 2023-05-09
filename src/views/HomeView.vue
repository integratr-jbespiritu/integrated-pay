<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
import Sidebar from '../components/Sidebar.vue'
import TheTypography from '../components/TheTypography.vue'
import Table from '../components/Table.vue';
import InputFieldsColorsButton from '../components/Input-Fields-Colors-Button.vue';
import ActivateAccount from './ActivateAccount.vue';




</script>


<template>
  <main>
        <Header /> 
       <Sidebar /> 
               <TheTypography />
          <Input-Fields-Colors-Button/> 
          <ActivateAccount/>
      <Table />
      <Footer />  
  </main>
</template>

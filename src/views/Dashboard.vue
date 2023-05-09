<template>
    <Sidebar/>
    <div class="dashboard" style="margin-left: 14rem;">
        <div class="col">
            <header class="header bg-light lh-1 p-3 px-5">
                <div class="col-12">
                <a class="title-2 text-decoration-none text-dark mx-3" href="#">Dashboard</a>
                </div>
            </header>
            <div class="background-image">
    <div class="overlay">
      <img src="src/assets/images/Char 09.svg" alt="image" />
      <h1>Text Here</h1>
    </div>
  </div>
            <!-- <div class="image-fluid px-5 mx-3">
                <img src="src/assets/images/Row.svg">
                <img src="src/assets/images/Char 09.svg">
            </div> -->
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
    name: "Dashboard",
    components: {
      Sidebar,
    },
}

</script>

<template>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src="src/assets/Logo.svg" alt="Logo">
          <ul>
            <a class="menu-item1" href="#">About Us</a>
            <a class="menu-item2" href="#">Contact Us</a>
            <a class="menu-item3" href="#">Terms of Use</a>
            <a class="menu-item4" href="#">Privacy Policy</a>
          </ul>
          </div>
        <div class="col-md-4">
          <ul class="social">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </ul>
          <p>&copy; 2022 Integratr Corporation, All Rights Reserved</p>
        </div>
    </div>
    </div>
    </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>

footer {
    padding: 30px;
    font-family: 'Poppins', sans-serif;
    color: #7755D6;
}

.row {
    /* flex-wrap: wrap; */
    justify-content: space-around;
    /* margin-top: 35rem; */
}

p {
    left: 70.44%;
    right: 5.92%;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: end;
}

ul {
    text-align: start;
    right: 12%;
}

.menu-item1 {
    /* position: absolute; */
    text-decoration: none;
    height: 23px;
    color: #7755D6;
    left: 5.92%;
    right: 89.76%;
    top: calc(50% - 23px/2 + 383px);
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.204545px;
}

.menu-item2 {
  /* position: absolute; */
    text-decoration: none;
    color: #7755D6;
    height: 23px;
    left: 13.5%;
    right: 81.14%;
    top: calc(50% - 23px/2 + 383px);
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.204545px;
}

.menu-item3 {
  /* position: absolute; */
    text-decoration: none;
    color: #7755D6;
    height: 23px;
    left: 22.12%;
    right: 71.73%;
    top: calc(50% - 23px/2 + 383px);
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.204545px;
}

.menu-item4 {
    /* position: absolute; */
    text-decoration: none;
    color: #7755D6;
    height: 23PX;
    left: 31.52%;
    right: 62%;
    top: calc(50% - 23px/2 + 383px);
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.204545px;
}

.social {
    text-align: end;
    margin-bottom: 30px;
}

.social a {
    color: #7755D6;
    margin-right: 1rem;
    left: 73%;
    right: 2.5%;
}

.social i:hover {
    color: #7755d6a0;
}

img {
    margin-bottom: 20px;
}
</style>
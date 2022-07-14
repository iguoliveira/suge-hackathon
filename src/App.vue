<script>
import loginPage from './components/loginPage/loginPage.vue'
import homepage from './components/homepage/homepage.vue'
import navbar from './components/navbar/navbar.vue'
import registerPage from './components/registerPage/registerPage.vue'

export default {
  name: 'App',
  components: {

    loginPage, homepage, navbar,

    registerPage,
  }
}
</script>

<template>

  <homepage />
  
  <registerPage />

</template>

<style>
*{
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  font-family: 'BoschSans-Regular';
}

@font-face{
  font-family: 'BoschSans-Regular';
  src: url("fonts/BoschSans-Regular.ttf");
}
</style>
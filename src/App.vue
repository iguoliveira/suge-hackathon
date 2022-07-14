<script>
import loginPage from './components/loginPage/loginPage.vue'
import homepage from './components/homepage/homepage.vue'
import navbar from './components/navbar/navbar.vue'

export default {
  name: 'App',
  components: {
    loginPage, homepage, navbar,
  }
}
</script>

<template>
  <navbar />
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
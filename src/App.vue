<script>
import loginPage from './components/loginPage/loginPage.vue'

export default {
  name: 'App',
  components: {
    loginPage,
  }
}
</script>

<template>
  <loginPage />
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
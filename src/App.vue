<script>
import registerPage from './components/registerPage/registerPage.vue'

export default {
  name: 'App',
  components: {
    registerPage,
  }
}
</script>

<template>
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
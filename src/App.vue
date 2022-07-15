<script>
import homepage from "./components/homepage/homepage.vue";

export default {
  name: "App",
  components: {
    homepage,
  },
};
</script>

<template>
  <homepage />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "BoschSans-Regular";
}

@font-face {
  font-family: "BoschSans-Regular";
  src: url("fonts/BoschSans-Regular.ttf");
}
</style>
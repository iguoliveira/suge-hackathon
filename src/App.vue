<script>
export default {
  name: "App",
};
</script>

<template>
  <router-view />
</template>

<style>
body{
  background-color: #eff1f2;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'BoschSans-Regular';
}

@font-face {
  font-family: "BoschSans-Regular";
  src: url("fonts/BoschSans-Regular.ttf");
}

/*a = Router Link */
a{
  text-decoration: none;
  color: inherit;
}
</style>
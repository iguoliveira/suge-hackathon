<template>
  <div>
      <boschLine />
      <navbar />
  </div>
</template>

<script>
import boschLine from "../global-items/boschFade.vue";
import navbar from "../navbar/navbar.vue";

export default {
  name: "homepage",
  components: {
    boschLine,
    navbar,
  },
};
</script>

<style scoped>
   /* background-color: #eff1f2  BOSCH CONTENT BACKGROUND COLOR LINK: https://brandguide.bosch.com/document/337#/farben */
</style>
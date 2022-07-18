<script>
import boschLine from "../components/global-items/bosch-pattern/boschFade.vue";
import navbar from "../components/global-items/navbar/navbar.vue";
import card from "../components/global-items/card/card.vue";
import profileCard from "../components/global-items/card/personalCard.vue";

export default {
  name: "homepage",
  components: {
    boschLine,
    navbar,
    card,
    profileCard,
  },
};
</script>

<template>
  <div className="site">
    <boschLine />
    <navbar />
    <div className="content">
      <card />
      <div className="team">
        <profileCard
          personPath="group-imgs/gu.jpg"
          name="Baltazar Gustavo"
          role="Backend Developer"
        />
        <profileCard
          personPath="group-imgs/vic.jpg"
          name="Eduardo Victor"
          role="Frontend Developer"
        />
        <profileCard
          personPath="group-imgs/bianca.jpg"
          name="Hotops Bianca"
          role="UX/UI Designer"
        />
        <profileCard
          personPath="group-imgs/ste.jpg"
          name="Moreira Stephany"
          role="Logger/Frontend Developer"
        />
        <profileCard
          personPath="group-imgs/igor.jpg"
          name="Oliveira Igor"
          role="Frontend/Backend Developer"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.site {
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.team {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 70vh;
}
</style>
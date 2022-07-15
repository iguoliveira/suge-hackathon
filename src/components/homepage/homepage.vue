<template>
  <div className="site">
    <boschLine />
    <navbar />
    <div className="content">
      <card />
      <div className="team">
        <profileCard
          personPath="bosch-imgs/bosch-red-logo.png"
          name="Baltazar Gustavo"
          role="Backend Developer"
        />
        <profileCard
          personPath="bosch-imgs/bosch-red-logo.png"
          name="Eduardo Victor"
          role="Frontend Developer"
        />
        <profileCard
          personPath="bosch-imgs/bosch-red-logo.png"
          name="Hotops Bianca"
          role="UX/UI Designer"
        />
        <profileCard
          personPath="bosch-imgs/bosch-red-logo.png"
          name="Moreira Stephany"
          role="Logger/Frontend Developer"
        />
        <profileCard
          personPath="bosch-imgs/bosch-red-logo.png"
          name="Oliveira Igor"
          role="Frontend/Backend Developer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import boschLine from "../global-items/boschFade.vue";
import navbar from "../global-items/navbar/navbar.vue";
import card from "./card/card.vue";
import profileCard from "./card/personalCard.vue";

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

<style scoped>
.site {
  background-color: #eff1f2;
}

.content {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}
</style>
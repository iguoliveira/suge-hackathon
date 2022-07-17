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
  background-color: #eff1f2;
  max-height: 100%;
  height: 100vw;
  overflow: hidden;
}

.content {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team {
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
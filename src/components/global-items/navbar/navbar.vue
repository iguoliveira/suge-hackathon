<template>
  <div className="navbar-container">
    <div className="navbar-logos">
      <boschLogo />
      <sugeLogo />
    </div>
    <div className="navbar-links">
      <router-link to="/"><navbarLinks className="navbar-home-link" linkName="Home" /></router-link>
      <router-link to=""><navbarLinks linkName="Map" /></router-link>
      <router-link to=""><navbarLinks linkName="Intern List" /></router-link>
      <router-link :to="{name: 'listagem'}"><navbarLinks linkName="Intern Manage" /></router-link>
    </div>
  </div>
</template>

<script>
import navbarLinks from "./navbarLinks/navbarLinks.vue";
import boschLogo from "../boschLogo.vue";
import sugeLogo from "../sugeLogo.vue";

export default {
  name: "navbar",
  components: {
    navbarLinks,
    boschLogo,
    sugeLogo,
  },
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-left: 1vw;
  margin-right: 1vw;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 1.5vw;
}

.navbar-logos {
  display: flex;
  gap: 20px;
  align-items: center;
}

.navbar-home-link {
  color: rgb(0, 86, 145);
}
</style>
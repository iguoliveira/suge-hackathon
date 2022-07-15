<template>
  <div className="navbar-container">
    <div className="navbar-logos">
      <boschLogo />
      <sugeLogo />
    </div>
    <div className="navbar-links">
      <navbarLinks className="navbar-home-link" linkName="Home" />
      <navbarLinks linkName="Map" />
      <navbarLinks linkName="Intern List" />
      <navbarLinks linkName="Intern Manage" />
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
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
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
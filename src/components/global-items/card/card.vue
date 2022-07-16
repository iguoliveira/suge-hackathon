<script>
export default {
  name: "card",
};
</script>

<template>
  <div className="card">
    <img src="/suge-imgs/logo.png" className="suge-logo" />
    <div className="about-us">
      We are a team thinking about helping you manage interns within the
      company. The site is easy to understand to help you navigate and learn
      more about the interns' data throughout the company.
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  width: 50%;
  min-width: 40%;
  gap: 50px;
}

.suge-logo {
  height: 80px;
}

.about-us {
  font-size: clamp(0.9rem, 1vw, 1.2rem);
  line-height: 28px;
}
</style>
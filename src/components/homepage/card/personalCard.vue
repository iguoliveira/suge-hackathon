<template>
  <div className="card">
    <img :src="personPath" className="picture" />
    <div className="content">
      <div className="name">{{ name }}</div>
      <div>{{ role }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileCard",
  props: {
    personPath: String,
    name: String,
    role: String,
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 26%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.picture {
  width: 100%;
}

.content{
  text-align: center;
}

.name {
  font-weight: bold;
  font-size: 1.15em;
  text-decoration: underline;
}
</style>
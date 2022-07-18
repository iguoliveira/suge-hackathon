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

<template>
  <div className="card">
    <img :src="personPath" className="picture" />
    <div className="content">
      <div className="name">{{ name }}</div>
      <div>{{ role }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.picture {
  max-width: 100%;
  height: 100%;
}

.content{
  text-align: center;
  padding: 15px;
}

.name {
  font-weight: bold;
  text-decoration: underline;
}
</style>
<script setup>
import navbar from "../components/global-items/navbar/navbar.vue";
import boschLine from "../components/global-items/bosch-pattern/boschFade.vue";
import mapPage from "../components/global-items/bosch-pattern/map.vue";
import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { ref, onMounted } from "vue";
import { db } from "../firebase.js";

const sus = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "collaborators"));
  let fbCollas = [];
  querySnapshot.forEach((doc) => {
    const colla = {
      id: doc.id,
      name: doc.data().name,
      area: doc.data().area,
      edv: doc.data().edv,
    };
    fbCollas.push(colla);
    console.log(fbCollas)
  });
  sus.value = fbCollas;
});
</script>

<template>
  <div className="area-available">
    <boschLine />
    <navbar />
    <div className="content">
      <div className="intern-area">
        <div className="header">
          <div>NAME</div>
          <div>EDV</div>
          <div>AREA</div>
        </div>
        <div v-for="i in sus" :key="i" className="row">
          <div>{{ i.name }}</div>
          <div>{{ i.edv }}</div>
          <div>{{ i.area }}</div>
        </div>
      </div>
      <mapPage />
    </div>
  </div>
</template>

<style scoped>
.area-available {
  height: 100vh;
}
.content {
  display: flex;
  margin-top: 80px;
  gap: 10px;
}
.intern-area {
  background-color: white;
  width: 80%;
}

.header {
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  font-size: 1.1em;
  border-bottom: 1px solid black;
}

.row {
  display: flex;
  justify-content: space-around;
  font-size: clamp(0.9rem, 1.5vw, 1.5rem);
}
</style>
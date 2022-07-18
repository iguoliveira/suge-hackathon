<script setup>
import navbar from "../components/global-items/navbar/navbar.vue";
import boschLine from "../components/global-items/bosch-pattern/boschFade.vue";
import mapPage from "../components/global-items/bosch-pattern/map.vue";
import deleteButton from "../components/inputs/deleteButton/delete.vue";
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
    console.log(fbCollas);
  });
  sus.value = fbCollas;
});
</script>

<template>
  <boschLine />
  <navbar />
  <div className="area-available">
    <div className="content">
      <mapPage />
      <div className="intern-area">
        <div className="header">
          <div>NAME</div>
          <div>EDV</div>
          <div>AREA</div>
          <div>ACTION</div>
        </div>
        <div v-for="i in sus" :key="i" className="row">
          <div>{{ i.name }}</div>
          <div>{{ i.edv }}</div>
          <div>{{ i.area }}</div>
          <deleteButton btnName="Del" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.area-available {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.intern-area {
  background-color: white;
  width: 100%;
  height: 350px;
  overflow-y: scroll;
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
  padding: 5px;
}
</style>
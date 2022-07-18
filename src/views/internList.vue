<script setup>
import navbar from "../components/global-items/navbar/navbar.vue";
import boschLine from "../components/global-items/bosch-pattern/boschFade.vue";
import mapPage from "../components/global-items/bosch-pattern/map.vue";
import deleteButton from "../components/inputs/deleteButton/delete.vue";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { ref, onMounted } from "vue";
import { db, colRef } from "../firebase.js";

const sus = ref([]);

const deleteIntern = id => {
  deleteDoc(doc(colRef, id))
}

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
  });
  sus.value = fbCollas;
});
</script>

<template>
  <div className="area-available">
    <boschLine />
    <navbar />
    <div className="content">
      <mapPage />
      <div className="intern-area">
        <div className="englobe-all">
          <div v-for="i in sus" :key="i" className="row">
            <div className="grid-item">Name: {{ i.name }}</div>
            <div className="grid-item">Edv: {{ i.edv }}</div>
            <div className="grid-item">Area: {{ i.area }}</div>
            <deleteButton @click="deleteIntern(i.id)" btnName="Del" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.area-available {
  height: 100vh;
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

.englobe-all {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.row {
  font-size: clamp(0.9rem, 1.5vw, 1.5rem);
  padding: 5px;
}

.grid-item {
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  text-align: center;
}
</style>
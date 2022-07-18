<script>
import navbar from "../components/global-items/navbar/navbar.vue";
import boschLine from "../components/global-items/bosch-pattern/boschFade.vue";
import mapPage from "../components/global-items/bosch-pattern/map.vue";
import { colRef } from "../firebase.js";
import {
  onSnapshot,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { ref, onMounted } from "vue";
import { db } from "../firebase.js";

const sus = ref([]);

export default {
  name: "internList",
  setup() {
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "collaborators"));
      let fbCollas = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        const colla = {
          id: doc.id,
          intern: doc.data().intern,
          course: doc.data().course,
          edv: doc.data().edv,
        };
        fbCollas.push(colla);
        console.log(fbCollas);
      });
      sus.value = fbCollas;
    });
  },
  components: {
    navbar,
    boschLine,
    mapPage,
  },
};
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
        <div className="row">
          <div>IGOR OLIVEIRA</div>
          <div>3231312</div>
          <div>ETS</div>
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
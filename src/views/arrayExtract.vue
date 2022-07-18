<script>
import boschLine from "../components/global-items/bosch-pattern/boschFade.vue";
import navbar from "../components/global-items/navbar/navbar.vue";
import searchBar from "../components/inputs/searchbar.vue";
import searchIcon from "../components/global-items/bosch-pattern/searchIcon.vue";
import mapImage from "../components/global-items/bosch-pattern/map.vue";
import { colRef } from "../firebase.js";
import {
  onSnapshot,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import inputData from "../components/inputs/input.vue";
import { ref, onMounted } from "vue";
import { db } from "../firebase.js";

// getDocs(colRef)
// .then((snapshot))
// onSnapshot(colRef, (snapshot) => {
//     let sus = []
//     snapshot.docs.forEach((doc) => {
//         sus.push({...doc.data(), id: doc.id})
//     })
// })
const sus = ref([]);

console.log(sus);
export default {
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
        };
        fbCollas.push(colla);
        console.log(fbCollas);
      });
      sus.value = fbCollas;
    });
  },

  name: "mapPage",
  components: {
    inputData,
    boschLine,
    navbar,
    searchBar,
    searchIcon,
    mapImage,
  },
  data() {
    return {
      search: [],
    };
  },

  methods: {
    mostraCont() {
      onSnapshot(colRef, (doc) => {
        let search = [];
        doc.docs.forEach((doc) => {
          search.push({ ...doc.data(), id: doc.id });
        });
        this.search = search;
        console.log(this.search);
      });
    },
  },
};
</script>

<template>
  <div>
    <boschLine />
    <navbar />
  </div>
  <div className="site">
    <div className="search-area">
      <searchdata label="" inputType="text" inputName="Search..." />
      <searchicon />
      <div className="text">LOCATION OF INTERNS</div>
    </div>
    <!-- 
    <div>
        <ul>
            <li v-for="sim in search" :key="sim.id">

            </li>

            {{sim.name}}
        </ul>
    </div> -->
    <inputData
      v-model="search"
      label="searchBar"
      inputType="text"
      inputName="search something"
    />

    <div className="fodase">
      <ul>
        <li v-for="item in sus" :key="item.message">
          {{ item.message }}
        </li>
      </ul>
    </div>

    <p>{{ search }}</p>

    <div className="filter-content">
      <div className="nome-intern">NOME</div>
      <div className="edv-intern">EDV</div>
      <div className="area-intern">AREA</div>
      <div className="course-intern">COURSE</div>
    </div>
    <div className="all-content">
      <div className="card-content">
        <div className="interns-content"></div>
      </div>
      <mapImage />
    </div>
  </div>
</template>

<style scoped>
/* background-color: #eff1f2  BOSCH CONTENT BACKGROUND COLOR LINK: https://brandguide.bosch.com/document/337#/farben */
.site {
  background-color: #eff1f2;
}
.search-area {
  display: flex;
  height: 5vw;
  margin-left: 4vh;
  margin-top: 5vh;
}
.text {
  margin-left: 50vh;
  font-size: 4vh;
  color: #0096e8;
}
.all-content {
  display: flex;
  height: 100vh;
}
.card-content {
  display: flex;
  margin-left: 4vh;
  width: 55vh;
  height: 65vh;
  background-color: white;
}
.interns-content {
  margin-top: 2vh;
  margin-left: 1.5vh;
  font-size: 1.3vh;
}
.filter-content {
  width: 50vh;
  justify-content: space-between;
  font-size: 2vh;
  margin-left: 6.5vh;
  display: flex;
}
</style>
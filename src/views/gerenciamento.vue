<script>
import boschLine from "../components/global-items/bosch-pattern/boschFade.vue";
import navbar from "../components/global-items/navbar/navbar.vue";
import inputData from "../components/inputs/input.vue";
import buttonData from "../components/inputs/buttonData/button.vue";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { colRef } from "../firebase.js";

export default {
  el: "#app",
  name: "managePage",
  components: {
    inputData,
    buttonData,
    boschLine,
    navbar,
  },
  methods: {
    AddIntern() {
      addDoc(colRef, {
        name: this.name,
        area: this.area,
        edv: this.edv,
      });
      this.name = "";
      this.edv = "";
      this.area = "";
    },
  },
  data() {
    return {
      name: "",
      edv: "",
      area: "",
    };
  },
};
</script>

<template>
  <div>
    <boschLine />
    <navbar />
  </div>
  <section className="home">
    <div className="conteudo">
      <div className="form">
        <inputData
          v-model="name"
          label="Intern"
          inputType="text"
          inputName="Intern Name"
        />
        <inputData
          v-model="edv"
          label="EDV"
          inputType="text"
          inputName="Intern EDV"
        />
        <inputData
          v-model="area"
          label="Area"
          inputType="text"
          inputName="Intern Area"
        />
        <buttonData @click="AddIntern()" btnName="Add" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.conteudo {
  position: fixed left;
  z-index: 888;
  display: block;
  width: 800px;
  padding: 10px;
  background-color: rgba(226, 226, 226, 0.253);
  border: 4px solid rgb(0, 80, 133);
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 1040px) {
  .conteudo {
    width: auto;
    margin: 0;
    margin-right: 18%;
  }
  section {
    padding: 30px;
  }

  .navbar a {
    padding: 10px;
    display: block;
  }
  .conteudo {
    margin-top: 20px;
  }
}
</style>
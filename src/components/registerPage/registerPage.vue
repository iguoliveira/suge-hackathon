<script>
import inputData from "../global-items/inputData/input.vue";
import buttonData from "../global-items/buttonData/button.vue";
import textLink from "../global-items/buttonData/textLink.vue";
import boschFade from "../global-items/boschFade.vue";
import boschLogo from "../global-items/boschLogo.vue";
import sugeLogo from "../global-items/sugeLogo.vue";
import collaboratorsColRef from "./../../firebase.js";
import { addDoc } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'

export default {
  el: "#app",
  name: "registerPage",
  components: {
    inputData,
    buttonData,
    textLink,
    boschFade,
    boschLogo,
    sugeLogo,
  },
  data() {
    return {
      name: "",
      edv: "",
      password: "",
      confirmPassword: "",
      course: "",
      gb: "",
      bu: "",
    };
  },
  methods: {
    addCollaborator() {
      addDoc(collaboratorsColRef, {
        intern: this.name,
        course: this.course,
        edv: this.edv,
        gb: this.gb,
        bu: this.bu,
      });
    },
  },
};
</script>

<template>
  <boschFade />
  <div className="all-space-available">
    <div className="logos">
      <boschLogo />
      <sugeLogo />
    </div>
    <div className="register-elements-area">
      <div className="inputs-area">
        <inputData
          v-model="name"
          label="NAME"
          inputType="text"
          inputName="Insert your Name"
        />
        <inputData
          v-model="edv"
          label="EDV"
          inputType="text"
          inputName="Insert your EDV"
        />
        <inputData
          v-model="password"
          label="Password"
          inputType="password"
          inputName="Insert your Password"
        />
        <inputData
          v-model="confirmPassword"
          label="Confirm Password"
          inputType="password"
          inputName="Confirm your Password"
        />
        <inputData
          v-model="course"
          label="Course"
          inputType="text"
          inputName="Insert the Course"
        />
        <inputData
          v-model="gb"
          label="GB"
          inputType="text"
          inputName="Insert GB"
        />
        <inputData
          v-model="bu"
          label="BU"
          inputType="text"
          inputName="Insert BU"
        />
      </div>
      <p>{{ name }}</p>
      <p>{{ edv }}</p>
      <p>{{ course }}</p>
      <p>{{ gb }}</p>
      <p>{{ password }}</p>
      <div className="buttons-area">
        <buttonData @click="addCollaborator" btnName="Register" />
      </div>
      <textLink text="Already have a account?" />
    </div>
  </div>
</template>

<style scoped>
.all-space-available {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.logos {
  display: flex;
  align-items: center;
  gap: 20px;
}

.register-elements-area {
  align-self: center;
  background-color: #f8f8f8;
  box-shadow: black;
  padding: 50px 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.inputs-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons-area {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
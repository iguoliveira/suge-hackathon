<script>
import inputData from "../components/inputs/input.vue";
import buttonData from "../components/inputs/buttonData/button.vue";
import textLink from "../components/inputs/buttonData/textLink.vue";
import boschFade from "../components/global-items/bosch-pattern/boschFade.vue";
import boschLogo from "../components/global-items/bosch-pattern/boschLogo.vue";
import sugeLogo from "../components/global-items/bosch-pattern/sugeLogo.vue";
import { coordinatorsColRef } from "../firebase.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import router from "../router";

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
      addDoc(coordinatorsColRef, {
        name: this.name,
        area: this.course,
        edv: this.edv,
        password: this.password,
      });
    },
    verifyData() {
      if(this.name != ""){
        if(this.edv != ""){
          if(this.password != ""){
            if(this.confirmPassword == this.password){
              if(this.course != ""){
                this.addCollaborator()
                router.push('/homepage')
              }else{
                alert("Fill the area field!")
              }
            }else{
              alert("Passwords doesn't match!")
            }
          }else{
            alert("Fill the password field!")
          }
        }else{
          alert("Fill the edv field!")
        }
      }else{
        alert("Fill the name field!")
      }
    }
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
          label="Name"
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
          label="Area"
          inputType="text"
          inputName="Insert your Area"
        />
        <!-- <inputData
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
        /> -->
      </div>
      <div className="buttons-area">
        <buttonData @click="verifyData()" btnName="Register" />
      </div>
      <router-link to="/"><textLink text="Already have a account?" /></router-link>
    </div>
  </div>
</template>

<style scoped>
.all-space-available {
  width: 100%;
  display: flex;
  flex-direction: column;
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
<script>
import inputData from "../components/inputs/input.vue"
import buttonData from "../components/inputs/buttonData/button.vue";
import textLink from "../components/inputs/buttonData/textLink.vue";
import boschLogo from "../components/global-items/bosch-pattern/boschLogo.vue";
import boschLine from "../components/global-items/bosch-pattern/boschFade.vue";
import sugeLogo from "../components/global-items/bosch-pattern/sugeLogo.vue";

export default {
  name: "loginPage",
  components: {
    inputData,
    buttonData,
    textLink,
    boschLogo,
    boschLine,
    sugeLogo,
  },
};
</script>

<template>
  <boschLine />
  <div className="all-space-available">
    <div className="logos">
      <boschLogo />
      <sugeLogo />
    </div>
    <div className="login-elements-area">

      <div className="inputs-area">
        <inputData label="EDV" inputType="text" inputName="Insert your EDV" />
        <inputData label="Password" inputType="password" inputName="Insert your Password" />
      </div>

      <div className="buttons-area">
        <router-link to="/homepage"><buttonData btnName="Login" /></router-link>
        <router-link to="/register"><buttonData btnName="Sign Up" /></router-link>
      </div>

      <textLink text="Forgot password?" />
      
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

.login-elements-area {
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
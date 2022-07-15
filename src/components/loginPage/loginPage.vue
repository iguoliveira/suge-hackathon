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
        <buttonData btnName="Login" />
        <buttonData btnName="Sign Up" />
      </div>

      <textLink text="Forgot password?" />
      
    </div>
  </div>
</template>

<script>
import inputData from "../global-items/inputData/input.vue"
import buttonData from "../global-items/buttonData/button.vue";
import textLink from "../global-items/buttonData/textLink.vue";
import boschLogo from "../global-items/boschLogo.vue";
import boschLine from "../global-items/boschFade.vue";
import sugeLogo from "../global-items/sugeLogo.vue";

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
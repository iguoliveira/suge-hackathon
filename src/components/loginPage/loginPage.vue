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

      <forgotPassword />
      
    </div>
  </div>
</template>

<script>
import inputData from "./input/input.vue";
import buttonData from "./button/button.vue";
import forgotPassword from "./button/forgotPassword.vue";
import boschLogo from "../global-items/boschLogo.vue";
import boschLine from "../global-items/boschFade.vue";
import sugeLogo from "../global-items/sugeLogo.vue";

export default {
  name: "loginPage",
  components: {
    inputData,
    buttonData,
    forgotPassword,
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
  background-color: #ebe6e6;
  padding: 80px 40px;
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
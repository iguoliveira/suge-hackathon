<script>
import inputData from './inputData/input.vue'
import buttonData from './buttonData/button.vue'
import isAccountCreated from './buttonData/already.vue'

export default {
    el: "#app", 
    data() {
        return{
             name: ""
        }
    },
    name: "registerPage",
    components: {
        inputData, buttonData, isAccountCreated
    }
}
</script>

<template>
    <div className="line-bosch"></div>
    <div className="all-space-available">
        <img src="bosch-imgs/bosch-red-logo.png" className="bosch-logo" />
        <div className="register-elements-area">

            <div className="inputs-area">
                <inputData v-model="name" label="NAME" inputType="text" inputName="Insert your Name"  />
                <inputData label="EDV" inputType="text" inputName="Insert your EDV" />
                <inputData label="Password" inputType="password" inputName="Insert your Password" />
                <inputData label="Confirm Password" inputType="password" inputName="Confirm your Password" />
                <inputData label="COURSE" inputType="text" inputName="Insert the Course" />
                <inputData label="GB" inputType="text" inputName="Insert GB" />
                <inputData label="BU" inputType="text" inputName="Insert BU" />    
            </div>
            <p>{{name}}</p>
            <div className="buttons-area">
                <buttonData btnName="Register" />
            </div>
            <isAccountCreated />    
        </div>
    </div>
</template>

<style scoped>
.line-bosch{
    background-image: url("bosch-imgs/fade-line.svg");
    background-size: cover;
    height: 10px;
    background-repeat: no-repeat;
}

.all-space-available{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.bosch-logo{
    height: 120px;
    width: 250px;
}

.register-elements-area{
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

.inputs-area{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.buttons-area{
    display: flex;
    justify-content: center;
    gap: 10px;
}
</style>
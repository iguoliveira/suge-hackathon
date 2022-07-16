<script>
import inputData from '../components/inputs/input.vue'
import buttonData from '../components/inputs/buttonData/button.vue'
import textLink from '../components/inputs/buttonData/textLink.vue'
import boschFade from '../components/global-items/bosch-pattern/boschFade.vue'
import boschLogo from '../components/global-items/bosch-pattern/boschLogo.vue'
import sugeLogo from '../components/global-items/bosch-pattern/sugeLogo.vue'

export default {
    el: "#app",
        data() {
        return{
             name: ""
        }
    },
    name: "registerPage",
    components: {
        inputData,
        buttonData,
        textLink,
        boschFade,
        boschLogo,
        sugeLogo,
    }
}
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
                <inputData v-model="name" label="NAME" inputType="text" inputName="Insert your Name"  />
                <inputData label="EDV" inputType="text" inputName="Insert your EDV" />
                <inputData label="Password" inputType="password" inputName="Insert your Password" />
                <inputData label="Confirm Password" inputType="password" inputName="Confirm your Password" />
                <inputData label="Course" inputType="text" inputName="Insert the Course" />
                <inputData label="GB" inputType="text" inputName="Insert GB" />
                <inputData label="BU" inputType="text" inputName="Insert BU" />    
            </div>
            <p>{{name}}</p>
            <div className="buttons-area">
                <buttonData btnName="Register" />
            </div>
            <router-link to="/"><textLink text="Already have a account?" /> </router-link>
        </div>
    </div>
</template>

<style scoped>
.all-space-available{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.logos{
    display: flex;
    align-items: center;
    gap: 20px;
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
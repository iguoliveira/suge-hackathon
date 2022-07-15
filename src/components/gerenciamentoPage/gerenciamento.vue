<template>
    <div>
      <boschLine />
      <navbar />
    </div>

        <section className="home">
            <div className="fundo">
                
            </div>
        <div className="conteudo">
            <h2>Adicionar Estagiários</h2>
            <div className="form">
                <form className="addCollaboratorApprenticeForm">
                    <inputData label="Apprentice" inputType="text" inputName="Apprentice" />
                    <inputData label="Course" inputType="text" inputName="Course" />
                    <inputData label="EDV" inputType="text" inputName="EDV" />
                    <inputData label="GB" inputType="text" inputName="GB" />
                    <inputData label="BU" inputType="text" inputName="BU" />
                    <inputData label="Period of internship" inputType="text" inputName="Period of internship" />
                    <inputData label="Coordinator of internship" inputType="text" inputName="Coordinator of internship" />

                    <buttonData btnName="ADD" />
                </form>
                
            </div>
    </div>

    
   
      
    </section>
</template>

<script>
import boschLine from "../global-items/boschFade.vue";
import navbar from "../navbar/navbar.vue";
import inputData from './input/input.vue'
import buttonData from './button/button.vue'

export default{
    name: 'gerenciamentoPage',
    components: {
        inputData, buttonData, boschLine,navbar,
    }
}
</script>

<style scoped>

 /* background-color: #eff1f2  BOSCH CONTENT BACKGROUND COLOR LINK: https://brandguide.bosch.com/document/337#/farben */
*{
    margin: 0%;
}
section{
    padding: 100px 150px;
}
.home{
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: left;
    flex-direction: column;
    background: black;
}
.home:before{
    z-index: 777;
    content: '';
    position: absolute;
    background: rgb(240, 240, 240);
    width: 100%; height: 100%;
    top: 0; left: 0;
}

.conteudo{
    position: fixed left;
    z-index: 888;
    display: block;
    width: 900px;
    padding: 2rem;
    background-color: rgba(226, 226, 226, 0.253);
    border: 4px solid rgb(0, 80, 133);
    margin-left: 16%;
    margin-top: 10%;
   
   
}

.conteudo h2{
    text-align: center;
    color: rgb(0, 0, 0);
}

.form{
        
      
        background-color: #f2f2f21e;
        padding: 20px; 
}

.fundo{
   background-color: #eff1f2 ;
}
@media (max-width: 1040px){
    
    .conteudo{
        width: auto;
        margin: 0;
        margin-right: 18%;
    }
    section{
        padding: 30px;
    }
  
    .navbar a{
        padding: 10px;
        display: block;
    }
    .conteudo{
        margin-top: 20px;
    }
}
</style>
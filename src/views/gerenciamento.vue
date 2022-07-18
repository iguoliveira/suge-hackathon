<script>
import boschLine from "../components/global-items/bosch-pattern/boschFade.vue";
import navbar from "../components/global-items/navbar/navbar.vue";
import inputData from "../components/inputs/input.vue";
import buttonData from "../components/inputs/buttonData/button.vue";

export default {
  name: "managePage",
  components: {
    inputData,
    buttonData,
    boschLine,
    navbar,
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
        <form className="addCollaboratorApprenticeForm">
          <inputData label="Intern" inputType="text" inputName="Intern Name" />
          <inputData label="EDV" inputType="text" inputName="Intern EDV" />
          <inputData label="Area" inputType="text" inputName="Intern Area" />
          <buttonData btnName="Add" />
        </form>
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

.addCollaboratorApprenticeForm{
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
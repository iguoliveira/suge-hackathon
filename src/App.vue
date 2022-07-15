<script>
import homepage from "./components/homepage/homepage.vue";

import mapPage from './components/mapPage/mapPage.vue'

import gerenciamentoPage from './components/gerenciamentoPage/gerenciamento.vue'
import listPage from './components/listPage/listagem.vue'


export default {
  name: "App",
  components: {
    homepage,
  },
};
</script>

<template>
  <homepage />

    loginPage, homepage, navbar, registerPage, mapPage

    loginPage, homepage, navbar, registerPage, gerenciamentoPage, listPage,

  }
}
</script>

<template>
  <mapPage />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "BoschSans-Regular";
  overflow-y: hidden;
  font-family: 'BoschSans-Regular';
}

@font-face {
  font-family: "BoschSans-Regular";
  src: url("fonts/BoschSans-Regular.ttf");
}
</style>
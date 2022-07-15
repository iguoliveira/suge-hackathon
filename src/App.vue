<script>
import loginPage from './components/loginPage/loginPage.vue'
import homepage from './components/homepage/homepage.vue'
import navbar from './components/global-items/navbar/navbar.vue'
import registerPage from './components/registerPage/registerPage.vue'
import gerenciamentoPage from './components/gerenciamentoPage/gerenciamento.vue'
import listPage from './components/listPage/listagem.vue'

export default {
  name: 'App',
  components: {
    loginPage, homepage, navbar, registerPage, gerenciamentoPage, listPage,
  }
}
</script>

<template>
  <loginPage />
</template>

<style>
*{
  margin: 0;
  overflow-y: hidden;
  font-family: 'BoschSans-Regular';
}

@font-face{
  font-family: 'BoschSans-Regular';
  src: url("fonts/BoschSans-Regular.ttf");
}
</style>
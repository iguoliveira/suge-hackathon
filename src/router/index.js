import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../views/loginPage.vue'
import registerPage from '../views/registerPage.vue'
import homepage from '../views/homepage.vue'
import mapPage from '../views/mapPage.vue'
import listagem from '../views/listagem.vue'
import gerenciamentoPage from '../views/gerenciamento.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: loginPage,
    },
    {
        path: '/register',
        name: 'Register',
        component: registerPage,
    },
    {
        path: '/homepage',
        name: 'home',
        component: homepage,
    },
    {
        path: '/map',
        name: 'map',
        component: mapPage,
    },
    {
        path: '/internList',
        name: 'internList',
        component: listagem,
    },
    {
        path: '/managePage',
        name: 'manageIntern',
        component: gerenciamentoPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
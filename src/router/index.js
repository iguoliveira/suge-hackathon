import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../views/loginPage.vue'
import registerPage from '../views/registerPage.vue'
import homepage from '../views/homepage.vue'
import internList from '../views/internList.vue'
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
        path: '/internList',
        name: 'list',
        component: internList,
    },
    {
        path: '/create',
        name: 'manageIntern',
        component: gerenciamentoPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
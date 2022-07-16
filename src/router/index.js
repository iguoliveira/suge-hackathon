import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import listagem from './../components/listPage/listagem.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/listagem',
    name: 'listagem',
    component: listagem
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
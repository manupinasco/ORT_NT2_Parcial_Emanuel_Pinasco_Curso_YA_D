import Vue from 'vue'
import VueRouter from 'vue-router'

import NotasAlumnos from './components/NotasAlumnos.vue'
import RespuestasMultipleChoice from './components/RespuestasMultipleChoice.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/notas' },
        { path: '/notas', component: NotasAlumnos },
        { path: '/respuestas', component: RespuestasMultipleChoice },
    ]
})
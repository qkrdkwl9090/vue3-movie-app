import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
export default createRouter({
    //Hash Mode
    //https://~~~~.com/#/test
    //History Mode 사용시 서버 작업 필요
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component:Home
        },
        {
            path: '/about',
            component:About
        }
    ]
})
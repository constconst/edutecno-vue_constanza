import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { getAuth } from "firebase/auth";


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '*',
        redirect: '/login'
    },
    {
        path: '/login',
        redirect: '/login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            login: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
//     const auth = getAuth();
//     const user = auth.currentUser;
//     const authRequired = to.matched.some(route => route.meta.autorizado)
//     if (!user && authRequired) {
//         next('/login');
//     } else if (user && !authRequired) {
//         next('/home');
//     } else {
//         next();
//     }
// })

export default router
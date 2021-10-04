import { createRouter, createWebHistory } from 'vue-router'
// A single route object
import Portada from '../views/Portada.vue'

const routes = [{
        path: '/',
        name: 'portada',
        component: Portada
    },

    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/inicio',
        redirect: '/'

    },
    {
        path: '/sobremi',
        name: 'Sobre mí',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/sobremi.vue'),
        alias: '/acerca'
    },
    {
        path: '/contacto',
        name: 'Contacto',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "contacto" */ '../views/contacto.vue'),
        alias: '/contactame'
    },
    {
        path: '/post',
        name: 'Post',
        component: () =>
            import ( /* webpackChunkName: "post" */ '../views/post.vue'),
        children: [{
            path: ':postId',
            name: "Post",
            component: () =>
                import ( /* webpackChunkName: "articulo" */ '../views/articulo.vue'),
        }],
    },
    {
        path: '/admin/:tipoadmin',
        name: 'admin',
        component: () =>
            import ( /* webpackChunkName: "articulo" */ '../views/admin.vue'),
        props: true,
    },
    {
        path: '/:notfound(.*)*',
        name: 'notfound',
        component: () =>
            import ( /* webpackChunkName: "articulo" */ '../views/notfound.vue'),
        meta: {
            requiresAuth: false
        }
    }
]


const router = createRouter({
    mode: history,
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () =>
    import ('./components/Inicio')
const Search = () =>
    import ('./components/Search')
const Ventas = () =>
    import ('./components/Ventas')
const Total = () =>
    import ('./components/Total')
const NotFound = () =>
    import ('./components/Notfound')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busqueda',
            name: 'busqueda',
            component: Search
        },
        {
            path: '/ventas',
            name: 'ventas',
            component: Ventas
        },
        {
            path: '/total',
            name: 'total',
            component: Total
        },
        {
            path: '*',
            name: 'not-found',
            component: NotFound
        }

    ]
})
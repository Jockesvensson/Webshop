import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CartPage from '../cart/CartPage.vue'
import SingleProduct from '../parts/SingleProduct.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products/:id',
        name: 'products',
        component: SingleProduct
    },
    {
        path: '/cart',
        name: 'CartPage',
        component: CartPage
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
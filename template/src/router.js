import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Product from './views/Product.vue'
import ShoppingCart from './views/ShoppingCart.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            redirect: '/products',
            children:[
                {
                    path: '/products',
                    name: 'products',
                    component: Products
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product
                },
                {
                    path: '/shopping-cart',
                    name: 'shoppingCart',
                    component: ShoppingCart
                }
            ]
        },
    ]
})

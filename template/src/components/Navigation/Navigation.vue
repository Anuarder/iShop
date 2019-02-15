<template>
    <div class="navigation">
        <div class="navigation_logo">
            <router-link to="/">LOGO</router-link>
        </div>
        <div class="navigation_actions hidden-sm-and-down">
            <div class="navigation_search">
                <input class="search_input" type="text" placeholder="Search">
            </div>
            <div class="navigation_links">
                <div>
                    <router-link to="/products">Products</router-link>
                </div>
                <div>
                    <router-link to="/services">Services</router-link>
                </div>
                <div>
                    <router-link to="/shopping-cart">
                        Cart ( <span class="red--text">{{count}}</span> )
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './navigation.styl'
export default {
    props: ['count']
}
</script>
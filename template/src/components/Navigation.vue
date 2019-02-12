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
export default {
    props: ['count']
}
</script>

<style>
.navigation{
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    padding: 1.5rem;
    line-height: 2rem;
}
.navigation_logo{
    font-size: 2rem;
    font-weight: 800;
}
.search_input{
    outline: none;
    border-bottom: 1px solid #ddd;
}
.search_input:focus{
    border-bottom: 1px solid #e24647;
}
.search_input:focus::-webkit-input-placeholder{
   color: #e24647;
}
.navigation_actions, 
.navigation_links{
    display: flex;
}
.navigation_links div{
    margin-left: 5rem;
}
.navigation_logo a, 
.navigation_links div a{
    text-decoration: none;
    color: black;
}
.navigation_links div a:hover{
    color: #e24647;
}
</style>

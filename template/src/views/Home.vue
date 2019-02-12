<template>
    <v-content>
        <v-container class="home">
            <v-toolbar app flat color="primary" dark>
                <v-toolbar-title @click="goHome()">Shopio</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                <v-btn flat @click="showShoppingCart()">
                    <v-badge
                        color="red"
                        overlap>
                        <span slot="badge" v-if="shoppingCart.totalCount">{{shoppingCart.totalCount}}</span>
                        <v-icon>
                            shopping_cart
                        </v-icon>
                    </v-badge>
                </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <router-view></router-view>
        </v-container>
    </v-content>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['shoppingCart']),

        getCartLenght(){
            return this.shoppingCartCount;
        }
    },
    methods:{
        showShoppingCart(){
            this.$router.push({
                name: 'shoppingCart'
            })
        },
        goHome(){
            this.$router.push('/')
        }
    }
}
</script>
<style>
.home{
    font-size: 1.1rem;
}
</style>

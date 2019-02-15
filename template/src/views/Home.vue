<template>
    <v-content>
        <v-container class="home">
            <navigation :count="shoppingCart.totalCount"></navigation>
            <router-view></router-view>
        </v-container>
    </v-content>
</template>
<script>
import { mapState } from 'vuex'
import navigation from '../components/Navigation/Navigation'
export default {
    components: {
        navigation
    },
    computed:{
        ...mapState(['shoppingCart']),
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

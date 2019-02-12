<template>
    <div>
        <v-card class="mx-auto">
            <v-carousel height="300" hide-controls>
                <v-carousel-item
                    contain
                    v-for="(image, index) in value.images"
                    :key="index"
                    :src="image">
                </v-carousel-item>
            </v-carousel>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">
                        <router-link class="link" :to="'/product/' + value._id">
                            <span>{{value.name}}</span>
                        </router-link>
                        <br>
                        <b class="blue--text">${{value.price}}</b>
                    </h3>
                </div>
                <div class="text-truncate">{{value.description}}</div>
            </v-card-title>
            <v-card-actions>
                <v-btn block color="success" @click="setToShoppingCart(value)">
                    Add to cart
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: ['value'],
    computed: {
        ...mapState(['shoppingCart'])
    },
    methods:{
        setToShoppingCart(value){
            let data = {
                id: value._id,
                name: value.name,
                price: value.price
            }
            this.$store.dispatch('setToShoppingCart', data);
        },
        goL(){
            this.$router.push('/shopping-cart')
        }
    }
}
</script>
<style scoped>
.link{
    text-decoration: none;
    color: black;
}
.link:hover{
    color: #000a5f;
    transition: .2s;
}
</style>

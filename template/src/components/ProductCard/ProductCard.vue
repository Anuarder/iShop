<template>
    <div class="product-card-component">
        <div class="product-card-component_carousel">
            <v-carousel height="300" hide-controls>
                <v-carousel-item
                    contain
                    v-for="(image, index) in value.images"
                    :key="index"
                    :src="image">
                </v-carousel-item>
            </v-carousel>
        </div>
        <div class="product-card-component_content">
                <h3>
                    <router-link class="link" :to="'/product/' + value._id">
                        <span>{{value.name}}</span>
                    </router-link>
                </h3>
                <h4>${{value.price}}</h4>
        </div>
        <div class="product-card-component_actions">
            <button @click="setToShoppingCart(value)">Add to cart</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import './productCard.styl'
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
                price: value.price,
                image: value.images[0]
            }
            this.$store.dispatch('setToShoppingCart', data);
        },
        goL(){
            this.$router.push('/shopping-cart')
        }
    }
}
</script>
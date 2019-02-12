<template>
    <v-container>
        <v-card>
            <v-carousel hide-controls>
                <v-carousel-item
                    contain
                    v-for="(image, index) in product.images"
                    :key="index"
                    :src="image">
                </v-carousel-item>
            </v-carousel>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline">
                        <span class="mr-3">{{product.name}}</span> 
                        <span class="blue--text">${{product.price}}</span>    
                    </h3>
                </div>
                <div>{{product.description}}</div>
                <div class="specifications mt-3">
                    <h3 class="title">Specifications</h3>
                    <v-list>
                        <v-list-tile 
                            v-for="(value, key) in product.specifications" 
                            :key="key">
                            <v-list-tile-title>
                                <span class="text-capitalize">{{key}}: </span>
                                <span>{{value}}</span>
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn block color="success" @click="setToShoppingCart(product)">
                    Add to cart
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
import ProductServices from '../services/Products.js' 
export default {
    data(){
        return{
            product: ''
        }
    },
    beforeRouteEnter (to, from, next) {
      ProductServices.getProductByID(to.params.id)
        .then(res => {
            next(vm => {
                vm.request = true;
                vm.setProduct(res.data.product);
            });
        }).catch(err => console.log(err));
    },
    beforeRouteUpdate (to, from, next) {
        this.product = [];
        ProductServices.getProductByID(to.params.id)
            .then(res => {
                this.setProduct(res.data.product);
                next();
            }).catch(err => console.log(err));
    },
    methods:{
        setProduct(product){
            this.product = product;
        },
        setToShoppingCart(value){
            let data = {
                id: value._id,
                name: value.name,
                price: value.price
            }
            this.$store.dispatch('setToShoppingCart', data);
        }
    }
}
</script>

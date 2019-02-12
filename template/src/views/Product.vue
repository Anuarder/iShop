<template>
    <div class="product-page">
        <div class="product">
            <div class="product_slider">
                <img :src="product.images[0]" alt="">
            </div>
            <div class="product_info">
                <div class="product_info-title">
                    <h1>{{product.name}}</h1>
                </div>
                <div class="product_info-price">
                    <h2>${{product.price}}</h2>
                </div>
                <div class="product_info-descripition">
                    <h3>Descripition</h3>
                    <p>{{product.description}}</p>
                </div>  
                <div class="product_info-specifications">
                    <h3>Specifications</h3>
                    <div v-for="(item, key) in product.specifications" :key="key">
                        <div class="text-capitalize"><b>{{key}}:</b></div>
                        <div>{{item}}</div>
                    </div>
                </div>  
                <div class="product_info-actions">
                    <div class="action-buttons">
                        <v-btn 
                            class="text-none" 
                            color="success" 
                            depressed
                            @click="setToShoppingCart(product)">Add to Cart</v-btn>
                        <v-btn 
                            class="text-none" 
                            color="error" 
                            depressed>Buy Now</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
<style>
.product{
    display: flex;
}
.product_info-specifications div{
    display: flex;
    padding: 2px;
    font-size: 1.2rem;
    /* max-width: 500px; */
}
.product_info-descripition p{
    padding: 5px;
    max-width: 500px;
}
</style>

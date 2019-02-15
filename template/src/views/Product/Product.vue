<template>
    <div class="product-page">
        <div class="product">
            <div class="product_slider">
                <v-carousel light hide-delimiters height="700" class="product_slider-carousel">
                    <v-carousel-item
                        contain
                        v-for="(image, index) in product.images"
                        :key="index"
                        :src="image">
                    </v-carousel-item>
                </v-carousel>
            </div>
            <div class="product_info">
                <div class="product_info-title">
                    <h1>{{product.name}}</h1>
                </div>
                <div class="product_info-price mb-3">
                    <h2>Price: ${{product.price}}</h2>
                </div>
                <div class="product_info-descripition">
                    <h3>Descripition</h3>
                    <p>{{product.description}}</p>
                </div>  
                <div class="product_info-specifications">
                    <h3>Specifications</h3>
                    <ul v-for="(item, key) in product.specifications" :key="key">
                        <li><span class="text-capitalize body-2">{{key}}</span>: {{item}}</li>
                    </ul>
                </div>  
                <div class="product_info-actions mt-3">
                    <div class="action-buttons">
                        <button @click="setToShoppingCart(product)">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './product.styl'
import ProductServices from '@/services/Products.js' 
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
                price: value.price,
                image: value.images[0]
            }
            this.$store.dispatch('setToShoppingCart', data);
        }
    }
}
</script>

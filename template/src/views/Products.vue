<template>
    <v-container>
        <v-layout row wrap class="mt-3">
            <v-flex xs12 md3 class="pa-2" v-for="item in products" :key="item._id">
                <product :value="item"></product> 
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Product from '../components/ProductCard'
import ProductsServices from '../services/Products.js'
export default {
    components: {
        Product
    },
    data(){
        return {
            products: []
        }
    },
    created(){
        this.getAllProducts();
    },
    methods: {
        async getAllProducts(){
            try{
                let responce = await ProductsServices.getAll();
                this.products = responce.data.products;
            }catch(err){
                console.log(err);
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="shopping-cart" v-if="shoppingCart.totalCount">
            <div class="shopping-cart_table">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Total Count</th>
                            <th>Total Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in shoppingCart.products" :key="index">
                            <td>{{index+1}}</td>
                            <td>
                                <img :src="item.image" alt="">
                            </td>
                            <td>{{item.name}}</td>
                            <td class="product-count">
                                <input type="number" min="0" v-model="item.count">
                            </td>
                            <td>$ {{item.totalPrice}}</td>
                            <td class="table-actions">
                                <v-btn icon @click="deleteItemFromCart(item)">
                                    <v-icon color="grey">delete</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="shopping-cart_actions"></div>
            <div class="shopping-cart_form"></div>
        </div>
        <div class="empty text-center" v-else>
            <h1>Shopping cart is empty</h1> 
            <v-icon large>remove_shopping_cart</v-icon>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            buyBlock: false,
            buyButton: true,
            user:{
                name: '',
                address: '',
                phone: ''
            }
        }
    },
    computed:{
        ...mapState(['shoppingCart']),
    },
    methods: {
        deleteItemFromCart(item){
            this.$store.dispatch('deleteItemFromCart', item);
        },
        clearShoppingCart(){
            this.$store.dispatch('clearShoppingCart');
        },
        openBuyBlock(){
            this.buyBlock = true;
            this.buyButton = false;  
        },
        buyProducts(){
            console.log(`User \nName: ${this.user.name} \nEmail: ${this.user.email} \nAddress: ${this.user.address} \nPhone: ${this.user.phone}`)
            console.log(`Buy products \n ${JSON.stringify(this.shoppingCart)}`)
        }
    }
}
</script>
<style>
.empty{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    font-size: 1.2rem;
    text-align: center;
  }
.shopping-cart_table table{
    width: 100%;
    text-align: left;
}
.shopping-cart_table img{
    max-width: 4em;
}
.product-count input{
    max-width: 6rem;
    padding: 3px;
    text-align: center;
    border: 1px solid #ddd;
}
</style>

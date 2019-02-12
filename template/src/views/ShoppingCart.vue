<template>
    <v-container>
        <div v-if="shoppingCart.totalCount">
            <v-list>
                <v-list-tile
                    v-for="item in shoppingCart.products"
                    :key="item.id">
                    <v-list-tile-content>
                        <v-list-tile-title>{{item.name}}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-spacer></v-spacer>
                    <v-btn flat icon>$ {{item.totalPrice}}</v-btn>
                    <v-btn flat icon><b>{{item.count}}</b></v-btn>
                </v-list-tile>
                <hr class="mb-2">
                <v-list-tile>
                    <v-list-tile-content>
                        <div>Total count: {{shoppingCart.totalCount}}</div>
                        <div>Total price: $ {{shoppingCart.totalPrice}}</div>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                        <v-spacer></v-spacer>
                        <v-btn class="text-none" color="error" @click="clearShoppingCart()">Clear</v-btn>
                        <v-btn v-if="buyButton" class="text-none" color="primary" @click="openBuyBlock()">Buy</v-btn>
                </v-list-tile>
            </v-list>
            <div class="buy-block" v-if="buyBlock">
                <v-form @submit.prevent> 
                    <v-text-field
                        label="Name"
                        v-model="user.name"></v-text-field>
                    <v-text-field
                        label="Email"
                        v-model="user.email"></v-text-field>
                    <v-text-field
                        label="Address"
                        v-model="user.address"></v-text-field>
                    <v-text-field
                        label="Phone"
                        v-model="user.phone"></v-text-field>
                    <v-btn type="submit" class="text-none" color="success" @click="buyProducts()">Buy</v-btn>
                </v-form>
            </div>
        </div>
        <div class="empty text-center" v-else>
            <h1>Shopping cart is empty</h1> 
            <v-icon large>remove_shopping_cart</v-icon>
        </div>
    </v-container>
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
        ...mapState(['shoppingCart', 'shoppingCartCount', 'totalPrice']),
    },
    methods: {
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
</style>

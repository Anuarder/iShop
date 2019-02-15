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
                                {{item.count}}
                            </td>
                            <td>$ {{item.totalPrice * item.count}}</td>
                            <td class="table-actions">
                                <v-btn icon @click="deleteItemFromCart(item)">
                                    <v-icon color="grey">delete</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="shopping-cart_actions">
                <button v-if="buyButton" @click="openBuyBlock()">Buy</button>
            </div>
            <div v-if="buyBlock" class="shopping-cart_form">
                <form @submit.prevent>
                    <h2>Enter your data</h2>
                    <div class="user-info">
                        <div>
                            <input type="text" placeholder="Name" v-model="user.name">
                            <input type="email" placeholder="Email" v-model="user.email">
                        </div>
                        <div>
                            <input type="text" placeholder="Address" v-model="user.address">
                            <input type="number" placeholder="Phone" v-model="user.phone">
                        </div>
                    </div>
                    <div class="user-card">
                        <div class="card-block">
                            <creditCard 
                                :data="user" 
                                :rotate="cvcFocus" 
                                :color="'red'"></creditCard>
                        </div>
                        <div class="card-info">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Full name" 
                                    v-model="user.card.fullName">
                                <input 
                                    v-mask="'#### #### #### ####'"
                                    type="tel" 
                                    placeholder="Card number" 
                                    v-model="user.card.number">
                            </div>
                            <div>
                                <input 
                                    v-mask="'##/##'"
                                    type="text" 
                                    placeholder="MM/YY" 
                                    v-model="user.card.date">
                                <input 
                                    v-mask="'###'"
                                    type="number" 
                                    placeholder="CVC" 
                                    v-model="user.card.cvc"
                                    @focus="cvcFocus = true"
                                    @blur="cvcFocus = false">
                            </div>
                        </div>
                    </div>
                    <div class="form-button">
                        <button type="submit" @click="buyProducts()">Pay</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="empty text-center" v-else>
            <h1>Shopping cart is empty</h1> 
            <v-icon large>remove_shopping_cart</v-icon>
        </div>
    </div>
</template>
<script>
import "./shoppingCart.styl"
import { mapState } from 'vuex';
import creditCard from '@/components/creditCard/CreditCard'
export default {
    components: {
        creditCard
    },
    data(){
        return{
            cvcFocus: false,
            buyBlock: false,
            buyButton: true,
            user:{
                name: '',
                email: '',
                address: '',
                phone: '',
                card: {
                    number: '',
                    cvc: '',
                    fullName: '',
                    date: ''
                }
            },
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

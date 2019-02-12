import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        shoppingCart:{
            products: [],
            totalCount: 0,
            totalPrice: 0
        }
    },
    plugins: [createPersistedState()],
    mutations: {
        setToShoppingCart(state, product){
            let count = 1;
            let isProduct = true;
            state.shoppingCart.products.forEach((el, index) => {
                if(el.id === product.id){
                    isProduct = false;
                    state.shoppingCart.products[index].count += 1;
                    state.shoppingCart.products[index].totalPrice += product.price;
                    state.shoppingCart.totalCount += 1;
                    state.shoppingCart.totalPrice += product.price
                }
            });
            if(isProduct){
                let shopData = {
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    count: count,
                    totalPrice: product.price
                }
                state.shoppingCart.products.push(shopData);
                state.shoppingCart.totalCount += 1;
                state.shoppingCart.totalPrice += product.price
            }
        },
        clearShoppingCart(state){
            state.shoppingCart = {
                products: [],
                totalCount: 0,
                totalPrice: 0
            };
        },
        deleteItemFromCart(state, item){
            state.shoppingCart.products.forEach((el, index) => {
                if(el.id === item.id){
                    state.shoppingCart.products.splice(index, 1);
                    state.shoppingCart.totalCount -= item.count;
                    state.shoppingCart.totalPrice -= item.totalPrice
                }
            });
        }
    },
    actions: {
        setToShoppingCart({ commit }, product){
            commit('setToShoppingCart', product);
        },
        clearShoppingCart({ commit }){
            commit('clearShoppingCart');
        },
        deleteItemFromCart({commit}, item){
            commit('deleteItemFromCart', item)
        }
    }
})

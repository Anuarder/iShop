import Api from '@/services/Api'

export default {
    getAll(){
        return Api().get('products')
    },
    getProductsByCategory(category){
        return Api().get(`products/${category}`);
    },
    getProductByID(id){
        return Api().get(`product/${id}`);
    }
}
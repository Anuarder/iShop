const Products = require('../models/Products');

module.exports = {
    async getAllProducts(req, res){
        try{
            let products = await Products.find({});
            res.send({
                products: products
            });
        }catch(err){
            res.send({
                err: `Error: ${error}`
            });
        }
    },
    async getProductsByCategory(req, res){
        try{
            let products = await Products.find({category: req.params.category});
            res.send({
                products: products
            });
        }catch(err){
            res.send({
                err: `Error: ${error}`
            });
        }
    },
    async getProductByID(req, res){
        try{
            let product = await Products.findOne({_id: req.params.id});
            res.send({
                product: product
            });
        }catch(err){
            res.send({
                err: `Error: ${error}`
            });
        }
    }
}
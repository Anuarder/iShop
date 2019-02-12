const express = require('express');
const router = express.Router();
const ProductsControllers = require('../controllers/products');

router.get('/products', ProductsControllers.getAllProducts);
router.get('/products/:category', ProductsControllers.getProductsByCategory);
router.get('/product/:id', ProductsControllers.getProductByID);

module.exports = router;
const express = require('express');
const Product = require('../controllers/productController');

//Products
const router = express.Router();

router.post('/', Product.createProduct);


module.exports = router;

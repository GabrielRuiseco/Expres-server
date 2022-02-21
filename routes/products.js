const express = require('express');
const Product = require('../controllers/productController');
const { check } = require('express-validator')

//Products
const router = express.Router();

router.post('/', [
  check('Name', 'El nombre es obligatorio').not().isEmpty(),
  check('Price', 'El nombre es obligatorio').not().isEmpty()
],Product.createProduct);


module.exports = router;

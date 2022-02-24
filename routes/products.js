const express = require('express');
const Product = require('../controllers/productController');
const { check, body } = require('express-validator');

//Products
const router = express.Router();

router.post(
  '/',
  [
    body('name', 'El nombre es obligatorio').not().isEmpty(),
    body('price', 'El precio es obligatorio').not().isEmpty(),
  ],
  Product.createProduct
);

router.get('/getOne', Product.getProduct);

router.put(
  '/update',
  [
    body('id', 'El id es requerido').not().isEmpty(),
    body('name', 'El nombre es obligatorio').not().isEmpty(),
    body('price', 'El precio es obligatorio').not().isEmpty(),
  ],
  Product.updateProduct
);

router.delete('/delete', Product.deleteProduct);

module.exports = router;

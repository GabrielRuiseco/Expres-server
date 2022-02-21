const Product = require('../models/Product');
const { validationResult } = require('express-validator');

exports.createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, price } = req.body;
  try {
    let product = await Product.findOne({ where: { Name: name } });
    if (product) {
      return res.status(400).json({ msg: 'Producto existente' });
    }
    product = {
      Name: name,
      Price: price,
    };
    await Product.create(product);
    await res.status(200).json({ msg: 'Producto agregado' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Ha habido un error' });
  }
};

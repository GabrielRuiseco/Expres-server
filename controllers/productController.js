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
      Price: price,
      Name: name,
    };
    await Product.create(product);
    await res.status(200).json({ msg: 'Producto agregado' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Ha habido un error' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    if (products.length <= 0) {
      return res.status(404).json({ msg: 'Ningun resultado disponible' });
    }
    await res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Ha habido un error' });
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ msg: 'No encontrado' });
    }
    await res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Ha habido un error' });
  }
};

exports.updateProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { id, name, price } = req.body;
  try {
    await Product.update({ Name: name, Price: price }, { where: { id: id } });
    await res.status(200).json({ msg: 'Actualizado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Ha ocurrido un error' });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.body;
  try {
    await Product.destroy({ where: { id: id } });
    await res.status(200).json({ msg: 'Eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Ha ocurrido un error' });
  }
};

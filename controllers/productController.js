const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { name, price } = req.body;
    let product = await Product.findOne({ where: { Name: name } });
    if (product) {
      return res.status(400).json({ message: 'Producto existente' });
    }
    product = {
      Name: name,
      Price: price,
    };
    await Product.create(product);
    await res.status(200).json({ message: 'Producto agregado' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Ha habido un error' });
  }
};

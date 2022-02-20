const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define(
  'Product',
  {
    Name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {}
);

module.exports = Product;

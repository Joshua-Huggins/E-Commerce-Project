// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns

    // defines the product id, makes it primary key 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // defines the name of the product 
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // defines the price of product
    price:{
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    // defines the stock of a product, leaving default value at 10 for now
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    
    // defines the category id, need to refrence the id from the category model
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

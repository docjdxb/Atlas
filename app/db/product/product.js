'use strict';
//Setup DB
const db = require('../');
//Setup Product Model
var ProductModel = require('./ProductModel.js')


//CREATE PRODUCT
function createProduct(productdata) {

  //Create new Product Document
  var newProduct = new Product(
    productdata
  );

  //Save document to DB
  newProduct.save(function (err, newProduct) {
      if (err) return console.error(err);
  });
}

//FIND PRODUCT
function findProduct(description) {

  var prodlist = ProductModel.ProductModel.find({
                                            $or: [
                                              {short_description: { "$regex": description, "$options": "i" } },
                                              {long_description: { "$regex": description, "$options": "i" } } ]}
                                              ,function (err, prods)  {
                                                                        if (err) return console.error(err);
                                                                        return prods;});
  return prodlist;
}

module.exports = {
        findProduct: findProduct,
        createProduct: createProduct
};

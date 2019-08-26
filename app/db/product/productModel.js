'use strict'
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
              product_id: String,
              short_description: String,
              long_description: String,
              product_type: String,
              pack_ind: String,
              img_url: String,
              uom: String,
              create_date: String,
              last_update_date: String,
              retail_price_list: {},
              wholesale_price_list: {},
              barcodes: {},
              status: String,
              hierarchy: {},
              dimensions: {},
              attributes: [{}]
});

//Create mongoose model
var ProductModel = mongoose.model('Product', ProductSchema);

module.exports = {
  ProductModel: ProductModel
}

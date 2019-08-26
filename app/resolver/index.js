'use strict';
const productdb = require('../db/product/product.js')

const productData = [
  {
      product_id: "A1",
      short_description: 'Dummy Product Depscription',
      long_description: 'Dummy Product Long Description',
      product_type: 'Simple',
      pack_ind: "1",
      img_url: 'https//www.atlas.com',
      uom: 'UNIT',
      create_date: '01012020',
      last_update_date: '01012020',
      retail_price_list: [{
                            price: 2.0,
                            currency: 'USD',
                            price_zone: 'UAE',
                            start_date_time: '01012020',
                            end_date_time: '01012025'
                          }],
      wholesale_price_list: [{
                            price: 1.5,
                            currency: 'USD',
                            price_zone: 'UAE',
                            start_date_time: '01012020',
                            end_date_time: '01012025'
                          }],
      barcodes: [{
                  code: "EAN10398458449",
                  type: "EAN13"
                }],
      status: "Active",
      hierarchy: {
                  subclass: {
                              code: "0001",
                              desc: "SUBCLASS 1",
                              create_date: "01012020"},
                  class: {
                              code: "0001",
                              desc: "CLASS 1",
                              create_date: "01012020"},
                  department: {
                              code: "0001",
                              desc: "DEPT 1",
                              create_date: "01012020"},
                  group: {
                              code: "0001",
                              desc: "GROUP 1",
                              create_date: "01012020"},
                  division: {
                              code: "0001",
                              desc: "DIV 1",
                              create_date: "01012020"}
                },
      dimensions: {
                    dim_uom: 1,
                    weight_uom: "KG",
                    height: 1,
                    width: 1,
                    length: 1,
                    pack_size: 1,
                    case_size: 6,
                    case_weight: 7.0,
                    pallete_base: 6,
                    pallete_high: 3,
                    pallete_weight: 200.0},
      attributes: [{
                    code: "0001",
                    desc: "Color",
                    value: "PURPLE"
                  }]
  }
]
;

//Gets a Propduct by ID
var getProduct = function(args) {
    var id = args.id;
    return productData.filter(product => {
        return product.product_id == id;
    })[0];
}


//Gets an array of Products by description
var getProducts = function(args) {
    if (args.description) {
        var description = args.description;
        var productarray = productdb.findProduct(description);
        return productarray
    } else {
        return productData;
    }
}


module.exports = {
        product: getProduct,
        products: getProducts
};

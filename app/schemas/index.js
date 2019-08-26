'use strict';

// Product GraphQL Schema

const product_type = `
type Product {
            product_id: String!
            short_description: String!
            long_description: String!
            product_type: String!
            pack_ind: String!
            img_url: String
            uom: String!
            create_date: String!
            last_update_date: String!
            retail_price_list: [Price]
            wholesale_price_list: [Price]
            barcodes: [Barcode]
            status: String!
            hierarchy: ProductHierarchy
            dimensions: ProductDimensions
            attributes: [ProductAttribute]
}
type Price {
            price: Float!
            currency: String!
            price_zone: PriceZone
            start_date_time: String!
            end_date_time: String
}
type Barcode {
            code: String!
            type: String!
}
type PriceZone {
            zone_id: Int!
            zone_desc: String!

}

type ProductHierarchy {
          subclass: Subclass!
          class: Class!
          department: Department!
          group: Group!
          division: Division!
}
interface ProductHierarchyLevel {
          code: String!
          desc: String
          create_date: String!
}
type Subclass implements ProductHierarchyLevel {
          code: String!
          desc: String
          create_date: String!
}
type Class implements ProductHierarchyLevel {
          code: String!
          desc: String
          create_date: String!
}
type Department implements ProductHierarchyLevel {
          code: String!
          desc: String
          create_date: String!
}
type Group implements ProductHierarchyLevel {
          code: String!
          desc: String
          create_date: String!
}
type Division implements ProductHierarchyLevel {
          code: String!
          desc: String
          create_date: String!
}
type ProductDimensions {
          dim_uom: Float
          weight_uom: String
          height: Float
          width: Float
          length: Float
          pack_size: Int
          case_size: Int
          case_weight: Float
          pallete_base: Int
          pallete_high: Int
          pallete_weight: Float
}
type ProductAttribute {
          code: String!
          desc: String!
          value: String!
}
type Query {
  product(id: String!): Product
  products(description: String): [Product]
}
`

module.exports = product_type;

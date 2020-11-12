const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Author {
      name: String!
      lastName: String!
    }

    type Category {
      category: String!
      domainId: String
    }

    type SearchResponse {
      items: [Item]
      author: Author!
      categories: [Category]
    }

    type GetItemResponse {
      author: Author!
      item: Item!
    }

    input SearchInputData {
      name: String!
      lastName: String!
      query: String!
      qty: Int!
    }

    type Price {
      currency: String
      amount: Float
      decimals: Int
    }

    type Item {
      id: String!
      title: String!
      price: Price!
      picture: String!
      condition: String
      freeShipping: Boolean
      description: String
      soldQuantity: Int
      categoryId: String
      permalink: String
    }

    type RootQuery {
      hello(name: String!): String!
      search(searchInputData: SearchInputData!): SearchResponse!
      getItem(name: String! lastName: String! itemId: String!): GetItemResponse!
    }

    schema {
      query: RootQuery
    }
  `)
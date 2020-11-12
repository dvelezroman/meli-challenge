import gql from 'graphql-tag'

export const SEARCH_QUERY = gql`
  query SearchQuery($query: String!, $qty: Int!) {
    search(
      searchInputData: {
        name: "Dario"
        lastName: "Velez"
        query: $query
        qty: $qty
      }) {
      author {
        name
        lastName
      }
      items {
        id
        title
        picture
        condition
        freeShipping
        price {
          currency
          amount
          decimals
        }
      }
      categories {
        category
        domainId
      }
    }
  }
`

export const GET_ITEM = gql`
  query GetItemQuery ($itemId: String!) {
    getItem(name: "Dario", lastName: "Velez", itemId: $itemId) {
      author {
        name
        lastName
      }
      item {
        id
        title
        picture
        condition
        freeShipping
        description
        soldQuantity
        permalink
        categoryId
        price {
          currency
          amount
          decimals
        }
      }
    }
  }
`
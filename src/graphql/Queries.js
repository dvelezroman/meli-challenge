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
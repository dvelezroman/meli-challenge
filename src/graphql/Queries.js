import gql from 'graphql-tag'

export const SEARCH_QUERY = gql`
  {
    search(
      searchInputData: {
        name: "Dario"
        lastName: "Velez"
        query: "celular"
        qty: 1
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
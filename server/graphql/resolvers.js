const axios = require("axios")
const { response } = require("express")

const envs = require('../utils').getEnvs()

const ENDPOINTS = {
  query: envs.MELI_API_SEARCH_URL,
  item: envs.MELI_API_ITEM,
}

module.exports = {
  hello: ({ name }, req) => {
    return `Hello ${name} from graphql!`
  },
  search: ({ searchInputData }, req) => {
    const { name, lastName, query, qty } = searchInputData
    const url = `${ENDPOINTS.query}${query}`
    return axios.get(url)
      .then(response => {
        return response.data
      })
      .then(data => {
        const results = data.results.splice(0, qty)
        const response = {}
        response.author = {
          name,
          lastName,
        }
        response.categories = []
        response.items = []
        results.forEach(item => {
          response.items.push({
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 2
          },
          picture: item.thumbnail,
          condition: item.condition,
          freeShiping: item.shipping.free_shipping,
          })
          response.categories.push({ category: item.category_id, domainId: item.domain_id })
        })
        return response
      })
      .catch(error => {
        console.log(error.message)
        return false
      })
  },
  getItem: ({ name, lastName, itemId }, req) => {
    const itemDataURL = `${ENDPOINTS.item}${itemId}`
    const itemDescURL = `${itemDataURL}/description`

    const requestsPromises = [
      get(itemDataURL),
      get(itemDescURL),
    ]
    return Promise.all(requestsPromises)
      .then(responses => {
        const itemData = responses[0].data
        const description = responses[1].data
        const author = {
          name,
          lastName,
        }
        const data = {
          author,
          item: {
            id: itemData.id,
            title: itemData.title,
            price: {
              currency: itemData.currency_id,
              amount: itemData.price,
              decimals: 2
            },
            picture: itemData.pictures[0].secure_url,
            condition: itemData.condition,
            freeShiping: itemData.shipping.free_shipping,
            soldQuantity: 0,
            description: description.plain_text,
            permalink: itemData.permalink,
            categoryId: itemData.category_id
          }
        }
        return data
      }).catch(errorData => {
        const error = new Error('Request invalida.')
        error.data = errorData.response
        error.code = 401
        throw error
      })
  } 
}

function get(url) {
  return axios.get(url)
}
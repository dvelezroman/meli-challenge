import React, { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import BreadCrumb from '../Components/Breadcrumb'
import List from '../Components/List'
import { useQuery } from '../utils/index'

import '../styles/ResultsList.scss'

import { SEARCH_QUERY } from '../graphql/Queries'

const ResultsList = () => {
  const [query, setQuery] = useState("")
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])

  const queryParams = useQuery()
  const [searchQuery, {  error, data, loading, called }] = useLazyQuery(SEARCH_QUERY, {
    variables: {
      query: `%${query}%`,
      qty: 4,
    },
  })

  useEffect(() => {
    const queryParam = queryParams.get("query")
    if (!queryParams) {
      return
    }
    setQuery(queryParam)
  }, [queryParams])

  useEffect(() => {
    if (!query) {
      return
    }
    if (query !== "") {
      searchQuery()
    }
  }, [searchQuery, query])

  useEffect(() => {
    if (data) {
      setItems(data.search.items)
      setCategories(data.search.categories)
    }
  }, [data])

  if (called && loading) return <div>Cargando...</div>
  if (error) return <div>Error ${error.message}</div>

  return (
    <div className="Results-List-Container">
      <BreadCrumb categories={categories}/>
      <List items={items} />
    </div>
  )
}

export default ResultsList

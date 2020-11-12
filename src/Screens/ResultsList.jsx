import React, { useEffect } from 'react'
import { useQuery as useGql } from '@apollo/react-hooks'
import BreadCrumb from '../Components/Breadcrumb'
import List from '../Components/List'
import { useQuery } from '../utils/index'

import '../styles/ResultsList.scss'

import response from '../data/query.json'
import { SEARCH_QUERY } from '../graphql/Queries'

const ResultsList = () => {
  const { loading, error, data } = useGql(SEARCH_QUERY)
  const queryParams = useQuery()

  useEffect(() => {
    const query = queryParams.get("query")
    console.log({ query })
  }, [queryParams])

  useEffect(() => {
    console.log({ data })
  }, [data])

  const { categories, items } = response.data.search
  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error ${error.message}</div>

  return (
    <div className="Results-List-Container">
      <BreadCrumb categories={categories}/>
      <List items={items} />
    </div>
  )
}

export default ResultsList

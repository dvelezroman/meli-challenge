import React, { useEffect } from 'react'
import BreadCrumb from '../Components/Breadcrumb'
import List from '../Components/List'
import { useQuery } from '../utils/index'

import '../styles/ResultsList.scss'

import response from '../data/query.json'

const ResultsList = () => {
  const queryParams = useQuery()

  useEffect(() => {
    const query = queryParams.get("query")
    console.log({ query })
  }, [queryParams])

  const { categories, items } = response.data.search
  return (
    <div className="Results-List-Container">
      <BreadCrumb categories={categories}/>
      <List items={items} />
    </div>
  )
}

export default ResultsList

import React from 'react'
import BreadCrumb from '../Components/Breadcrumb'
import List from '../Components/List'

import '../styles/ResultsList.scss'

import response from '../data/query.json'

const ResultsList = () => {
  const { categories, items } = response.data.search
  return (
    <div className="Results-List-Container">
      <BreadCrumb categories={categories}/>
      <List items={items} />
    </div>
  )
}

export default ResultsList

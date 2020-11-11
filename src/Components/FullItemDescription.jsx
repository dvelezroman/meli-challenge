import React, { useEffect } from 'react'
import { useQuery } from '../utils'

import '../styles/FullItem.scss'
import BreadCrumb from './Breadcrumb'

import response from '../data/query.json'

const FullItemDescription = () => {
  const queryParams = useQuery()

  useEffect(() => {
    const id = queryParams.get("id")
    console.log({ id })
  }, [queryParams])

  const { categories } = response.data.search

  return (
    <div className="Full-Item-Container">
      <BreadCrumb categories={categories} />
      <div className="Description">
        <div className="Top">
          <div className="Full-Image"></div>
          <div className="Full-Data"></div>
        </div>
        <div className="Bottom"></div>
      </div>
    </div>
  )
}

export default FullItemDescription

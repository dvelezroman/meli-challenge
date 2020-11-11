import React, { useEffect } from 'react'
import { useQuery } from '../utils'

import '../styles/FullItem.scss'
import BreadCrumb from './Breadcrumb'

import response from '../data/query.json'
import itemResponse from '../data/item.json'

const FullItemDescription = () => {
  const queryParams = useQuery()

  useEffect(() => {
    const id = queryParams.get("id")
    console.log({ id })
  }, [queryParams])

  const { categories } = response.data.search
  const { item } = itemResponse.data.getItem

  return (
    <div className="Full-Item-Container">
      <BreadCrumb categories={categories} />
      <div className="Description">
        <div className="Top">
          <div className="Full-Image"></div>
          <div className="Full-Data"></div>
        </div>
        <div className="Bottom">
          <div className="Bottom-Left">
            <h4>Descripción del producto</h4>
            <p className="Full-Item-Description">{item.description}</p>
          </div>
          <div className="Bottom-Right"></div>
        </div>
      </div>
    </div>
  )
}

export default FullItemDescription

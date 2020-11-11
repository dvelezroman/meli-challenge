import React, { useEffect, useMemo } from 'react'
import { useQuery, formatter } from '../utils'

import '../styles/FullItem.scss'
import BreadCrumb from './Breadcrumb'

import response from '../data/query.json'
import itemResponse from '../data/item.json'
import ImageComponent from './ImageComponent'

const FullItemDescription = () => {
  const queryParams = useQuery()

  useEffect(() => {
    const id = queryParams.get("id")
    console.log({ id })
  }, [queryParams])

  const { categories } = response.data.search
  const { item } = itemResponse.data.getItem

  const priceFormatted = useMemo(() => {
    const priceArray = formatter(item.price.currency, item.price.decimals).format(item.price.amount).split(',')
    return {
      amount: priceArray[0],
      decimals: priceArray[1],
    }
  }, [item])

  return (
    <div className="Full-Item-Container">
      <BreadCrumb categories={categories} />
      <div className="Description">
        <div className="Top">
          <div className="Full-Image">
            <ImageComponent src={item.picture} className="Product-Image" alt='Product Image' />
          </div>
          <div className="Full-Data">
            <span className="Item-Condition">{item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.soldQuantity} vendidos</span>
            <span className="Item-Name">{item.title}</span>
            <span className="Item-Price">
              <span>{priceFormatted.amount}</span>
              <span className="Decimals">{priceFormatted.decimals}</span>
            </span>
            <button className="Item-Buy-Button">Comprar</button>
          </div>
        </div>
        <div className="Bottom">
          <div className="Bottom-Left">
            <h3>Descripción del producto</h3>
            <span className="Full-Item-Description">{item.description}</span>
          </div>
          <div className="Bottom-Right"></div>
        </div>
      </div>
    </div>
  )
}

export default FullItemDescription

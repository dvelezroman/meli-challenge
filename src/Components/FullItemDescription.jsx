import React, { useEffect, useMemo, useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useQuery, formatter } from '../utils'

import ImageComponent from './ImageComponent'
import BreadCrumb from './Breadcrumb'

import { GET_ITEM } from '../graphql/Queries'

import '../styles/FullItem.scss'

const FullItemDescription = () => {
  const [id, setId] = useState(null)
  const [item, setItem] = useState(null)

  const queryParams = useQuery()
  const [getItemQuery, {  error, data, loading, called }] = useLazyQuery(GET_ITEM, {
    variables: {
      itemId: `${id}`,
    },
  })

  const priceFormatted = useMemo(() => {
    if (item) {
      const priceArray = formatter(item.price.currency, item.price.decimals).format(item.price.amount).split(',')
      return {
        amount: priceArray[0],
        decimals: priceArray[1],
      }
    }
  }, [item])

  const goToBuyProduct = () => {
    window.open(item.permalink, '_blank')
  }

  useEffect(() => {
    const itemId = queryParams.get("id")
    console.log({ itemId })
    setId(itemId)
  }, [queryParams])

  useEffect(() => {
    if (id) {
      getItemQuery()
    }
  }, [getItemQuery, id])

  useEffect(() => {
    if (data) {
      setItem(data.getItem.item)
    }
  }, [data])

  if (called && loading) return <div className="Description">Cargando...</div>
  if (error) return <div className="Description">Error ${error.message}</div>
  if (!item) return <div className="Description">Sin Resultados</div>

  return (
    <div className="Full-Item-Container">
      <BreadCrumb categories={[{ domainId: 'MLA-' + item.categoryId }]} />
      <div className="Description">
        <div className="Top">
          <div className="Full-Image">
            <ImageComponent src={item.picture} className="Product-Image" alt='Product Image' />
          </div>
          <div className="Full-Data">
            <span className="Item-Condition">
              {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.soldQuantity} vendidos
            </span>
            <span className="Item-Name">{item.title}</span>
            <span className="Item-Price">
              <span>{priceFormatted.amount}</span>
              <span className="Decimals">{priceFormatted.decimals}</span>
            </span>
            <button onClick={goToBuyProduct} type="button" className="Item-Buy-Button">Comprar</button>
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

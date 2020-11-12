import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import "../styles/Item.scss"
import ImageComponent from './ImageComponent'

import shippingLogo from '../assets/images/ic_shipping.png'

const ListItemComponent = ({ item }) => {
  const history = useHistory()

  const goToItemFullDescription = useCallback((e) => {
    e.preventDefault()
    history.push(`/item?id=${item.id}`)
  }, [history, item])

  return (
    <div className="Item" onClick={goToItemFullDescription}>
      <ImageComponent src={item.picture} alt={item.title} className="Image"/>
      <div className="Description">
        <div>
          <span className="Amount">$ {item.price.amount}</span>
          {item.freeShipping && <ImageComponent src={shippingLogo} alt="Shipping Icon" className="Shipping-Logo" />}
        </div>
        <span className="Content">{item.title}</span>
      </div>
      <div className="Location">{item.location || 'Capital Federal'}</div>
    </div>
  )
}

export default ListItemComponent

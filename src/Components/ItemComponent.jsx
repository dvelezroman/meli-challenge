import React from 'react'

import "../styles/Item.scss"

const ItemComponent = ({ item }) => {
  return (
    <div className="Item">
      <div className="Image">Image</div>
      <div className="Description">Description</div>
      <div className="Location">Location</div>
    </div>
  )
}

export default ItemComponent

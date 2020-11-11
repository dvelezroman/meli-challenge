import React from 'react'
import ItemComponent from './ItemComponent'

import "../styles/List.scss"

const List = ({ items }) => {
  return (
    <div className="Results-List">
        {items.map(item => <ItemComponent item={item} /> )}
      </div>
  )
}

export default List

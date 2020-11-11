import React from 'react'
import ListItemComponent from './ListItemComponent'

import "../styles/List.scss"

const List = ({ items }) => {
  return (
    <div className="Results-List">
        {items.map(item => <ListItemComponent key={item.id} item={item} /> )}
      </div>
  )
}

export default List

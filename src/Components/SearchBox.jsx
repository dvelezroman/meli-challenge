import React from 'react'
import "../styles/SearchBox.scss"
import ImageComponent from './ImageComponent'

import magnGlassIcon from "../assets/images/ic_Search.png"

const SearchBox = () => {
  return (
    <div className="Container">
      <input type="text" id="textToSearch" name="textToSearch" className="Input" placeholder="Nunca dejes de buscar" />
      <button><ImageComponent src={magnGlassIcon} alt="Icono de Lupa" className="Icon" /></button>
    </div>
  )
}

export default SearchBox
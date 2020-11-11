import React from 'react'
import "../styles/SearchBox.scss"
import ImageComponent from './ImageComponent'

import magnGlassIcon from "../assets/images/ic_Search.png"

const SearchBox = () => {
  return (
    <div className="Search-Container">
      <input type="text" id="textToSearch" name="textToSearch" className="Search-Input" placeholder="Nunca dejes de buscar" />
      <button className="Search-Button"><ImageComponent src={magnGlassIcon} alt="Search Icon" className="Search-Icon" /></button>
    </div>
  )
}

export default SearchBox
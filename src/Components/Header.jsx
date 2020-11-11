import React from 'react'
import ImageComponent from './ImageComponent'
import SearchBox from './SearchBox'

import meliIcon from '../assets/images/Logo_ML_8KB.png'

const Header = () => 
  <header className="App-header">
    <ImageComponent src={meliIcon} alt="Meli Icon" className="Meli-Logo" />
    <SearchBox />
  </header>

export default Header

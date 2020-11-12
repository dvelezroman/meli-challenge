import React from 'react'
import ImageComponent from './ImageComponent'
import SearchBox from './SearchBox'

import meliIcon from '../assets/images/Logo_ML_8KB.png'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  const goToMeli = (e) => {
    e.preventDefault()
    history.push('/')
  }

  return (
    <header className="App-header">
      <div className="Meli-Web" onClick={goToMeli}>
        <ImageComponent src={meliIcon} alt="Meli Icon" className="Meli-Logo" />
      </div>
      
      <SearchBox />
    </header>
  )
}

export default Header

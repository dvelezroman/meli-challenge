import React, { useCallback, useRef } from 'react'
import "../styles/SearchBox.scss"
import ImageComponent from './ImageComponent'

import magnGlassIcon from "../assets/images/ic_Search.png"
import { useHistory } from 'react-router-dom'

const SearchBox = () => {
  const history = useHistory()
  const inputRef = useRef()

  const goToSearchResultsList = useCallback((e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    history.push(`/search?query=${inputRef.current.value}`)
  }, [history])

  return (
    <div className="Search-Container">
      <input
        ref={inputRef}
        type="text"
        id="textToSearch"
        name="textToSearch"
        className="Search-Input"
        placeholder="Nunca dejes de buscar"
      />
      <button type="button" onClick={goToSearchResultsList} className="Search-Button">
        <ImageComponent src={magnGlassIcon} alt="Search Icon" className="Search-Icon" />
      </button>
    </div>
  )
}

export default SearchBox
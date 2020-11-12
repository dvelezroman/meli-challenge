import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import "../styles/SearchBox.scss"
import ImageComponent from './ImageComponent'

import magnGlassIcon from "../assets/images/ic_Search.png"
import { useHistory } from 'react-router-dom'

const SearchBox = () => {
  const history = useHistory()
  const inputRef = useRef()

  const goToSearchResultsList = useCallback((e) => {
    e.preventDefault()
    if (inputRef.current.value !== "") {
      history.push(`/search?query=${inputRef.current.value}`)
    }
  }, [history])

  const handleKeyPress = useCallback((event) => {
    if (event.keyCode === 13) {
      goToSearchResultsList(event)
    }
  }, [goToSearchResultsList])

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress)
    return () => window.removeEventListener('keyup', handleKeyPress)
  },[goToSearchResultsList, handleKeyPress])

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
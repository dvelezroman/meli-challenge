import React from 'react'
import ImageComponent from './Components/ImageComponent';
import SearchBox from './Components/SearchBox'
import './styles/App.scss'

import meliIcon from './assets/images/Logo_ML_8KB.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent src={meliIcon} alt="Meli Icon" className="Meli-Logo" />
        <SearchBox />
      </header>
      <div className="App-body">
        Results
      </div>
    </div>
  );
}

export default App;

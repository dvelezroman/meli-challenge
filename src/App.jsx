import React from 'react'
import './styles/App.scss'

import Header from './Components/Header';
import ResultsList from './Screens/ResultsList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <ResultsList />
      </div>
    </div>
  );
}

export default App;

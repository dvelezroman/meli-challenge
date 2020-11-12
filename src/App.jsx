import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import FullItemDescription from './Components/FullItemDescription';
import Header from './Components/Header';
import ResultsList from './Screens/ResultsList';

import './styles/App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-body">
          <Switch>
            <Route path="/search">
              <ResultsList />
            </Route>
            <Route path="/item">
              <FullItemDescription />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

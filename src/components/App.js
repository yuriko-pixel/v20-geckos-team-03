import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home'
import Doughnut from './Doughnut'
import ThemeContextProvider from '../context/ThemeContext';
function App() {
  return (
    <div className="App">
        <Router>
          <Route exact path='/'>
            <ThemeContextProvider>
              <Home />
            </ThemeContextProvider>
          </Route>
        </Router>
    </div>
  );
}

export default App;

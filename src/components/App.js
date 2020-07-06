import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home'

function App() {
  return (
    <div className="App">
     <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/:name' component={Doughnut}/>
     </Router>
    </div>
  );
}

export default App;

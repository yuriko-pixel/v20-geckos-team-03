import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home'
import Doughnut from './Doughnut'
function App() {
  return (
    <div className="App">
     <Router>
      <Route exact path='/' component={Home}/>
      <Route path='/:doughnut_name' component={Doughnut} />
     </Router>
    </div>
  );
}

export default App;

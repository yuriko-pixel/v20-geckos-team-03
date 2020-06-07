import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <div className="App">
     <Router>
      <Route exact path='/' component={Home}/>
      <Route path='/About' component={About}/>
     </Router>
    </div>
  );
}

export default App;

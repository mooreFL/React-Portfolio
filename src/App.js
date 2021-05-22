import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        // Set up the Router
        <Route path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route path="/header" component={Header} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
  
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          
            // Set up the Links
            <Link to="/about" className="item">About</Link>
            <Link to="/work" className="item">Work</Link>
            <Link to="/header" className="item">Header</Link>
            <Link to="/contact" className="item">Contact</Link>
            <Link to="/resume" className="item">Resume</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
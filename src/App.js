import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter as Router } from 'react-router-dom'; 
import './App.css';
import Nav from "./components/Nav"
 
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        </div>
    </Router>
  );
}

export default App;
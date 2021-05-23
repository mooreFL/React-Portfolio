import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import Header from "./components/Header"
 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        </div>
    </Router>
  );
}

export default App;
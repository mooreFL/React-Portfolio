import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter as Router } from 'react-router-dom'; 
import './App.css';
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import About from "./components/About"
 
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
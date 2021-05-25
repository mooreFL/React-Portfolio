import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
 
function App() {
  return (
    <Router>
      <div className="App" id="app">
        <Nav />
        <Route exact path="/" component={About} />
        <Route exact path="/Work" component={Gallery} />
        <Route exact path="/Contact" component={Contact} />

        {/* <Footer />  */}
      </div>
    </Router>
  );
}

export default App;
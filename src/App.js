import React, {useState} from 'react';
// Import the BrowserRouter, Route and Link components
import './App.css';
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
 
function App() {
    const pages = [About, Gallery, Contact]
    const [page, setPage] = useState(pages[0])
  return (
    
      <div className="App" id="app">
        <Nav setPage={setPage} pages={pages}/>
        {page}
        <Footer /> 
      </div>
    
  );
}

export default App;
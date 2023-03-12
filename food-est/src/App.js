import logo from './logo.svg';
import React from "react"
import './App.css';
import FreeFoodTable from './components/table.js';
import Resources from './components/resources.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>TuumEats</h1>
        <div className="topnav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#resources">Resources</a>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FreeFoodTable/>
        <Resources/>

        <div class="search">
					<button id="search-button" class="button" >Give me food pls 🔍</button>
				</div>
 
      </header>
    </div>
  );
}

export default App;

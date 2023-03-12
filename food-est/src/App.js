import logo from './logo.svg';
import React from "react"
import './App.css';
import FreeFoodTable from './components/table.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>TuumEats / TBirdFeeder</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FreeFoodTable/>
        <div class="search">
					<button id="search-button" class="button" >Give me food pls 🔍</button>
				</div>
 
      </header>
    </div>
  );
}

export default App;

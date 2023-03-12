import logo from './logo.svg';
import React from "react"
import './App.css';
import FreeFoodTable from './components/table.js';
import Resources from './components/resources.js';
import FreeFoodSrc from './components/table.js';
import Collapsible from './components/collapsible.js';

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
        
        <body>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FreeFoodTable id="foodTable"/>
        <Resources/>

        <div class="search">
					<button id="search-button" class="button" >Give me food pls 🔍</button>
				</div>
        <table>
          <tr>
            <th>Event</th>
            <th>Organizer</th>
            <th>Date</th>
            <th><button id="search-button" class="button" >Give me food pls 🔍</button></th>
          </tr>
          <tbody id="foodEvents"></tbody>
        </table>
        <Collapsible desc="desc here"/>

        </body>


 
      </header>
    </div>
  );
}

var search_button = document.getElementById("search-button");
if(search_button != null) {
  search_button.addEventListener("click", getFood);
}

function getFood(e) {
  e.preventDefault();
  // get array of events

  // for each elem:
  var newElem = React.createElement(FreeFoodSrc, {link:"google.com", group:"SUS", title:"End of year bandquet", date: "May 6, 2026"});
  document.getElementById("foodEvents").appendChild(newElem);
}

export default App;

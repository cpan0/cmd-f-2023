import logo from './logo.svg';
import React from "react"
import './App.css';
import FreeFoodTable from './components/table.js';
import FreeFoodSrc from './components/table.js';
import Collapsible from './components/collapsible.js';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        
        <h1>Tuum Eats</h1>
        <div className="topnav">
          <a href="#home">Home</a>
          <a href="#resources">Additional Resources</a>
          <a href="#about">About</a>
        </div>
        
        <body>

        <div class="search">
					<button id="search-button" class="button" >Give me food pls 🔍</button>
				</div>
        <table id="foodTable" width="100%">
          <caption>Here's where you can grab some free food on campus: (you can thank us later;))</caption>
          <thead>
            <tr>
              <th>Event</th>
              <th>Organizer</th>
              <th>Date</th>
              <th><Collapsible desc="desc here"/></th>
            </tr>
          </thead>
          <tbody id="foodEvents"></tbody>
        </table>


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
  document.getElementById("foodT").appendChild(newElem);
  document.getElementById("foodTable").setAttribute("visibility", "visible");
}

export default App;

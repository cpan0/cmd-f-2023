import logo from './logo.png';
import footer from './footer.png';
import note from "./note.png";
import React from "react"
import './App.css';
// import FreeFoodTable from './components/table.js';
import FreeFoodSrc from './components/table.js';
import Collapsible from './components/collapsible.js';
import Tom from './components/tom.js';
import Sticky from './components/sticky.js';


function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* <h1>Tuum Eats</h1> */}
        <div className="topnav">
          <a href="/">Home</a>
          <a href="#adtnlResources">Additional Resources</a>
          <a href="#about" style={{float: 'right'}}>About</a>
        </div>
        
        <body>
          <p id="resultIntro">Here's where you can grab some free food on campus: (you can thank us later;))</p>
          <div className="events">
          <Sticky/>
          <Sticky/>
          <Sticky/>
          <Sticky/>
          <Sticky/>
          </div>

        {/* <div class="search">
					<button id="search-button" class="button" >🍗 GIMME. DA. FOOD. 🍴</button>
				</div> */}
        {/* <table id="foodTable" width="100%">
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
        </table> */}
        <div id="sideInfo">
        <div id="adtlWrapper">
        <div id="adtnlResources">
          <h2>Wanna learn more about services available for those dealing with food insecurity?</h2>
          <h3>Learn more about Sprouts, the AMS Food Bank, and more here:</h3>
          <p><a href="https://foodhub.ubc.ca/resources/?campus=5">UBC FoodHub</a></p>
          <h3>Get tips and info from UBC’s dieticians:</h3>
          <p><a href="https://food.ubc.ca/nutrition/">UBC Nutrition</a></p>
        </div>
        </div>
        <div id="aboutWrapper">
        <div id="about">
          <h2>ABOUT TUUM EATS</h2>
          <p>Here at UBC, our motto is “Tuum Est”, which means “It's yours, and it's up to you.” And with Tuum Eats, we want you to know the food is yours and the food is up to you. Our website scrapes Instagram to find campus gatherings where there will be free food students can eat because who doesn’t love free food? Additionally, a lot of groups find they have too much extra food at the end of the night, and the food would otherwise go to waste. Moreover, we also provided resources on our site to let UBC students know about other programs available for those experiencing food insecutrity, which we know is a serious problem for far too many students here. We hope to help them get the food they need so they can focus more on their studies and not how they’ll get their next meal.</p>
          <h3>Meet Tom Ato! <Tom/> </h3> 
          <p>Your friendly neighbour Tom, the mascot of Tuum Eats! He’s here to fight for you and you right to have affordable food. Vote Tom for president.</p>
          <h3>Made with ❤️ by cmd-w <Tom/> <Tom/> <Tom/> <Tom/> </h3>
          <p>(Why cmd-w you ask? Well, this project was made for the hackathon cmd-f, so we’re cmd-f because we’re all women and we only take Ws (no Ls))</p>
          <center><img src={footer} className="footer" alt="logo" /></center>
        </div>
        </div>
        </div>

        </body>


 
      </header>
    </div>
  );
}

function tom() {
  return (
    <img src={tom} className="tom" alt="tom" />
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
  // var newElem = React.createElement(FreeFoodSrc, {link:"google.com", group:"SUS", title:"End of year bandquet", date: "May 6, 2026"});

  // document.getElementById("foodT").appendChild(newElem);
  // document.getElementById("foodTable").setAttribute("visibility", "visible");
  
  // var fs = require("fs");
  // var text = 
}

export default App;

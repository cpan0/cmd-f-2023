import logo from './logo.png';
import footer from './footer.png';
import note from "./note.png";
import React from "react"
import './App.css';
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
            <Sticky e="Good Morning :3"></Sticky>
            <Sticky e="Mark your calendars for the largest UBC CSSS end-of-the-year event! We’re happy to bring it back this year after being on hiatus since 2019! The event will be held at the UBC Boathouse on April 5, from 6 pm - 11 pm. Ticket sales will begin on March 9th at 10 am!Early bird pricing will start at $40 (plus the Eventbrite ticket fee) and will end on March 21st at 11:59 pm. After that, ticket prices will be $50 (plus the Eventbrite ticket fee) until registration closes at 11:59 pm on March 30th. Make sure you claim your spot as soon as possible as seats are limited!Please register using the Eventbrite link here: https://www.eventbrite.ca/e/ubc-csss-year-end-gala-tickets-571282129227*This event is for UBC students only.After purchasing your ticket, please fill out the Google Form (https://forms.gle/8VtVNFhANp5vgvB46) to select your menu option and seating preferences. Please also submit the same email address that was used to purchase the ticket so we can link them together.Tickets are heavily subsidized by the UBC CSSS and will include a 4-course plated dinner with an open bar, fun activities, a DJ, and a Photo Booth so make sure you come dressed up in semi-formal attire!If you have any questions or concerns, please contact Aidan Perras, our VP Social (vps@ubccsss.org) or Ryan Kim, one of our Officers (mck649@gmail.com)."/>
            <Sticky e="Come join your Marine Drive community in an event where you and your peers can ask questions about job search, hone your resume/cover letter writing skills, and practice answering interview questions. Free pizzas, snacks, and drinks will be provided.📍Place: MD 6 Lounge⏰Time: 6:30 – 8 PM, March 16th, 2023Sign-up link in bio "/>
            <Sticky e="Wednesday Night Dinner Presents: 🌈 Eat the Rainbow❤️Don’t chase rainbows, eat them!😉📍Agora Space in Macmillan Basement from 5:30-7PM.Our MenuStarter: Rainbow Hummus and Veggies🍽️Main: Rainbow Buddha Bowl 🥗Dessert: Chocolate Mousse with Fruit Kebabs🍎🍊🍋🍏🫐📣 Calling ALL UBC STUDENTS: Click the link in our bio to sign-up for a shift this week or for a future WND to get a chance to learn new cooking skills, build connections with UBC peers, and get a FREE WND as thanks for your hard work! 💘♻️ Please try to bring your own containers and cutlery! Rental or single-use containers will be available for an extra charge of.🏷️ Pricing:-$4 entry for LFS students and staff-$5 entry for all UBC students and staff-$1-2 extra fee for borrowed utensils and plates✔️Cash or payments acceptable through Square will be accepted at the door starting around 5:20 pm!❗️Note: Credit, Debit, and Cash will all be accepted.—The LFS|US would like to acknowledge that we are situated and gathered on the traditional,ancestral, and unceded territory of the xwməθkwəy̓ əm (Musqueam) people. "/>
          {/* <Sticky e="REMINDER: The screening of '"'On the Basis of Sex'"' is happening in the ballroom TONIGHT at 6:30 PM, come early for free popcorn, lemonade, and candy! 💜 Get to know your AUS members 💜  💜Do you have any ~ questions ~  on majors or future careers after your life at UBC? 💜"/> */}
            <Sticky e="UBC Engineering Undergraduate Society is bringing back Pie Day for the first time since COVID!For $5, you can pie a friend/prof/EUS exec/student club president etc -- and for a good cause! All proceeds will go to BC children 🙂"/>
         </div> 

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

}

export default App;

import logo from './logo.svg';
import './App.css';
import FreeFoodTable from './components/scrapedTable.js';
import NavBar from './components/Navbar/navbar.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TuumEats</h1>

        <div class="search">
					<button id="search-button" class="button" >Give me food pls 🔍</button>
				</div>

      </header>
      
    </div>
  );
}

export default App;
// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route}
//     from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import AdditionalResources from './pages/adtnlRsrc';


// function App() {
//   return (
//       <Router>
//       <Navbar />
//       <Routes>
//       <Route path="/" render={() => <Home />} />
//           <Route path='/adtnlRsrc' element={<AdditionalResources/>} />
//           <Route path='/about' element={<About/>} />
//       </Routes>
//       </Router>
//   );
//   }
    
//   export default App;

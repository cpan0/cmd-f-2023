import logo from './logo.svg';
import './App.css';
import FreeFoodTable from './components/scrapedTable.js';
import NavBar from './components/navbar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>TuumEats / TBirdFeeder</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div class="search">
					<button id="search-button" class="button" >Give me food pls 🔍</button>
				</div>
 
      </header>
    </div>
  );
}

export default App;

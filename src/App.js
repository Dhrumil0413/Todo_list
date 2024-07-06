import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar.js';
import {Footer} from './MyComponents/Footer.js';
import {Todos} from './MyComponents/Todos.js';

function App() {
  return (
    <div className="App">
      <Navbar isSearchBar = {true} />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;


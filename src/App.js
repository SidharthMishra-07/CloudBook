import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    </>
  );
}

export default App;

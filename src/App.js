import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

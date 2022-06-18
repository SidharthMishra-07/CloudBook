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
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

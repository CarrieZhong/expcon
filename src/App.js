import './App.css';
import Home from './Home/Home';
import Pricing from './Pricing/Pricing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

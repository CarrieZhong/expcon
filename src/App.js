import './App.css';
import Home from './Home/Home';
import Pricing from './Pricing/Pricing';
import Payments from './Payments/Payments';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Router>
    <AppBar position="static" color="transparent" elevation={0} style={{display:'flex', flexDirection: 'row', alignItems: "center"}}>
        <Button><MenuIcon/></Button>
        <Typography color="inherit" noWrap>
            <Button onClick={(e) => {e.preventDefault(); window.location.href='/';}}><Typography> EXP|CON </Typography></Button>
        </Typography>
    </AppBar>
        <Switch>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/payments">
            <Payments />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

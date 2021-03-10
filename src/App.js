import './App.css';
import Home from './Home/Home';
import Pricing from './Pricing/Pricing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <Router>
    <AppBar position="static" color="transparent" elevation={0} style={{display:'flex', flexDirection: 'row'}}>
        <MenuIcon/>
        <Typography color="inherit" noWrap>
            <Typography> EXP|CON </Typography>
        </Typography>
    </AppBar>
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

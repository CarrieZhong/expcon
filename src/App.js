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
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © all rights reserved | '}
      <Link color="inherit" href="https://github.com/CarrieZhong">
        CarrieZhong
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

function App() {
  const classes = useStyles();
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
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Box style={{display:'flex'}}>
            <MailOutlineIcon/>
            <Typography> carrie.zhong@mail.utoronto.ca </Typography>
          </Box>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
    </Router>
  );
}

export default App;

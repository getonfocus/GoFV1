import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import{ AppBar, makeStyles, Toolbar, Typography, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu' 
import { Home } from "./Home";
import { About } from "./About";
import { Users } from "./Users";
const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  }
}))
const Nav = () => {
    const classes = useStyles()
    return (
        <>
        <Router>
            <AppBar>
                <Toolbar>
                    <IconButton 
                        color="inherit" 
                        aria-label="menu" 
                        className={classes.menuButton}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" className="title">
                        Get on Focus
                    </Typography>
                    <ul className="topNav">
                        <li className="topNav__item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="topNav__item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="topNav__item">
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                    <Button 
                        variant="text" 
                        color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/users" component={Users} />
            </Switch>       
        </Router>   
        </>
    )
}

export default Nav

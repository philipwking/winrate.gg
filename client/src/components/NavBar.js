import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"


function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between">
          <Typography variant="h6">
            WINRATE.GG
          </Typography>
          <Link to={"/"} align="right" >
            Home
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;
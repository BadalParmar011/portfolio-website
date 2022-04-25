import React from "react";
import "./App.css";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function App () {
  const classes = useStyles();
    return (
        <div class="pp1">
          <div className="App">
          <AppBar position="static" class="ss1">
              <Toolbar className="t11">
                  <Typography variant="h4" className="tt1" color="fff000"><b>RESUME BUILDER</b></Typography>
              </Toolbar>
          </AppBar>
        
          <Resume />
          </div>
        </div>
    );
  }


export default App;

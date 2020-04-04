import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

function AppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            AnDa
          </Typography>
          <Link to='/login' style={{color: '#fefefe', textDecoration: 'none'}} >
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}

export default AppBar;
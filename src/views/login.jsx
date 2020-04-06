import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import GoogleSvgComponent from '../images/google.jsx';

const useStyles = makeStyles((theme) => ({

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function GoogleImg(props) {
  return <GoogleSvgComponent />;
}

function LoginUI({ onClickHandle, onClickHandleGoogle }) {
  const classes = useStyles();

  return (
    <>

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        value="enviar"
        className={classes.submit}
      >
        Log In
            </Button>


      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
                </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2" onClick={onClickHandle}>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>

      <hr></hr>



      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<GoogleImg />}
        onClick={onClickHandleGoogle}
      >
        Google
      </Button>
    </>
  )
}

export default LoginUI;
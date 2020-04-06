import React, { Fragment, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// firebase
import { auth, googleProvider } from '../firebase.app';
// views
import LoginUI from '../views/login';
import SignInUI from '../views/signin';

const useStyles = makeStyles((theme) => ({
  form: {
    margin: '0 6rem',
  },
}));

function Login({ dispatch, isLogged }) {
  const classes = useStyles();
  const [ isRegister, setIsRegister ] = useState(false);
  const formRef = useRef({});

  const signin = (event) => {
    event.preventDefault();
    const dataForm = new FormData(formRef.current);
    const [firstName, lastName, email, password] = dataForm.values();

    console.log('_firstName: ', firstName);
    console.log('_lastName: ', lastName);

    auth.createUserWithEmailAndPassword(email, password)
      .then((client) => {
        if (client.user !== undefined) {
          console.log('usuario registrado');
          setIsRegister(false);

        }
      })
      .catch((err) => console.dir(err));

    event.currentTarget.reset();
  }

  const login = (event) => {
    event.preventDefault();
    const dataForm = new FormData(formRef.current);
    const [email, password] = dataForm.values();

    auth.signInWithEmailAndPassword(email, password)
      .then((client) => {
        console.dir(client);
        localStorage.setItem('is_logged', auth.currentUser !== null ? true : false)
        dispatch({
          type: 'IS_LOGGED',
          payload: { isLogged: auth.currentUser !== null && true }
        })
      })
      .catch((err) => console.dir(err));

    event.currentTarget.reset();
  }

  const onHandleClickRegister = (event) => {
    event.preventDefault();
    setIsRegister(true);
  }

  const onHandleClickGoogleAuth = (event) => {
    event.preventDefault();
    // Using a popup.
    googleProvider.addScope('profile');
    googleProvider.addScope('email');
    auth.signInWithPopup(googleProvider)
      .then(function (result) {
        // This gives you a Google Access Token.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        console.log(token, user);

        localStorage.setItem('is_logged', user.uid !== null ? true : false)
        dispatch({
          type: 'IS_LOGGED',
          payload: { isLogged: user.uid !== null && true }
        });
      })
      .catch(function(err) {
        console.dir(err);
      });
  }

  return (
    <Fragment>
      <form ref={formRef} className={classes.form} onSubmit={isRegister ? signin : login}>
        {isRegister ? <h3>Registrarse</h3> : <h3>Iniciar sesión</h3>}
        {isRegister ? (<SignInUI />) : (<LoginUI onClickHandleGoogle={onHandleClickGoogleAuth} onClickHandle={onHandleClickRegister} />)}
      </form>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isLogged: state.Client.isLogged,
})

export default connect(mapStateToProps)(Login);

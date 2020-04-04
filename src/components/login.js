import React, { Fragment, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button'

// firebase
import { auth } from '../firebase.app';
// views
import LoginUI from '../views/login';
import SignInUI from '../views/signin';

function Login({ dispatch, isLogged }) {
  
  const [ isRegister, setIsRegister ] = useState(false);
  const formRef = useRef({});

  const signin = (event) => {
    event.preventDefault();
    const dataForm = new FormData(formRef.current);
    const [ firstName, lastName, email, password ] = dataForm.values();
    
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
    const [ email, password ] = dataForm.values();

    auth.signInWithEmailAndPassword(email, password)
      .then((client) => {
        console.dir(client);
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

  const onCloseSession = () => {
    auth.signOut();
    dispatch({
      type: 'IS_LOGGED',
      payload: { isLogged: false }
    })
  }

  
  return (
    <Fragment>
      <Link to="/">Back to Home AnDa</Link>
      <section>
        <div>
          <p>Esto le toca a Laura ...</p>
        </div>
        <form ref={formRef} onSubmit={ isRegister ? signin : login }>
          { isRegister ? <h3>Registrarse</h3> : <h3>Iniciar sesión</h3> }
          { isRegister ? (<SignInUI />) : (<LoginUI onClickHandle={onHandleClickRegister} />) }
        </form>
      </section>
      { isLogged ? <Button variant="contained" color="secondary" onClick={onCloseSession}>logout</Button> : null }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isLogged: state.Client.isLogged,
})

export default connect(mapStateToProps)(Login);

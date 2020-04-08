import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

// firebase
import { auth, firestoreDB } from '../firebase.app';

function Dashboard({ dispatch, isLogged }) {
    const onCloseSession = () => {
        auth.signOut();
        localStorage.setItem('is_logged', false)
        dispatch({
            type: 'IS_LOGGED',
            payload: { isLogged: false }
        })
    }

    const db = () => {
        // firestoreDB.collection('usuarios').get()
        // .then((querySnapshot) => {
        //     console.dir(querySnapshot);

        //     querySnapshot.forEach((doc) => {
        //         console.log(doc.id);
        //         console.dir(doc.data());
        //     });
        // });

        const docRef = firestoreDB.collection('usuarios').doc(`/${localStorage.getItem('uID')}`);
        docRef.update({ genero: 'mujer' })
        .catch(err => console.dir(err));
    }

    return (
        <div>
            { isLogged ? <Button variant="contained" color="secondary" onClick={onCloseSession}>logout</Button> : null }
            { db() }
        </div>
    )
}

const mapStateToProps = state => ({
    isLogged: state.Client.isLogged,
});

export default connect(mapStateToProps)(Dashboard);

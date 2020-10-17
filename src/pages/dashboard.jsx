import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

// firebase
import { auth, firestoreDB } from '../firebase.app';

function Dashboard({ dispatch, isLogged, personalInformation }) {
    const formRef = useRef({});
    const [data, setData] = useState({});
    const [uID, setUID] = useState(null);

    useEffect(() => {
        firestoreDB.collection('usuarios').where('correo', "==", localStorage.getItem('email'))
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    setData(doc.data());
                    setUID(doc.id);

                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }, [])

    const onCloseSession = () => {
        auth.signOut();
        localStorage.setItem('is_logged', false)
        dispatch({
            type: 'IS_LOGGED',
            payload: { isLogged: false }
        })
    }

    const onHandleChange = event => {

        if (event.currentTarget.name === 'gender') {
            dispatch({
                type: 'PERSONAL_INFORMATION',
                payload: { isChangeGender: true }
            })
        } else {
            switch (event.currentTarget.id) {
                case 'nombre':
                    dispatch({
                        type: 'PERSONAL_INFORMATION',
                        payload: { isChangeFirstName: true }
                    })
                    break;
                case 'apellido':
                    dispatch({
                        type: 'PERSONAL_INFORMATION',
                        payload: { isChangeLastName: true }
                    })
                    break;
                case 'correo':
                    dispatch({
                        type: 'PERSONAL_INFORMATION',
                        payload: { isChangeEmail: true }
                    })
                    break;
                case 'fecha':
                    dispatch({
                        type: 'PERSONAL_INFORMATION',
                        payload: { isChangeDate: true }
                    })
                    break;
                case 'phone':
                    dispatch({
                        type: 'PERSONAL_INFORMATION',
                        payload: { isChangePhone: true }
                    })
                    break;

                default:
                    break;
            }
        }
    };

    const onHandleSubmitUpdate = event => {
        event.preventDefault();
        const dataUpdate = {};
        const dataForm = new FormData(formRef.current);
        const [ nombre, apellido, correo, gender, fecha, phone ] = dataForm.values();

        
            if (personalInformation.isChangeFirstName === true)
                dataUpdate.nombre = nombre
            if (personalInformation.isChangeLastName === true)
                dataUpdate.apellido = apellido
            if (personalInformation.isChangeEmail === true)
                dataUpdate.correo = correo
            if (personalInformation.isChangeGender === true)
                dataUpdate.gender = gender
            if (personalInformation.isChangeDate === true)
                dataUpdate.fecha = fecha
            if (personalInformation.isChangePhone === true)
                dataUpdate.phone = phone
                
        console.log(dataUpdate);
        dispatch({
            type: 'PERSONAL_INFORMATION',
            payload: {
                isChangeFirstName: false,
                isChangeLastName: false,
                isChangeEmail: false,
                isChangeGender: false,
                isChangeDate: false,
                isChangePhone: false
            }
        })

        const docRef = firestoreDB.collection('usuarios').doc(`/${uID}`);
        docRef.update(dataUpdate)
            .catch(err => console.dir(err));
    };

    return (
        <div>
            <form ref={formRef} onSubmit={onHandleSubmitUpdate}>
                <div>
                    <input
                        type="text"
                        onChange={onHandleChange}
                        id="nombre"
                        name="nombre"
                        defaultValue={data.nombre && data.nombre}
                        placeholder="Nombre"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        onChange={onHandleChange}
                        id="apellido"
                        name="apellido"
                        defaultValue={data.apellido && data.apellido}
                        placeholder="Apellido"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        onChange={onHandleChange}
                        id="correo"
                        name="correo"
                        defaultValue={data.correo && data.correo}
                        placeholder="Correo"
                    />
                </div>
                <div>
                    <label htmlFor="male">Hombre</label>     
                    <input
                        type="radio"
                        onChange={onHandleChange}
                        id="male"
                        name="gender"
                        defaultValue="Masculino"
                    />
                </div>
                <div>
                    <label htmlFor="female">Mujer</label>
                    <input
                        type="radio"
                        onChange={onHandleChange}
                        id="female"
                        name="gender"
                        defaultValue="Femenino"
                    />
                </div>
                <div>
                    <label>Fecha de nacimiento</label><br/>
                    <input
                        type="date"
                        onChange={onHandleChange}
                        id="fecha"
                        name="fecha"
                    />
                </div>
                <div>
                    <input
                        type="phone"
                        onChange={onHandleChange}
                        id="phone"
                        name="phone"
                        placeholder="Celular"
                    />
                </div>
                <div>
                    <button type="submit">Actualizar</button>
                </div>
            </form>
            {isLogged ? <Button variant="contained" color="secondary" onClick={onCloseSession}>logout</Button> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    isLogged: state.Client.isLogged,
    personalInformation: state.PersonalInformation

});

export default connect(mapStateToProps)(Dashboard);

import React from 'react';

function LoginUI({ onClickHandle }) {
    return (
        <>
            <div>
                <label htmlFor="email">Correo electronico</label>
                <input type="email" name="email" id="email" placeholder="correo@eg.com" />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="******" />
            </div>
            <div>
                <input type="submit" value="enviar" />
            </div>
            <button onClick={onClickHandle}>Registrarse</button>
        </>
    )
}

export default LoginUI;
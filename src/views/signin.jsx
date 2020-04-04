import React from 'react';

function SignInUI() {
    return (
        <>
            <div>
                <label htmlFor="firstName">Nombre</label>
                <input type="text" name="firstName" id="firstName" placeholder="John" />
            </div>
            <div>
                <label htmlFor="lastName">Apellido</label>
                <input type="text" name="lastName" id="lastName" placeholder="Doe" />
            </div>
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
            {/* <a onClick={onClickHandle} >Iniciar sesión</a> ..:: Le toca a Laura ::.. */}
        </>
    )
}

export default SignInUI;
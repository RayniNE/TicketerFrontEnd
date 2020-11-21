import React from 'react';
// import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Formulario, Campo } from './UI/formulario';
import Boton from './UI/boton';

import Logo from '../images/Logo.png';
import bandera from '../images/Loguito.png';

const Titulo = styled.h1`
    text-align: center;
    margin-top: 5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`;

const Center = styled.div`

    display: block;
    text-align: center;
  

`;

const Contenedor = styled.div`

    display: block;

    .logo{
        left: 0;
        width: 100px;
    }

    .bandera{
        float: right;
        margin-right: 15px;
        width: 90px;
    }

`;



const IniciarSesion = () => {

    return ( 
        <Contenedor>

                <img className="logo" src={Logo} alt="logo"/> 

                <img className="bandera" src={bandera} alt="bandera"/>

                <Titulo> Iniciar Sesión </Titulo>

            <Formulario>  

                <Campo>
                    <label for="usuario"> Usuario </label>
                    <input
                    type="text"
                    placeholder="Ingrese el usuario"
                />
                </Campo>

                <Campo>
                    <label for="contraseña"> Contraseña </label>
                    <input
                    type="password"
                    placeholder="Ingrese la contraseña"
                />
                </Campo>

                <Center>
                    <Boton> Iniciar Sesión </Boton>
                </Center>
                
            </Formulario>


        </Contenedor>

     );
}
 
export default IniciarSesion;
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Formulario, Campo } from './UI/formulario';
import Boton from './UI/boton';

const Titulo = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

const IniciarSesion = () => {

    return ( 
        <div>
                <Titulo 
                    css={css`
                        text-align: center;
                        margin-top: 5rem;
                    `}
                > Iniciar Sesión </Titulo>

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

                <Boton> Iniciar Sesión </Boton>
            </Formulario>


        </div>

     );
}
 
export default IniciarSesion;
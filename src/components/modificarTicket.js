import React from 'react';
import Layout from './layout/Layout';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const Contenedor = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    div{
        margin-left: 50px;
        margin-right: 200px;

        input{
            border: none;
            border-bottom: 1px solid #707070;
            height: 30px;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
        }

        h3{
            font-size: 20px;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
        }
    }
`;

const Espacio = styled.div`
    margin-right: 50px;
`;

const Titulo = styled.h1`

    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    text-align: center;
`;

const ModificarUsuario = () => {

    const usuario = useLocation().state;
    console.log(usuario);

    return ( 
        <Layout>
            <Titulo> Modificar Ticket </Titulo>

            <Contenedor>
                <div>
                    <h3> Solicitado por </h3>
                    <input 
                        type="text"

                    />
                </div>

                <div>
                    <h3> Usuario </h3>
                    <input 
                        type="text"

                    />
                </div>
            </Contenedor>

            <Contenedor>
                
                <div>
                    <h3> Asignado </h3>
                    <input 
                        type="text"

                    />
                </div>

                <div>
                    <h3> Prioridad </h3>
                    <input 
                        type="text"

                    />
                </div>
            </Contenedor>

            <Contenedor>
                
                <div>
                    <h3> Fecha </h3>
                    <input 
                        type="text"

                    />
                </div>

                <div>
                    <h3> Estado </h3>
                    <input 
                        type="text"

                    />
                </div>
            </Contenedor>



        </Layout>
     );
}
 
export default ModificarUsuario;
import React, { useState, useEffect, useContext } from 'react';
import Layout from './layout/Layout';
import { useLocation, useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';
import ServicioContext from '../context/servicios/servicioContext';
import styled from '@emotion/styled';
import Boton from '../components/UI/boton';


const Contenedor = styled.div`

    display: flex;
    margin-left: 125px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    div{
        margin-left: 50px;
        margin-right: 200px;
        margin-bottom: 50px;

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

    
    select{
        width: 200px;
        height: 30px;
    }

`;

const Titulo = styled.h1`

    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    text-align: center;
`;

const Filter = styled.select`
    text-align: center;
    /* font-size: 10px; */
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
    /* appearance: none; */
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    width: 200;
`;

const ModificarTicket = () => {

    const ticket = useLocation().state;
    const userContext = useContext(UserContext);
    const servicioContext = useContext(ServicioContext);
    const { usuarios, obtenerUsuarios } = userContext;
    const { servicios, obtenerServicios } = servicioContext;

    useEffect(() => {

        const obtenerDatos = () => {
            obtenerUsuarios();
            obtenerServicios();
        }


        obtenerDatos();
    }, [])


    return ( 
        <Layout>
            <Titulo> Modificar Ticket </Titulo>

            <Contenedor>
                <div>
                    <h3> Solicitado por </h3>
                    <Filter>
                        <option>  </option>
                    </Filter>
                </div>

                <div>
                    <h3> Usuario </h3>
                    <Filter>
                        {usuarios ? usuarios.map(usuario => (
                            <option key={usuario.id} value={usuario.id}> {usuario.nombre} </option>
                        )) :

                        <option> No hay usuarios</option>
                            
                    }
                    </Filter>
                </div>
            </Contenedor>

            <Contenedor>
                
                <div>
                    <h3> Servicio </h3>
                    <Filter> 

                    {servicios ? servicios.map(servicio => (
                            <option key={servicio.id} value={servicio.id}> {servicio.nombre} </option>
                        )) :

                        <option> No hay usuarios</option>
                            
                    }

                    </Filter>
                </div>

                <div>
                    <h3> Prioridad </h3>
                    <Filter> </Filter>
                </div>
            </Contenedor>

            <Contenedor>
                
                <div>
                    <h3> Fecha </h3>
                    <Filter> </Filter>
                </div>

                <div>
                    <h3> Estado </h3>
                    <Filter>  </Filter>
                </div>
            </Contenedor>

            <Contenedor>
                    <div>
                        <Boton
                            type="submit"
                        > Agregar </Boton>
                    </div>

                    </Contenedor>



        </Layout>
     );
}
 
export default ModificarTicket;
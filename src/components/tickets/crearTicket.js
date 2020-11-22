import React, { useState, useEffect, useContext } from 'react';
import Layout from '../layout/Layout';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Boton from '../UI/boton';
import Swal from 'sweetalert2';

import UserContext from '../../context/userContext';
import TicketContext from '../../context/tickets/ticketContext';
import ServicioContext from '../../context/servicios/servicioContext';
import PrioridadContext from '../../context/prioridades/prioridadContext';
import EstadoContext from '../../context/estados/estadoContext';
import ClienteContext from '../../context/clientes/clienteContext';

const Titulo = styled.h1`

    /* position: absolute;
    right: 0;
    left: 0; */

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    /* margin-left: 50px;
    margin-top: 20px; */
    text-align: center;
`;

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
            width: 200px;
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

    select{
        width: 200px;
    }

`;

const CrearTicket = () => {

    const userContext = useContext(UserContext);
    const ticketContext = useContext(TicketContext);
    const servicioContext = useContext(ServicioContext);
    const prioridadContext = useContext(PrioridadContext);
    const estadoContext = useContext(EstadoContext);
    const clienteContext = useContext(ClienteContext);
    const { usuarios, obtenerUsuarios } = userContext;
    const { agregarTicket } = ticketContext;
    const { servicios, obtenerServicios } = servicioContext;
    const { prioridades, obtenerPrioridades } = prioridadContext;
    const { estados, obtenerEstados } = estadoContext;
    const { clientes, obtenerClientes } = clienteContext;

    const history = useHistory();

    const [newTicket, setNewTicket] = useState({

        clienteId: 0,
        usuarioId: 0,
        servicioId: 0,
        prioridadId: 0,
        ticketStatusId: 0,
        fechaCreacion: "".split('T')[0].toString()

    });

    const { clienteId, usuarioId, servicioId, prioridadId, estadosId, ticketStatusId, fechaCreacion } = newTicket;

    useEffect(() => {

        const obtenerDatos = () => {
            obtenerUsuarios();
            obtenerServicios();
            obtenerPrioridades();
            obtenerEstados();
            obtenerClientes();
        }


        obtenerDatos();

    }, []);

                
    const onChange = (e) => {
        setNewTicket({
            ...newTicket,
            [e.target.name] : e.target.value,

        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(clienteId || usuarioId < 0 || servicioId < 0 || prioridadId < 0 || estadosId < 0 || ticketStatusId < 0 || fechaCreacion.trim() === ""){
 
            Swal.fire({
                title: "Error",
                text: "Por favor introduzca todos los campos",
                icon: "warning",
                confirmButtonText: "Aceptar"

            })

            return;
        }

        agregarTicket(newTicket);
        history.push('/tickets');

    }

    return ( 
        <Layout>
            <Titulo> Modificar Ticket </Titulo>

            <form
                onSubmit={onSubmit}
            >
                
            <Contenedor>
                <div>
                    <h3> Solicitado por </h3>
                    <Filter
                        onChange={onChange}
                        name="clienteId"
                        value={clienteId}
                    >

                    <option> -- Seleccione un cliente -- </option>

                    {clientes ? clientes.map(cliente => (
                            <option key={cliente.id} value={cliente.id}> {cliente.nombre} {cliente.apellido}</option>
                        )) :

                        <option> No hay clientes</option>
                            
                    }
                    </Filter>
                </div>

                <div>
                    <h3> Usuario </h3>
                    <Filter
                        onChange={onChange}
                        name="usuarioId"
                        value={parseInt(usuarioId)}
                    >   <option> -- Seleccione un usuario -- </option>
                        {usuarios ? usuarios.map(usuario => (
                            <option key={usuario.id} value={parseInt(usuario.id)}> {usuario.nombre} {usuario.apellido}</option>
                        )) :

                        <option> No hay usuarios</option>
                            
                    }
                    </Filter>
                </div>
            </Contenedor>

            <Contenedor>
                
                <div>
                    <h3> Servicio </h3>
                    <Filter
                        onChange={onChange}
                        name="servicioId"
                        value={servicioId}
                    > 

                    <option> -- Seleccione un servicio -- </option>

                    {servicios ? servicios.map(servicio => (
                            <option key={servicio.id} value={servicio.id}> {servicio.nombre} </option>
                        )) :

                        <option> No hay servicios</option>
                            
                    }

                    </Filter>
                </div>

                <div>
                    <h3> Prioridad </h3>
                    <Filter
                        onChange={onChange}
                        name="prioridadId"
                        value={prioridadId}
                    > 
                    <option> -- Seleccione un prioridad -- </option>

                    {prioridades ? prioridades.map(prioridad => (
                            <option key={prioridad.id} value={prioridad.id}> {prioridad.nombre} </option>
                        )) :

                        <option> No hay prioridades</option>
                            
                    }

                    </Filter>
                </div>
            </Contenedor>

            <Contenedor>
                
                <div>
                    <h3> Fecha </h3>
                    <input
                        type="date"
                        onChange={onChange}
                        name="fechaCreacion"
                        value={fechaCreacion}
                    />
                </div>

                <div>
                    <h3> Estado </h3>
                    <Filter
                        onChange={onChange}
                        name="ticketStatusId"
                        value={parseInt(ticketStatusId)}
                    > 
                    <option> -- Seleccione un estado -- </option>

                    {estados ? estados.map(estado => (
                            <option key={estado.id} value={estado.id}> {estado.nombre} </option>
                        )) :

                        <option> No hay estados</option>
                            
                    }

                    </Filter>
                </div>
            </Contenedor>

            <Contenedor>
                    <div>
                        <Boton
                            type="submit"
                        > Agregar </Boton>
                    </div>

            </Contenedor>       
            </form>




        </Layout>
     );
}
 
export default CrearTicket;
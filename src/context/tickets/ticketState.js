import React, { useReducer, useState } from 'react';
import clienteAxios from '../../config/axios';
import TicketContext from './ticketContext';
import TicketReducer from './ticketReducer';

import { 
    OBTENER_TICKETS,
    OBTENER_TICKETS_ID,
    OBTENER_TICKETS_USUARIO,
    CREAR_TICKETS,
    MODIFICAR_TICKETS,
    ELIMINAR_TICKETS
} from '../../types';

const TicketState = (props) => {
    
    const initialState = {
        tickets: [],
    };

    //Se crea el dispatch y el state.
    const [state, dispatch] = useReducer(TicketReducer, initialState);

    const obtenerTickets = async () => {

        try {
            const resultado = await clienteAxios.get("/api/tickets");
            dispatch({
                type: OBTENER_TICKETS,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
        
    }

    // const obtenerTicketsById = async (ticketId) => {

    //     try {
            
    //         const resultado = await clienteAxios.get(`/api/tickets/${ticketId}`);
    //         console.log(state.tickets);
    //         dispatch({
    //             type: OBTENER_TICKETS_ID,
    //             payload: resultado.data
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }

    // const obtenerTicketsByUsuario = async (usuarioId) => {

    //     try {
    //         const resultado = await clienteAxios.get(`/api/tickets?filter=usuario&filterId=${usuarioId}`);
    //         dispatch({
    //             type: OBTENER_TICKETS_USUARIO,
    //             payload: resultado.data
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }

    return (
        <TicketContext.Provider
            value={{
                //State
                tickets: state.tickets,
                //funciones
                obtenerTickets,
                // obtenerTicketsById,
                // obtenerTicketsByUsuario

            }}
        >
            {props.children}
        </TicketContext.Provider>
    )
}

export default TicketState;
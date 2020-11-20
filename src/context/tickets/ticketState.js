import React, { useReducer, useState } from 'react';
import clienteAxios from '../../config/axios';
import TicketContext from './ticketContext';
import TicketReducer from './ticketReducer';

import { 
    OBTENER_TICKETS,
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

    return (
        <TicketContext.Provider
            value={{
                //State
                tickets: state.tickets,
                //funciones
                obtenerTickets,
            }}
        >
            {props.children}
        </TicketContext.Provider>
    )
}

export default TicketState;
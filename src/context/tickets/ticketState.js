import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import TicketContext from './ticketContext';
import TicketReducer from './ticketReducer';
import Swal from 'sweetalert2';

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

    const handleCreate = () => {

        Swal.fire({
                
            title: "Se ha agregado con exito",
            text: "Se ha agregado con exito el ticket",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
        })

    }

    const agregarTicket = async (ticket) => {

        try {
            const resultado = await clienteAxios.post("/api/tickets", ticket);
            dispatch({
                type: CREAR_TICKETS,
                payload: resultado.data
            })
            handleCreate();
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Se ha producido un error",
                icon: "error",
                confirmButtonText: "Aceptar"

            })
        }
    }


    const handleUpdate = () => {

        Swal.fire({
                
            title: "Modificado con exito",
            text: "Se ha modificado con exito el usuario",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
        })

    }

    const modificarTicket = async (ticket, id) => {
        try {
            await clienteAxios.put(`/api/tickets/${id}`, ticket);
            dispatch({
                type: MODIFICAR_TICKETS,
                payload: ticket
            })
            handleUpdate();

        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Se ha producido un error",
                icon: "error",
                confirmButtonText: "Aceptar"

            })
        }
    }

    const handleDelete = () => {

        Swal.fire({
                
            title: "Confirmar",
            text: "Seguro que desea eliminar el ticket?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: '#d33',
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if(result.value){
                Swal.fire(
                    'Eliminado',
                    'El ticket se ha eliminado correctamente',
                    'success'
                )
            }
        })

    }

    const eliminarTickets = async (id) => {

        try {
            await clienteAxios.delete(`/api/tickets/${id}`);

            dispatch({
                type: ELIMINAR_TICKETS,
                payload: id
            })

            handleDelete()
  
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Se ha producido un error",
                icon: "error",
                confirmButtonText: "Aceptar"

            })
        }
    }



    return (
        <TicketContext.Provider
            value={{
                //State
                tickets: state.tickets,
                //funciones
                obtenerTickets,
                agregarTicket,
                modificarTicket,
                eliminarTickets

            }}
        >
            {props.children}
        </TicketContext.Provider>
    )
}

export default TicketState;
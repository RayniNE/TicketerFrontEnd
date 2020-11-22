import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import ClienteContext from './clienteContext';
import ClienteReducer from './clienteReducer';

import { 
OBTENER_CLIENTES,
} from '../../types';

const PrioridadState = (props) => {
    
    const initialState = {
        clientes: [],

    };

    //Se crea el dispatch y el state.
    const [state, dispatch] = useReducer(ClienteReducer, initialState);

    const obtenerClientes = async () => {

        try {
            const resultado = await clienteAxios.get("/api/clientes");
            dispatch({
                type: OBTENER_CLIENTES,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
        
    }


    return (
        <ClienteContext.Provider
            value={{
                //State
                clientes: state.clientes,
                //funciones
                obtenerClientes,

            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )
}

export default PrioridadState;
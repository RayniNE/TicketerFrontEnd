import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import EstadoContext from './estadoContext';
import EstadoReducer from './estadoReducer';

import { 
OBTENER_ESTADO,
} from '../../types';

const PrioridadState = (props) => {
    
    const initialState = {
        estados: [],

    };

    //Se crea el dispatch y el state.
    const [state, dispatch] = useReducer(EstadoReducer, initialState);

    const obtenerEstados = async () => {

        try {
            const resultado = await clienteAxios.get("/api/status");
            console.log(resultado);
            dispatch({
                type: OBTENER_ESTADO,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
        
    }


    return (
        <EstadoContext.Provider
            value={{
                //State
                estados: state.estados,
                //funciones
                obtenerEstados,

            }}
        >
            {props.children}
        </EstadoContext.Provider>
    )
}

export default PrioridadState;
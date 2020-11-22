import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import PrioridadContext from './prioridadContext';
import PrioridadReducer from './prioridadReducer';

import { 
OBTENER_PRIORIDAD,
} from '../../types';

const PrioridadState = (props) => {
    
    const initialState = {
        prioridades: [],

    };

    //Se crea el dispatch y el state.
    const [state, dispatch] = useReducer(PrioridadReducer, initialState);
    let errorOcurrido = "";

    const obtenerPrioridades = async () => {

        try {
            const resultado = await clienteAxios.get("/api/prioridad");
            dispatch({
                type: OBTENER_PRIORIDAD,
                payload: resultado.data
            })
        } catch (error) {
            errorOcurrido = error;
        }
        
    }


    return (
        <PrioridadContext.Provider
            value={{
                //State
                prioridades: state.prioridades,
                //funciones
                obtenerPrioridades,

            }}
        >
            {props.children}
        </PrioridadContext.Provider>
    )
}

export default PrioridadState;
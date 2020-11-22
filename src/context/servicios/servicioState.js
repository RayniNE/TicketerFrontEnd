import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import ServicioContext from './servicioContext';
import ServicioReducer from './servicioReducer';
import Swal from 'sweetalert2';

import { 
OBTENER_SERVICIOS,
} from '../../types';

const UserState = (props) => {
    
    const initialState = {
        servicios: [],

    };

    //Se crea el dispatch y el state.
    const [state, dispatch] = useReducer(ServicioReducer, initialState);

    const obtenerServicios = async () => {

        try {
            const resultado = await clienteAxios.get("/api/servicios");
            console.log(resultado);
            dispatch({
                type: OBTENER_SERVICIOS,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
        
    }


    return (
        <ServicioContext.Provider
            value={{
                //State
                servicios: state.servicios,
                //funciones
                obtenerServicios,

            }}
        >
            {props.children}
        </ServicioContext.Provider>
    )
}

export default UserState;
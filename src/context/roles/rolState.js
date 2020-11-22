import React, { useReducer, useState } from 'react';
import clienteAxios from '../../config/axios';
import RolContext from './rolContext';
import RolReducer from './rolReducer';

import { 
    OBTENER_ROLES,
} from '../../types';

const UserState = (props) => {
    
    const initialState = {
        roles: [],

    };

    //Se crea el dispatch y el state.
    const [state, dispatch] = useReducer(RolReducer, initialState);

    const obtenerRoles = async () => {

        try {
            const resultado = await clienteAxios.get("/api/roles");
            dispatch({
                type: OBTENER_ROLES,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    

    return (
        <RolContext.Provider
            value={{
                //State
                roles: state.roles,
                //funciones
                obtenerRoles
            }}
        >
            {props.children}
        </RolContext.Provider>
    )
}

export default UserState;
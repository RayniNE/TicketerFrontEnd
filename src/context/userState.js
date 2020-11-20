import React, { useReducer, useState } from 'react';
import clienteAxios from '../config/axios';
import UserContext from './userContext';
import UserReducer from './userReducer';

import { 
    OBTENER_USUARIOS,
    CREAR_USUARIOS,
    MODIFICAR_USUARIOS,
    ELIMINAR_USUARIOS,
    OBTENER_TICKETS,
    CREAR_TICKETS,
    MODIFICAR_TICKETS,
    ELIMINAR_TICKETS
} from '../types';

const UserState = (props) => {
    
    const initialState = {
        usuarios: [],
        isAuth: false

    };

    //Se crea el dispatch y el state.
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const obtenerUsuarios = async () => {

        try {
            const resultado = await clienteAxios.get("/api/usuarios");
            dispatch({
                type: OBTENER_USUARIOS,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <UserContext.Provider
            value={{
                //State
                usuarios: state.usuarios,
                //funciones
                obtenerUsuarios,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
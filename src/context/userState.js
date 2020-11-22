import React, { useReducer } from 'react';
import clienteAxios from '../config/axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import Swal from 'sweetalert2';
import axios from 'axios';

import { 
    USUARIO_LOGUEADO,
    OBTENER_USUARIOS,
    CREAR_USUARIOS,
    MODIFICAR_USUARIOS,
    ELIMINAR_USUARIOS,
} from '../types';

const UserState = (props) => {
    
    const initialState = {
        usuarios: [],
        currentUser: [],
        isAuth: false

    };

    //Se crea el dispatch y el state.
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const iniciarSesion = async (currentUser) => {

        const usuario = currentUser.nombreUsuario;
        const contrasena = currentUser.contrasena;

        try {
            const resultado = await clienteAxios.get("/api/usuarios/check", {params: {
                currentUser
            }})
            dispatch({
                type: USUARIO_LOGUEADO,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Se ha producido un error",
                icon: "warning",
                confirmButtonText: "Aceptar"

            })
        }
    }


    const obtenerUsuarios = async () => {

        try {
            const resultado = await clienteAxios.get("/api/usuarios");
            dispatch({
                type: OBTENER_USUARIOS,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Se ha producido un error",
                icon: error,
                confirmButtonText: "Aceptar"

            })
        }
        
    }

    const handleCreate = () => {

        Swal.fire({
                
            title: "Se ha agregado con exito",
            text: "Se ha agregado con exito el usuario",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
        })

    }

    const agregarUsuario = async (usuario) => {

        try {
            const resultado = await clienteAxios.post("/api/usuarios", usuario);
            dispatch({
                type: CREAR_USUARIOS,
                payload: resultado.data
            })
            handleCreate();
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Se ha producido un error",
                icon: error,
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

    const modificarUsuario = async (usuario, id) => {
        try {
            await clienteAxios.put(`/api/usuarios/${id}`, usuario);
            dispatch({
                type: MODIFICAR_USUARIOS,
                payload: usuario
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

    const handleDelete = (id) => {

        Swal.fire({
                
            title: "Confirmar",
            text: "Seguro que desea eliminar al usuario?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: '#d33',
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if(result.value){
                eliminarUsuario(id)
            }
        })

    }

    const eliminarUsuario = async (id) => {

        try {
            await clienteAxios.delete(`/api/usuarios/${id}`);

            Swal.fire(
                'Eliminado',
                'El cliente se ha eliminado correctamente',
                'success'
            )

            dispatch({
                type: ELIMINAR_USUARIOS,
                payload: id
            })
  
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
        <UserContext.Provider
            value={{
                //State
                usuarios: state.usuarios,
                currentUser: state.currentUser,
                isAuth: state.isAuth,
                //funciones
                obtenerUsuarios,
                modificarUsuario,
                eliminarUsuario,
                handleDelete,
                agregarUsuario,
                iniciarSesion
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import ClienteContext from './clienteContext';
import ClienteReducer from './clienteReducer';

import Swal from 'sweetalert2';

import { 
OBTENER_CLIENTES,
CREAR_CLIENTES,
MODIFICAR_CLIENTES,
ELIMINAR_CLIENTES
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
    const handleCreate = () => {

        Swal.fire({
                
            title: "Se ha agregado con exito",
            text: "Se ha agregado con exito el cliente",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
        })

    }

    const agregarCliente = async (cliente) => {

        try {
            const resultado = await clienteAxios.post("/api/clientes", cliente);
            dispatch({
                type: CREAR_CLIENTES,
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
            text: "Se ha modificado con exito el cliente",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
        })

    }

    const modificarCliente = async (cliente, id) => {
        try {
            await clienteAxios.put(`/api/clientes/${id}`, cliente);
            dispatch({
                type: MODIFICAR_CLIENTES,
                payload: cliente
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
            text: "Seguro que desea eliminar el cliente?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: '#d33',
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if(result.value){
                eliminarCliente(id);
            }
        })
    }

    const eliminarCliente = async (id) => {


        try {
            await clienteAxios.delete(`/api/clientes/${id}`);

            
            Swal.fire(
                'Eliminado',
                'El cliente se ha eliminado correctamente',
                'success'
            )

            dispatch({
                type: ELIMINAR_CLIENTES,
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
        <ClienteContext.Provider
            value={{
                //State
                clientes: state.clientes,
                //funciones
                obtenerClientes,
                agregarCliente,
                modificarCliente,
                eliminarCliente,
                handleDelete
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )
}

export default PrioridadState;
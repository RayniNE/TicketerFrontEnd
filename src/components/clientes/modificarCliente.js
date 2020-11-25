import React, { useState, useEffect, useContext } from 'react';
import Layout from '../layout/Layout';
import { useLocation, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import ClienteContext from '../../context/clientes/clienteContext';
import Boton from '../UI/boton';
import Swal from 'sweetalert2';

const Contenedor = styled.div`

    display: flex;
    margin-left: 125px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    div{
        margin-left: 50px;
        margin-right: 200px;
        margin-bottom: 50px;

        input{
            border: none;
            border-bottom: 1px solid #707070;
            height: 30px;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
        }

        h3{
            font-size: 20px;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
        }
    }

    
    select{
        width: 200px;
        height: 30px;
    }

`;

const Titulo = styled.h1`

    /* position: absolute;
    right: 0;
    left: 0; */

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    /* margin-left: 50px;
    margin-top: 20px; */
    text-align: center;
`;


const ModificarCliente = () => {

    const clienteContext = useContext(ClienteContext);
    const { modificarCliente } = clienteContext;

    const history = useHistory();
    const cliente = useLocation().state;

    const [modifiedCliente, setModifiedCliente] = useState({

        nombre: '',
        apellido: '',
        nacimiento: ''.split('T')[0].toString()

    });

    const { nombre, apellido, nacimiento } = modifiedCliente;

    useEffect(() => { 
        const obtenerDatos = () => {
            setModifiedCliente({
                nombre: cliente.nombre,
                apellido: cliente.apellido,
                nacimiento: cliente.nacimiento.split('T')[0].toString()
            })
        }

        obtenerDatos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



                
    const onChange = (e) => {
        setModifiedCliente({
            ...modifiedCliente,
            [e.target.name] : e.target.value,

        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(nombre.trim() === "" || apellido.trim() === ""  || nacimiento.trim() === ""){
            Swal.fire({
                title: "Error",
                text: "Por favor introduzca todos los campos",
                icon: "warning",
                confirmButtonText: "Aceptar"

            })
            return;
        }

        modificarCliente(modifiedCliente, cliente.id);
        history.push('/clientes');

    }

    


    return ( 
        <Layout>
            <Titulo> Modificar cliente </Titulo>

                <form
                    onSubmit={onSubmit}
                >
                    <Contenedor>
                        <div>
                            <h3> Nombre </h3>
                            <input 
                                type="text"
                                name="nombre"
                                value={nombre}
                                onChange={onChange}
                            />
                        </div>

                        <div>
                            <h3> Apellido </h3>
                            <input 
                                type="text"
                                name="apellido"
                                value={apellido}
                                onChange={onChange}
                            />
                        </div>
                    </Contenedor>

                    <Contenedor>
                        
                    <div>
                        <h3> Fecha nacimiento </h3>
                            <input
                                type="date"
                                onChange={onChange}
                                name="nacimiento"
                                value={nacimiento}
                                />


                                
                        </div>

                    </Contenedor>

                        <Contenedor>
                        <div>
                            <Boton
                                type="submit"
                            > Modificar </Boton>
                        </div>

                        </Contenedor>
                </form>

            



        </Layout>
     );
}
 
export default ModificarCliente;
import React, { useState, useContext } from 'react';
import Layout from '../layout/Layout';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import ClienteContext from '../../context/clientes/clienteContext';
import Boton from '../UI/boton';
import Swal from 'sweetalert2';

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

    select, input{
        width: 200px;
        height: 30px;
    }

`;

const Filter = styled.select`
    text-align: center;
    /* font-size: 10px; */
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
    /* appearance: none; */
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    width: 200;

    select{
        width: 200px;
    }

`;

const CrearCliente = () => {


    const clienteContext = useContext(ClienteContext);
    const { agregarCliente } = clienteContext;

    const history = useHistory();

    const [newCliente, setNewCliente] = useState({

        nombre: '',
        apellido: '',
        nacimiento: ''

    });

    const { nombre, apellido, nacimiento } = newCliente;

                
    const onChange = (e) => {
        setNewCliente({
            ...newCliente,
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

        agregarCliente(newCliente);
        history.push('/clientes');

    }


    return ( 
        <Layout>
            <Titulo> Crear cliente </Titulo>

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
                        > Agregar </Boton>
                    </div>

                    </Contenedor>
            </form>

            



        </Layout>
     );
}
 
export default CrearCliente;
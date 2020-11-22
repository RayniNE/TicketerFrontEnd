import React, { useState, useEffect, useContext } from 'react';
import Layout from '../layout/Layout';
import { useLocation, useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import RolContext from '../../context/roles/rolContext';
import UserContext from '../../context/userContext';
import Boton from '..//UI/boton';

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
`;

const ModificarUsuario = () => {

    const rolContext = useContext(RolContext);
    const { roles, obtenerRoles } = rolContext;

    const userContext = useContext(UserContext);
    const { modificarUsuario } = userContext;

    const [usuarioEdit, setUsuarioEdit] = useState({

        nombre: '',
        apellido: '',
        nombreUsuario: '',
        contrasena: '',
        rolId: ''

    });


    const history = useHistory();
    const user = useLocation().state;


    const { nombre, apellido, contrasena, nombreUsuario, rolId } = usuarioEdit;

    useEffect(() => {

        const obtenerInformacion = () => {
            obtenerRoles();
            setUsuarioEdit({
                nombre: user.nombre,
                apellido: user.apellido,
                nombreUsuario: user.nombreUsuario,
                contrasena: user.contrasena,
                rolId: user.rol.id
            });
        }
            
        obtenerInformacion();
            // eslint-disable-next-line
    }, []);

                
    const onChange = (e) => {
        setUsuarioEdit({
            ...usuarioEdit,
            [e.target.name] : e.target.value,

        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(nombre.trim() === "" || apellido.trim() === "" || nombreUsuario.trim() === "" || contrasena.trim() === "" || rolId < 1){
 
            console.log("Error al modificar");
        }
        modificarUsuario(usuarioEdit, user.id);
        history.push('/usuarios');

    }

    


    return ( 
        <Layout>
            <Titulo> Modificar usuario </Titulo>

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
                        <h3> Usuario </h3>
                        <input 
                            type="text"
                            name="usuario"
                            value={nombreUsuario}
                            onChange={onChange}
                        />
                    </div>

                    <div>
                        <h3> Contraseña </h3>
                        <input 
                            type="text"
                            name="contrasena"
                            value={contrasena}
                            onChange={onChange}
                        />
                    </div>
                </Contenedor>

                                
                <Contenedor>
                    <div>
                    <h3> Rol </h3>
                        <Filter
                                onChange={onChange}
                                name="rolId"
                                value={rolId}
                                // value={filtrado}
                            >
                                {roles.length > 0 ? roles.map((rol) => (

                                    <option value={rol.id}> {rol.nombre} </option>

                                ))  : (
                                    <option> No hay opciones </option>
                                )
                                
                                    

                                }

                            </Filter>
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
 
export default ModificarUsuario;
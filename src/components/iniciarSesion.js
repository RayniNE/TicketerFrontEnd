import React, { useEffect ,useState, useContext } from 'react';
// import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Formulario, Campo } from './UI/formulario';
import Boton from './UI/boton';
import UserContext from '../context/userContext';
import { useHistory } from 'react-router-dom';


import Logo from '../images/Logo.png';
import bandera from '../images/Loguito.png';

const Titulo = styled.h1`
    text-align: center;
    margin-top: 5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`;

const Center = styled.div`

    display: block;
    text-align: center;

`;

const Contenedor = styled.div`

    display: block;
    background: #f0f0f8;

    .logo{
        left: 0;
        width: 100px;
    }

    .bandera{
        float: right;
        margin-right: 15px;
        width: 90px;
    }

`;



const IniciarSesion = () => {

    const userContext = useContext(UserContext);
    const { iniciarSesion, isAuth } = userContext;
    
    const [currentUser, setCurrentUser] = useState({
        nombreUsuario: '',
        contrasena: ''
    });

    const history = useHistory();

    const { nombreUsuario, contrasena } = currentUser;

    const onChange = (e) => {

        setCurrentUser({
            ...currentUser,
            [e.target.name] : e.target.value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion(currentUser);
    }
    
    useEffect(() => {

        const redirect = () => {
            if(isAuth){
                history.push('/tickets');
            }
        }
        redirect();
    })
    

    return ( 
        <Contenedor>

                <img className="logo" src={Logo} alt="logo"/> 

                <img className="bandera" src={bandera} alt="bandera"/>

                <Titulo> Iniciar Sesión </Titulo>

            <Formulario
                onSubmit={onSubmit}
            >  

                <Campo>
                    <label for="nombreUsuario"> Usuario </label>
                    <input
                        type="text"
                        placeholder="Ingrese el usuario"
                        name="nombreUsuario"
                        value={nombreUsuario}
                        onChange={onChange}
                />
                </Campo>

                <Campo>
                    <label for="contrasena"> Contraseña </label>
                    <input
                        type="password"
                        placeholder="Ingrese la contraseña"
                        name="contrasena"
                        value={contrasena}
                        onChange={onChange}
                />
                </Campo>

                <Center>
                    <Boton
                        type="submit"
                    > Iniciar Sesión </Boton>
                </Center>
                
            </Formulario>


        </Contenedor>

     );
}
 
export default IniciarSesion;
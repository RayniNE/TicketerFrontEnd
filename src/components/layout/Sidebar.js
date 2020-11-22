import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import Logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext';


const Imagen = styled.img`
    height: 138px;
`;

const SideNav = styled.div`
    position: absolute;
    display: inline-block;
    margin: 0;
    height: 100%;
    width: 16%;
    /* z-index: 0; */
    /* top: 3.4rem; */
    background-color: #FFF;
    overflow-x: hidden;
    /* padding-top: 10px; */
    -webkit-box-shadow: 3px 10px 5px 0px rgba(0,0,0,0.36);
    -moz-box-shadow: 3px 10px 5px 0px rgba(0,0,0,0.36);
    box-shadow: 3px 10px 5px 0px rgba(0,0,0,0.36);

`;

const Boton = styled.button`

        width: 100%;
        background: #FFFFFF;
        border: none;
        height: 50px;
        margin-bottom: 15px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 15px;

        :hover{
            background: #E3E3F8;
            cursor: pointer;
        }

        :focus{
            background: #E3E3F8;
        }
`;

const Sidebar = () => {

    const userContext = useContext(UserContext);
    const { currentUser, cerrarSesion } = userContext;

    console.log(currentUser);

    return ( 

        <aside>

            <SideNav>
                <Imagen
                    src={Logo}
                    alt="logo"/>

                    <Link  to={"/tickets"}>
                        <Boton className="btn" > Tickets </Boton>
                    </Link>

                    {currentUser.rolId === 1 ? (
                        <Link  to={"/usuarios"}>
                            <Boton className="btn" > Usuarios </Boton>
                        </Link>
                        ) :  null  }
{/* 
                        <Link  to={"/usuarios"}>
                            <Boton className="btn" > Usuarios </Boton>
                        </Link> */}

                    <Link  to={"/clientes"}>
                        <Boton className="btn" > Clientes </Boton>
                    </Link>

                    <Boton className="btn" onClick={() => cerrarSesion()}> Cerrar sesión </Boton>
                    
                </SideNav>

        </aside>
     );
}
 
export default Sidebar;
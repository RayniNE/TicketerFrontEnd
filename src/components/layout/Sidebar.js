import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import Logo from '../../images/logo.png';
import Facebook from '../../images/facebook.png';
import Twitter from '../../images/twitter.png';
import Instagram from '../../images/instagram.png';
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

const ContenedorRedesSociales = styled.div`

        position: absolute;
        bottom: 0;
        margin-bottom: 30px;

        img:first-of-type{
            margin-left: 35px;
        }

        p{
            margin-left: 100px;
        }

        a{
            :hover{
                cursor: pointer;
            }
        }


`;

const RedSocial = styled.img`
    width: 35px;
    margin-left: 20px;
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

                    <ContenedorRedesSociales>
                        <p> Redes </p>

                        <a target="_blank" href="https://www.facebook.com/ticketer.magnu.1"> 
                            <RedSocial src={Facebook} alt="facebook" />
                        </a>
                        
                        <a target="_blank" href="https://twitter.com/Ticketer12">
                            <RedSocial src={Twitter} alt="twitter"/>
                        </a>

                        <a target="_blank" href="https://www.instagram.com/ticketer_magnu/">
                            <RedSocial src={Instagram} alt="instagram"/>
                        </a>


                    </ContenedorRedesSociales>

                    
                </SideNav>

        </aside>
     );
}
 
export default Sidebar;
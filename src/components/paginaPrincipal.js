import React from 'react';
import { Link } from 'react-router-dom'
import Footer from './layout/Footer'

import styled from '@emotion/styled';
import callcenter from '../images/callcenter.jpg';
import logo from '../images/logo.png';
import Loguito from '../images/frontpagelogo.png';
import Prueba1 from '../images/prueba_1.png';
import Prueba2 from '../images/prueba_2.png';
import Prueba4 from '../images/Prueba_4.png';



const ContenedorGlobal = styled.div`

    background-color: #F0F0F8;

    h3{
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    p{
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }


`;

const PrimeraInformacion = styled.div`
    img{
        float: left;
    }

`;

const SegundaInformacion = styled.div`
    img{
        float: right;
    }

`;
const TerceraInformacion = styled.div`
    img{
        float: left;
    }

`;

const PrimerParrafo = styled.p`

        margin-top: 150px;
        font-size: 20px;
        overflow: hidden;
        max-width: 500px;
        text-align: justify;
        padding-left: 80px;
        line-height: 30px;

`;
const SegundoParrafo = styled.p`

        margin-top: 250px;
        font-size: 20px;
        overflow: hidden;
        max-width: 500px;
        text-align: justify;
        padding-left: 80px;
        line-height: 30px;

`;
const TercerParrafo = styled.p`

        margin-top: 250px;
        font-size: 20px;
        overflow: hidden;
        max-width: 500px;
        text-align: justify;
        padding-left: 80px;
        line-height: 30px;
        margin-bottom: 140px;

`;



const BackgroundImage = styled.img`

    height: 400px;
    margin-left: 80px;
    margin-top: 60px;
`;

const BackgroundImageTwo = styled.img`

    height: 400px;
    margin-right: 80px;
    margin-top: 60px;
`;

const BackgroundImageThree = styled.img`

    height: 400px;
    margin-left: 80px;
    margin-top: 60px;
`;

const Image = styled.img`

    height: 100px;

    :hover{
        cursor: pointer;
    }

`;

const LoguitoImage = styled.img`

    height: 75px;
    margin-left: 150px;

`;

const Contenedor = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #24252A;

`;

const Header = styled.header`
    li, a, button {
        font-size: 16px;
        color: #edf0f1;
        text-decoration: none;
        background-color: #24252A;
    }

    button{
        outline: none;
        border: none;
    }

    display: flex;
    justify-content: space-between;

    .nav_links{
        list-style: none;
        margin-top: 30px;
    }

    .nav_links li{
        display: inline-block;
        padding: 0px 20px;
    }

    .nav_links li a{
        transition: all 0.3s ease 0s;
    }

    .nav_links li a:hover{
        background: #0088a9;
    }
`;

const PaginaPrincipal = () => {

    return ( 
        
        <ContenedorGlobal>
            
            <Contenedor>

                <Header>

                    <Image src={logo}/>

                    <nav>

                        <LoguitoImage src={Loguito}/>
                        
                        <ul className="nav_links"> 
                            <li>
                                <Link to="/">
                                    <a> Inicio </a>
                                </Link> 
                            </li>

                            
                            <li>
                                <Link to="/iniciarsesion"> 
                                     <a> Iniciar sesión </a> 
                                </Link>
                            </li>
                            <li> <a href="#bottom"> Contacto </a>  </li>
                        </ul>

                    </nav>

                    </Header>

                </Contenedor>

                                    
                <h3> Te introducimos el nuevo sistema de tickets que revolucionara el mercado </h3>

                <PrimeraInformacion>

                    <BackgroundImage src={callcenter}/>
                </PrimeraInformacion>

                <PrimerParrafo className="primerParrafo">
                     El mejor sistema de tickets de todo el caribe, siendo utilizado por grandes empresas como Claro, Altice gracias a su facilidad y su efectividad.
                    Un servicio premium y de calidad donde todos nuestros clientes resultan satisfechos
                </PrimerParrafo>

                <SegundaInformacion>

                    <BackgroundImageTwo src={Prueba1}/>
                </SegundaInformacion>

                <SegundoParrafo className="segundoParrafo">

                    Con una interfaz fácil de utilizar con una curva de aprendizaje baja, ayudando a la compañía a operar más rapida y eficiente. Donde podras ver la información
                    del cliente, ticket o usuario y podras modificar y eliminar, o simplemente crear un cliente nuevo

                </SegundoParrafo>

                <TerceraInformacion>

                    <BackgroundImageThree src={Prueba4}/>
                </TerceraInformacion>

                <TercerParrafo className="tercerParrafo"> Con nuestro sistema crear clientes, tickets o usuarios nunca habia sido tan fácil! con nuestra interfaz podras crearlos en
                cuestión de segundos, incrementando la productividad de la empresa en un 45%, aumentando la clientela y la satisfacción de los clientes de la compañía
                </TercerParrafo>


                
                <div id="bottom">
                    <Footer/>
                </div>


        </ContenedorGlobal>
     );
}
 
export default PaginaPrincipal;
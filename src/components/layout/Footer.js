import React from 'react';
import styled from '@emotion/styled';
import DGA from '../../images/dga-logo.jpeg';
import DGII from '../../images/dgii.svg';
import presidencia from '../../images/presidencia.jpg';
import logo from '../../images/Logo.png';
import loguito from '../../images/Loguito.png';

const Contenedor = styled.div`

    width: 100%;
    background-color: #f2f2f2;
`;

const ContenedorImagenes = styled.div`
    text-align: center;
    float: right;
    background-color: #FFFFFF;
    width: 100%;
    height: 150px;
    padding-top: 30px;

        
    img:last-of-type{
        margin-right: -50px;
    }

`;

const Imagen = styled.img`
    width: 100px;
    margin-right: 300px;
`;

const ContenedorImagenesLogos = styled.div`
    margin-top: 20px;
    text-align: center;
    float: right;
    width: 100%;
    img:last-of-type{
        margin-right: 50px;
    }
    margin-bottom: 20px;
`;

const ImagenLogos = styled.img`

    width: 100px;
    margin-left: 100px;

`;

const ContenedorInformacion = styled.div`
    display: block;
    text-align: center;
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400px;
        margin-left: 50px;
        line-height: 3px;
    }
`;

const Footer = () => {


    return ( 
        <Contenedor>
            <ContenedorImagenes>
                <Imagen src={DGA} alt="dga"/>
                <Imagen src={DGII} alt="dgii"/>
                <Imagen src={presidencia} alt="dga"/>
            </ContenedorImagenes>

            <ContenedorImagenesLogos>
                <ImagenLogos src={loguito}/>
                <ImagenLogos src={logo}/>
            </ContenedorImagenesLogos>

            <ContenedorInformacion>
                <p> Ticketer </p>
                <p> República de Colombia </p>
                <p> Santo Domingo, Distrito Nacional, R.D </p>
                <p> TEL: 829-721-7878 | INFO@TICKETER.com </p>
                <p> TERMINOS DE USO | POLITICA DE SEGURIDAD | </p>
            </ContenedorInformacion>

        </Contenedor>

     );
}
 
export default Footer;
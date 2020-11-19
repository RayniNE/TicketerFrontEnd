import React from 'react';
import styled from '@emotion/styled';

const ContenedorPadre = styled.header`
    background-color: #FFF;
    right: 0;
    width: 84%;
    height: 90px;
    float: right;
    -webkit-box-shadow: 10px 0px 16px -7px rgba(0,0,0,0.36);
    -moz-box-shadow: 10px 0px 16px -7px rgba(0,0,0,0.36);
    box-shadow: 10px 0px 16px -7px rgba(0,0,0,0.36);
`;

const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Titulo = styled.h1`
    margin-left: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`;


const Header = () => {

    return ( 
        <ContenedorPadre>
                <Contenedor>
                    <Titulo> Ticketer </Titulo>
                </Contenedor>

        </ContenedorPadre>
     );
}
 
export default Header;
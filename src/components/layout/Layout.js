import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Sidebar from './Sidebar';
import Header from './Header';



const Contenedor = styled(Fragment)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

`;

const Body = styled.div`

    float: right;
    width: 84%; 

`;

const Layout = (props) => {

    return ( 
        <Contenedor>

            
            <div className="header">
                <Header/>
            </div>

            <div className="sidebar">
                <Sidebar/>
            </div>
            
            <Body className="body">
                {props.children}
            </Body>
            

        </Contenedor>
     );
}
 
export default Layout;
import React from 'react';
import styled from '@emotion/styled';
import logo from '../../images/logo.png';

const Imagen = styled.img`
    height: 138px;
`;

const SideNav = styled.div`
    position: absolute;
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

const Sidebar = () => {

    return ( 
        <aside>

            <SideNav>
                <Imagen
                src={logo}
                alt="logo"/>
            </SideNav>

        </aside>
     );
}
 
export default Sidebar;
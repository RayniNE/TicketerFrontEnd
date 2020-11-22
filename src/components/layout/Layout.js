import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Sidebar from './Sidebar';
import Header from './Header';


const Body = styled.div`

    float: right;
    width: 84%; 
    margin-left: 50px;

`;

const Layout = (props) => {

    return ( 
        <Fragment>

            
            <div className="header">
                <Header/>
            </div>

            <div className="sidebar">
                <Sidebar/>
            </div>
            
            <Body className="body">
                {props.children}
            </Body>
            

        </Fragment>
     );
}
 
export default Layout;
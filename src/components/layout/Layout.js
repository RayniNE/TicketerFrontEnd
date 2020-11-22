import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Sidebar from './Sidebar';
import Header from './Header';
// import Footer from './Footer';


const Body = styled.div`

    float: right;
    width: 84%; 
    margin-left: 50px;

`;

const SideBar = styled.div`
    height: 100%;
`;

const Layout = (props) => {

    return ( 
        <Fragment>

            
            <div className="header">
                <Header/>
            </div>
            <SideBar>
                <Sidebar/>
            </SideBar>

            
            <Body className="body">
                {props.children}
                {/* <Footer/> */}
            </Body>


        </Fragment>
     );
}
 
export default Layout;
import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../context/userContext';

const RutaPrivada = ({component: Component, ...props}) => {

    const userContext = useContext(UserContext);
    const { isAuth } = userContext;

    return ( 
        <Route
        
            {...props}
            render={(props) => 
                !isAuth ? (
                    <Redirect to="/iniciarsesion"/>
                ) : (
                    <Component {...props} />
                )
            }
        />
     );
};
 
export default RutaPrivada;
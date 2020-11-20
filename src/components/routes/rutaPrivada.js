import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const RutaPrivada = ({component: Component, ...props}) => {

    let isAuthenticated = true;

    return ( 
        <Route
        
            {...props}
            render={(props) => 
                !isAuthenticated ? (
                    <Redirect to="/"/>
                ) : (
                    <Component {...props} />
                )
            }
        />
     );
};
 
export default RutaPrivada;
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../connector/auth';



const ClientRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() && isAuthenticated().user.role === 'C' ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default ClientRoute;
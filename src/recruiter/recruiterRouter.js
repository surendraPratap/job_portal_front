import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../connector/auth';



const RecruiterRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() && isAuthenticated().user.role === 'R' ? (
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

export default RecruiterRoute;
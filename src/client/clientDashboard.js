import React from 'react'
import { isAuthenticated } from '../connector/auth';
import Menu from '../core/Menu'

const ClientDashboard = () => {


    const { user } = isAuthenticated();

    const { name, lastname, email, company, userinfo } = user;

    return (
        <div>
            <Menu />
            <div className="container-fluid">
                <div className="row bg-info p-4">
                    <div className="col-md-6 offset-sm-3" >


                        <div className="row p-4">

                            <div className="col-2">
                                <label>Name </label>
                            </div>
                            <div className="col-10">
                                <label>: {name}</label>
                            </div>
                            <div className="col-2">
                                <label>LastName</label>
                            </div>
                            <div className="col-10">
                                <label>: {lastname}</label>
                            </div>
                            <div className="col-2">
                                <label>Email Id</label>
                            </div>
                            <div className="col-10">
                                <label>: {email}</label>
                            </div>
                            <div className="col-2">
                                <label>Company</label>
                            </div>
                            <div className="col-10">
                                <label>: {company}</label>
                            </div>
                            <div className="col-2">
                                <label>About</label>
                            </div>
                            <div className="col-10">
                                <label>: {userinfo}</label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientDashboard;
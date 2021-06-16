import React, { useState } from 'react'
import { isAuthenticated } from '../connector/auth';
import Menu from '../core/Menu';

import { saveRecruiter } from './apiHelper/admin'

const CreateRecruiter = () => {

    const [values, setValues] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        company: "",
        userinfo: "",
        error: "",
        success: false,
        successMessage: ""
    })
    const clearState = () => {
        setValues({
            name: "",
            lastname: "",
            email: "",
            password: "",
            company: "",
            userinfo: "",
            error: "",
            success: false,
            successMessage: ""
        })

    }

    const { name, lastname, email, password, company, userinfo, success, successMessage, error } = values;

    const handleValue = items => event => {
        setValues({ ...values, error: false, [items]: event.target.value })
    }
    const errorPop = () => {
        return (
            <div className="row bg-info">
                <div className="col-md-6 offset-sm-3 text-left">
                    < div style={{ display: error ? "" : "none" }
                    }>
                        <p style={{ color: '#ee1100' }} className="p-4 text-center">{error}</p>
                    </div >
                </div></div>
        )
    }

    const successPop = () => {
        return (

            <div className="row bg-info">
                <div className="col-md-6 offset-sm-3 text-left">
                    < div style={{ display: success ? "" : "none" }

                    }>
                        {/* {setTimeout(() => { */}
                        <p style={{ color: '#2ecc72' }} className="p-4 text-center">{successMessage}</p>
                        {/* }, 3000) */}
                        {/* } */}
                    </div >
                </div></div>
        )
    }


    const onSubmitForm = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false })
        const { user, tokens } = isAuthenticated()

        saveRecruiter(user._id, tokens, { name, lastname, email, password, company, userinfo }).then(data => {


            if (data.ERROR) {
                setValues({ ...values, error: data.ERROR, success: false })
            } else {
                setValues({ ...values, error: false, success: true, successMessage: data.SUCCESS })

                setTimeout(() => {
                    clearState()
                }, 3000)

            }
        })
            .catch(error => {
                console.log(error)
            })
    }
    const recruiterform = () => {

        return (
            <div>


                <div className="row bg-info p-4">
                    <div className="col-md-6 offset-sm-3 text-left">

                        <form>
                            <div className="form-group">
                                <label className="text-light">Name</label>
                                <input onChange={handleValue("name")} type="text" value={name} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-light">Lastname</label>
                                <input onChange={handleValue("lastname")} type="text" value={lastname} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-light">Email</label>
                                <input onChange={handleValue("email")} type="email" value={email} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-light">Company</label>
                                <input onChange={handleValue("company")} type="text" value={company} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-light">About</label>
                                <input onChange={handleValue("userinfo")} type="text" value={userinfo} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-light">Password</label>
                                <input onChange={handleValue("password")} type="password" value={password} className="form-control" />
                            </div>
                            <button className="btn btn-success btn-block" onClick={onSubmitForm} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <div  >
            <Menu />
            {errorPop()}
            {successPop()}
            {recruiterform()}
            {/* <p>{JSON.stringify(values)}</p> */}
        </div>
    )
}
export default CreateRecruiter
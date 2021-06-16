import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../connector/auth';
// import { API } from '../backend'
import Base from '../core/Base'


const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        company: "",
        userinfo: "",
        error: "",
        success: false
    })
    const { name, lastname, email, password, company, userinfo, success, error } = values;
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
                        <p style={{ color: '#2ecc72' }} className="p-4 text-center">Registerd SuccessFully. Login  here <Link to="/signin" >Loginin</Link></p>
                    </div >
                </div></div>
        )
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false })
        signup({ name, lastname, email, password, company, userinfo }).then(data => {

            if (data.error) {
                setValues({ ...values, error: data.error, success: false })
            } else {
                setValues({ ...values, error: false, success: true })
            }
        })
            .catch(error => {
                console.log(error)
            })
    }
    const signupform = () => {

        return (
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
        )
    }
    return (
        <Base title="signup now" desription="">
            {errorPop()}
            {successPop()}
            {signupform()}
            {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
        </Base>
    )
}
export default Signup;
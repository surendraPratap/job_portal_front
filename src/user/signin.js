import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { signin, onauthentication, isAuthenticated } from '../connector/auth';
// import { API } from '../backend'
import Base from '../core/Base'


const Signup = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        success: false
    })
    const { email, password, success, error } = values;

    const { user } = isAuthenticated();


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


    const onSubmitForm = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false })
        signin({ email, password }).then(data => {

            if (data.EX_CODE) {
                setValues({ ...values, error: `${data.ERROR}`, success: false })
            } else {
                onauthentication(data, () => {
                    setValues({ ...values, error: false, success: true })
                })
            }
        })
            .catch(error => {
                console.log(error)
            })
    }

    const navigateOnSignin = () => {


        if (success) {

            if (user && user.role === "A") {

                return <Redirect to="/admin/dashboard" />
            }
            else if (user && user.role === "R") {
                return <Redirect to="/recruiter" />
            }
            else if (user && user.role === "C") {

                return <Redirect to="/client" />
            }
        }

    }
    const signupform = () => {

        return (

            <div className="row bg-info p-4">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>

                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input onChange={handleValue("email")} type="email" value={email} className="form-control" />
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
            {signupform()}
            {navigateOnSignin()}
        </Base>
    )
}
export default Signup;
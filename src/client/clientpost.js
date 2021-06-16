import React, { useState } from 'react'
import { isAuthenticated } from '../connector/auth'
import Menu from '../core/Menu'
import { createPost } from './apiHelper/clientapi'

const Clientpost = () => {


    const [values, setValues] = useState({
        company: "",
        yearofexperience: "",
        location: "",
        skills: "",
        companyDescription: "",
        salary: "",
        error: "",
        success: false,
        successMessage: ""
    })
    const clearState = () => {
        setValues({
            company: "",
            yearofexperience: "",
            location: "",
            skills: "",
            companyDescription: "",
            salary: "",
            error: "",
            success: false,
            successMessage: ""
        })

    }

    const { company, yearofexperience, location, skills, companyDescription, salary, success, successMessage, error } = values;

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

        createPost(user._id, tokens, { company, yearofexperience, location, skills, companyDescription, salary }).then(data => {


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
                                <label className="text-light">Company</label>
                                <input onChange={handleValue("company")} type="text" value={company} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-light">Year of Experience</label>
                                <input onChange={handleValue("yearofexperience")} type="text" value={yearofexperience} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-light">Location</label>
                                <input onChange={handleValue("location")} type="text" value={location} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-light">Required Skills</label>
                                <input onChange={handleValue("skills")} type="text" value={skills} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-light">Company Description</label>
                                <input onChange={handleValue("companyDescription")} type="text" value={companyDescription} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-light">Skills</label>
                                <input onChange={handleValue("salary")} type="text" value={salary} className="form-control" />
                            </div>
                            <button className="btn btn-success btn-block" onClick={onSubmitForm} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <div>
            <Menu />
            {errorPop()}
            {successPop()}
            {recruiterform()}
        </div >
    )
}
export default Clientpost;
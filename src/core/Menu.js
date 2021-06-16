import React, { Fragment } from "react";
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, signout } from "../connector/auth";
const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#2ecc72" }
    } else {
        return { color: "#d1d1d1" }
    }
}

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={currentTab(history, "/")} className="nav-link" to="/">
                    Home
        </Link>
            </li>


            {/* {isAuthenticated() && isAuthenticated().user.role === "A" &&
                <li className="nav-item">
                    <Link style={currentTab(history, "/admin")} className="nav-link" to="/admin">
                        Admin
        </Link>
                </li>
            } */}


            {!isAuthenticated() &&
                <Fragment>
                    <li style={{ float: "right" }} className="nav-item">
                        <Link style={currentTab(history, "/signup")} className="nav-link" to="/signup">
                            Signup</Link>

                    </li><li style={{ float: "right" }} className="nav-item">
                        <Link style={currentTab(history, "/signin")} className="nav-link" to="/signin">
                            Sign In
                  </Link>
                    </li>
                </Fragment>

            }
            {isAuthenticated() && isAuthenticated().user.role === "R" &&
                <Fragment>

                    <li className="nav-item">
                        <Link style={currentTab(history, "/recruiter")} className="nav-link" to="/recruiter">
                            About</Link>

                    </li><li className="nav-item">
                        <Link style={currentTab(history, "/recruiter/manage")} className="nav-link" to="/recruiter/manage">
                            Manage
                  </Link>
                    </li>

                </Fragment>
            }
            {isAuthenticated() && isAuthenticated().user.role === "C" &&
                <Fragment>
                    <li className="nav-item">
                        <Link style={currentTab(history, "/client")} className="nav-link" to="/client">
                            Client
                  </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, "/client/post")} className="nav-link" to="/client/post">
                            Create Post
                  </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, "/client/manage")} className="nav-link" to="/client/manage">
                            Manage
                  </Link>
                    </li>
                </Fragment>
            }
            {isAuthenticated() && isAuthenticated().user.role === "A" &&
                <Fragment>
                    <li className="nav-item">
                        <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                            About</Link>

                    </li><li className="nav-item">
                        <Link style={currentTab(history, "/admin/recruiter")} className="nav-link" to="/admin/recruiter">
                            Create Recruiter
                  </Link>
                    </li>
                    <li className="nav-item">
                        <Link style={currentTab(history, "/admin/recruiters")} className="nav-link" to="/admin/recruiters">
                            Manage
                  </Link>
                    </li>
                </Fragment>
            }
            {isAuthenticated() && <li className="nav-item">
                <span style={{ float: "right" }} className="nav-link text-warning" onClick={() => {
                    signout(() => {
                        history.push('/')
                    })
                }}
                >Sign out</span>

            </li>}

        </ul>
    </div >
);

export default withRouter(Menu);

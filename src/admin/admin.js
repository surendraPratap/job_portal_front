import React, { useState } from 'react'

import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Menu from '../core/Menu';
import { Link } from 'react-router-dom';



export default function Admin() {
    const [values, setValues] = useState({
        adminPanelName: "DashBoard"
    })
    const { adminPanelName } = values;

    const adminPanel = () => {
        if (adminPanelName === "dashboard") {
            return <Link to="/admin/dashboard" />
        }
        else if (adminPanelName === "Item1") {
            return <Link to='/admin/recruiter' />
        }
        else if (adminPanelName === "Item2") {
            return <Link to='/admin/recruiters' />
        }
        else if (adminPanelName === "Item3") {
            return <Link to='/admin/remove' />
        }
    }
    const onItemSlect = ({ itemId }) => {

        if (itemId === "dashboard") {
            setValues({ ...values, adminPanelName: itemId })
        } else if (itemId === "Item1") {
            setValues({ ...values, adminPanelName: itemId })
        }
        else if (itemId === "Item2") {
            setValues({ ...values, adminPanelName: itemId })
        }
        else if (itemId === "Item3") {
            setValues({ ...values, adminPanelName: itemId })
        }
        // adminPanel()
    }


    // useEffect(adminPanel, [])
    return (
        <div className="container-fluid">
            <Menu />


        </div>
    )
}

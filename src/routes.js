import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Signin from './user/signin'
import Signup from './user/signup'
import recruiterDashboard from './recruiter/recruiterDashboard'
import AdminRoute from './admin/adminRoute'
import RecruiterRoute from './recruiter/recruiterRouter'



import './styles.css'
import AdminDashboard from './admin/adminDashboard'
import CreateRecruiter from './admin/createRecruiter'
import AllRecruiter from './admin/allrecruiter'
import removerecruiter from './admin/removerecruiter'
import Managepost from './recruiter/managepost'

import ClientRoute from './client/clientRoute'
import Clientpost from './client/clientpost'
import ClientManage from './client/clientmanage'
import ClientDashboard from './client/clientDashboard'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/signin' component={Signin} />

                <ClientRoute exact path='/client' component={ClientDashboard} />
                <ClientRoute exact path='/client/post' component={Clientpost} />
                <ClientRoute exact path='/client/manage' component={ClientManage} />

                <RecruiterRoute exact path='/recruiter' component={recruiterDashboard} />
                <RecruiterRoute exact path='/recruiter/manage' component={Managepost} />

                {/* <AdminRoute exact path='/admin' component={Admin} /> */}
                <AdminRoute exact path='/admin/dashboard' component={AdminDashboard} />
                <AdminRoute exact path='/admin/recruiter' component={CreateRecruiter} />
                <AdminRoute exact path='/admin/recruiters' component={AllRecruiter} />
                <AdminRoute exact path='/admin/remove' component={removerecruiter} />



            </Switch>
        </BrowserRouter>
    )
}


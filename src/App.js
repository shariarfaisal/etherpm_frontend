import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import TokenListing from './pages/TokenListing'
import DashboardHome from './pages/dashboard/Home'
import DashboardConsumers from './pages/dashboard/Consumers'
import DashboardAdmins from './pages/dashboard/Admins'
import DashboardProfile from './pages/dashboard/Profile'
import DashboardConsumer from './pages/dashboard/Consumer'
import DashboardLogin from './pages/dashboard/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


let pages = [
  {id: 1,path: '/',component: Home},
  {id: 2,path: '/profile',component: Profile},
  {id: 3,path: '/tokenlisting',component: TokenListing},
  {id: 4,path: '/login',component: Login},
  {id: 5,path: '/register',component: Register},
  {id: 6,path: '/dashboard',component: DashboardHome},
  {id: 7,path: '/dashboard/admins',component: DashboardAdmins},
  {id: 7,path: '/dashboard/profile',component: DashboardProfile},
  {id: 7,path: '/dashboard/consumers',component: DashboardConsumers},
  {id: 7,path: '/dashboard/consumers/:consumerID',component: DashboardConsumer},
  {id: 7,path: '/dashboard/login',component: DashboardLogin},
]


const App = (props) => {
  return(
    <Router>
      <Switch>
        {pages.map(i => <Route key={i.id} path={i.path} exact component={i.component} />)}
      </Switch>
    </Router>
  )
}



export default App

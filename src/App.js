import React from 'react'
import Home from './pages/Home'
import Consumers from './pages/Consumers'
import Admins from './pages/Admins'
import Admin from './pages/Admin'
import Profile from './pages/Profile'
import Consumer from './pages/Consumer'
import Login from './pages/Login'
import TokenListings from './pages/TokenListings'
import TokenListing from './pages/TokenListing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

let pages = [
  {id: 1,path: '/',component: Home},
  {id: 2,path: '/admins',component: Admins},
  {id: 2,path: '/admins/:id',component: Admin},
  {id: 3,path: '/profile',component: Profile},
  {id: 4,path: '/consumers',component: Consumers},
  {id: 5,path: '/consumers/:consumerID',component: Consumer},
  {id: 6,path: '/token-listings',component: TokenListings},
  {id: 7,path: '/token-listings/:id',component: TokenListing},
  {id: 8,path: '/login',component: Login}
]


const App = (props) => {
  return(
    <Router>
      <Switch>
        {
          pages.map(i => {
            return <Route key={i.id} path={i.path} exact component={i.component} />
          })
        }
      </Switch>
    </Router>
  )
}



export default App

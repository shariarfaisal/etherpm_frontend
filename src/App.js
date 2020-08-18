import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import TokenListing from './pages/TokenListing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


let pages = [
  {id: 1,path: '/',component: Home},
  {id: 2,path: '/profile',component: Profile},
  {id: 3,path: '/tokenlisting',component: TokenListing},
  {id: 4,path: '/login',component: Login},
  {id: 5,path: '/register',component: Register},
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

import React,{ useEffect } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import TokenListing from './pages/TokenListing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


let pages = [
  {id: 1,path: '/',component: Home},
  {id: 2,path: '/profile',component: Profile},
  {id: 2,path: '/tokenlisting',component: TokenListing},
]

let authPages = [
  {id: 1,path: '/login',component: Login},
  {id: 2,path: '/register',component: Register},
]


const App = (props) => {

  const token = localStorage.getItem('etherpm_user_token')
  if(!token){
    pages = authPages
  }

  return(
    <Router>
      <Switch>
        {pages.map(i => <Route key={i.id} path={i.path} exact component={i.component} />)}
      </Switch>
    </Router>
  )
}



export default App

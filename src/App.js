import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import TokenListing from './pages/TokenListing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = (props) => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact  component={Login} />
        <Route path="/register" exact  component={Register} />
        <Route path="/token-listing" exact  component={TokenListing} />
      </Switch>
    </Router>
  )
}



export default App

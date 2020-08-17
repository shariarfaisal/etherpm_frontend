import React,{ useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'



const LoginForm = (props) => {
  const { login } = useContext(UserContext)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState('')
  const [success,setSuccess] = useState('')
  const [loading,setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await login({email,password})
    if(error){
      setErr(error)
      setLoading(false)
    }
    else if(data){
      setLoading(false)
      setErr('')
      setSuccess('Login successfull!')
      setTimeout(() => {
        localStorage.setItem('etherpm_user_token',data.token)
        window.location = '/profile'
      },1000)
    }
  }

  return(
    <form onChange={e => setErr('')} onSubmit={submitHandler} autoComplete="on" className={`form col-sm-8 col-md-5 col-lg-4 col-xl-3 rounded ${loading ? 'btn-loading': ''}`}>
      <h2 className="text-center py-2">Log In</h2>
      {/* Messages */}
      <small className={`d-block text-center text-${err ? 'danger': 'success'}`} style={{height: '22px'}}>
        {err && err}
        {success && success}
      </small>

      <div className="form-group mt-3">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          className="form-control"
          required
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          onChange={e => setPassword(e.target.value)}
          required
          value={password}
          className="form-control"
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        <button disabled={loading} className="btn btn-lg btn-block btn-info" type="submit">Log In</button>
        <div className="foot my-3 d-flex justify-content-between">
          <span className="forgot">Forgot Password?</span>
          <div className="no-account text-muted">Register <Link to="/register" className="text-warning">here</Link></div>
        </div>
      </div>
    </form>
  )
}

export default LoginForm

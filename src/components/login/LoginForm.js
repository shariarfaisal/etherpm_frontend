import React,{ useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BaseContext } from '../../contexts/BaseContext'



const LoginForm = (props) => {
  const { getSignin } = useContext(BaseContext)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState('')
  const [success,setSuccess] = useState('')
  const [loading,setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    await getSignin({
      payloads:{ email, password},
      setSuccess,
      setError: setErr,
      setLoading
    })

  }

  return(
    <form onChange={e => setErr('')} onSubmit={submitHandler} autoComplete="on" className={`form col-sm-8 col-md-5 col-lg-4 col-xl-3 rounded ${loading ? 'btn-loading': ''}`}>
      <h2 className="text-center py-2">Log In</h2>
      {/* Messages */}
      <small className={`d-block text-center text-${err ? 'danger': 'success'}`} style={{height: '22px'}}>
        {err && err.message && err.message}
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
        <small className="text-danger">{err && err.email && err.email}</small>
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
      <small className="text-danger">{err && err.password && err.password}</small>
      </div>
      <div>
        <button disabled={loading} className="btn btn-lg btn-block btn-info" type="submit">Log In <i className="bx bx-log-in"></i></button>
        <div className="foot my-3 d-flex justify-content-between">
          <span className="forgot">Forgot Password?</span>
          <div className="no-account text-muted">Register <Link to="/register" className="text-warning">here</Link></div>
        </div>
      </div>
    </form>
  )
}

export default LoginForm

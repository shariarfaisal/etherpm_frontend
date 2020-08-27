import React,{ useState, useContext, useEffect } from 'react'
import './login.scss'
import { AdminContext } from '../contexts/AdminContext'

const Login = (props) => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [remember,setRemember] = useState(false)
  const [err, setErr] = useState('')
  const [success,setSuccess] = useState('')
  const [loading,setLoading] = useState(false)

  const { getLogin } = useContext(AdminContext)

  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await getLogin({ username, password })
    if(data){
      setLoading(false)
      setSuccess('Login Successful.')
      localStorage.setItem('x-admin-token',data)
      
      setTimeout(() => {
        window.location = '/'
      },1000)

    }else if(error){
      setLoading(false)
      setErr(error)
    }
  }

  const onChangeHandler = e => {
    setSuccess('')
    setErr('')
  }

  useEffect(() => {
    const token = localStorage.getItem('x-admin-token')
    if(token){
      window.location = '/'
    }
  },[])

  return(
    <div className="login-components">
      <div className="row mx-0 w-100 h-100 justify-content-center align-content-center">

        <div className={`login-card col-md-8 col-lg-5 col-xl-4 shadow`}>
          {/* Loading bar */}
          {loading && <div className="btn-loading" style={{height: '5px',position: 'absolute',top: '0px',left: '0px'}}></div>}

          <h2 className="title">Admin Login</h2>
          <form onChange={onChangeHandler} onSubmit={submitHandler} className="form">
            <small style={{height: '30px'}} className={`text-${success? 'success': err.msg? 'danger': 'light'} py-3 text-center d-block`}>
              {success && success}
              {err.msg && err.msg}
            </small>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              {err.username && <small className="text-danger">{err.username}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              {err.password && <small className="text-danger">{err.password}</small>}
            </div>
            <div className="">
              <input
                type="checkbox"
                value={remember}
                onChange={e => setRemember(!remember)}
                className="ml-2"
                id="rememberme"
              />
              <label className="form-check-label ml-3" htmlFor="rememberme">Remember me.</label>
            </div>
            <div className="py-3 d-flex justify-content-center">
              <button disabled={loading} type="submit" className="btn btn-info px-4">Login <i className="bx bx-log-in"></i></button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
export default Login

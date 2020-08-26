import React,{ useState, useContext } from 'react'
import { AdminContext } from '../contexts/AdminContext'

const PasswordUpdateForm = ({ setPasswordMode }) => {
  const [password,setPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const [success,setSuccess] = useState('')
  const [error,setError] = useState({})
  const { passwordUpdate } = useContext(AdminContext)

  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await passwordUpdate({ password, newPassword })
    if(data){
      setLoading(false)
      setError('')
      setSuccess('Password updated!')
      setPassword('')
      setNewPassword('')
    }else if(error){
      setLoading(false)
      setError(error)
    }
  }

  const formOnChange = e => {
    setSuccess('')
  }


  return(
    <div className="update-password-form">
      <form onChange={formOnChange} onSubmit={submitHandler}>
        <div style={{height: '20px'}}>
          <span className="d-block text-center text-success">{success && success}</span>
        </div>
        <div className="my-2 py-2">
          <label className="w-50" htmlFor="password">Old Password</label>
          <input
            onChange={e => setPassword(e.target.value)}
            className="w-50"
            type="password"
            id="password"
            value={password}
            placeholder="Old Password"
          />
        <small className="error-msg text-warning w-50 ml-auto d-block">{error.password && error.password}</small>
        </div>
        <div className="my-2 py-2">
          <label className="w-50" htmlFor="newPassword">New Password</label>
          <input
            onChange={e => setNewPassword(e.target.value)}
            className="w-50"
            type="password"
            id="newPassword"
            value={newPassword}
            placeholder="New Password"
          />
        <small className="error-msg text-warning w-50 ml-auto d-block">{error.newPassword && error.newPassword}</small>
        </div>
        <div className="my-2 py-2 d-flex justify-content-end">
          <button onClick={e => setPasswordMode(false)} type="button" className="btn btn-warning px-3 my-2 mx-3">Cancel</button>
            <button disabled={loading} type="submit" className={`btn btn-${success? 'success': 'info'} px-3 my-2 mx-3`}>
              {success ? 'Updated' : 'Update'}
              {loading && <i className="bx bx-loader-circle bx-spin px-3"></i> }
            </button>
        </div>
      </form>
    </div>
  )
}

export default PasswordUpdateForm

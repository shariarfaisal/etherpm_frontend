import React,{ useState, useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'

const UpdatePassword = ({ setUpdateMode }) => {
  const [oldPassword,setOldPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [err,setErr] = useState('')
  const [success,setSuccess] = useState('')
  const [loading,setLoading] = useState(false)
  const { getUpdatePassword } = useContext(UserContext)

  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    const done = await getUpdatePassword({
      payloads: { oldPassword, newPassword},
      setSuccess,
      setError: setErr,
      setLoading
    })

    if(done){
      setOldPassword('')
      setNewPassword('')
    }

  }

  const formOnChange = e => {
    setErr('')
    setSuccess('')
  }

  return(
    <div className="info col-7">
      <form onChange={formOnChange} onSubmit={submitHandler}>
        <div>
          <p className="text-center text-warning border-bottom border-secondary pb-2">Update Password</p>
        </div>
        {success && <div style={{background: 'rgb(19 19 19 / 37%)'}} className="shadow rounded">
          <span className="text-center d-block py-2" style={{color: '#00de00',fontSize: '13px'}}>{success}</span>
        </div>}
        <div className="form-group">
          <label htmlFor="oldPassword">Old Password</label>
          <input
            className="form-control"
            type="password"
            id="oldPassword"
            placeholder="Old Password"
            required
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            style={{fontSize: '14px'}}
          />
        <small style={{color: '#ff766c'}}>{err.oldPassword && err.oldPassword}</small>
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="New Password"
            required
            id="newPassword"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            style={{fontSize: '14px'}}
          />
        {!err.newPassword && <div className="pr-5">
          <small style={{
              color: '#dcdcdc',
              fontSize: '11px'
            }}>Password must be atlease 6 characters!</small>
        </div>}
        <small style={{color: '#ff766c'}}>{err.newPassword && err.newPassword}</small>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button onClick={e => setUpdateMode('')} type="button" className="px-4 mx-3 btn btn-warning btn-lg">Cancel</button>
          <button
            disabled={success || (oldPassword === '' || newPassword === '')}
            type="submit"
            className='px-4 mx-3 btn btn-info btn-lg'>
            <span>Update {loading ? <i className="bx bx-loader-circle bx-spin"></i>: ''}</span>
          </button>
        </div>
      </form>
    </div>
  )
}
export default UpdatePassword

import React,{ useState, useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'


const UpdateInfo = ({ profile, setUpdateMode }) => {
  const [name,setName] = useState(profile.name)
  const [email,setEmail] = useState(profile.email)
  const [err,setErr] = useState('')
  const [success,setSuccess] = useState('')
  const { getUpdateInfo } = useContext(UserContext)
  const [loading,setLoading] = useState(false)

  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    getUpdateInfo({
      payloads: {email,name},
      setError: setErr,
      setSuccess,
      setLoading
    })
  }

  const formOnChange = e => {
    setErr('')
    setSuccess('')
  }

  return(
    <div className="info col-7">
      <form onChange={formOnChange} onSubmit={submitHandler}>
        <div>
          <p className="text-center text-warning border-bottom border-secondary pb-2">Update Info</p>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            required
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{fontSize: '14px'}}
          />
        <small style={{color: '#ff766c'}}>{err.name && err.name}</small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{fontSize: '14px'}}
          />
        <small style={{color: '#ff766c'}}>{err.email && err.email}</small>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button onClick={e => setUpdateMode('')} type="button" className="px-4 mx-3 btn btn-warning btn-lg">Cancel</button>
          <button
            disabled={loading}
            type="submit"
            className={`px-4 mx-3 btn btn-${success? 'success': 'info'} btn-lg`}>
            {success ? 'Updated': <span>Save {loading ? <i className="bx bx-loader-circle bx-spin"></i>: ''}</span>}
          </button>
        </div>
      </form>
    </div>
  )
}
export default UpdateInfo

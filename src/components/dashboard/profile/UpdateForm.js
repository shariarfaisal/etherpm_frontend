import React,{ useState, useContext } from 'react'
import { AdminContext } from '../contexts/AdminContext'

const UpdateForm = ({ profile, setUpdateMode }) => {
  const [name,setName] = useState(profile.name)
  const [username,setUsername] = useState(profile.username)
  const [email,setEmail] = useState(profile.email)
  const [contact,setContact] = useState(profile.contact)
  const [loading,setLoading] = useState(false)
  const [success,setSuccess] = useState('')
  const [error,setError] = useState({})
  const { profileUpdate } = useContext(AdminContext)

  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await profileUpdate({ name, username, email, contact })
    if(data){
      setLoading(false)
      setError('')
      setSuccess('Data has been saved!')
    }else if(error){
      setLoading(false)
      setError(error)
    }
  }

  const formOnChange = e => {
    setSuccess('')
  }

  return(
    <div className="update-form">
      <form onChange={formOnChange} onSubmit={submitHandler}>
        <div style={{height: '20px'}}>
          <small className="text-success d-block text-center">{success && success}</small>
        </div>
        <div className="my-2 py-2">
          <label className="w-25" htmlFor="name">Name</label>
          <input onChange={e => setName(e.target.value)} className="w-75" type="text" id="name" value={name} placeholder="Name" />
          <small className="error-msg text-warning w-75 ml-auto d-block">{error.name && error.name}</small>
        </div>
        <div className="my-2 py-2">
          <label className="w-25" htmlFor="username">Username</label>
          <input onChange={e => setUsername(e.target.value)} className="w-75" type="text" id="username" value={username} placeholder="Username" />
          <small className="error-msg text-warning w-75 ml-auto d-block">{error.username && error.username}</small>
        </div>
        <div className="my-2 py-2">
          <label className="w-25" htmlFor="email">Email</label>
          <input onChange={e => setEmail(e.target.value)} className="w-75" type="email" id="email" value={email} placeholder="Email" />
          <small className="error-msg text-warning w-75 ml-auto d-block">{error.email && error.email}</small>
        </div>
        <div className="my-2 py-2">
          <label className="w-25" htmlFor="contact">Contact</label>
          <input onChange={e => setContact(e.target.value)} className="w-75" type="text" id="contact" value={contact} placeholder="Contact" />
          <small className="error-msg text-warning w-75 ml-auto d-block">{error.contact && error.contact}</small>
        </div>
        <div className="my-2 py-2 d-flex justify-content-end">
          <button onClick={e => setUpdateMode(false)} type="button" className="btn btn-warning px-3 my-2 mx-3">Cancel</button>
          <button disabled={loading} type="submit" className={`btn btn-${success? 'success': 'info'} px-3 my-2 mx-3`}>
            {success ? <span>saved</span> : 'Save'}
            {loading ? <i className="bx bx-loader-circle bx-spin px-3"></i>: <i className="bx bx-save mx-2"></i> }
          </button>
        </div>
      </form>
    </div>
  )
}
export default UpdateForm

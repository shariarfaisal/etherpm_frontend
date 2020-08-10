import React,{ useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const SignupForm = (props) => {
  const { signup } = useContext(UserContext)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [refferalID,setRefferalID] = useState('')
  const [agreement,setAgreement] = useState(false)
  const [isReff,setIsReff] = useState(false)
  const [errors,setErrors] = useState('')
  const history = useHistory()

  const submitHandler = async e => {
    e.preventDefault()
    if(!agreement){
      setErrors({ agreement: 'Agreement mush have to be checked!'})
      console.log(errors);
    }else{
      const { data, error } = await signup({name,email,password,refferalID})
      if(error) setErrors(error)
      else if(data){
        history.push('/login')
      }
    }
  }

  return(
    <form onSubmit={submitHandler} className="form col-sm-8 col-md-5 col-lg-4 col-xl-3 rounded my-md-5 mx-md-0">
      <h1 className="text-center py-2 mb-2">Create a free account</h1>
      {errors.agreement && <span className="invalid text-danger text-center d-block">{errors.agreement}</span> }
      <div className="form-group  mt-3">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          onChange={e => setName(e.target.value)}
          value={name}
          className="form-control"
          required
          type="text"
          placeholder="Name"
        />
        {errors.name && <span className="invalid text-danger">{errors.name}</span>}
      </div>
      <div className="form-group  mt-3">
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
        {errors.email && <span className="invalid text-danger">{errors.email}</span>}
      </div>
      <div className="form-group ">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          className="form-control"
          required
          type="password"
          placeholder="Password"
        />
        {errors.password && <span className="invalid text-danger">{errors.password}</span>}
      </div>
      <div className="form-group ">
        <label onClick={e => setIsReff(!isReff)} className="d-flex justify-content-between pointer" htmlFor="refferal">
          <span>Refferal ID (Optional)</span>
          <span className="mr-3">
            <i style={{fontSize: '1.8rem'}} className={`fa fa-sort-${isReff ? 'up' : 'down'}`}></i>
          </span>
        </label>
        {isReff && <input
          id="refferal"
          onChange={e => setRefferalID(e.target.value)}
          value={refferalID}
          className="form-control"
          type="text"
          placeholder="Refferal ID"
        />}
      </div>
      <div className="form-group  d-flex align-items-center pl-3">
        <input
          type="checkbox"
          onChange={e => setAgreement(!agreement)}
          className="form-check-input bg-warning"
          id="exampleCheck1"
        />
        <label onClick={e => setAgreement(!agreement)} className="form-check-label ml-3" htmlFor="exampleCheck1">I agree with the <Link to="/termsandconditions" className="text-warning">Terms and Conditions</Link></label>
      </div>
      <div>
        <button className="btn btn-lg btn-block btn-info" type="submit">Register</button>
        <div className="foot my-3 d-flex justify-content-between">
          <div className="text-muted">Already have an account? <Link to="/login" className="text-warning">Login</Link></div>
        </div>
      </div>
    </form>
  )
}
export default SignupForm

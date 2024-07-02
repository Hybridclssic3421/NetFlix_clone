import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './login.css'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, SetSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const user_auth = async(event)=>{
    event.preventDefault();
    setLoading(true);
    if(signState === "Sign In"){
      await login(email, password);
    }else{
      await signup(name, email, password);
    }
    setLoading(false);
  }


  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login h-screen'>
        <img src={logo} className='login-logo' alt="" />
        <div className="login-form w-full">
          <h1>{signState}</h1>
          <form>
          {signState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name' />:<></>}
            
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Your Email' />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
            <button onClick={user_auth} type='submit'>{signState}</button>
            <div className="form-help flex items-center justify-between">
              <div className="remember flex items-center">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help ?</p>
            </div>
          </form>
          <div className="form-switch mt-10">
            {signState==="Sign In"?<p>New to Netflix? <span onClick={()=>{SetSignState("Sign Up")}}>Sign Up Now</span></p>
            :<p>Already have Account? <span onClick={()=>{SetSignState("Sign In")}}>Sign In Now</span></p>}
            
            
          </div>
        </div>
    </div>
  )
}

export default Login
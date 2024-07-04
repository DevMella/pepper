import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container' action="">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=> setShowLogin(false)} src={assets.close} className='ican' alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
            <input type="email" placeholder='Your email' required name="" id="" />
            <input type="password" placeholder='Password' required name="" id="" />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==='Login'
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
        :<p>Already have an account ? <span onClick={()=>setCurrState('Login')}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup

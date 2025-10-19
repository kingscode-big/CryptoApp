import React from 'react'
import '../Styles/Login.css'
import { Link } from 'react-router-dom'
import AdobeImage from '../images/Adobe Express - file (23) 1.png'
import vector23 from '../Logos/Vector (23).png'
import twitericon from '../Logos/Clip path group.png'
import "../Styles/Responsive UI/loginResponse.css"
export default function LoginPage() {
  return (
     <>
     <section>
        <div className='login-container'>
            <div>
                <img src={AdobeImage} alt='login' className='login-image' />
                
            </div>
            <div className='logins-container-container '>
                <div className='login-form-container'>
                    <form className='form-container-header'>
                        <h3 className='Form-header'>Welcome</h3>
                        <h3 className='sign-texts'>
                            Sign in / Register to your account to continue
                        </h3>
                        <div className='signss-container'>
                            <p className='sign-in-button'><Link to={'/login'}style={{textDecoration:'none',color:'black'}}>Sign In</Link> </p>
                            <p className='sign-in-button'><Link to={'/register'}style={{textDecoration:'none',color:'black'}}>Sign up</Link></p>
                        </div>
                        <label className='email-adress-input'>Email Address</label><br></br><br></br>
                        <input className='email-adress-input1'placeholder='Enter Your Mail ID' ></input>
                        <br></br><br></br>
                        <div className='password-container'>
                            <p className='password-adress-input'>Password</p>
                            <p className='password-forget'>Forgot Password ?</p>
                        </div>
                        <br></br>
                        <input className='password-adress-input1'placeholder='Enter Your Mail ID' ></input>
                        <br></br>
                        <button className='button-send'placeholder='Enter Your Mail ID' >
                            send
                        </button>

                    </form>
                    <div className='or-option-container'>
                        <p className='straight-line'></p>
                        <p className='straight-line2'>or continue with </p>
                        <p className='straight-line'></p>
                    </div>
                    <button className='Google-send'placeholder='Enter Your Mail ID' >
                     <img src={vector23} alt='Google' className='google-image' />
                     <p>Continue with google</p>
                     </button>
                    <button className='Google-send'placeholder='Enter Your Mail ID' >
                     <img src={twitericon} alt='Google' className='google-image' />
                     <p>Continue with twitter</p>
                     </button>
                </div>

            </div>

        </div>
     </section>
     </>
  )
}

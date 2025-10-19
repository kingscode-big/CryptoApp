import React from 'react'
import AdobeImage from '../images/Adobe Express - file (23) 1.png'
import rectangle401 from '../images/Rectangle 40 (1).png'
import vector23 from '../Logos/Vector (23).png'
import twitericon from '../Logos/Clip path group.png'
import { Link } from 'react-router-dom'
import "../Styles/Responsive UI/registerResponse.css"

export default function RegisterPage() {
  return (
    <>
     <section>
            <div className='login-container'>
                <div>
                    <img src={rectangle401} alt='login' className='login-image' />
                    
                </div>
                <div className='logins-container-container '>
                    <div className='login-form-container'>
                        <form className='register-form-container-header'>
                            <h3 className='Form-header'>Welcome</h3>
                            <h3 className='sign-texts'>
                                Sign in / Register to your account to continue
                            </h3>
                            <div className='signss-container'>
                                <p className='sign-in-button'><Link to={'/login'}style={{textDecoration:'none',color:'black'}}>Sign In</Link> </p>
                                <p className='sign-in-button'><Link to={'/register'}style={{textDecoration:'none',color:'black'}}>Sign up</Link> </p>
                            </div>
                            <label className='email-adress-input'>Full Name</label><br></br><br></br>
                            <input className='email-adress-input1'placeholder='Enter Full Name' ></input>
                            <br></br><br></br>
                            <label className='email-adress-input'>Username</label><br></br><br></br>
                            <input className='email-adress-input1'placeholder='Enter Username' ></input>
                            <br></br><br></br>
                            <label className='email-adress-input'>Email Address</label><br></br><br></br>
                            <input className='email-adress-input1'placeholder='Enter Your Mail ID' ></input>
                            <br></br><br></br>
                            <label className='email-adress-input'>Username</label><br></br><br></br>
                            <input className='email-adress-input1'placeholder='Enter Username' ></input>
                            <br></br><br></br>
                            <label className='email-adress-input'>Password</label><br></br><br></br>
                            <input className='email-adress-input1'placeholder='Enter Username' ></input>
                            <br></br><br></br>
                            <label className='confirm-adress-input'>Confirm Password</label><br></br><br></br>
                            <input className='email-adress-input1'placeholder='Enter Username' ></input>
                            <br></br><br></br>
                             
                            
                          
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

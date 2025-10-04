import React from 'react'
import logo1 from '../Logos/logo1.png'
import { Link } from 'react-router-dom'
import vector22 from '../Logos/Vector (22).png'
 import '../Hamburger.css'
 import Group205 from '../Logos/Group 205.png'
 import { useState } from 'react'
 import { Menu, X } from "lucide-react";


export default function Header() {

      const [open, setOpen] = useState(false);
  return (
    <>
    <section className='Header-section'>
        
        <div className='header-icons-container-harm'>
             <div className='Harmburger-icon'>
                <img src={vector22} alt='harmbuger' className='harmburger-icon1'
                  onClick={() => setOpen(!open)} />
                {open && (
                  <div className="dropdown-menu">
                    <div className='dropmenu-close-icon'>
                        <img src={logo1} alt='logo1' className='logo-image' />
                        <p><X className="icon-close"   onClick={()=>setOpen(!open)} /></p>
                    </div>
                     
                    <ul>
                        
                        <li className='dropmenu-overlay'> <Link to={'/about'} className='Link-lists'>About</Link> </li>
                        <li className='dropmenu-overlay'><Link to={'/contact'}className='Link-lists' >Contact</Link></li>
                        <li className='dropmenu-overlay'><Link to={'/help'}className='Link-lists' >FAQ</Link></li>
                        <li className='dropmenu-overlay'><Link to={'/login'}className='Link-lists' >Login</Link></li>
                        <li className='dropmenu-overlay'><Link to={'/register'}className='Link-lists' >Register</Link></li>
                    </ul>
                  </div>
                )}
             </div>
             
            <img src={logo1} alt='logo1' className='logo-image' />
            
        </div>
           <div className='bell-container'><img src={Group205} alt="bell" className='bell-icon' /></div>
        <div className='List-container'>
           
            <ul className='unordered-list'>
                <li className='list-items' style={{color:'#27bf73'}}><Link to={'/'}className='Link-lists'>Home</Link></li>
                <li className='list-items'> <Link to={'/about'} className='Link-lists'>About</Link> </li>
                <li className='list-items'><Link to={'/contact'}className='Link-lists' >Contact</Link></li>
                <li className='list-items'><Link to={'/help'}className='Link-lists' >FAQ</Link></li>
            </ul>
            
            <div className='Login-container'>
                <button className='Login'>
                   <Link to={'/login'}style={{textDecoration:'none',color:'white'}}>Login</Link> 
                </button>
            </div>
        </div>
        
    </section>
    
    </>
  )
}

 import React, { useState } from 'react';
import logo1 from '../Logos/logo1.png';
import vector22 from '../Logos/Vector (22).png';
import Group205 from '../Logos/Group 205.png';
import { Link} from 'react-router-dom';
import { X } from 'lucide-react';
import '../Hamburger.css';
import '../Styles/Dashboard.css'

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);
 

  // Define active link colors
 

  return (
    <>
      <section className='Header-section'>
        <div className='header-icons-container-harm'>
          <div className='Harmburger-icon'>
            <img
              src={vector22}
              alt='harmbuger'
              className='harmburger-icon1'
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className='dropdown-menu'>
                <div className='dropmenu-close-icon'>
                  <img src={logo1} alt='logo1' className='logo-image' />
                  <p>
                    <X className='icon-close' onClick={() => setOpen(!open)} />
                  </p>
                </div>

                <ul>
                  <li className='dropmenu-overlay'>
                    <Link to='/about' className='Link-lists'>About</Link>
                  </li>
                  <li className='dropmenu-overlay'>
                    <Link to='/contact' className='Link-lists'>Contact</Link>
                  </li>
                  <li className='dropmenu-overlay'>
                    <Link to='/help' className='Link-lists'>FAQ</Link>
                  </li>
                  <li className='dropmenu-overlay'>
                    <Link to='/login' className='Link-lists'>Login</Link>
                  </li>
                  <li className='dropmenu-overlay'>
                    <Link to='/register' className='Link-lists'>Register</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <img src={logo1} alt='logo1' className='logo-image' />
        </div>
        <div className='dashboard-text'>Dashboard</div>

        <div className='List-container'>
           
        
          <div className='bell-container' style={{display:'flex'}}>
                    <img src={Group205} alt='bell' className='bell-icon' />
                  </div>
            
         
          <div className='Login-container'>
            <button className='dashboard'>
              <Link
                to='/'
                style={{ textDecoration: 'none', color: 'white',fontSize:'0.6rem' }}
              >
                Go to Home
              </Link>
            </button>
             
          </div>
        </div>
      </section>
    </>
  );
}

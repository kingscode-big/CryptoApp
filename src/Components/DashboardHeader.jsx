import React, { useState } from 'react';
import logo1 from '../Logos/logo1.png';
import vector22 from '../Logos/Vector (22).png';
import Group205 from '../Logos/Group 205.png';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import '../Hamburger.css';
import '../Styles/Dashboard.css'
import dashLogo from '../DashboardIcon/Ellipse 11.png'
import vector29 from '../DashboardIcon/Vector (29).png'
import vector20 from "../DashboardIcon/Vector (20).png"
import vector21 from "../DashboardIcon/Vector (21).png"
import vector27 from "../DashboardIcon/Vector (27).png"
import vector222 from "../DashboardIcon/Vector (22).png"
import vector23 from "../DashboardIcon/Vector (23).png"
import vector24 from "../DashboardIcon/Vector (24).png"
import vector25 from "../DashboardIcon/Vector (25).png"
import vector26 from "../DashboardIcon/Vector (26).png"
import vector30 from "../DashboardIcon/Vector (30).png"




export default function DashboardPage() {
  const [open, setOpen] = useState(false);


  // Define active link colors


  return (
    <>

      <section className='Header-section1'>
        <div className='dashBoardHeader1'>
          <div className='Header-section1Header-section1'>
            <div className='myNavBar1'>
              <div className='Harmburer-icon'>
                <div className='harmburger1'>
                  <img
                    src={vector22}
                    alt='harmbuger'
                    className='harmburger-icon1'
                    onClick={() => setOpen(!open)}
                  />
                </div>

                <div>
                  <img src={logo1} alt='logo1' className='logo-image' />
                </div>

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
                        <Link to='/about' className='Link-lists'><div className='dashSide'>
                          <img src={vector29} alt='Home-icon' className='' />
                          <button>Dashboard</button>
                        </div></Link>
                      </li>
                      <li className='dropmenu-overlay'>
                        <Link to='/contact' className='Link-lists'><div className='dashSide1'>
                          <img src={vector20} alt='add' />
                          <button>Buy / Sell  Crypto</button>
                        </div></Link>
                      </li>
                      <li className='dropmenu-overlay'>
                        <Link to='/help' className='Link-lists'> <div className='dashSide1'>
                          <img src={vector21} alt='add' />
                          <button>Deposit/Withdraw</button>
                        </div></Link>
                      </li>
                      <li className='dropmenu-overlay'>
                        <Link to='/login' className='Link-lists'><div className='dashSide1'>
                          <img src={vector27} alt='add' />
                          <button>My Wallet</button>
                        </div></Link>
                      </li>
                      <li className='dropmenu-overlay'>
                        <Link to='/register' className='Link-lists'> <div className='dashSide1'>
                          <img src={vector222} alt='add' />
                          <button>Payment Methods</button>
                        </div></Link>
                      </li>
                      <li className='dropmenu-overlay'>
                        <Link to='/register' className='Link-lists'> <div className='dashSide1'>
                          <img src={vector23} alt='add' />
                          <button>History</button>
                        </div></Link>
                      </li>
                      <li className='dropmenu-overlay'>
                        <Link to='/register' className='Link-lists'><div className='dashSide1'>
                          <img src={vector24} alt='add' />
                          <button>Wallet Security</button>
                        </div> </Link>
                      </li>
                      <li className='dropmenu-overlay'>
                        <Link to='/register' className='Link-lists'> <div className='dashSide1'>
                          <img src={vector25} alt='add' />
                          <button>My Profile</button>
                        </div></Link>
                      </li>
                      <li className='dropmenu-overlay'>
                        <Link to='/referral' className='Link-lists'><div className='dashSide1'>
                          <img src={vector30} alt='add' />
                          <button>My Referrals </button>
                        </div> </Link>
                      </li>
                      <li className='dropmenu-overlay'>
                        <Link to='/register' className='Link-lists'> <div className='dashSide3'>
                          <button>Logout</button>
                          <img src={vector26} alt='add' className='' />
                        </div></Link>
                      </li>
                      

                    </ul>
                  </div>
                )}
              </div>


            </div>

          </div>

          <div>
            <p className='dashboard-text'>Dashboard</p>
          </div>
          <div className='dashBoardHEader2'>
            <div className='Login-container'>
              <button className='dashboard'>
                <Link
                  to='/'
                  style={{ textDecoration: 'none', color: 'white', fontSize: '0.6rem' }}
                >
                  Go to Home
                </Link>
              </button>


            </div>
            <div>
              <img src={dashLogo} alt='dashboard logo' className='dashboard-logo' />
            </div>
            <div>
              <div className='bell-container' style={{ display: 'flex' }}>
                <img src={Group205} alt='bell' className='bell-icon' />
              </div>
            </div>
          </div>
        </div>





      </section>
    </>
  );
}

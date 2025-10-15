import React from 'react'
import vector29 from '../DashboardIcon/Vector (29).png'
import frame95 from '../DashboardIcon/Frame 95.png'
import frame96 from '../DashboardIcon/Frame 96.png'
import frame97 from '../DashboardIcon/Frame 97.png'
import frame98 from '../DashboardIcon/Frame 98.png'
import frame112 from '../DashboardIcon/Frame 112.png'
import frame272 from '../DashboardIcon/Frame 272.png'
import frame273 from '../DashboardIcon/Frame 273.png'
import frame274 from '../DashboardIcon/Frame 273.png'
import frame285 from '../DashboardIcon/Frame 285.png'
import frame287 from '../DashboardIcon/Frame 287.png'
export default function Dashboard() {
  return (
     <section className='dashboard-container'>
       <div className='dashboard-layout-container'>
            <div className='dashboard-layout1'>
              <div className='layout1-header'>
                  <img src={vector29} alt='Home-icon' className='home-icon-dashboard'/>
                  <p className='dashboard-text2'>Dashboard</p>
              </div>
              <div className='layout1-features'>Buy / Sell  Crypto</div>
              <div className='layout1-features'>Deposit/Withdraw</div>
              <div className='layout1-features'>My Wallet</div>
              <div className='layout1-features'>Payment Methods</div>
              <div className='layout1-features'>History</div>
              <div className='layout1-features'>Wallet Security</div>
              <div className='layout1-features'>My Profile</div>
              <div className='layout1-button-div'><button className='logout-button' >Logout</button></div> 
            </div>
             
            <div className='dashboard-layout2'>
                <div className='layout2-div1'>
                    <div className='Dashboard-balance-text' ><p className='your-balance'>Your Balance</p> 
                        <p className='Dashboard-balance-amount-div' >
                        <p className='balance-amount'>₹5,656.6</p>
                   </p>
                    <div className='dashboard-trans-div' >
                        <div><img src={frame95} alt='add' className='add-money' /></div>
                        <div><img src={frame96} alt='add' className='add-money' /></div>
                        <div><img src={frame97} alt='add' className='add-money' /></div>
                        <div><img src={frame98} alt='add' className='add-money' /></div>
                        <div><img src={frame112} alt='add' className='add-money' /></div>
                    </div>
                    <div className='dashboard-trans-div' >
                        <div className='add-money-text'>Add Balance</div>
                        <div className='add-cash'>Cashout</div>
                        <div className='add-buy'>Buy</div>
                        <div className='add-sell'>Sell</div>
                        <div className='add-wallet'>Wallet</div>
                    </div>
                    
                    </div>

                     
                </div>
                <div className='layout2-div2'>

                    <div className='dashboard-trans-div2' >
                        <div><img src={frame272} alt='add' className='add-money' /></div>
                        <div><img src={frame273} alt='add' className='add-money' /></div>
                        <div><img src={frame274} alt='add' className='add-money' /></div>
                        <div><img src={frame285} alt='add' className='add-money' /></div>
                        <div><img src={frame287} alt='add' className='add-money' /></div>
                    </div>
                </div>
            </div>
            <div className='dashboard-layout3'> </div>
       </div>
     </section>
  )
}

import React from 'react'
import Header2 from '../Components/Header2'
import About from '../Components/About'
import BottomNav from '../Components/BottomNav'
import ReferralHeader from "../Components/ReferralHeader"
import Referral from '../Components/Referral'

export default function ReferralPage() {
  return (
   <>
    <section className='contact-containe'>
            <div className='DashboardPage-header-container '>
                <ReferralHeader />
              </div>
            <div className='myyRefer' style={{display:"flex", justifyContent: "center", marginTop: "100px"}}>
                <Referral />
            </div>
               
            
        
            
         </section>
         
   </>
  )
}

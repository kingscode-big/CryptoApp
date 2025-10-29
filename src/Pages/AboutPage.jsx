import React from 'react'
import Header2 from '../Components/Header2'
import About from '../Components/About'
import BottomNav from '../Components/BottomNav'

export default function AboutPage() {
  return (
   <>
    <section className='contact-container'>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Header2 />
              </div>
            <div>
                <About />
            </div>
               
            
        
            
         </section>
         
   </>
  )
}

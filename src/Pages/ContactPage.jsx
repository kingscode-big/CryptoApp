import React from 'react'
import Header from '../Components/Header'
import Contact from '../Components/Contact'

export default function ContactPage() {
  return (
     <section className='contact-container'>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Header/>
        </div>
        <div className='containers-contacts-containe'>
            <Contact />
        </div>
           
        

        
     </section>
  )
}

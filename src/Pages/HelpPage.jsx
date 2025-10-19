import React from 'react'
import Header from '../Components/Header'
import Help from '../Components/Help'
 

export default function HelpPage() {
  return (
     <>
      <section  className='contact-container'>
        <div style={{display: "flex", justifyContent: "center"}}>
                        <Header />
                    <div>
                        <Help />
                    </div>
                       
                    </div>
      </section>
     </>
  )
}

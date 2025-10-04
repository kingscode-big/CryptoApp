import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Hero2 from '../Components/Hero2'
import Footer from '../Components/Footer'
export default function HomePage() {
  return (
    <>
     <section className='Home-container'>
        <div className='HomePage-header-container'>
            <Header/>
        </div>
        <div className='Hero-container'>
            <Hero />
        </div>
        <div>
          <Hero2 />
        </div>
        

        
 
     </section>
     
      
      
    
    </>
  )
}

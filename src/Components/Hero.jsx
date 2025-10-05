import React from 'react'
 import imagestack1 from '../images/imagestack1.jpg'
 import imagestack2 from '../images/imagestack2.jpg'
 import imagestack3 from '../images/imagestack3.jpg'
 import { FaStar } from "react-icons/fa";
 import instant from '../images/Instantly.png'

import vector from '../Logos/Vector.png'

export default function Hero() {
  return (
  
  <>
   <section className='Hero-section'>
      <div className='description-container'>
        <p><img src={vector} alt='vector' className='vector-icon' /></p>
        <p>India's Fastest Growing Crypto Trading Platform</p>
      </div>
        <h1  className='Buy'> Buy & Sell Crypto <img src={instant} alt='instantly' style={{fontSize:'0.5rem',padding:'10px',paddingLeft:'10px'}} /></h1>
        <h1  className='Buy2'> Buy & Sell Crypto </h1>
        <p  className='Text-description'> The Top Best Secure Exchanging   Platform For <br></br>Your
        Cryptocurrency Providing Services Globally For  Buying, Selling, Transferring, and Storing Your Digital Asset.</p>
      <div className='Btn-now-container'>
        <button className='btn-buy-now'>Buy Crypto Now</button>
        <button className='btn-buy-now'>Sell Your Crypto</button>
      </div>

      <div className="image-stack">
        <div>
            <img src={imagestack1} alt="Image 1" className="stacked-img img1" />
            <img src={imagestack2} alt="Image 2" className="stacked-img img2" />
            <img src={imagestack3} alt="Image 3" className="stacked-img img3" />
        </div>
        <div >
            <p className='join-text'>
                Join 10,000 + traders  
                <FaStar size={12}   style={{ marginRight: "12px" ,marginLeft:'12px'}} color={"#FFD700"} />
                <FaStar size={12}   style={{ marginRight: "12px" }} color={"#FFD700"}/>
                <FaStar size={12}   style={{ marginRight: "12px" }}color={"#FFD700"}/>
                <FaStar size={12}   style={{ marginRight: "12px" }} color={"#FFD700"}/>
                <FaStar size={12}   style={{ marginRight: "12px" }} color={"#ebebdaff"}/>
                4.5/5 Rating
            </p>
        </div>
        <div >
            <p className='join-text2'>
              <FaStar size={12}   style={{ marginRight: "12px" ,marginLeft:'12px'}} color={"#FFD700"} />
                <FaStar size={12}   style={{ marginRight: "12px" }} color={"#FFD700"}/>
                <FaStar size={12}   style={{ marginRight: "12px" }}color={"#FFD700"}/>
                <FaStar size={12}   style={{ marginRight: "12px" }} color={"#FFD700"}/>
                <FaStar size={12}   style={{ marginRight: "12px" }} color={"#ebebdaff"}/>
                <br></br>
                Join 10,000 + traders  
                4.5/5 Rating
            </p>
        </div>
      </div>
      

   </section>
   
  
   
  </>
  )
}

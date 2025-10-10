import React from 'react'
import phone1 from '../images/phone1.png'
import Frame1 from '../Logos/frame1.png'
import Frame2 from '../Logos/frame2.png'
import Frame3 from '../Logos/frame3.png'
import Frame4 from '../Logos/frame4.png'
import Frame5 from '../Logos/frame5.png'
import Frame16 from '../Logos/Frame 16.png'
import Frame17 from '../Logos/Frame 17.png'
import Frame18 from '../Logos/Frame 18.png'
import Frame19 from '../Logos/Frame 19.png'
import vector2 from '../Logos/Vector 2.png'
import vector12 from '../Logos/Vector (12).png'
import vector10 from '../Logos/Vector (10).png'
import coins from '../images/coins.png'
import vector5 from '../Logos/Vector (5).png'
import vector9 from '../Logos/Vector (9).png'
import Group30 from '../images/Group 30.png'
import shoppingIcon from '../Logos/Vector (6).png'
import shoppingIcon1 from '../Logos/Vector (8).png'
import shoppingIcon2 from '../Logos/Frame 7.png'
import Footer from './Footer'
import frame33 from '../images/Frame 33.png'


export default function Hero2() {

  const Textimonials =[
 {id:1 , name :'Sarah Johnson',nickname:'@sarah johnson',Text:'"The platform is incredibly user-friendly and the instant buy/sell feature has saved me so much time. Best trading experience I'},
 {id:1 , name :'',Text:'"The platform is incredibly user-friendly and the instant buy/sell feature has saved me so much time. Best trading experience I'},
 
  ]
  return (
     <>
      <section className='container2'>
        <div className='frames'>
            <div style={{display:'flex'}}>
                <img src={Frame1} alt='circle' className='immg1'/>
                <img src={vector2} alt='vector' className='vector2' />
            </div> 
            <div style={{display:'flex'}}>
                <img src={Frame2} alt='sguare' className='imgg2'/>
                <img src={vector2} alt='vector' className='vector3' />
            </div> 
            <div style={{display:'flex'}}>
                <img src={Frame3} alt='rectangle' className='imgg3'/>
                <img src={vector2} alt='vector' className='vector4' />

            </div> 
            <div style={{display:'flex'}}>
                <img src={Frame4} alt='cicle'className='imgg4'/>
                <img src={vector2} alt='vector' className='vector5' />
            </div> 
            <div style={{display:'flex'}}>
                <img src={Frame5} alt='circle' className='imgg5'/>
                 <img src={vector2} alt='vector' className='vector4' />
            </div> 
        </div>
        
        <div>
            <img src={phone1} alt='phone image' className='phone1' />
        </div>
        
        <div className='Text-container'>
           <div className='text-sell'>
             <p>Sold 100 USDT for <span>₹8,200</span> <br></br>
               ₹8,200 has been received in your wallet
             </p>
           </div>
           <div className='text-sell'>
              <p>Sold 100 USDT for <span>₹8,200</span><br></br>
               ₹8,200 has been received in your wallet
             </p>
           </div>
           <div  className='text-sell'>
              <p>Sold 100 USDT for <span>₹8,200</span><br></br>
               ₹8,200 has been received in your wallet
             </p>
           </div>
           <div  className='text-sell'>
              <p>Sold 100 USDT for <span>₹8,200</span><br></br>
               ₹8,200 has been received in your wallet
             </p>
           </div>
           <div  className='text-sell'>
              <p>Sold 100 USDT for <span>₹8,200</span><br></br>
               ₹8,200 has been received in your wallet
             </p>
           </div>
        </div>
         
   </section>
      <section className='container3'>
         <div className='phone-img'>
            <img src={phone1} alt='phone image' className='phone1' />
        </div>
        <div className='frames'>
            <div style={{display:'flex'}}>
                <img src={Frame1} alt='circle' className='immg1'/>
                <img src={vector2} alt='vector' className='vector2' />
            </div> 
            <div style={{display:'flex'}}>
                <img src={Frame2} alt='sguare' className='imgg2'/>
                <img src={vector2} alt='vector' className='vector3' />
            </div> 
            <div style={{display:'flex'}}>
                <img src={Frame3} alt='rectangle' className='imgg3'/>
                <img src={vector2} alt='vector' className='vector4' />

            </div> 
            <div style={{display:'flex'}}>
                <img src={Frame4} alt='cicle'className='imgg4'/>
                <img src={vector2} alt='vector' className='vector5' />
            </div> 
            <div style={{display:'flex'}}>
                <img src={Frame5} alt='circle' className='imgg5'/>
                 <img src={vector2} alt='vector' className='vector4' />
            </div> 
        </div>
        <div className='Text-container'>
           <div className='text-sell'>
             <p>Sold 100 USDT for <span>₹8,200</span> <br></br>
               ₹8,200 has been received in your wallet
             </p>
           </div>
           <div className='text-sell'>
              <p>Sold 100 USDT for <span>₹8,200</span><br></br>
               ₹8,200 has been received in your wallet
             </p>
           </div>
           <div  className='text-sell'>
              <p>Sold 100 USDT for <span>₹8,200</span><br></br>
               ₹8,200 has been received in your wallet
             </p>
           </div>
           <div  className='text-sell'>
              <p>Sold 100 USDT for <span>₹8,200</span><br></br>
               ₹8,200 has been received in your wallet
             </p>
           </div>
           <div  className='text-sell'>
              <p>Sold 100 USDT for <span>₹8,200</span><br></br>
               ₹8,200 has been received in your wallet
             </p>
           </div>
        </div>
         
   </section>
   <section  className='CONTAINER'> 
        <div className='Grid-container'>
          <div className='Gride-contents'>
          <div className='grids'>
            <p>10K +</p>
            <p className='grids-p'>Active Users</p>
            </div>
          <div className='grids'>
             <p>₹50Cr+</p>
            <p className='grids-p'>Trading Volume</p>
          </div> 
          <div className='grids'>
             <p>700+</p>
            <p className='grids-p'>Crypto Coins</p>
          </div>
          <div className='grids'>
             <p>1.3B+</p>
            <p className='grids-p'>Cash Out</p>
          </div>
   
        </div>

        <div className='coins'>
           <img src={coins} alt='coins' className='coins-img' />
        </div>
        </div>
     </section>
    
     <section className='crypto-wallet-container'>
       <div className='Crypto-wallet'>
        <img src={vector5} alt='vector5' className='vector5-image' />
        <p>CRYPTO WALLET & SERVICES</p>
       </div>
       <div className='explore-service'>
        <h2>Explore Services & Crypto,Wallet</h2>
          <p className='tracking'>We Bring Together Dynamic Mix Of Services & Crypto
            That Are Thoughtfully  Designed To Make Your Crypto Exchange Easier.
          </p>
       </div>
       <div className='services-details'>
 
       </div>
 
       <div className='services-flex-container'>
        <div className='services-services'>
          <div className='services-details2'>
            <img src={shoppingIcon} alt='shopping-icon' className='shoppingicon'/>
            <p className='buy-div'>Buy Crypto</p>
            <p className='buy-div2'> Easily purchase your favorite cryptocurrencies in <br></br>
               just a few clicks.
            </p>
          </div>
          <div className='services-details2'>
            <img src={shoppingIcon2} alt='shopping-icon' className='shoppingicon12'/>
              <p className='buy-div'>Sell Crypto</p>
              <p className='buy-div2'> Securely sell your crypto and get instant payouts
            </p>

          </div>

          <div className='services-details2'>
            <img src={shoppingIcon1} alt='shopping-icon' className='shoppingicon'/>
              <p className='buy-div'>Wallet</p>
              <p className='buy-div2'> Easily purchase your favorite cryptocurrencies in <br />
                just a few clicks
            </p>
          </div>
        </div>
       </div>


       <div className='Crypto-wallet2'>
        <img src={vector9} alt='vector5' className='vector9-image' />
        <p> Live Crypto Pricings and Charts</p>
       </div>
       <div className='explore-service2'>
        <h2>Live Crypto Markets</h2>
        <p className='tracking'> Track real-time cryptocurrency 
          prices and buy or sell with just a few clicks
        </p>
       </div>
       <div className='services-details'>
         
       </div>
       <div className='services-flex-container01'>
        <div className='services-services2'>
          <div className='services-details3'>
            <img src={Frame16} alt='shopping-icon' className='graph-image'/>
           
          </div>
          <div className='services-details3'>
            <img src={Frame17} alt='shopping-icon' className='graph-image'/>
      
          </div>

          <div className='services-details3'>
            <img src={Frame18} alt='shopping-icon' className='graph-image'/>
               
          </div>
          <div className='services-details3'>
            <img src={Frame19} alt='shopping-icon' className='graph-image'/>
               
          </div>
          
        </div>
       </div >
       <div className='services-details4'>
          <div className='button-container-container'>
            <button  className='start-button'>Start Crypto Deposit Now<img src={vector10} alt='vector10' 
            style={{width:'10px',height:'7px',paddingTop:'2px',marginLeft:'10px'}}   /></button>
            <p className='join-p'>Join thousands of traders • Get started with just ₹100</p>
          </div>
       </div>

       <section className='Rate-container-container'>
        <div className='Rate-container'>
          <div className='rate-divs'>
            <p className='rate-p1'>
              Buy & Sell Crypto At<br /> 
              Any INR Rate
            </p>
            <p className='rate-p2'>We're proud to be working with these incredible 
              traders, and thankful for their feedback, 
              suggestions, and support.
            </p>
               
          </div>
          <div className='sign-up-image'>
              <div>
                <img src={Group30} alt="" className='Group30-img1' />
              </div>
              <div>
                <img src={Group30} alt="" className='Group30-img2' />
              </div>
          </div>
        </div>
       </section>
     
       <section className='traders-container-container'>
        <div className='traders-container'>
          <h5 className='traders-contaiber-texts'>Don't just take our word for it</h5>
              <p className='tracking'>
          We Bring Together Dynamic Mix Of Services & Crypto
           Wallet That Are Thoughtfully Designed To Make Your Crypto Exchange Easier.
        </p>

        </div>
     
        <div className='services-services12'>
          <div className='services-details22'>
           <img src={frame33} alt='textimonials ' className='services-details22' />
          </div>
           <br></br>
          <div className='services-details22'>
              <img src={frame33} alt='textimonials ' className='services-details22' />
          </div>
          <br></br>

          <div className='services-details22'>
              <img src={frame33} alt='textimonials ' className='services-details22' />
          </div>
           <br></br>
          <div className='services-details22'>
              <img src={frame33} alt='textimonials ' className='services-details22' />
          </div>
           <br></br>
          <div className='services-details22'>
              <img src={frame33} alt='textimonials ' className='services-details22' />
          </div>
           <br></br>
          <div className='services-details22'>
              <img src={frame33} alt='textimonials ' className='services-details22' />
          </div>
        </div>
       </section>
      <section className='traders-container-container2'> 
        <div className='traders-container'>
            <h3 className='traders-container-texts'>Frequently Asked Questions</h3>
               <p className='questions-tracking'>
                A List Of Question and Answers Related To
                A Specific Topic , Product, Services
                & Commom Customber Inquries.
              </p>
          </div>
         
      <section className='Questions-container'>
        <div className='Question-FREQ'>
          <div className='FREQ'>
            <div className='questions'>
              <p>How Does It Works ?</p> 
              <p className='vector-question'><img src={vector12} alt='vector' className='vector-FAQ10' /></p>
            </div>
            <div className='questions'>
              <p>What we offer to you?</p> 
              <p className='vector-question'><img src={vector12} alt='vector' className='vector-FAQ21' /></p>
            </div>
            <div className='questions'>
              <p>What Is a Crypto Currency Exchange ?</p> 
              <p className='vector-question'><img src={vector12} alt='vector' className='vector-FAQ32' /></p>
            </div>
            <div className='questions'>
              <p> How To Buy Crypto Currencies On Usdtmpay ?</p>
              <p className='vector-question'><img src={vector12} alt='vector' className='vector-FAQ43' /></p>
            </div>
            <div className='questions'>
              <p>How To Transfer Wallet Funds ?</p>
              <p className='vector-question'><img src={vector12} alt='vector' className='vector-FAQ54' /></p>
              </div>
          </div>
          <div className='FREQ'>
            <div className='questions'>
              <p>About USDT MPAY ?</p>
              <p className='vector-question'><img src={vector12} alt='vector' className='vector-FAQ1' /></p>
           </div>
            <div className='questions'>
              <p>How To Sell Crypto Currency ?</p> 
              <p className='vector-question'><img src={vector12} alt='vector' className='vector-FAQ2' /></p>
            </div>
            <div className='questions'>
              <p>How To Cash Out Wallet Funds ?</p>
              <p className='vector-question'><img src={vector12} alt='vector' className='vector-FAQ3' /></p>
            </div>
            <div className='questions'>
              How To Add Funds To Your MPAY Wallet ?
              <p className='vector-question'><img src={vector12} alt='vector' className='vector-FAQ4' /></p>
            </div>
            <div className='questions'>
              how to Reach Out Support Team ?
              <p className='vector-question'><img src={vector12} alt='vector' className='vector-FAQ5' /></p>
            </div>
          </div>
        </div>
         
      </section>
      </section>
       <section>
        <Footer />
       </section>
       
     </section>
     
     
     
     
     </>
  )
}

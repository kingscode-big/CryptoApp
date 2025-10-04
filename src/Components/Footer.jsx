import React from 'react'
import frame52 from  '../images/Frame 52.png'
 

export default function Footer() {
  return (
    <section>
        <div className='footer-container'>
          <div className='footer-start'>
            <h3>Ready to Start Trading Crypto?</h3>
              <p className='tracking'>Join thousands of traders buying and 
                selling cryptocurrencies on India's most trusted platform
            </p>
          </div>
           <div className='footer-start-des'>
            
          </div>
          <div className="footer-start-button">
            <button className='trade-start-button'>Buy Crypto Now</button>
          </div>

        </div>
        <div className='footer-container-content'>
            <div className='footer-content'>
                <div>
                    <div><h3 className='footer-header1'>USDTMPA</h3> </div>
                    <p className='footer-terms'>We are the best platform to buy and sell crypto,<br></br> 
                      offering secure, fast, and reliable trading. With real-time<br></br> 
                      prices, instant UPI deposits and withdrawals, and bank-level <br></br>
                      security, we make crypto trading simple and accessible for everyone.<br></br>
                    </p>
                    <div style={{display:'flex',marginLeft:'23px',marginTop:'10PX'}}>
                      <p><img src={frame52} alt='facebookicon' /></p> 
                       
                    </div>
                  
                   
                </div>
                <div className='Ft-Ft'> 
                <div className='footer-content-details'>
                    <ul>
                        <h3>Platform</h3>
                        <li className='footer-list-details'>Buy Crypto</li>
                        <li className='footer-list-details'>Sell Crypto</li>
                        <li className='footer-list-details'>Wallet</li>
                         
                    </ul>
                </div>
                <div className='footer-content-details'>
                    <ul>
                        <h3>Support</h3>
                        <li className='footer-list-details'>Help Center</li>
                        <li className='footer-list-details'>Contact Us</li>
                        <li className='footer-list-details'>Security</li>
                        <li className='footer-list-details'>Privacy Policy</li>
                        <li className='footer-list-details'>Terms of Service</li>
                    </ul>
                </div>
                <div  >
                    <ul>
                        <h3>Contact</h3>
                        <li className='footer-list-details'>support@cryptotrade.in</li>
                        <li className='footer-list-details'>+91 80-0000-0000</li>
                        <li className='footer-list-details'>Bangalore, India</li>
                        
                    </ul>
                </div>
                </div>
                
            </div>
            
             <div className='footer-description'>
                        <h3>Risk Disclaimer</h3>
                        <p>Trading and holding cryptocurrencies involves significant risk.
                            Prices of digital assets are highly volatile and may fluctuate rapidly.
                            Our platform only provides users with the ability to deposit, sell, and 
                            withdraw crypto; we do not provide financial advice, investment recommendations,
                            or guarantee of profits. Users are solely responsible for their trading decisions,
                            and by using this platform, you agree that we are not liable for any losses, damages, 
                            or risks arising from your crypto transactions. Always do your own research before trading.
                        </p>
                  </div>

                       <hr style={{marginRight:'150px',marginLeft:'150px',color:'green'}}></hr>   
       
                 
        </div>
        
       
    </section>
  )
}

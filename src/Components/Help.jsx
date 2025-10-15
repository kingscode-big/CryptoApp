import React from 'react'
import frame72 from '../Logos/Frame 7 (2).png'
import frame75 from '../Logos/Frame 7 (5).png'
import frame77 from '../Logos/Frame 7 (7).png'
import '../Styles/Help.css'
 

export default function Help() {
  return (
    <>
     <section>
        <br></br>
        <div className='help-container'>
         <div className='help-descrip'>
           <div className='help-us'>
             <p className='help-support2' > Home /<span>help & support</span>  </p>
            <h1 className='Help-contact-us-header2'>Help & Support</h1>
            <p className='help-texts'> We're here to help you succeed in your crypto journey. Find 
                answers to your questions or contact our expert support team.
            </p>
            <input type='search'  placeholder='Search for help articles, faq etc...' className='Help-search'></input>
           </div>
        </div>
        </div>
            
             <div className='help-contacts'>
                     <h2>Get In Touch</h2>
                    </div>
                   
                    <div className='help-services12'>
                  <div className='help-details22'>
                    <div className='help-icon1'>
                        <img src={frame75} alt='message-box' className='help-message-box'></img>
                        <p className='help-div-texts-header'>Live Chat</p>
                        <p className='help-div-texts'>Get instant help from our support team</p>
                        <p className='help-div-texts'>24/7 Available</p>
                        <button className='help-chat'>Start Chat</button>
                    </div>
                  
                  </div>
                  <div className='help-details22'>
                    <div className='help-icon1'>
                        <img src={frame72} alt='message-box' className='help-message-box'></img>
                        <p className='help-div-texts-header'>Email Support</p>
                        <p className='help-div-texts'>Send us a detailed message</p>
                        <p className='help-div-texts'>Response within 2-4 hours</p>
                        <button className='help-chat'>Send Email</button>
                    </div>
                  
                  </div>
        
                  <div className='help-details22'>
                      <div className='help-icon1'>
                        <img src={frame77} alt='message-box' className='help-message-box'></img>
                        <p className='help-div-texts-header'>Phone Support</p>
                        <p className='help-div-texts'>Speak directly with our experts</p>
                        <p className='help-div-texts'>Mon-Fri, 9AM-6PM IST</p>
                        <button className='help-chat'>Call Now</button>
                    </div>
                
            
                  </div>
                  
                  </div>
                    <br></br><br></br><br></br><br></br>
                   <div className='explore-help'>
                               <h2>Help Guides</h2>
                    </div>
                          <br></br><br></br><br></br>
                         <div className='help-services123'>
                                        <div className='help-details223'>
                                          <div className='help-icon123'>
                                  
                                              <p className='help--active-users1'>Security First</p>
                                              <p className='help--active-users2'>We prioritize the security of your assets with industry-leading 
                                                  encryption and multi-layer protection protocols.
                                              </p>
                                          </div>
                                        
                                        </div>
                                        <div className='help-details223'>
                                          <div className='help-icon123'>
                                      
                                              <p className='help--active-users1'> Innovation</p>
                                              <p className='help--active-users2'>Constantly evolving our platform with cutting-edge
                                                   technology to provide the best trading experience.
                                              </p>
                                            
                                          </div>
                                        
                                        </div>
                              
                                        <div className='help-details223'>
                                            <div className='help-icon123'>
          
                                              <p className='help--active-users1'>Customer Centric</p>
                                              <p className='help--active-users2'>We prioritize the security of 
                                                  your assets with industry-leading encryption and multi-layer protection protocols.
                                              </p>
                                          </div>
                                  
                                        </div>
                                        <div className='help-details223'>
                                            <div className='help-icon123'>
                              
                                              <p className='help--active-users1'>Excellence</p>
                                              <p className='help--active-users2'>Committed to delivering exceptional service and
                                                   maintaining the highest standards in the industry.
                                              </p>
                                               
                                          </div>
                                      
                                  
                                      </div>
                                        
                          </div>
                          
                          
                           
                  
     </section>
    </>
  )
}

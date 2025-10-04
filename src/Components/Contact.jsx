import React from 'react'
import frame72 from '../Logos/Frame 7 (2).png'
import frame75 from '../Logos/Frame 7 (5).png'
import frame77 from '../Logos/Frame 7 (7).png'
import vector14 from '../Logos/Vector (14).png'
import vector15 from '../Logos/Vector (15).png'
import vector16 from '../Logos/Vector (16).png'
import vector17 from '../Logos/Vector (17).png'
import vector18 from '../Logos/Vector (18).png'
import Footer from './Footer'
export default function Contact() {
  return (
    <>
   <section  className='contacts-container-container'>
      <div className='contacts-container'>
        <div className='contact-descrip'>
           <div className='contact-us'>
             <p className='help-support' > Home /<span>help & support</span>  </p>
            <h1 className='Hero-contact-us-header'>Contact Us</h1>
            <p className='contact-texts'>Have questions about crypto trading? Need help with your 
              account? Our expert support<br></br> team is here to help you 24/7.
            </p>
           </div>
        </div>
        
      </div>
         
            <div className='explore-contacts'>
             <h2>Feel Free To Contact US & Reach Us</h2>
            </div>
            <div className='contacts-details'>
             <p> Choose the contact method that works best for you.
               Our team is ready to assist with any questions or concerns.
            </p>
            </div>
            <div className='contacts-services12'>
          <div className='contacts-details22'>
            <div className='contact-icon1'>
                <img src={frame75} alt='message-box' className='contact-message-box'></img>
                <p className='contact-div-texts-header'>Live Chat</p>
                <p className='contact-div-texts'>Get instant help from our support team</p>
                <p className='contact-div-texts'>24/7 Available</p>
                <button className='contact-chat'>Start Chat</button>
            </div>
          
          </div>
          <div className='contacts-details22'>
            <div className='contact-icon1'>
                <img src={frame72} alt='message-box' className='contact-message-box'></img>
                <p className='contact-div-texts-header'>Email Support</p>
                <p className='contact-div-texts'>Send us a detailed message</p>
                <p className='contact-div-texts'>Response within 2-4 hours</p>
                <button className='contact-chat'>Send Email</button>
            </div>
          
          </div>

          <div className='contacts-details22'>
              <div className='contact-icon1'>
                <img src={frame77} alt='message-box' className='contact-message-box'></img>
                <p className='contact-div-texts-header'>Phone Support</p>
                <p className='contact-div-texts'>Speak directly with our experts</p>
                <p className='contact-div-texts'>Mon-Fri, 9AM-6PM IST</p>
                <button className='contact-chat'>Call Now</button>
            </div>
        
    
          </div>
          
          </div>
          <div className='contacts-form-container'>
            <div className='contacts-form'>
                <h2 className='form-details-header'>Send Us A Message</h2>
                <form className='from-inputs-header'>
                    <label className='form-label'>Full Name</label><br></br>
                    <input className='form-input' placeholder='Your Full Name'></input><br></br>
                    <label className='form-label' >Subject</label><br></br>
                    <input className='form-input' placeholder='Brief Description of Your Inquiry' ></input><br></br>
                    <label className='form-label'>Email ID</label><br></br>
                    <input className='form-input' placeholder='usdtmpay@gmail.com'></input><br></br>
                    <label className='form-label'>Category</label><br></br>
                    <input className='form-input' placeholder='Select Category'></input>
                    <br></br>
                    <label className='form-label'>Mesaage</label><br></br>
                    <textarea type='text' className='message-input'placeholder=''></textarea>
                </form>

            </div>
            <div className='contails-form-details1'>
                <div className='form-contacts-detailing-container1'>
                    <div className='contact-emails-div'>
                        <h3>Email</h3>
                        <p>support@cryptotrade.com
                          business@cryptotrade.com
                        </p>
                    </div>
                    <div className='contact-emails-div2'>
                        <h3>Phone</h3>
                        <p> +91 1800-123-4567
                            Mon-Fri, 9AM-6PM IST
                        </p>
                    </div>

                </div>
                <div className='form-contacts-detailing-container1'>
                     
                    
                    <div className='contact-emails-div2'>
                        <h3>Live Chat</h3>
                        <p> support@cryptotrade.com
                            business@cryptotrade.com
                        </p>
                    </div>
                    <div className='contact-emails-div2'>
                        <h3>Live Chat</h3>
                        <p> support@cryptotrade.com
                            business@cryptotrade.com
                        </p>
                    </div>
                 

                </div>
                <div className='form-contacts-detailing-container'>
                    <div className='contact-numbers-div'>
                    
                        <p><img src={vector14} alt='vector14' className='vector14' /> 123 Market Street, Suite 500, San Francisco, CA 94103</p>
                        <p><img src={vector15} alt='vector14' className='vector14' /> +1 (555) 123-4567</p>
                        <p><img src={vector16} alt='vector14' className='vector14' />us@cryptotrade.com</p>
                        <p><img src={vector17} alt='vector14' className='vector14' /> 123 Market Street, Suite 500, San Francisco, CA 94103</p>
                    </div>
                     

                </div>
                 <div className='form-contacts-detailing-container1'>
                     
                    
                    <div className='contact-emails-div2'>
                         <p><img src={vector18} alt='vector14' className='vector14' />24x7 Live chat</p>
                       
                         <p><img src={vector18} alt='vector14' className='vector14' />instant solution</p>
                       
                         <p><img src={vector18} alt='vector14' className='vector14' />personal manager</p>
                       
                    </div>
                    <div className='contact-emails-div2'>
                        <p><img src={vector18} alt='vector14' className='vector14' />Raise Ticket</p>
                       
                         <p><img src={vector18} alt='vector14' className='vector14' />Social media</p>
                       
                         <p><img src={vector18} alt='vector14' className='vector14' />Dedicated agent</p>
                        
 
                    </div>
                 

                </div>

            </div>
          </div>
          
          <Footer />
          
       
            
 
   </section>
   
   </>
  )
}

import React from 'react'
import frame72 from '../Logos/Frame 7 (2).png'
import frame75 from '../Logos/Frame 7 (5).png'
import frame77 from '../Logos/Frame 7 (7).png'
import vector15 from "../images/Vector (15).png"
import vector16 from "../images/Vector (16).png"
import vector17 from "../images/Vector (17).png"
import vector18 from "../images/Vector (18).png"
import vector19 from "../images/Vector (19).png"
import '../Styles/Helps.css'
import Footer from './Footer'
import "../Styles/Responsive UI/helpResponse.css"


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
                answers to your questions <br />or contact our expert support team.
              </p>
              <input type='search' placeholder='Search for help articles, faq etc...' className='Help-search'></input>
            </div>
          </div>
        </div>

        <div className='help-contacts'>
          <h2>Get In Touch</h2>
        </div>

        <div className='myHelp'>

          <div className='help-services12'>
            <div className='help-icon1'>
              <img src={frame75} alt='message-box' className='help-message-box'></img>
              <p className='help-div-texts-header'>Live Chat</p>
              <p className='help-div-texts'>Get instant help from our support team</p>
              <p className='help-div-texts'>24/7 Available</p>
              <button className='help-chat'>Start Chat</button>
            </div>



            <div className='help-icon1'>
              <img src={frame72} alt='message-box' className='help-message-box'></img>
              <p className='help-div-texts-header'>Email Support</p>
              <p className='help-div-texts'>Send us a detailed message</p>
              <p className='help-div-texts'>Response within 2-4 hours</p>
              <button className='help-chat'>Send Email</button>
            </div>




            <div className='help-icon1'>
              <img src={frame77} alt='message-box' className='help-message-box'></img>
              <p className='help-div-texts-header'>Phone Support</p>
              <p className='help-div-texts'>Speak directly with our experts</p>
              <p className='help-div-texts'>Mon-Fri, 9AM-6PM IST</p>
              <button className='help-chat'>Call Now</button>
            </div>




          </div>

        </div>
        <div className='help-contacts'>
          <h2>Help Guides</h2>
        </div>
        <div className='myCryptoDiv12'>
          <div className='myCryptoDiv1'>
            <div className='cryptoDiv'>
              <div className='cryptoTime'>
                <img src={vector15} />
                <p>10 mins read</p>
              </div>
              <h3 className='cryptoHeader'>Complete Beginner's Guide to Crypto Trading</h3>
              <p className='cryptoText'>Learn the basics of cryptocurrency<br />trading from scratch</p>
              <div className='cryptoButton'>
                <button>Read Guide</button>
                <img src={vector16} />
              </div>
            </div>
            <div className='cryptoDiv'>
              <div className='cryptoTime'>
                <img src={vector15} />
                <p>10 mins read</p>
              </div>
              <h3 className='cryptoHeader'>How to Secure Your Crypto Wallet</h3>
              <p className='cryptoText'>Best practices for keeping your cryptocurrency safe</p>
              <div className='cryptoButton'>
                <button>Read Guide</button>
                <img src={vector16} />
              </div>
            </div>
            <div className='cryptoDiv'>
              <div className='cryptoTime'>
                <img src={vector15} />
                <p>10 mins read</p>
              </div>
              <h3 className='cryptoHeader'>Understanding Crypto Market Analysis</h3>
              <p className='cryptoText'>Technical and fundamental analysis for crypto trading</p>
              <div className='cryptoButton'>
                <button>Read Guide</button>
                <img src={vector16} />
              </div>
            </div>
            <div className='cryptoDiv'>
              <div className='cryptoTime'>
                <img src={vector15} />
                <p>10 mins read</p>
              </div>
              <h3 className='cryptoHeader'>Tax Implication Of Crypto Trading In India</h3>
              <p className='cryptoText'>Everything you need to know about crypto taxation</p>
              <div className='cryptoButton'>
                <button>Read Guide</button>
                <img src={vector16} />
              </div>
            </div>
          </div>
        </div>

        <div className='help-contacts'>
          <h2>Contact Information</h2>
        </div>
        <div className='myContactDiv33'>
          <div className='myContactDiv22'>
            <div className='myContactDiv11'>
              <div className='myImg'>
                <img src={vector17} />
              </div>

              <div>
                <h3 className='myContactHeader'>Email</h3>
                <p className='myContactText'>support@cryptotrade.com</p>
                <p className='myContactText'>business@cryptotrade.com</p>
              </div>
            </div>
            <div className='myContactDiv11'>
              <div className='myImg'>
                <img src={vector18} />
              </div>
              <div>
                <h3 className='myContactHeader'>Phone</h3>
                <p className='myContactText'>+91 1800-123-4567</p>
                <p className='myContactText'>Mon-Fri, 9AM-6PM IST</p>
              </div>
            </div>
            <div className='myContactDiv11'>
              <div className='myImg'>
                <img src={vector19} />
              </div>
              <div>
                <h3 className='myContactHeader'>Live Chat</h3>
                <p className='myContactText'>support@cryptotrade.com</p>
                <p className='myContactText'>business@cryptotrade.com</p>
              </div>
            </div>
          </div>

        </div>



      </section>
      <div>
        <Footer />
      </div>
    </>
  )
}

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Images from './Images'

function Contact() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div class="Contact_image">
        <img src={Images.img11} alt='Artwork of Contact Page' />
      </div>
      <div class="all_contact">
        <div>
          <p class="contact_message">Send a Message</p>
        </div>
        <div class='contact_component'>
          <div class="Name_Email">
            <input placeholder='Name' />
            <input class="email" placeholder='Email' />
          </div>
          <div class='message_component' >
            <input placeholder='Message' />
          </div>
        </div>
        <div class='submit_component'>
          <button type='submit'>Send</button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
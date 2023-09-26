import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Images from "./Images";
import axios from "axios";

function Contact() {
  const [ fullName , setFullname] = useState("");
  const [ email , setEmail] = useState("");
  const [ message , setMessage] = useState("");


  const submitData = async(e)=>{
    e.preventDefault();
    try {
         await axios.post("http://localhost:5000/api/contact/details", {
          fullName,
          email,
          message
      });
    } catch (error) {
      console.error(error);
    }
    
  }



  return (
    <div>
      <div>
        <Header />
      </div>
      <div class="Contact_image">
        <img src={Images.img11} alt="Artwork of Contact Page" />
      </div>
      <div class="all_contact">
        <div>
          <p class="contact_message">Send a Message</p>
        </div>
        <div class="contact_component">
          <div class="Name_Email">
            <input placeholder="Name" value={fullName}  onChange={(e)=> setFullname(e.target.value)} />
            <input class="email" placeholder="Email" value={email}  onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div class="message_component">
            <input placeholder="Message" value={message}  onChange={(e)=> setMessage(e.target.value)} />
          </div>
        </div>
        <div class="submit_component">
          <button type="submit" onClick={submitData}>Send</button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;

import React from 'react'
import './contactus.css'

export default function Contact() {
  return (
      <div className="body">
    <div className='overall-div'>
    <div>
      <div className='getintouch'>
    <h2>Get in touch! </h2>
    <p className='intouch'>Contact us to make your enquiry today!</p>
</div>

<div>
    <div className='info-flex'>
        <button className='x-button'><img src='images/location.png' alt='location icon'/>
        {/* images/Hero-Image.png */}
        <p>25 Festac Close.</p></button>
    </div>

    <div className='info-flex'>
        <button className='x-button'><img src='images/phone.png' alt='phone icon'/>
        <p>+234 818 456 3998</p></button>
    </div>

    <div className='info-flex'>
        <button className='x-button'>
        <img src='images/mail.png' alt='mai'  />
        <p>hello@kingsmeal.com</p></button>
    </div> 

</div>

 <form>
    <p className='title'>Contact Form</p>
    <div className='form-divider'>
    <div className='flex-left'>
        <div>
            <label for="name">Your Name</label>
            <input type="text" placeholder="Enter your name" id="name"></input>
        </div>
        <div>
            <label for="name">Mail</label>
            <input type="mail" placeholder="Email" id="email"></input>
        </div>
        <div>
            <label for="name">Phone</label>
            <input type="number" placeholder="Phone Number" id="phone-number"></input>
        </div>
    </div>


    <p className='flex-right'>
        <label for="enquiry">Message</label>
        <textarea id="enquiry" name="enquiry"></textarea>
    </p>
    </div>
    

    <p>Services</p>

<div className='flex-buttons'>
    <div><button>Reservation</button></div>
    <div><button>Delivery</button></div>
    <div><button>Collection</button></div>
</div>

 
<button>Send Message</button>


</form> 



</div>


</div>
</div>
  )
}

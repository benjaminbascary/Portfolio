import React from 'react';
import "./Contact.css";
import Phone from "../../resources/phone.png"
import Email from "../../resources/mail.png"
import Github from "../../resources/github.png"
export const Contact = () => {
return (
  <div className='contact'>
    <div className='contact--bg'></div>
      <div className='contact--wrapper'>
        <div className='contact--left'>
          <h1 className='contact--title'>
            So... You want to contact me!
          </h1>
          <div className='contact--info'>
            <div className='contact--info--item'>
              <img className='icon' src={Phone} alt='icon'></img>
              <p>+54 9 11 59495066</p>
            </div>
            <div className='contact--info--item'>
              <img className='icon' src={Email} alt='icon'></img>
              benjaminbascary@gmail.com
            </div>
            <div className='contact--info--item'>
              <img className='icon' src={Github} alt='icon'></img>
              github.com/benjaminbascary
            </div>
          </div>
        </div>
        <div className='contact--right'>
          <h1># Let's talk!</h1>
          <div className='contact--profile--background'></div>
        </div>
      </div>
  </div>
  )
}

export default Contact;
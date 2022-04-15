import React from 'react';
import "./About.css";
import about from "../../resources/about.png"

export const About = () => {
  return (
  <div className='about'>
    <div className='about--left'>
      <div className='about--card'>
        <img src={about} className='about--picture' alt='about'></img>
      </div>
    </div>
    <div className='about--right'>
      <div className='about--right--text'>
        <h1 className='about--right--title'>About Me</h1>
        <h2 className='about--right--presentation'>
          Living in Patagonia. Always looking for a creative way do do things
        </h2>
      </div>
      
    </div>
  </div>
  )
}

export default About;

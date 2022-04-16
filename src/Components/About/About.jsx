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
        <h3 className='about--right--presentation'>
          I Love working with <strong>JavaScript</strong> and <strong>React</strong>.
        </h3>
        <h2 className='about--right--presentation'>
          Living in Patagonia. On my spare time I am a photographer. I consider myself a proactive person. Speak english and french.
        </h2>
        <h2 className='about--right--presentation'>
          When Im not at home, I am at Comahue National University.
        </h2>
        <h2 className='about--right--presentation'>
          People person.
        </h2>
      </div>
      
    </div>
  </div>
  )
}

export default About;

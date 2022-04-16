import React from 'react';
import "./Footer.css";

export const Footer = () => {
  return (
    <div className='footer'>
        <a className="footer--link"href='https://www.linkedin.com/in/benjamin-bascary/' target="_blank" rel='noreferrer'>LinkedIn</a>
        <a className="footer--link" href='https://www.github.com/benjaminbascary/' target="_blank" rel='noreferrer'>GITHUB</a>
        <p className='footer--text'>Cellphone: +54 9 1159495066</p>
    </div>
  );
};

export default Footer;

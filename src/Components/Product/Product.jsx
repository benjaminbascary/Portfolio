import React from 'react';
import "./Product.css";

export const Product = ({ link, img }) => {
  return (
    <div className='product'>
      <div className='browser'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>
      <a className='link' href={link} target="_blank" rel='noreferrer'>
        <img className='product--image' src={img} alt="img"></img>
      </a>
    </div>
    
  )
};

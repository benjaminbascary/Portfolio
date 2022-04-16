import React from 'react';
import { Product } from '../Product/Product';
import "./ProductList.css";
import { products } from '../../Products/products';

export const ProductList = () => {
  return (
    <div className='product--list'>
      <div className='product--texts'>
        <h1 className='product--list--title'>In constant skill development</h1>
        <p className='product--list--subtitle'>These are my main projects:</p>
        <div className='products'>
          {products.map(eachProduct => {
            return <Product key={eachProduct.key} img={eachProduct.img} link={eachProduct.link}/>
          })}
        </div>
        <div className='links'>
          <div className='product--description'>
            <h4><strong>PokeDex</strong></h4>
            <p><i>API consumption</i></p>
            <p><i>React</i></p>
            <p><i>Express</i></p>
            <br></br>
            <a href='https://github.com/benjaminbascary/Pokedex_React' target="_blank" rel="noreferrer">Repository</a>
          </div>
          <div className='product--description'>
            <h4><strong>Issue Tracker</strong></h4>
            <p><i>Mongo</i></p>
            <p><i>Express</i></p>
            <p><i>React</i></p>
            <br></br>
            <a href='https://github.com/benjaminbascary/issue_tracker_mern_portfolio' target="_blank" rel="noreferrer">Repository</a>
          </div >
          <div className='product--description'>
            <h4><strong>UNESCO hackatón</strong></h4>
            <p><i>Colaborative Project (in progress)</i></p>
            <p><i>React</i></p>
            <p><i>Python</i></p>
            <br></br>
            <a href='https://icts-for-indigenous-languages.hackerearth.com/#overview' target="_blank" rel="noreferrer">Link</a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

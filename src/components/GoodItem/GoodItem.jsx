import React from 'react'
import './GoodItem.css';
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

function GoodItem({product}) {
   const {addToCart, removeFromCart} = useContext(ShopContext);

  return (
    <div className="good-item">
      <div className='good-item_image'>
         <img src={product.path} alt={product.name} />
      </div>
      <div className='good-item_info'>
         <h3>{product.name}</h3>
         <div className="good-item_cost">
            <p>${product.cost}</p>
            <div className="good-item_buttons">
               <button type='button' onClick={() => removeFromCart(product)}>-</button>
               <button type='button' onClick={() => addToCart(product)}>+</button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default GoodItem
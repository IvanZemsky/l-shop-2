import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './GoodCart.css';

function GoodCart({cartProduct}) {
   const {addToCart, removeFromCart} = useContext(ShopContext);

  return (
    <div className="cart-item">
      <div className='cart-item_image'>
         <img src={cartProduct.path} alt={cartProduct.name} />
      </div>
      <div className='cart-item_info'>
         <h3>{cartProduct.name}</h3>
         <div className="cart-item_cost">
            <p className='cart-item_amount'>Amount: {cartProduct.amount}</p>
            <div className="cart-item_buttons">
               <button type='button' onClick={() => removeFromCart(cartProduct)}>-</button>
               <button type='button' onClick={() => addToCart(cartProduct)}>+</button>
            </div>
         </div>
         <p>${cartProduct.cost * cartProduct.amount}</p>
      </div>
    </div>
  )
}

export default GoodCart
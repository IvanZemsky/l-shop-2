import React from 'react'
import {Link} from 'react-router-dom'
import './GoodItem.css';

function GoodItem({product}) {
  return (
    <div className="good-item">
      <Link to="goodpage">
         <img src={product.path} alt={product.name} />
      </Link>
      <div className='good-item_info'>
         <h3>{product.name}</h3>
         <div className="good-item_cost">
            <p>${product.cost}</p>
            <div className="good-item_buttons">
               <button type='button'>-</button>
               <button type='button'>+</button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default GoodItem
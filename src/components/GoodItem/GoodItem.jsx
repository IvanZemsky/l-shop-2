import React from 'react'
import {Link} from 'react-router-dom'

function GoodItem({product}) {
  return (
    <div className="good-item">
      <Link to="goodpage">
         <img src={product.path} alt={product.name} />
      </Link>
      <div className='good-item_info'>
         <h3>{product.name}</h3>
         <p>${product.cost}</p>
         <button type='button'>-</button>
         <button type='button'>+</button>
      </div>
    </div>
  )
}

export default GoodItem
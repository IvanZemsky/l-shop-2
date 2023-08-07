import React from 'react'
import {products} from '../../products'
import GoodItem from '../../components/GoodItem/GoodItem'
import './Shop.css';

function Shop() {
  return (
    <div className='shop'>
      {products.map((product, i) => <GoodItem key={i} product={product}/>)}
    </div>
  )
}

export default Shop
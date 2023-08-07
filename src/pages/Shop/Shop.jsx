import React from 'react'
import {products} from '../../products'
import GoodItem from '../../components/GoodItem/GoodItem'

function Shop() {
  return (
    <div className='shop'>
      {products.map((product, i) => <GoodItem key={i} product={product}/>)}
    </div>
  )
}

export default Shop
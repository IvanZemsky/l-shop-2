import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import GoodCart from '../../components/GoodCart/GoodCart'

const Cart = () => {
  const {cartProducts} = useContext(ShopContext);

  return (
    <div className="cart">
      {cartProducts.length > 0 ? (
        cartProducts.map((cartProduct, i) => (
        <GoodCart key={i} cartProduct={cartProduct}/>
      ))
      ) : (
        <p className='cart-message'>
          В корзине нет товаров
        </p>
      )}
    </div>
  )
}

export default Cart
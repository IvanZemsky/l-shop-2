import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
         <li>
            <Link to="/">Каталог</Link>
         </li>
         <li>
            <Link to="/cart">Корзина</Link>
         </li>
      </ul>
    </nav>
  )
}

export default Navbar
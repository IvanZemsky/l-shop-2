import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import { ShopProductsContext } from './context/shop-context';

function App() {
  return (
    <ShopProductsContext>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Shop />}/>
          <Route path="cart" element={<Cart/>} />
        </Routes>
      </div>
    </ShopProductsContext>
  );
}

export default App;

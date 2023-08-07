import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import GoodPage from './pages/GoodPage/GoodPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Shop />}/>
        <Route path="cart" element={<Cart/>} />
        <Route path="goodpage" element={<GoodPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

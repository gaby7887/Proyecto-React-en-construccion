import React from 'react';
import ItemDetailContainer from './Container/ItemDetailContainer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Component/Views/Home';
import Navigation from './Component/Navigation';
import Error from './Component/Views/Error';
import ItemListContainer from './Container/ItemListContainer';
import Cart from './Component/Cart/Cart';
import { CartProvider} from './Context/CartContext';
//import ItemDetail from './Component/ItemDetail/ItemDetail';



const App = () => {
  return (
  
    <>
    <CartProvider>
      <Router>
        <div>
          <Navigation />
        </div> 

        <Routes>
          <Route path='/' element={<Home />} />   
          <Route path='/cart' element={<Cart />} />    
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:categoria' element={<ItemListContainer />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      </CartProvider>
      
    </>
 
  )
};

export default App;

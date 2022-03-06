import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import SliderCart from './SliderCart';

const CartWidget = () => {
  const {contador} = useContext(CartContext)

  return (

    <>

     <SliderCart />
    
    <button>{contador()}</button>
    
    </>
   
  )
};

export default CartWidget;

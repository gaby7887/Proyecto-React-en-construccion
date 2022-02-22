import React from 'react';

import SliderCart from './SliderCart';

 //return <img className='logoCarrito' src={IconoCart} alt="logo" />


const CartWidget = () => {
  const tachoDeBasura = () => {
    
  }
  return (
    <>
    <button onClick={tachoDeBasura}><i class="fas fa-trash-alt"></i></button>
    <SliderCart />
    </>
   
  )
};

export default CartWidget;

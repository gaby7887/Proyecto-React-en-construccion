import React from 'react';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget.js';

const NavBar = () => {
  return (
      <>  
      <nav className='NavBar'>
          <CartWidget />
      </nav>
      </>
  )
};

export default NavBar;


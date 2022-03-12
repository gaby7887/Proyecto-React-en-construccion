import React, {useState} from 'react';
import './SliderCart.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export default function SliderCart() {
  const [state, setState] = useState({
                                        right: false,
  });

  const {cart, removeItems, clearItems, total, contador} = useCartContext()
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ right: open });
  };
  

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}    
    >
   
      <List>
      {cart.length === 0 ? <h2>No hay productos<br></br> en el carrito</h2> : 
           cart.map((x) => {
             return <div className='slideCard'>
               <img className='imagenCarrito' src={x.img} alt="logo"></img>
               <div>
               <p>Nombre: {x.titulo}</p>
               <p>Precio: <span className='span'>${x.precio}</span></p>
               <p>Cantidad: <span className='span'>$ {x.qty}</span></p>
               <button className='btn shop' onClick={() => {
                  removeItems(x.id)
               }
                 }><i class="fas fa-trash-alt"></i></button>
                </div>
             </div>
                          
                })
}
                       
           <h4>Total: ${total()}</h4> 
           <button className='btn shop' onClick={clearItems}><i className="fas fa-trash-alt"></i>Vaciar Carrito</button> 
           {cart.length > 0 &&  <Link to='/cart'><button className='btn shop' >Terminar compra</button></Link>}             
      </List>     
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          <i className="fas fa-shopping-cart"></i>
          <span className='span'>{contador()}</span>
          </Button>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          
        </React.Fragment>
       
      ))}
    </div>
  );
}

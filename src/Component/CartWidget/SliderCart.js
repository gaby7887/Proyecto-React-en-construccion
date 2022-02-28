import React, {useState} from 'react';
import './SliderCart.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IconoCart from "../../Imagenes/IconoCart.png";
import { useCartContext } from '../../Context/CartContext';




export default function SliderCart() {
  const [state, setState] = useState({
                                        right: false,
  });

  const {cart, removeItems, clearItems, total} = useCartContext()
  

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
             return <div>
               <img className='imagenCarrito' src={x.imagen} alt="logo"></img>
               <p>Nombre: {x.title}</p>
               <p>Precio: ${x.precio}</p>
               <p>Cantidad: {x.qty}</p>
               <button onClick={() => {
                  removeItems(x.id)
               }
                 }><i class="fas fa-trash-alt"></i></button>
             </div>
             
             
           })
}
                       
           <h4>Total: ${total()}</h4> 
           <button onClick={clearItems}><i class="fas fa-trash-alt"></i></button>              
      </List>
      
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><img className='logoCarrito' src={IconoCart} alt="logo"/></Button>
          
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

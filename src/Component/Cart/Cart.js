import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {
 const {cart, removeItems, clearItems, total} = useContext(CartContext)
 console.log(cart)    

  return (
   
    <>
    {cart.length === 0 ? <h2>No hay productos en el carrito</h2> : 
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
    </> 
  )
}
export default Cart;
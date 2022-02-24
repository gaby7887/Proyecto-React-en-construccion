import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {
 const {cart, addItem, removeItems, clearItems, total} = useContext(CartContext)
 console.log(cart)

 const [product, setProduct] = useState()

const tachoDeBasura = () => {
  console.log(product)
  
  setProduct([]);
}     

  return (
   
    <>
    {cart.length === 0 ? <h2>No hay productos<br></br> en el carrito</h2> : 
           cart.map((x) => {
             <div>
               <img className='imagenCarrito' src={x.imagen} alt="logo"></img>
               <p>Nombre: {x.title}</p>
               <p>Precio: ${x.precio}</p>
               <p>Cantidad: {x.qty}</p>
               <button onClick={tachoDeBasura}><i class="fas fa-trash-alt"></i></button>
             </div> } )
                       
           <h4>Total: ${total()}</h4> 
    </> 
  )

export default Cart;
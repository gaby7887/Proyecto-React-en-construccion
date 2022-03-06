import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
 const {cart, removeItems, clearItems, total} = useContext(CartContext)
 //console.log(cart)  
 //console.log(total)  

 return (
   
  <>
  <ToastContainer/>
   <div id="page">
    <table id="cart" >
      <thead>
        <tr>
          <th className="first">Photo</th>
          <th className="second">Qty</th>
          <th className="third">Product</th>
          <th className="fourth">Line Total</th>
          <th className="fifth">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.length === 0 ? <h2>No hay productos en el carrito</h2> 
          :
          cart.map((item)=>{
           return <tr className="productitm">
            
            <td><img src={item.img} alt="logo" className="thumb"/></td>
            <td><input type="number" value={item.qty} min="0" max="99" className="qtyinput"/></td>
            <td>{item.titulo}</td>
            <td>$ {item.precio}</td>
            <td><button onClick={()=> removeItems(item.id, toast)}><i className="fas fa-trash-alt"></i></button></td>
          </tr>
          })
          
        }

        <tr className="totalprice">
          <td className="light">Total:</td>
          <td colspan="2">&nbsp;</td>
          <td colspan="2"><span className="thick">$ {total()}</span></td>
        </tr>
        
       
        <tr className="checkoutrow">
          <td colspan="5" className="checkout">
          <Link to='/compra'><button id="submitbtn">Checkout Now!</button></Link> 
          <Link to='/'><button id="submitbtn">Seguir comprando</button></Link> 
          <button onClick={clearItems} id="submitbtn">vaciar carrito</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  </> 
)
}
export default Cart;
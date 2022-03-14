import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
 const {cart, removeItems, clearItems, total} = useContext(CartContext)
 const [promotion, setPromotion] = useState(0) 

 const handChange=(e)=>{
   let calculo = (total()-(total()*0.10))
   e.target.value.toUpperCase() === 'PRIMERA10' && setPromotion(calculo)
 }

 return (
   
  <>
  <ToastContainer/>
  <div className='contenedorCart'>
        <div className="basket">
          <div className="basket-module">
            <label for="promo-code">Ingrese codigo promocional</label>
            <input id="promo-code" type="text" name="promo-code" maxlength="10" className="promo-code-field" onChange={handChange}/>
            <button className="promo-code-cta">Aplicar</button>
          </div>
          <div className="basket-labels">
            <ul>
              <li className="item item-heading">Item</li>
              <li className="price">Precio</li>
              <li className="quantity">Cantidad</li>
              <li className="subtotal">Subtotal</li>
            </ul>
          </div>
        {
          cart.length === 0 ? <h2>No hay productos en el carrito</h2> 
          :
          cart.map((item)=>{
            return <div key={item.id} className="basket-product">
            <div className="item">
              <div className="product-image">
                <img src={item.img} alt="logo" className="product-frame" />
              </div>
              <div className="product-details">
                <h1><strong><span className="item-quantity">{item.qty}</span>{item.titulo}</strong></h1>
              </div>
            </div>
            <div className="price">{item.precio}</div>
              <div className="quantity">
                <input type="number" value={item.qty} min="1" className="quantity-field" />
              </div>
              <div className="subtotal">{(item.precio/1.21).toFixed(2)}</div>
                <div className="remove">
                  <button onClick={()=> removeItems(item.id, toast)}><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
            })
          
        }

</div>
        <aside>
          <div className="summary">
            <div className="summary-total-items"><span className="total-items"></span></div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Subtotal</div>
              <div className="subtotal-value final-value" id="basket-subtotal">{(total()/1.21).toFixed(2)}</div>
              <div className="summary-promo">
                <div className="promo-title">Promoción</div>
                <div className="promo-value final-value" id="basket-promo">{promotion > 0 ? total()*0.10 : 0}</div>
              </div>
            </div>
            <div className="summary-total">
              <div className="total-title">Total</div>
              <div className="total-value final-value" id="basket-total">{promotion === 0 ? total() : promotion } </div>
            </div>
            <div className="summary-checkout">
            <Link to='/compra'><button className="checkout-cta">Checkout</button></Link>
            <button onClick={clearItems} className="checkout-cta">Vaciar</button>
            <Link to='/'><button className="checkout-cta">Seguir comprando</button></Link> 
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
   
export default Cart;
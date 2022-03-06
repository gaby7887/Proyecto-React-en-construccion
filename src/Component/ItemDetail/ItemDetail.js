import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = ({productoData, onAdd, open}) => {

  const {stock, id, titulo, precio, img} = productoData;
   
  return (
    <div key={id} className="container py-md-5">
    <div className="cuerpo-detail">
        <div className="row">
            <div className="desc1-izq col-md-6">
                <img src={img} className="img-fluid" alt="producto"/>
            </div>
            <div className="desc1-derch col-md-6 pl-lg-3">
                <h2>{titulo}</h2>
                <h5>Precio: $ {precio}</h5>
                <div className="disponible mt-3">
                <button className="btn shop" ><i className="fas fa-heart"></i></button>
                {
                  open ? <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                  :
                  <Link to='/cart'><button className="btn shop">Terminar compra</button></Link>
                }
                </div>
                <div className="buscar-desc mt-5">
                    <div className="buscar text-left">
                        <h4>Buscar Producto:</h4>
                        <div className="social-ficons mt-4">
                            <ul>
                                <li><a href="/"><span className="fab fa-facebook-f"></span> Facebook</a></li>
                                <li><a href="/"><span className="fab fa-twitter"></span> Twitter</a></li>
                                <li><a href="/"><span className="fab fa-google-plus-g"></span>Google</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
        <div className="row sub-para-w3pvt my-5">

            <h3 className="shop-detail">{titulo}</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>

            <p className="mt-3 italic-blue">Consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.</p>
        </div>
    </div>
  
</div> 
);
}
    

export default ItemDetail;



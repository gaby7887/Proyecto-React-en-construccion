import React from 'react';
import logo from '../../Imagenes/logo.png';
import swal from 'sweetalert'


const Footer = () => {

    const infoAlerta=()=>{
        swal("Informacion sobre envíos", `Contamos con tres opciones

        Envío a domicilio Delivery (exclusivo Mar del Plata): comprá y recibí sin moverte de tu casa en 48 horas hábiles.
        
        Retiro en tienda TiendaOnline (gratis): podés seleccionar entre nuestras sucursales y recoger tu pedido sin cargo. 
        Recordá que la única persona autorizada a retirar la orden es el titular de la compra presentando su DNI.
        Retiro en Sucursal OCA: podés optar por retirar tu pedido en cualquier sucursal OCA de la República Argentina. 
        Enviaremos un Nº de tracking para que puedas realizar el seguimiento de tu orden.
        Envío a domicilio OCA: realizamos envíos a todo el país a través del correo. 
        También enviaremos un Nº de seguimiento para que rastrees tu orden.
        ¡Envío gratis con tu compra superior a $20.000!`);
    }

    const cambiosAlerta=()=>{
        swal("Cambios y devoluciones", `Tenés 30 días corridos para devolverlo desde que te llegó.` );
    }
    
    const pagosAlerta=()=>{
        swal(
        "Formas de pago", `Podes abonar con Mercado Pago utilizando tarjetas de crédito, débito o en efectivo a través de cadenas de pago.

        Tarjetas de crédito/débito: verás el importe descontado en el resumen correspondiente al próximo cierre de tarjeta. 
        Contamos con cuotas sin interés y promociones bancarias.
        Nuestro sistema de cobranza es 100% seguro. Toda la información es encriptada por Mercado Pago.`);
    }
    
  return (
      
    <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="full">
                            <div className="logo_footer">
                                <a href="http://localhost:3000/">
                                    <img width="210" src={logo} alt="#" />
                                </a>
                            </div>
                            <div className="information_f">
                                <p><strong>ADDRESS:</strong> Calle 163, Hudson CABA</p>
                                <p><strong>TELEPHONE:</strong> +54 11 22334455</p>
                                <p><strong>EMAIL:</strong> tiendaOnline@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="widget_menu">
                                            <h3>Menu</h3>
                                            <ul>
                                                <li><a href="http://localhost:3000/">Home</a></li>
                                                <li><a href="http://localhost:3000/category/indumentaria">Indumentaria</a></li>
                                                <li><a href="http://localhost:3000/category/calzado">Calzado</a></li>
                                                <li><a href="http://localhost:3000/category/accesorios">Accesorios</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="widget_menu">
                                            <h3>Account</h3>
                                            <ul>
                                                
                                                <li><span onClick={()=>infoAlerta()}>Información sobre envíos</span></li>
                                                <li><span onClick={()=>cambiosAlerta()}>Cambios y devoluciones</span></li>  
                                                <li><button onClick={()=>pagosAlerta()}>Formas de Pago</button></li>                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="widget_menu">
                                    <h3>Newsletter</h3>
                                    <div className="information_f">
                                        <p>Suscríbete a nuestro boletín de noticias y obtén actualizaciones</p>
                                    </div>
                                    <div className="form_sub">
                                        <form>
                                            <fieldset>
                                                <div className="field">
                                                    <input type="email" placeholder="Enter Your Mail" name="email"/>
                                                        <input type="submit" value="Subscribe"/>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
       
  )
}

export default Footer
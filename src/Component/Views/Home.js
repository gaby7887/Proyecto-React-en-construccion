import React from 'react';
import ItemListContainer from '../../Container/ItemListContainer';
/*import asics from '../../Imagenes/asics.jpg';
import nike from '../../Imagenes/nike.jpg';
import fila from '../../Imagenes/fila.jpg'*/

const Home = () => {
  return (
      <div>
         <Banner />
         <Section />
         <ItemListContainer />
      </div>
  );
};

export default Home;

export const Banner=()=>{
  return(
    <div className="breadcrumb-banner-area ptb-150 bg-img-3 bg-opacity">
			<div className="container">
				<div className="row">
					<div className="breadcrumb-text">
						<div className="breadcrumb-menu">
                     <p className='slogan'>La motivación es lo que te pone en marcha, 
                                 y el hábito es lo que hace que sigas...</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export const Section = () => {
  return(
    <section className="why_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Por qué comprar con nosotros
               </h2>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="box ">
                     <div className="img-box">
                     <i className="fas fa-shipping-fast"></i>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Envio Rapido
                        </h5>
                        <p>
                           Lorem Ipsum available
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="box ">
                     <div className="img-box">
                      <i className="fas fa-comment-dollar"></i>
                     </div>
                     <div className="detail-box">
                        <h5>
                           Envío gratis
                        </h5>
                        <p>
                           Lorem Ipsum available
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="box ">
                     <div className="img-box">
                     <i className="fas fa-check-circle"></i>
                     </div>
                     <div className="detail-box">
                        <h5>
                          Mejor Calidad
                        </h5>
                        <p>
                            Lorem Ipsum available
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}

/*export const Carrusel = () => {
   return (
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={asics} id="asics" class="d-block" alt="logo" width={50} />
    </div>
    <div class="carousel-item">
      <img src={nike} id="nike" class="d-block" alt="logo" width={50} />
    </div>
    <div class="carousel-item">
      <img src={fila} id="fila" class="d-block" alt="logo" width={50} />
    </div>
  </div>
</div>
   )
}*/
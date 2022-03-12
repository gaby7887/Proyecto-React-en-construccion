import React from 'react';
import ItemListContainer from '../../Container/ItemListContainer';

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
              <p className='slogan'>La motivación es lo que te pone en marcha, y el hábito es lo que hace que sigas...</p>
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

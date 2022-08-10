import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './IntroHome.css'
import 'animate.css';


export default function SaludoHome() {
  return (
    <>
      <div className="home-saludo text-warning">
        <h1 className="text-warning fw-bold">Bienvenido a Weekend Delivery</h1>
        <h4 className="p-home animate__animated animate__fadeInLeft">
        Weekend Delivery - Servicio de bebidas a domicilio, pedí tus combos de escabio y disfrutá! Los mejores precios, las mejores promociones.
        </h4>
      </div>
      <div className="carrouselHome">
        <Carousel fade>
            <Carousel.Item>
                 <img 
                    className="d-block mx-auto img-fluid col-3"
                    src= 'https://res.cloudinary.com/dgvms5lfn/image/upload/v1660170630/ABSOLUT_epeven.png'
                    alt="Vodka Absolut"
                    style={{height:"25em", width:"25em", borderRadius:"20%"}}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning bg-dark">Vodkas</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                 <img 
                    className="d-block mx-auto img-fluid col-3"
                    src= 'https://res.cloudinary.com/dgvms5lfn/image/upload/v1660172905/20-1655622876_p9xnvo.jpg'
                    alt="Vino Tinto"
                    style={{height:"25em", width:"25em", borderRadius:"20%"}}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning bg-dark">Vinos Tintos</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                 <img 
                    className="d-block mx-auto img-fluid col-3"
                    src= 'https://res.cloudinary.com/dgvms5lfn/image/upload/v1660173021/Vino-blanco-malvasia_sapusw.png'
                    alt="Vino Blanco"
                    style={{height:"25em", width:"25em", borderRadius:"20%"}}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning bg-dark">Vinos Blancos</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                 <img 
                    className="d-block mx-auto img-fluid col-3"
                    src= 'https://res.cloudinary.com/dgvms5lfn/image/upload/v1660173087/png-transparent-gin-distilled-beverage-wine-distillation-bombay-sapphire-wine-cinnamon-alcoholic-beverage-gin-and-tonic_lh0cfc.png'
                    alt="Gin"
                    style={{height:"25em", width:"25em", borderRadius:"20%"}}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning bg-dark">Gins</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                 <img 
                    className="d-block mx-auto img-fluid col-3"
                    src= 'https://res.cloudinary.com/dgvms5lfn/image/upload/v1660173207/D_NQ_NP_942477-MLA44839755696_022021-O_ngl1nf.jpg'
                    alt="Cerveza"
                    style={{height:"25em", width:"25em", borderRadius:"20%"}}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning bg-dark">Cervezas</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                 <img 
                    className="d-block mx-auto img-fluid col-3"
                    src= 'https://res.cloudinary.com/dgvms5lfn/image/upload/v1660173285/images_emrugk.jpg'
                    alt="first slide"
                    style={{height:"25em", width:"25em", borderRadius:"20%"}}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning bg-dark">Bebidas</h3>
                </Carousel.Caption>
            </Carousel.Item>   
        </Carousel>
      </div>
    </>
  );
}

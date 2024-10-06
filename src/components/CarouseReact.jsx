import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/Components/CarouselReact.css';
import img from '../Images/fondoPalmeras.jpg';
import img2 from '../Images/interiorOficina.jpg';


const images = [img, img2]
const CarouselReact = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,/*500 default*/ 
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000 // Cambiar cada 3 segundos
    };
  
    return (
      <div className='carousel-react'>

      <Slider className='slider'{...settings}>
        {images.map((image, index) => (
          <div className="container-img" key={index}>
            {console.log(image)}
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Slider>
      </div>
    );
  };
  
  export default CarouselReact;
  
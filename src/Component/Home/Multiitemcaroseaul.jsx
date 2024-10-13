import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick' 
import CaroselItem from './CaroseulItem'
import { topMeels } from './Meel';
const ItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:2000,
        arrows:false
      };
    return (
        <div>
          <Slider {...settings}>
            {topMeels.map((item) => (
            <CaroselItem image={item.image} title={item.title}/>
        ))}
          </Slider>
        </div>
    )
}

export default ItemCarousel
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { Meels } from "./Meels";
import CaroseulItem from "./CaroseulItem";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay:true,
    autoplayspeed: 2000,
    arrows:false

  };
const Itemcas = () => {
    return (
        <div>
             <Slider {...settings}>
                {Meels.map((item)=>(
                    <CaroseulItem image={item.image} title={item.title}/>
                    ))}
             </Slider>
        </div>
    )
}
export default Itemcas
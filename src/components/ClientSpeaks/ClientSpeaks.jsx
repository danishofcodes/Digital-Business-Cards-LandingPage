import React, { useRef } from 'react';
import ClientSpeakCard from './ClientSpeakCard/ClientSpeakCard';
import Slider from "@ant-design/react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './client-speaks.css'
export default function ClientSpeaks() {

  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='custom-container mb-4'>
      <h3 className="title-2 poppins-bold mb1">
        Client<span className="highlighted"> Experiences</span>
      </h3>

      <div className="client-speaks-container">
        <button className='slider-button nobg cursor-pointer' onClick={() => sliderRef.current.slickPrev()}><FontAwesomeIcon icon={faChevronLeft}/></button>


        <div className="client-speaks-slider">
          <Slider ref={sliderRef} {...settings}>
            <ClientSpeakCard />
            <ClientSpeakCard />
            <ClientSpeakCard />
            <ClientSpeakCard />
            <ClientSpeakCard />
            <ClientSpeakCard />
          </Slider>
        </div>
        <button  className='slider-button nobg cursor-pointer' onClick={() => sliderRef.current.slickNext()}><FontAwesomeIcon icon={faChevronRight}/></button>

      </div>
    </div>
  );
}

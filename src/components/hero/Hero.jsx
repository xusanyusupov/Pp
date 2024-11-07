import React, { useRef,useState} from "react";
import "../hero/hero.scss";
// img st 
import heroIMG from "../../assets/heroImg.svg"
// img en 

// swiper st
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Autoplay, Pagination } from "swiper/modules"
// swiper en 

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="swipper">
            <Swiper loop={true} 
            autoplay={{
                delay:2000,
                disableOnInteraction: false
            }} 
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Navigation,Autoplay,Pagination]} className="carousel">
                <SwiperSlide>
                    <div className="slide__one">
                        <div className="slide__text">
                            <p>15% off all pendant lights until</p>
                            <b>February 5th</b>
                        </div>
                        <div className="slide__img-1">
                            <img src={heroIMG} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__one">
                    {/* text  */}
                    <div>

                    </div>
                    {/* rasm  */}
                    <div>

                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
                <SwiperSlide>5</SwiperSlide>
            </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;

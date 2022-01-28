import Image from "next/image"

import style from "../../styles/portfolio-carousel.module.scss"
import port from "../../styles/portfolio-posts.module.css"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar"
import "swiper/css/navigation"

// import Swiper from "swiper-babel"
import SwiperCore, {
    Autoplay,Navigation,Scrollbar
  } from 'swiper';

export default function Product({images, title}) {
    SwiperCore.use([Autoplay,Navigation,Scrollbar]);

	return (
        <>
           
    <div className={style["gallery"]}>
    {title &&  <div className={`${port["post-title"]}`}>
                        {title}
                    </div>}
        {images &&
            <Swiper scrollbar={{
            "hide": true
                }} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }} navigation={true} className="mySwiper">
                    
                    {images.map(image => (
                        image.gallery == true &&
                            <>
                                
                                <SwiperSlide>
                                    <Image 
                                        src={image.node.sourceUrl}
                                        layout="fill"
                                        objectFit="cover"/>
                                </SwiperSlide>
                            </>
                        // : ""
                    ))
                    }
            </Swiper>
        }
    </div>
    </>
    
	)
}

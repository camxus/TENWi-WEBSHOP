import Image from "next/image"

import style from "../../styles/portfolio-carousel.module.scss"

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

export default function Product({images}) {

    // const swiper = new Swiper(".swiper-container", {
    //     speed: 900,
    //     loop: true,
    
    //     // If we need pagination
    //     pagination: {
    //         el: ".swiper-pagination"
    //     },
    
    //     // Navigation arrows
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev"
    //     }
    // });
    
    // install Swiper modules
    SwiperCore.use([Autoplay,Navigation,Scrollbar]);

	return (
        <>
            {/* {images ?
                images.map(image => {
                    images.gallery === true ?
                        <Image
                        src={image.node.sourceUrl}
                        layout="fill"></Image>

                        : ""
                })
                : ""
            } */}
            {/* <!--
    Loaded in JS and CSS from cdn
    - https://unpkg.com/swiper/swiper-bundle.min.js
    - https://unpkg.com/swiper/swiper-bundle.min.css
-->*/}
    {/* {images ? */}
        {/* // <!-- Slider main container -->  */}
            {/* <div className={style["swiper-container"]}> */}
            {/* <!-- Additional required wrapper --> */}
            {/* <div className={style["swiper-wrapper"]}> */}
                {/* <!-- Slides --> */}
                {/* <div className="swiper-slide">
            
                        {images.map(image => {
                            images.gallery === true ?
                            <> */}
                                {/* <h1 className={style["swiper-slide__title"]}>Latest News</h1> */}
                                {/* <Image src={image.node.sourceUrl}
                                layout="fill"/>
                            </>
                            : ""
                        })
                    }
                </div>
            </div> */}
            {/* <!-- If we need pagination --> */}
            {/* <div className={style["swiper-pagination"]}></div> */}

            {/* <!-- If we need navigation buttons --> */}
            {/* <div className={style["swiper-button-prev"]}></div>
            <div className={style["swiper-button-next"]}></div>
        </div>
    : ""} */}
    <div className={style["gallery"]}>
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
                                {/* <div>here</div> */}
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

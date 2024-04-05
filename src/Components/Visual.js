import React from 'react'
import Style from './css/Visual.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import './css/styles.css';

export default function Visual() {
  return (
    <section className={Style.visual}>
        <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src='/images/visual00.jpg' alt='메인비주얼'/></SwiperSlide>
        <SwiperSlide><img src='/images/visual01.jpg' alt='메인비주얼'/></SwiperSlide>
        <SwiperSlide><img src='/images/visual02.jpg' alt='메인비주얼'/></SwiperSlide>
      </Swiper>
    </section>
  )
}

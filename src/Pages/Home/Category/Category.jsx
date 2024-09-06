import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle';


const Category = () => {
    return (
        <section>
        <SectionTitle heading={'ORDER ONLINE'} subHeading={'---From 11:00am to 10:00pm---'}></SectionTitle>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-3xl uppercase text-center -mt-20 text-white font-bold">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-3xl uppercase text-center -mt-20 text-white font-bold">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-3xl uppercase text-center -mt-20 text-white font-bold">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-3xl uppercase text-center -mt-20 text-white font-bold">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-3xl uppercase text-center -mt-20 text-white font-bold">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
     </section>
    
    );
};

export default Category;
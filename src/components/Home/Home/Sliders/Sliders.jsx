// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./Category.css";
import { Pagination } from "swiper";
import slide1 from '../../../../assets/images/nature.jpg';
import slide2 from '../../../../assets/images/river.jpg';
import slide3 from '../../../../assets/images/arts.jpg';
import slide4 from '../../../../assets/images/school.jpg';
import slide5 from '../../../../assets/images/strom.jpg';


const Category = () => {
    return (
        <section className="my-12">
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img className="animate-pulse" src={slide1} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-white">Nature</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img className="animate-pulse" src={slide2} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-white">River</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img className="animate-pulse" src={slide3} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-white">Arts</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img className="animate-pulse" src={slide4} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-white">School</h3>
                </SwiperSlide>
            <SwiperSlide>
                <img className="animate-pulse" src={slide5} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-white">Storm</h3>
                </SwiperSlide>
        </Swiper>
        </section>
    );
};

export default Category;
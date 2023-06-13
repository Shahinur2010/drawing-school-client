// import { useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaClipboardCheck } from 'react-icons/fa';
import slide1 from '../../../../assets/images/nature.jpg';
import slide2 from '../../../../assets/images/river.jpg';
import slide3 from '../../../../assets/images/arts.jpg';
import slide4 from '../../../../assets/images/school.jpg';
import slide5 from '../../../../assets/images/garden.jpg';


const Category = () => {
    return (
        <section className="my-12">
            

<div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked="checked" /> 
    <div className="collapse-title text-xl font-medium">
     <FaClipboardCheck/>  
    </div>
    <div className="collapse-content"> 
    <SwiperSlide>
                <img className="animate-pulse mx-auto" src={slide1} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16">Nature</h3>
                </SwiperSlide>
                
    </div>
  </div>
  
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
     <FaClipboardCheck/> 
    </div>
    <div className="collapse-content"> 
    <SwiperSlide>
                <img className="animate-pulse mx-auto" src={slide2} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16">River</h3>
                </SwiperSlide>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
     <FaClipboardCheck/> 
    </div>
    <div className="collapse-content"> 
    <SwiperSlide>
                <img className="animate-pulse mx-auto" src={slide3} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16">Arts</h3>
                </SwiperSlide>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
     <FaClipboardCheck/> 
    </div>
    <div className="collapse-content"> 
    <SwiperSlide>
                <img className="animate-pulse mx-auto" src={slide4} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16">School</h3>
                </SwiperSlide>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
     <FaClipboardCheck/> 
    </div>
    <div className="collapse-content"> 
    <SwiperSlide>
                <img className="animate-pulse mx-auto" src={slide5} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16">Garden</h3>
                </SwiperSlide>
    </div>
  </div>
</div>

           
            
            
            
            
        
        </section>
    );
};

export default Category;
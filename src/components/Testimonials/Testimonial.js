import React from "react";
import "./Testimonial.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


const Testimonial = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">Testimonials</h2>
      <h2 className="section_subtitle">My client says</h2>

      <Swiper
        className="testimonial_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={5000}                 
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide key={id}>
              <div className="testimonial_card">
                <img src={image} alt="" className="testimonial_img" />
                <h3 className="testimonial_title">{title}</h3>
                <p className="testimonial_description">{description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;

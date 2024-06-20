/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Rating from "../common/Rating";
import SectionTitle from "../common/SectionTitle";
import { TestimonialData } from "../../utils/data";

const TestimonialTwo = ({ sectionBgClass, swiperBgClass }) => {
  const swiperOption = {
    slidesPerView: 2,
    mousewheel: true,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: false,
    navigation: {
      nextEl: ".swiper-nav-control .swiper-button-next",
      prevEl: ".swiper-nav-control .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1142: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };
  const isSingleItem = TestimonialData.length === 1;
  return (
    <>
      <section
        className={`testimonial-section  ptb-60`}
        // ${
        //   sectionBgClass ? sectionBgClass : "bg-light"
        // }
      >
        <div className="container">
          <div className="row justify-content-center align-content-center">
            <div className="col-md-10 col-lg-6">
              {sectionBgClass ? (
                <SectionTitle
                  subtitle="Our Founders"
                  description="We have a team of dedicated professionals who are committed to delivering the best results for our clients. Our team is a mix of experienced professionals and young talent, who are passionate about what they do."
                  darkBg
                  centerAlign
                />
              ) : (
                <SectionTitle
                  subtitle="Our Founders"
                  description="We have a team of dedicated professionals who are committed to delivering the best results for our clients. Our team is a mix of experienced professionals and young talent, who are passionate about what they do."
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="position-relative">
                <Swiper {...swiperOption} modules={[Navigation]}>
                  {TestimonialData.map((data, i) => (
                    <SwiperSlide key={i + 1}>

                      <div
            className={`founders-card p-5 rounded-custom position-relative border shadow-sm `}
            style={{ width: isSingleItem ? '100%' : 'calc(50% - 15px)' }}  // Adjust width based on the condition
          >
            <img
              src="/testimonial/quotes-dot.svg"
              alt="quotes"
              width="100"
              className="position-absolute left-0 top-0 z--1 p-3"
            />
            <div className="d-flex mb-32 align-items-center">
              <Image
                width={90}
                height={110}
                src={data.authorImg}
                className="img-fluid rounded"
                alt="user"
              />
              <div className="author-info ms-3">
                <h5 className="mb-0 text-primary">
                  {data.authorName}
                </h5>
              </div>
            </div>
            <blockquote className="" style={{color:"black"}}>
              <h6 className="">{data.quoteTitle}</h6>
              {data.authorQuote}
            </blockquote>
          </div>
          
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-nav-control">
                  <span className="swiper-button-next"></span>
                  <span className="swiper-button-prev"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialTwo;

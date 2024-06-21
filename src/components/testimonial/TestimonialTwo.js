/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Rating from "../common/Rating";
import SectionTitle from "../common/SectionTitle";
// import { TestimonialData } from "../../utils/data";

const data = {
  authorImg: "/p-1.png",
  authorName: "Sanjay Mamidipalli",
  authorTitle: "SAIE AI",
  authorQuote:
    "Senior Executive with more than 25 years of experience and deep expertise within the consulting industry selling and delivering next generation data and AI driven transformation programs. Passionate about creating business value through data driven approaches, building senior CXO client relationships, market development and leading high-performing consulting teams.",
};

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
  // const isSingleItem = TestimonialData.length === 1;
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
                  subtitle="Our Founder"
                  description="We have a team of dedicated professionals who are committed to delivering the best results for our clients. Our team is a mix of experienced professionals and young talent, who are passionate about what they do."
                  darkBg
                  centerAlign
                />
              ) : (
                <SectionTitle
                  subtitle="Our Founder"
                  description="We have a team of dedicated professionals who are committed to delivering the best results for our clients. Our team is a mix of experienced professionals and young talent, who are passionate about what they do."
                  centerAlign
                />
              )}
            </div>
          </div>

          <div className="founders-card p-5 rounded-custom border shadow-sm " style={{display:"flex"}}>
          <div style={{ flex: "1 1 33%", marginRight: "20px" }}>

              <Image
                width={300}
                height={300}
                src={data.authorImg}
                className="img-fluid rounded-custom  shadow-sm"
                alt="user"
                style={{ width: "100%", height: "auto" }}
              />
          </div>
            <div style={{ display: "flex", flexDirection: "column", flex: "2 1 67%",  marginBottom: 0, paddingBottom: 0 }}>
              <div className=" ms-5" style={{ marginBottom: 0, paddingBottom: 0}}>
                <h1 className="mb-0 text-primary">
                  {data?.authorName}
                  <br />
                </h1>
                <h3 style={{marginBottom:"30px"}}>{data?.authorTitle}</h3>
            <blockquote style={{ color: "black",  marginBottom: 0, paddingBottom: 0 }}>
              {data?.authorQuote}
            </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialTwo;

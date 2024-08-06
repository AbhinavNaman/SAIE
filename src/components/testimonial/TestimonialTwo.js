/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

// import Rating from "../common/Rating";
import SectionTitle from "../common/SectionTitle";
// import { TestimonialData } from "../../utils/data";

const data = {
  authorImg: "/p-1.png",
  authorName: "Sanjay Mamidipalli",
  authorTitle: "SAIE AI",
  authorQuote:
    "Senior Executive with more than 25 years of experience and deep expertise within the consulting industry, selling and delivering next generation data and AI driven transformation programs. Passionate about creating business value through data driven approaches, building senior CXO client relationships, market development and leading high-performing consulting teams.",
};

const TestimonialTwo = ({ sectionBgClass, swiperBgClass }) => {
  const [isMobile, setIsMobile] = useState(false);
  // const swiperOption = {
  //   slidesPerView: 2,
  //   mousewheel: true,
  //   spaceBetween: 30,
  //   slidesPerGroup: 2,
  //   loop: false,
  //   navigation: {
  //     nextEl: ".swiper-nav-control .swiper-button-next",
  //     prevEl: ".swiper-nav-control .swiper-button-prev",
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //     },
  //     640: {
  //       slidesPerView: 1,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     1024: {
  //       slidesPerView: 2,
  //       spaceBetween: 25,
  //     },
  //     1142: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },
  //   },
  // };
  // const isSingleItem = TestimonialData.length === 1;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the state based on the current window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = isMobile
    ? { flexDirection: "column", alignItems: "center" }
    : { flexDirection: "row" };

  const textStyle = isMobile
    ? { textAlign: "center", marginTop: "20px" }
    : { textAlign: "left", marginLeft: "20px" };
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
                  description="He has a team of dedicated professionals who are committed to delivering the best results for our clients. Our team is a mix of experienced professionals and young talent, who are passionate about what they do."
                  darkBg
                  // centerAlign
                  centerAlign={!isMobile}
                />
              ) : (
                <SectionTitle
                  subtitle="Our Founder"
                  description="We have a team of dedicated professionals who are committed to delivering the best results for our clients. Our team is a mix of experienced professionals and young talent, who are passionate about what they do."
                  centerAlign={!isMobile}
                />
              )}
            </div>
          </div>

          <div
            className="founders-card p-5 rounded-custom border shadow-sm "
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            <div
              style={{
                flex: "1 1 33%",
                marginRight: !isMobile ? "20px" : "0px",
                minWidth: "200px",
                maxWidth: "300px",
              }}
            >
              <Image
                width={300}
                height={300}
                src={data.authorImg}
                className="img-fluid rounded-custom  shadow-sm"
                alt="user"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              className={isMobile ? "" : " ms-5"}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "2 1 67%",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              <h2
                className="mb-0 text-primary"
                style={{ textAlign: isMobile ? "center" : "" }}
              >
                {data?.authorName}
                <br />
              </h2>
              <h3
                style={{
                  marginBottom: "30px",
                  textAlign: isMobile ? "center" : "",
                  textAlign: isMobile ? "center" : "",
                }}
              >
                {data?.authorTitle}
              </h3>
              <blockquote
                style={{
                  color: "black",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                {data?.authorQuote}
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialTwo;

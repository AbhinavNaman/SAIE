import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";

const slider = [
  {
    id: 1,
    title: "Data Management",
    data: "Seamless data integration, analysis, and compliance with platforms like IBM's Infosphere Information Server AWS Glue and Azure Data Factory. Optimize workflows and drive innovation using various tools.",
    src: "/capalities-wallpaper/Data and Management.png",
  },
  {
    id: 1,
    title: "Platforms",
    data: " Azure, AWS, IBM, GCP, Heroku, DigitalOcean: Smart AI for Enterprise seamlessly supports an extensive range of platforms, facilitating efficient integration",
    src: "/capalities-wallpaper/platform.png",
  },
  {
    id: 3,
    title: "Responsible AI",
    data: "Ensures Responsible AI implementation through comprehensive governance structures, established policies and procedures, and rigorous bias removal techniques and fair deployment across all AI initiatives.",
    src: "/capalities-wallpaper/responsible-ai.png",
  },
  {
    id: 4,
    title: "Analytics & AI",
    data: "Empowering enterprises with advanced AI capabilities encompassing Analytical AI, Gen AI, Digital Twins, Python, Tableau, MATLAB, TensorFlow etc.",
    src: "/capalities-wallpaper/Analytics and AI.png",
  },
  {
    id: 5,
    title: "AI Strategy",
    data: "Craft an effective AI strategy encompassing domain-specific use cases, data-driven business case development, operating models, and roadmap creation for seamless implementation.",
    src: "/capalities-wallpaper/AI Strategy.png",
  },
];

const PromoThree = ({ hasBg }) => {
  return (
    <>
      <section className={`promo-section ptb-60 ${hasBg ? "bg-light" : ""}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <SectionTitle
                title="Key elements shaping our engineering strategy"
                description="We bring strong industry, functional, data, AI And technology services"
                centerAlign
              />
            </div>
          </div>
          <div className="row row-gap-3"></div>
        </div>
        <div className="carousel position-relative">
          <Swiper
            className="swiper"
            modules={[Pagination, EffectCoverflow, Autoplay, Navigation]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 100,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            loop={true}
            loopAdditionalSlides={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {slider.map((data) => (
              <SwiperSlide
                key={data.id}
                className="swiper-slide"
              >
                <div className="card capabilities-wrapper border-0 text-white">
                  <Image
                    className="card-img capabilities-img rounded-0 cover"
                    src={data.src}
                    width={1280}
                    height={920}
                  />
                  <div className="card-img-overlay p-0">
                    <div className="card-block">
                      <h3 className="card-title fw-bold text-primary">
                        {data.title}
                      </h3>
                      <p className="card-text">{data.data}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
};

export default PromoThree;

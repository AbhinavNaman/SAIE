import React from "react";
import SectionTitle from "../common/SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const slides = [
  {
    id: 1,
    title: "Technology",
    url: "/industries-images/technology.webp",
  },
  {
    id: 2,
    title: "Healthcare",
    url: "/industries-images/healthcare.webp",
  },
  {
    id: 3,
    title: "Utilities",
    url: "/industries-images/utilities.webp",
  },
  {
    id: 4,
    title: "Chemicals",
    url: "/industries-images/chemicals.webp",
  },
  {
    id: 5,
    title: "Others",
    url: "/industries-images/general.webp",
  },
];

const Industries = ({ hasBg }) => {
  return (
    <>
      <section className={`promo-section ptb-60 ${hasBg ? "bg-light" : ""}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <SectionTitle
                title="Industries we serve"
                description="We provide the best solution for your business"
                centerAlign
              />
            </div>
          </div>
          <div className="row row-gap-3"></div>
        </div>
        {/* <Image
          src="/homepage/section-3.svg"
          alt="section-3"
          width={2560}
          height={1440}
          className="img-fluid rounded p-md-4"
        /> */}
        {/* <Image
          src="/homepage/industries_ph.png"
          alt="section-3"
          width={1271}
          height={189}
          className="img-fluid rounded p-md-4"
        /> */}
        <div className="carousel">
          <Carousel
            className="main"
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
          >
            {slides.map((data) => (
              <div
                style={{
                  margin: "0 10px",
                  //   borderRadius: "12px",
                }}
                className="card rounded-custom"
                key={data.id}
              >
                <img
                  height={270}
                  className="card-img capabilities-img  cover rounded-custom"
                  src={data.url}
                  style={
                    {
                      // borderRadius: "12px",
                    }
                  }
                  alt="Responsible AI"
                />
                {/* <Image
                    className="card-img capabilities-img rounded-0 cover"
                    src={data.url}
                    width={300}
                    height={270}
                  /> */}
                <div className="industries-card-img-overlay p-0 rounded-custom">
                  <div className="card-block">
                    <h3 className="card-title fw-bold text-primary">
                      {data.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Industries;

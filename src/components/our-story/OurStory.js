/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import CounterWithVisibilitySensor from "@components/custom-components/custom-counter";

const OurStory = () => {
  return (
    <section
      className="our-story-section pt-60 pb-120"
      style={{
        background: "url('/shape/dot-dot-wave-shape.svg')no-repeat left bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-md-12 order-lg-1">
            <div className="section-heading sticky-sidebar">
              <h4 className="h5 text-primary">Our Story</h4>
              <h2>A Great Story Starts with a Friendly Team</h2>
              <p>
                With our Smart Sourcing strategies, we help you identify,
                evaluate, and engage with the best suppliers using data-driven
                insights, minimizing costs while maximizing quality and
                sustainability.
              </p>
              {/* <div className="mt-4">
                <h6 className="mb-3">We Are Awarded By-</h6>
              <img
                  src="/awards-01.svg"
                  alt="awards"
                  className="me-4 img-fluid"
                />
                <img src="/awards-02.svg" alt="awards" className="img-fluid" /> 
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-0">
            <div className="story-grid-wrapper position-relative">
              <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                <li className="layer" data-depth="0.02">
                  <Image
                    width={129}
                    height={72}
                    src="/color-shape/image-2.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-2 z-5"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <Image
                    width={129}
                    height={72}
                    src="/color-shape/feature-3.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-3"
                  />
                </li>
              </ul>

              <div className="story-grid rounded-custom bg-dark overflow-hidden position-relative">
                <div className="story-item bg-light border">
                  {/* <h3 className="display-5 fw-bold mb-1 text-success">550K+</h3>
                  <h6 className="mb-0">Active Users</h6> */}
                  <CounterWithVisibilitySensor endValue={10} label="Products" />
                </div>
                <div className="story-item bg-white border">
                  <CounterWithVisibilitySensor
                    endValue={250}
                    label="Team Members"
                  />
                </div>
                <div className="story-item bg-white border">
                  <CounterWithVisibilitySensor
                    endValue={10}
                    label="Years in Business"
                  />
                </div>
                <div className="story-item bg-light border">
                  <CounterWithVisibilitySensor
                    endValue={425}
                    label="Clients Worldwide"
                  />
                </div>
                <div className="story-item bg-light border">
                  <CounterWithVisibilitySensor
                    endValue={855}
                    label="Projects Completed"
                  />
                </div>
                <div className="story-item bg-light border">
                  <CounterWithVisibilitySensor endValue={855} label="-" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

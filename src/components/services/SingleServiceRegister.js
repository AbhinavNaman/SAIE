/* eslint-disable @next/next/no-img-element */
import React from "react";
import ServiceForm from "./ServiceForm";

const SingleServiceRegister = () => {
  return (
    <section
      className="sign-up-in-section  ptb-60 position-relative overflow-hidden"
      style={{
        // background: "url('/page-header-bg.svg')no-repeat bottom right",
      }}
    >
      <div className="container">
        <div className="request-demo-section row align-items-center justify-content-between">
          <div className="col-lg-7 order-1 order-lg-0">
            <div className="testimonial-tab-slider-wrap mt-5 mt-lg-0 mt-xl-0">
              <h2 className="text-primary">Start Your Project with Us</h2>
              <p style={{color:"black"}}>
                Whatever your goal or project size we will handel it utilize
                standards compliant. We hope you will be 100% satisfied.
              </p>
              {/* <hr /> */}
            </div>
          </div>
          <ServiceForm />
        </div>
      </div>
    </section>
  );
};

export default SingleServiceRegister;

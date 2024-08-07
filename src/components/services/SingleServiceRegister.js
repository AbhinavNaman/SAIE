/* eslint-disable @next/next/no-img-element */
import React from "react";
// import ServiceForm from "./ServiceForm";
import { InlineWidget } from "react-calendly";

const SingleServiceRegister = () => {
  return (
    <section
      className="sign-up-in-section ptb-60 position-relative overflow-hidden"
      style={{
        // background: "url('/page-header-bg.svg')no-repeat bottom right",
      }}
    >
      <div className="container" style={{marginTop:"-70px"}}>
        <div
          className="request-demo-section row align-items-center justify-content-between"
          style={{ height: "100vh" }}
        >
          {/* <div className="col-12">
            <div className="testimonial-tab-slider-wrap mt-5 mt-lg-0 mt-xl-0">
              <h2 className="text-primary">Start Your Project with Us</h2>
              <p style={{ color: "black" }}>
                Whatever your goal or project size, we will handle it utilizing
                standards compliant. We hope you will be 100% satisfied.
              </p>
            </div>
          </div> */}
          <div
            className="d-flex w-100 justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            {/* <div className="d-flex flex-column col-lg-6" style={{ height: "100%" }}>
              <ServiceForm />
            </div> */}
            <div className="d-flex flex-column" style={{ height: "100%", width: "100%" }}>
              <InlineWidget
                // url="https://calendly.com/getintouch-saie/demo"
                url="https://calendly.com/ronak-saie/saie-demo"
                styles={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceRegister;

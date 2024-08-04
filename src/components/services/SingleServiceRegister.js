/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from "react";
import ServiceForm from "./ServiceForm";

const SingleServiceRegister = () => {
  const [reqSubmitted, setReqSubmitted] = useState(false);
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
              <h2 className="text-primary">Requesting Demonstration</h2>
              <p style={{color:"black"}}>
              
              Please complete the information to request for meeting with our team to demonstrate capabilities.
              </p>
              {/* <hr /> */}
            </div>
            {reqSubmitted && (
            <div className="testimonial-tab-slider-wrap mt-5 mt-lg-0 mt-xl-0">
              <h2 style={{color:"green"}}>Thank you for your request. You will receive an email with a meeting invitation shortly.</h2>
            </div>
            )}
          </div>
          <ServiceForm setReqSubmitted={setReqSubmitted}/>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceRegister;

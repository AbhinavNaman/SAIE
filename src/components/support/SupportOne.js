import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import React, { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import ModalVideo from "react-modal-video";

const SupportOne = ({ className }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section
      style={{
        // background: "linear-gradient(180deg, #ff8e0c, #924f09)",
        background: "linear-gradient(115deg, #3fea2c, #31c47f)"
        // background: "url(#e5800cnt-step.jpg')no-repeat center center / cover",
      }}
      className={`${
        className
          ? "cta-subscribe ptb-60 position-relative overflow-hidden"
          : "cta-subscribe pt-60 pb-120"
      }`}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="container">
        <div
          className={`${
            className
              ? ""
              : "bg-gradient ptb-60 px-4 position-relative overflow-hidden rounded-custom"
          }`}
        >
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="subscribe-info-wrap text-center position-relative z-2">
                <div className="section-heading">
                  <h4 className="h5" style={{color:"white"}}>Let&apos;s Try! Get Free Demo</h4>
                  <h1 className="text-white">
                    Get a Specialized Demo for Free
                  </h1>
                  <p className="text-white">
                    We are ready to provide you with a specialized demo for free
                    to help you understand how our product can help you grow
                    your business.
                  </p>
                </div>
                <div className="form-block-banner mw-60 m-auto mt-5">
                  <Link href="/request-demo">
                    <a className="btn btn-primary" style={{backgroundColor:"#3fa9f5"}}>Get a Demo</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
          <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div> */}
        </div>
      </div>
    </section>
  );
};

export default SupportOne;

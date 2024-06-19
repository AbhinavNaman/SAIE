import CareerPromo from "@components/career/CareerPromo";
import React from "react";
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsTelephoneInbound,
} from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const ContactCard = () => {
  return (
    <section className="contact-promo ptb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-dark rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h4>Email Us</h4>
                <p>Contact us at</p>
                <h6 className="text-primary">info@saib.ai</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-dark rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound />
              </span>
              <div className="contact-promo-info mb-4">
                <h4>Phone</h4>
                <p>Contact us via Phone</p>
                <h6 className="text-primary">+1-6785963024</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-dark rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound />
              </span>
              <div className="contact-promo-info mb-4">
                <h4>Our Office</h4>
                <p>Find us at our office </p>
                <h6 className="text-primary">
                  7901 Stoneridge Dr. Suite 390, Pleasanton, CA 94588
                </h6>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-dark rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <FaLocationDot />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Location</h5>
                <p>Find us at our office </p>
              </div>
              <a href="mailto:hello@gmail.com" className="btn btn-link mt-auto">
                Chat with us
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;

import React from "react";
import {
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
            <div className="contact-us-promo p-5  rounded-custom custom-shadow text-center d-flex flex-column h-100" style={{  background: "linear-gradient(115deg, #3fea2c, #31c47f)"}}>
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill style={{color:"#00205e"}}/>
              </span>
              <div className="contact-promo-info mb-4">
                <h4 style={{color:"#00205e"}}>Email Us</h4>
                <p style={{color:"#00205e"}}>Contact us at</p>
                <h6 className="" style={{color:"#00205e"}}>
                ronak@saie.ai
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5  rounded-custom custom-shadow text-center d-flex flex-column h-100" style={{  background: "linear-gradient(115deg, #3fea2c, #31c47f)"}}>
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound style={{color:"#00205e"}}/>
              </span>
              <div className="contact-promo-info mb-4">
                <h4 style={{color:"#00205e"}}>Phone</h4>
                <p style={{color:"#00205e"}}>Contact us via Phone</p>
                <h6 className="" style={{color:"#00205e"}}>
                Phone: (470) 256-3210, Fax: (470) 256-3211
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 rounded-custom custom-shadow text-center d-flex flex-column h-100" style={{  background: "linear-gradient(115deg, #3fea2c, #31c47f)"}}>
              <span className="fad fa-3x text-primary">
                <FaLocationDot style={{color:"#00205e"}}/>
              </span>
              <div className="contact-promo-info mb-4">
                <h4 style={{color:"#00205e"}}>Our Office</h4>
                <p style={{color:"#00205e"}}>Find us at our office </p>
                <h6 className="" style={{color:"#00205e"}}>
                3379 Peachtree Road NE (Buckhead), Suite 655, Atlanta, GA 30326 (P)
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

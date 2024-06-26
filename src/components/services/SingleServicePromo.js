import React from "react";

const SingleServicePromo = () => {
  return (
    <section
      style={{   background: "linear-gradient(115deg, #3fea2c, #31c47f)" }}
      className="promo-section ptb-60"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <div className=" mb-3 h3" style={{color:"#00205e"}}>
                Join SMART AI FOR ENTERPRISE INC in leading the evolution of
                Business operations.
              </div>
              <p style={{color:"#00205e"}}>
                Our team of experts is ready to help you take your business to
                the next level. Contact us today to learn more about our
                services and how we can help you achieve your business goals.
                Partner with us and unlock the potential of your enterprise
                through unparalleled efficiency and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServicePromo;

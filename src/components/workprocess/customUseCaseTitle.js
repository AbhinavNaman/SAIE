import React from "react";

const UseCaseTitle = ({ title, desc, type, image, icon }) => {
  return (
    <section
      className="ptb-60"
      style={{
        // background: "url('/payment-step.jpg')no-repeat center center / cover",
          background: "linear-gradient(180deg, #0644A1 0%, #0F79E0 100%)"
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center">
              <div className="text-primary mb-3 h3">{title}</div>
              <p className="text-off-white">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseTitle;

import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { BsWatch } from "react-icons/bs";

const SingleServiceFeature = () => {
  return (
    <section className="feature-section ptb-60">
      <div className="container">
        <div className="row align-items-lg-center justify-content-between">
          <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
            <div className="mb-4">
              <h2 style={{ color: "#fd8c29" }}>Overview of our company</h2>
              <p style={{ color: "#fdfdfd" }}>
                We bring strong industry, functional, data, AI and technology
                capabilities to help our clients transform their businesses. We
                are a team of over 250+ employees, with a strong presence in the
                US and India. We have a strong client base and are a trusted
                partner to several Fortune 500 companies. Our consultants and
                assets bring innovation, knowledge, and deep domain experience
                to our clients.
              </p>
            </div>
            <h3 className="h5">OUR LOCATIONS</h3>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Pleasanton,+CA,+USA/@37.7021881,-121.9136864,12.7z/data=!4m6!3m5!1s0x808fe9a261ba755f:0xb3ab6847e1ea7d16!8m2!3d37.6604484!4d-121.8757968!16zL20vMHF4X3o?entry=ttu"
                >
                  1. Pleasanton, CA
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/South+Brunswick+Township,+NJ,+USA/@40.384806,-74.6951666,11z/data=!3m1!4b1!4m6!3m5!1s0x89c3dcc58aa3ef17:0x762bc41e57a7544!8m2!3d40.3806901!4d-74.5316938!16zL20vMHhwdnc?entry=ttu"
                >
                  2. South Brunswick, NJ
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4120779,78.0783859,10z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.406498!4d78.4772439!16zL20vMDljNnc?entry=ttu"
                >
                  3. Hyderabad, IN
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/San+Jos%C3%A9+Province,+San+Jos%C3%A9,+Costa+Rica/@9.9356277,-84.1546307,13z/data=!3m1!4b1!4m6!3m5!1s0x8fa0e342c50d15c5:0xe6746a6a9f11b882!8m2!3d9.9280694!4d-84.0907246!16zL20vMDFnM2Iy?entry=ttu"
                >
                  4. San José, COSTA RICA
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="pr-lg-4 mt-md-4 position-relative">
              <div className="mx-lg-auto text-center rounded-custom overflow-hidden ">
                {/* <Image
                  width={1000}
                  height={1000}
                  src="/company-overview-w-g.svg"
                  alt=""
                  className="shadow-sm rounded-custom"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceFeature;

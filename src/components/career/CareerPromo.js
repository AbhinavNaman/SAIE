import React from "react";
import {
  FaBriefcaseMedical,
  FaClock,
  FaHouseUser,
  FaUserFriends,
} from "react-icons/fa";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { TbCircleNumber4 } from "react-icons/tb";

const CareerPromo = () => {
  return (
    <section className="career-promo ptb-60 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center">
              <h2 className="text-primary">Other Locations</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-6 col-lg-6">
            <div className="single-feature d-flex mt-0 p-5 bg-white rounded-custom bg-dark-shade">
              <span className="fas fa-2x text-primary">
                <TbCircleNumber1 />
              </span>
              <div className="ms-4 mt-2">
                <h5>Pleasanton, CA</h5>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Pleasanton,+CA,+USA/@37.7021881,-121.9136864,12.7z/data=!4m6!3m5!1s0x808fe9a261ba755f:0xb3ab6847e1ea7d16!8m2!3d37.6604484!4d-121.8757968!16zL20vMHF4X3o?entry=ttu"
                  className="mb-0 primary-text text-decoration-underline"
                >
                  Locate in Map
                </a>
              </div>
            </div>
          </div> */}
          <div className="col-md-6 col-lg-6">
            <div className="single-feature d-flex mt-0 p-5 bg-white rounded-custom bg-dark-shade" style={{  background: "linear-gradient(180deg, #0644A1 0%, #0F79E0 100%)"}}>
              <span className="fas fa-2x text-primary">
                {/* <TbCircleNumber1 /> */}
              </span>
              <div className="ms-4 mt-2">
                <h5 className="text-primary">
                {/* South Brunswick, NJ */}
                </h5>
                {/* <a
                  target="_blank"
                  href="https://www.google.com/maps/place/South+Brunswick+Township,+NJ,+USA/@40.384806,-74.6951666,11z/data=!3m1!4b1!4m6!3m5!1s0x89c3dcc58aa3ef17:0x762bc41e57a7544!8m2!3d40.3806901!4d-74.5316938!16zL20vMHhwdnc?entry=ttu"
                  className="mb-0 text-white text-decoration-underline"
                >
                  Locate in Map
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="single-feature d-flex mt-0 p-5 bg-white rounded-custom bg-dark-shade" style={{  background: "linear-gradient(180deg, #0644A1 0%, #0F79E0 100%)"}}>
              <span className="fas fa-2x text-primary">
                {/* <TbCircleNumber3 /> */}
              </span>
              <div className="ms-4 mt-2">
                <h5 className="text-primary">
                {/* Hyderabad, IN */}
                </h5>
                {/* <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4120779,78.0783859,10z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.406498!4d78.4772439!16zL20vMDljNnc?entry=ttu"
                  className="mb-0 text-white text-decoration-underline"
                >
                  Locate in Map
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-12">
            <div className="single-feature d-flex mt-4 p-5 bg-white rounded-custom bg-dark-shade" style={{  background: "linear-gradient(180deg, #0644A1 0%, #0F79E0 100%)"}}>
              <span className="fas fa-2x text-primary">
                {/* <TbCircleNumber4 /> */}
              </span>
              <div className="ms-4 mt-2">
                <h5 className="text-primary">
                {/* San José, COSTA RICA */}
                </h5>
                {/* <a
                  target="_blank"
                  href="https://www.google.com/maps/place/San+Jos%C3%A9+Province,+San+Jos%C3%A9,+Costa+Rica/@9.9356277,-84.1546307,13z/data=!3m1!4b1!4m6!3m5!1s0x8fa0e342c50d15c5:0xe6746a6a9f11b882!8m2!3d9.9280694!4d-84.0907246!16zL20vMDFnM2Iy?entry=ttu"
                  className="mb-0 text-white text-decoration-underline"
                >
                  Locate in Map
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPromo;

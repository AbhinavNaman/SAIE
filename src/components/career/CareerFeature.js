import React from "react";
import Link from "next/link";
import {
  BiBriefcase,
  BiBuildingHouse,
  BiCurrentLocation,
  BiWallet,
} from "react-icons/bi";

import { careerJobCard } from "../../utils/data";

const CareerFeature = () => {
  return (
    <section id="open-positions" className="open-jobs ptb-60">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-7 col-md-12">
            <div className="section-heading">
              {/* <h4 className="h5 text-primary">Our Jobs</h4> */}
              <h2 className="h3 text-primary">Current Openings</h2>
              <p className="lead mb-0">
                We are always looking for talented individuals to join our team.
                If you are interested in working with us, please check out our
                current job openings below.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-12"></div>
        </div>
        <div className="row justify-content-center">
          {careerJobCard.map((jobCard, i) => (
            <div key={i + 1} className="col-lg-6 col-md-12">
              <div className="text-decoration-none my-4 mt-xl-0 mt-lg-0 single-open-job p-5 bg-dark text-white d-block rounded-custom">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="job-time h-6 mb-2">
                    <i className="far fa-lg me-2">
                      <BiBriefcase className="mb-1" />
                    </i>{" "}
                    <strong> {jobCard.type} </strong>
                  </span>
                  <span className="badge px-3 py-2 bg-custom-light rounded-pill small">
                    {jobCard.position}
                  </span>
                </div>
                <h3 className="h5">{jobCard.title} </h3>
                <ul className="job-info-list list-inline list-unstyled text-muted">
                  {jobCard.listItem.map((list, i) => (
                    <span key={i + 1}>
                      <li className="list-inline-item">
                        <span className="far fa-lg me-1">
                          <BiCurrentLocation className="mb-1" />
                        </span>{" "}
                        {list.location}
                      </li>
                    </span>
                  ))}
                </ul>
                <Link
                  href={{
                    pathname: "/career-apply",
                    query: { job: jobCard.title },
                  }}
                  passHref
                >
                  <div className="btn btn-outline-light btn-sm d-inline-block mt-4">
                    Apply Now
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerFeature;

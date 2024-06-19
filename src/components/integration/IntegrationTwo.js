import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { brandName } from "../../utils/data";

const IntegrationTwo = ({ dark, bgWhite }) => {
  return (
    <section
      className={`integration-section bg-light ptb-60 ${
        dark ? "bg-dark" : "bg-light"
      } ptb-60 ${bgWhite ? "bg-white" : ""}`}
    >
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 col-md-12">
            <SectionTitle
              subtitle="Our Clients and Partners"
              // title="We work with industry leading brands/companies"
              description="We have a team of dedicated professionals who are committed to delivering the best results for our clients. Our team is a mix of experienced professionals and young talent, who are passionate about what they do."
              leftAlign
              // textWhite
            />
          </div>
          {/* <div className="col-lg-4 col-md-12">
            <div className="text-lg-end mb-5 mb-lg-0">
              <Link href="/integrations">
                <a className="btn btn-primary">View All Integrations</a>
              </Link>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="integration-wrapper position-relative w-100">
              <ul className="integration-list list-unstyled mb-0">
                {brandName.map((brand, i) => (
                  <li key={i + 1}>
                    <div className="single-integration">
                      <Image
                        width={100}
                        height={100}
                        src={brand.image}
                        alt="integration"
                        className=""
                      />
                      {/* <h6 className="mb-0 mt-4">{brand.brand} </h6> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationTwo;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { brandName } from "../../utils/data";

const IntegrationTwo = ({ dark, bgWhite }) => {
  return (
    <section
      className={`integration-section bg-light ptb-60 `}
    >

{/* ${
        dark ? "bg-dark" : "bg-light"
      } ptb-60 ${bgWhite ? "bg-white" : ""} */}
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          {/* <div className="col-lg-6 col-md-12"> */}
          <div className="">
            <SectionTitle
              subtitle="Our Clients and Partners"
              // title="We work with industry leading brands/companies"
              description="Our clients and partners are the cornerstone of our success. We are privileged to collaborate with a diverse array of organizations, from dynamic startups to established industry leaders. Our partnerships are built on a foundation of trust, innovation, and mutual growth. By understanding their unique needs and challenges, we deliver tailored solutions that drive tangible results. We are committed to fostering long-term relationships that go beyond business transactions, creating a network of collaboration and support that propels all parties towards shared success."
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
                        width={250}
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

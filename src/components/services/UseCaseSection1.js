import React from "react";
import Image from "next/image";
import { BsChat, BsHeadset } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const UseCaseSectionOne = ({
  title,
  id,
  desc,
  type,
  image,
  icon,
  challenges,
  propositions,
}) => {
  return (
    <>
      {type === "reverse" ? (
        <section id={id} className="image-feature pt-60 pb-120">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 col-12 order-lg-1">
                <div className="feature-img-content">
                  <div className="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
                    <span className="fal custom-icon text-white">{icon}</span>
                  </div>
                  <h2 className="text-primary">{title}</h2>
                  <p className="text-white">{desc}</p>
                  <div>
                    {challenges ? (
                      <h6 className="text-primary">Current Challenges:</h6>
                    ) : (
                      <></>
                    )}
                    <ul>{challenges}</ul>
                    {challenges ? (
                      <h6 className="text-primary">Value Propositions:</h6>
                    ) : (
                      <></>
                    )}
                    <ul>{propositions}</ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 order-lg-2">
                <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                  <Image
                    width={636}
                    height={492}
                    layout="responsive"
                    src={image}
                    className="img-fluid rounded-custom shadow-sm object-fit-cover"
                    alt="feature-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id={id} className="image-feature pt-60 pb-120">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 col-12 order-lg-1">
                <div className="feature-img-content">
                  <div className="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
                    <span className="fal text-white">
                      <span className="fal custom-icon text-white">{icon}</span>
                    </span>
                  </div>
                  <h2 className="text-primary">{title}</h2>
                  <p className="text-white">{desc}</p>

                  <div>
                    {challenges ? (
                      <h6 className="text-primary">Current Challenges:</h6>
                    ) : (
                      <></>
                    )}
                    <ul>{challenges}</ul>
                    {challenges ? (
                      <h6 className="text-primary">Value Propositions:</h6>
                    ) : (
                      <></>
                    )}
                    <ul>{propositions}</ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 order-lg-0">
                <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                  <Image
                    width={636}
                    height={492}
                    layout="responsive"
                    src={image}
                    className="img-fluid rounded-custom shadow-sm object-fit-cover"
                    alt="feature-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UseCaseSectionOne;

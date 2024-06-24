/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import HeroTitle from "../common/HeroTitle";
import dynamic from 'next/dynamic';

// Dynamically import Lottie only on the client side
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import animationData from "./../../../public/hero-lottie.json";

const HeroSectionFourth = ({ bgDark }) => {
  // Create a state to handle client-side rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the client state to true once the component is mounted
    setIsClient(true);
  }, []);


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the screen width and set the state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className={`hero-section ptb-60 ${bgDark ? "bg-dark" : "bg-white"}`}
      style={{
        background:
          "url('/shape/dot-dot-wave-shape.svg')no-repeat bottom center",
          // backgroundColor:"white",
      }}
    >

      <div className={`container ${isMobile ? '': 'hero-spc-padding'}`} style={{marginTop:"55px"}}>
        <div className="row  justify-content-lg-between">
        {/* align-items-center */}
          <div className="col-xl-5 col-lg-5 " style={{paddingTop:"20px"}}>
            <div className="hero-content-wrap mt text-center text-xl-start text-lg-start">
              <HeroTitle
                title="Empowering Enterprise Businesses Through Domain Specific Innovative AI Services"
                desc="Empowering enterprise businesses through domain specific innovative AI Services"
              />
              <div className="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
                {/* Subscription form commented out */}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-4 mt-xl-0">
            <div className="hero-img-wrap position-relative">
              {/* {!bgDark && (
                <ul className="position-absolute animate-element parallax-element shape-service hide-medium">
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/image-1.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.02">
                    <img
                      src="/color-shape/feature-2.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-2 z-5"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/feature-3.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-3"
                    />
                  </li>
                </ul>
              )} */}
              <div className="hero-img-wrap position-relative">
                <div className="hero-screen-wrap">
                  <div className="mac-screen">
                    {isClient && (
                      <Lottie
                        animationData={animationData}
                        className="position-relative"
                        loop={true}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFourth;

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaFacebook, FaGithub, FaDribbble, FaTwitter } from "react-icons/fa";

import {
  footerPrimaryPages,
  footerPages,
  footerTemplate,
} from "../../utils/data";
import Rating from "../../components/common/Rating";
import { subscribe } from "@utils/consts";

const Footer = ({ footerLight, style, footerGradient }) => {
  const [loading, setLoading] = useState(false);

  const handleEmailSubscription = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    try {
      setLoading(true); // Show loader
      // Send a POST request to your email subscription endpoint
      const response = await fetch(subscribe, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Email subscribed successfully");
      } else {
        alert("Failed to subscribe email. Please try again later.");
      }
    } catch (error) {
      console.error("Error subscribing email:", error.message);
      alert("Error subscribing email. Please try again later.");
    } finally {
      setLoading(false); // Hide loader
    }
  };
  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-top ptb-60 
            text-black`}
          // style={style}
        >

{/* ${
            footerLight ? "footer-light" : "bg-dark"
          } ${footerGradient ? "bg-gradient" : ""} */}
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    {footerLight ? (
                      <Image
                        width={310}
                        height={150}
                        // src="/logo-1000x.png"
                        // src={"/logo-new.png"}
                        src={"/saie.png"}
                        alt="logo"
                        className=" object-contain"
                      />
                    ) : (
                      <Image
                        width={310}
                        height={150}
                        // src="/logo-1000x.png"
                        // src={"/logo-new-white.png"}
                        src={"/saie.png"}
                        alt="logo"
                        className=" object-contain"
                      />
                    )}
                  </div>
                  <p>
                    Our latest news, articles, and resources, we will sent to
                    your inbox weekly.
                  </p>

                  <form
                    onSubmit={handleEmailSubscription}
                    className="newsletter-form position-relative d-block d-lg-flex d-md-flex"
                  >
                    <input
                      type="text"
                      className="input-newsletter form-control me-2"
                      placeholder="Enter your email"
                      name="email"
                      required
                      autoComplete="off"
                    />
                    <input
                      type="submit"
                      value={loading ? "Subscribing..." : "Subscribe"}
                      data-wait="Please wait..."
                      className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                      disabled={loading} // Disable button while loading
                      style={{background: "linear-gradient(180deg, #0644A1 0%, #0F79E0 100%)"}}
                    />
                  </form>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3 className="text-primary">Resources</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPrimaryPages.map((primaryPage, i) => (
                          <li key={i + 1}>
                            {/* <Link href={primaryPage.href}></Link> */}
                            <Link href={primaryPage.href}>
                              <a className="text-decoration-none">
                                {primaryPage.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`footer-bottom py-4`}
          style={{  background: "linear-gradient(180deg, #0644A1 0%, #0F79E0 100%)", color:"white"}}
          //  ${
          //   footerLight ? "footer-light" : "bg-dark"
          // } ${footerGradient ? "bg-gradient" : ""}
        >
          <div className="container">
            <div className="row  align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="">
                  <p className="mb-lg-0 mb-md-0">
                    COPYRIGHT &copy; 2024 SMART AI FOR ENTERPRISE INC.  ALL RIGHTS
                    RESERVED.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: true });

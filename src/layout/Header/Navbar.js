import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useRouter } from "next/router";

import OffCanvasMenu from "./OffCanvasMenu";
import {
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
} from "../../utils/data";
import dynamic from "next/dynamic";

const Navbar = ({ navDark, insurance, classOption }) => {
  const router = useRouter();
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`main-header ${
        navDark ? "position-absolute" : ""
      } w-100 ${classOption} ${
        insurance && "ins-header main-header w-100 z-10"
      }`}
    >
      <nav
        className={`navbar navbar-expand-xl z-50 ${
          navDark ? "navbar-dark" : "navbar-light"
        } sticky-header ${scroll > headerTop ? "affix" : ""}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
              {scroll > headerTop || !navDark ? (
                <Image
                  width={170}
                  height={150}
                  src={"/saie2.png"}
                  alt="logo"
                  className="object-contain"
                />
              ) : (
                <Image
                  // width={130}
                  // height={130}
                  width={170}
                  height={150}
                  src={"/saie2.png"}
                  // src={"/logo-new-white.png"}
                  alt="logo"
                  className=" object-contain"
                />
              )}
            </a>
          </Link>
          <button
            className="navbar-toggler-custom position-absolute right-0 border-0"
            id="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </button>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                    <div className="dropdown-grid-item">
                      <h6 className="drop-heading">Different Home</h6>
                      {navHomeOne.map((navH, i) => (
                        <span key={i + 1}>
                          <Link href={navH.href}>
                            <a className="dropdown-link">
                              <span className="demo-list bg-primary rounded text-white fw-bold">
                                {i + 1}
                              </span>
                              <span className="dropdown-info mb-0">
                                <span className="drop-title">{navH.title}</span>
                                <span>{navH.info}</span>
                              </span>
                            </a>
                          </Link>
                        </span>
                      ))}
                    </div>
                    <div className="dropdown-grid-item radius-right-side bg-light">
                      <h6 className="drop-heading">Different Home</h6>
                      {navHomeTwo.map((navH, i) => (
                        <span key={i + 10}>
                          <Link href={navH.href}>
                            <a className="dropdown-link">
                              <span className="demo-list bg-primary rounded text-white fw-bold">
                                {i + 10}
                              </span>
                              <span className="dropdown-info mb-0">
                                <span className="drop-title">{navH.title}</span>
                                <span>{navH.info}</span>
                              </span>
                            </a>
                          </Link>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li> */}
              {/* <li>
                <Link href="about-us">
                  <a className="nav-link">Home</a>
                </Link>
              </li> */}
              {/* <li>
                <Link href="about-us">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="about-us">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li>
                <Link href="services">
                  <a className="nav-link">Services</a>
                </Link>
              </li>

              <li>
                <Link href="pricing">
                  <a className="nav-link">Blog</a>
                </Link>
              </li>
               */}
              <li>
                <Link href="/">
                  <a
                    style={{
                      color: router.pathname === "/" ? "#fd8c29" : "",
                    }}
                    className="nav-link"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/core-services">
                  <a
                    style={{
                      color:
                        router.pathname === "/core-services" ? "#fd8c29" : "",
                    }}
                    className="nav-link"
                  >
                    Core Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/use-cases">
                  <a
                    style={{
                      color: router.pathname === "/use-cases" ? "#fd8c29" : "",
                    }}
                    className="nav-link"
                  >
                    Use Cases
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a
                    style={{
                      color: router.pathname === "/blogs" ? "#fd8c29" : "",
                    }}
                    className="nav-link"
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/company-overview">
                  <a
                    style={{
                      color:
                        router.pathname === "/company-overview"
                          ? "#fd8c29"
                          : "",
                    }}
                    className="nav-link"
                  >
                    Company Overview
                  </a>
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                    <div className="dropdown-grid-item">
                      <h6 className="drop-heading">Useful Links</h6>
                      {navCompanyLinks.map((navLink, i) => (
                        <div key={i + 1}>
                          <Link href={navLink.href}>
                            <a className="dropdown-link px-0">
                              <span className="me-2">{navLink.icon}</span>
                              <span className="drop-title mb-0">
                                {navLink.title}{" "}
                              </span>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="dropdown-grid-item radius-right-side bg-light">
                      <h6 className="drop-heading">Utility Pages</h6>
                      {navCompanyPage.map((navPage, i) => (
                        <div key={i + 1}>
                          <Link href={navPage.href}>
                            <a className="dropdown-link">
                              <span className="me-2">{navPage.icon}</span>
                              <span className="drop-title mb-0">
                                {navPage.title}{" "}
                              </span>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>

          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            <Link href="request-demo">
              <a
                className={
                  insurance
                    ? "ins-btn ins-primary-btn"
                    : "btn btn-primary header-button"
                }
              >
                Book a Demo
              </a>
            </Link>
          </div>

          <div
            className="offcanvas offcanvas-end d-xl-none"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex flex-row-reverse mt-4">
              <button
                type="button"
                className="close-btn text-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>
            <OffCanvasMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: true });

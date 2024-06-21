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
      style={{backgroundColor:"white", color: "black"}}
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
                  width={180}
                  height={80}
                  src={"/saie.png"}
                  alt="logo"
                  className="object-contain"
                />
              ) : (
                <Image
                  // width={130}
                  // height={130}
                  width={180}
                  height={80}
                  src={"/saie.png"}
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
              <li>
                <Link href="/">
                  <a
                    style={{
                      color: router.pathname === "/" ? "#3fea2c" : "black",
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
                        router.pathname === "/core-services" ? "#3fea2c" : "black",
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
                      color: router.pathname === "/use-cases" ? "#3fea2c" : "black",
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
                      color: router.pathname === "/blogs" ? "#3fea2c" : "black",
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
                          ? "#3fea2c"
                          : "black",
                    }}
                    className="nav-link"
                  >
                    Company Overview
                  </a>
                </Link>
              </li>

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
                style={{background: "linear-gradient(115deg, #3fea2c, #31c47f)"}}
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

import React from "react";
import Link from "next/link";
import {
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData,
} from "../../utils/data";

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/core-services">
            <a className="nav-link">Core Services</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/use-cases">
            <a className="nav-link">Use Cases</a>
          </Link>
        </li>

        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/blogs">
            <a className="nav-link">Blog</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/company-overview">
            <a className="nav-link">Company Overview</a>
          </Link>
        </li>
      </ul>
      <div className="action-btns mt-4 ps-3">
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/request-demo">
            <a className="btn btn-outline-primary text-decoration-none me-2">
              Book a Demo
            </a>
          </Link>
        </span>
        {/* <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/request-demo">
            <a className="btn btn-primary">Get Started</a>
          </Link>
        </span> */}
      </div>
    </div>
  );
};

export default OffCanvasMenu;

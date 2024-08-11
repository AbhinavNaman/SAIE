import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import FooterShort from "@layout/Footer/FooterShort";
import CareerRequestForm from "@components/services/CareerRequestForm";

const RequestDemo = () => {
  const router = useRouter();
  const { job } = router.query;

  useEffect(() => {
    // Redirect if job is null or empty
    if (!job) {
      router.push("/");
    }
  }, []);

  return (
    <Layout title="Apply for Current Openings" desc="Careers" canonicalUrl="https://saie.ai/career-apply">
      <Navbar navDark />
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-7 order-1 order-lg-0">
            <div className="testimonial-tab-slider-wrap mt-5 mt-lg-0 mt-xl-0">
              <h2 className="text-primary">Apply for the Position of {job}</h2>
              <hr />
            </div>
          </div>
          <CareerRequestForm job={job} />
        </div>
      </div>
      <FooterShort />
    </Layout>
  );
};

export default RequestDemo;

import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import SupportOne from "@components/support/SupportOne";
import CareerPromo from "@components/career/CareerPromo";
import CareerFeature from "@components/career/CareerFeature";

const Career = () => {
  return (
    <Layout title="Career" desc="This is career page" canonicalUrl="https://saie.ai/career">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Careers"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <CareerFeature />
      {/* <CareerPromo /> */}

      <SupportOne className />
      <Footer />
    </Layout>
  );
};

export default Career;

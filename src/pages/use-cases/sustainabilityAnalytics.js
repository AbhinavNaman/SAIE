import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { FaLightbulb } from "react-icons/fa";


const sustainabilityAnalytics = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Sustainability Analytics"
        desc="Our advanced sustainability analytics empower you to track and improve your environmental footprint. With our data-driven insights, you can make informed decisions that align with sustainability goals, ensuring that every aspect of your business supports a greener future."
      />


      <UseCaseSectionOne
        type="normal"
        image={"/use-cases/10.jpeg"}
        icon={<FaLightbulb />}
      />
      <Footer />
    </Layout>
  );
};

export default sustainabilityAnalytics;

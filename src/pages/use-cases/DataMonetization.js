import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import {  FaDatabase } from "react-icons/fa6";



const DataMonetization = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Data Monetization"
        desc="Unlock the hidden value in your data with our comprehensive monetization strategies. We help you turn data into revenue streams, ensuring you capitalize on every bit and byte."
      />


      <UseCaseSectionOne
        type="normal"
        image={"/use-cases/6.jpeg"}
        icon={<FaDatabase />}
      />
      <Footer />
    </Layout>
  );
};

export default DataMonetization;

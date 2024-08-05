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
        desc="
Data monetization is the process of leveraging data to generate revenue. This can be done directly by selling data or indirectly by using data insights to improve business operations, enhance customer experiences, or create new products and services. Companies collect and analyze data to uncover patterns and trends that can drive decision-making and strategy. With the rise of big data and advanced analytics, data monetization has become a key aspect of modern business models, helping organizations unlock the hidden value in their data assets."
        type="normal"
        image={"/use-cases/6.jpeg"}
        icon={<FaDatabase />}
      />
      <Footer />
    </Layout>
  );
};

export default DataMonetization;

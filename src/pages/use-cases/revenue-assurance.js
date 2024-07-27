import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { IoMdAnalytics } from "react-icons/io";




const RevenueAssurance = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Revenue Assurance"
        desc="Choose SMART AI FOR ENTERPRISE INC as your partner in propelling your business towards unprecedented profitable growth. Let's build a brighter, more prosperous future for your enterprise together."
      />


      <UseCaseSectionOne
      desc="Revenue assurance involves processes and tools that ensure all possible revenue is correctly captured and billed, minimizing revenue leakage. Data monetization refers to the strategic use of data to generate revenue, either by selling data or by leveraging it to improve products and services. Companies can gain valuable insights from data, optimize operations, and create new revenue streams, ultimately enhancing profitability."
        type="normal"
        image={"/use-cases/16.jpeg"}
        icon={<IoMdAnalytics />}
      />
      <Footer />
    </Layout>
  );
};

export default RevenueAssurance;

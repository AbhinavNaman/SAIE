import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import {  GiMoneyStack } from "react-icons/gi";



const SmartFinanceOperations = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Smart Finance Operations"
        desc="Join SMART AI FOR ENTERPRISE INC. in leading the evolution of business operations. Partner with us and unlock the potential of your enterprise through unparalleled efficiency and innovation."
      />


      <UseCaseSectionOne
        type="normal"
        image={"/use-cases/5.jpeg"}
        icon={<GiMoneyStack />}
      />
      <Footer />
    </Layout>
  );
};

export default SmartFinanceOperations;
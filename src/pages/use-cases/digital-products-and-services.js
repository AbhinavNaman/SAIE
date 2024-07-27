import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { GiDigitalTrace} from "react-icons/gi";





const DigitalProductsandServices = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Digital Products and Services"
        desc="In the digital age, staying ahead means being agile. Our digital products and services are designed to give you the edge, combining innovative technology with market-leading expertise to keep you at the forefront."
      />


      <UseCaseSectionOne
      desc="Digital products and services encompass a wide range of offerings delivered through digital channels. These include software applications, digital content, online services, and platforms. They are characterized by their ability to scale quickly, be updated frequently, and provide personalized experiences. Digital products and services are essential in today's market, driving innovation and enabling businesses to meet evolving customer needs."
        type="normal"
        image={"/use-cases/8.jpeg"}
        icon={<GiDigitalTrace />}
      />
      <Footer />
    </Layout>
  );
};

export default DigitalProductsandServices;

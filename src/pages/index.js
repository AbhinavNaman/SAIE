import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Customer from "@components/customer/Customer";
import PromoThree from "@components/promo/PromoThree";
import SupportOne from "@components/support/SupportOne";
import ServiceOne from "@components/services/ServiceOne";
import IntegrationTwo from "@components/integration/IntegrationTwo";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";
import WorkProcessFour from "@components/workprocess/WorkProcessFour";
import WorkProcessFive from "@components/workprocess/WorkProcessFive";
import HeroSectionFourth from "@components/hero-section/HeroSectionFourth";
import SingleServiceFeature from "@components/services/SingleServiceFeature";
import FeatureImgContentTwo from "@components/feature-img-content/FeatureImgContentTwo";
import OurStory from "@components/our-story/OurStory";
import LatestBlog from "@components/blogs/LatestBlog";
import WorkProcessOne from "@components/workprocess/WorkProcessOne";
import WorkProcessTwo from "@components/workprocess/WorkProcessTwo";
import WorkProcessThree from "@components/workprocess/WorkProcessThree";
import MiniCoreServices from "@components/workprocess/miniCoreServices";
import Industries from "@components/promo/Industries";
const StartUpAgencyHome = () => {
  return (
    <Layout
    title="Home"
    desc="Welcome to the home page of SMART AI FOR ENTERPRISE INC "
    canonicalUrl="https://saie.vercel.app/"
    >
      <Navbar navDark />
      {/* <HeroSectionFourth bgDark /> */}
      <HeroSectionFourth />
      {/* <Customer gray /> */}
      <Industries />
      <PromoThree />

      <WorkProcessFive />
      {/* <FeatureImgContentTwo cardDark /> */}
      {/* <OurStory /> */}

      <MiniCoreServices />
      <WorkProcessThree />
      <ServiceOne  />
      {/* bgDark */}
      <SingleServiceFeature />
      {/* <WorkProcessFive /> */}
      {/* <WorkProcessFour /> */}

      {/* <WorkProcessTwo /> */}
      {/* <WorkProcessOne /> */}

      <TestimonialTwo sectionBgClass="bg-dark" swiperBgClass="bg-dark-shade" />
      <IntegrationTwo dark />
      {/* <LatestBlog /> */}
      <SupportOne className />
      <Footer />
    </Layout>
  );
};

export default StartUpAgencyHome;

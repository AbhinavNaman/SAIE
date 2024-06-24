import React from "react";

import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import SingleServicePromo from "@components/services/SingleServicePromo";
import SingleServiceRegister from "@components/services/SingleServiceRegister";
import SingleServiceFeature from "@components/services/SingleServiceFeature";
import SingleServiceFeatureTwo from "@components/services/SingleServiceFeatureTwo";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { MdFiberSmartRecord } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { FaLink, FaPeopleGroup, FaDatabase } from "react-icons/fa6";
import { GiDigitalTrace, GiMoneyStack, GiProfit } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { MdCrisisAlert } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import {
  supplyChainResilienceDataCurrentChallenges,
  supplyChainResilienceDataCurrentPropositions,
  smartChallengesPropositions,
  SmartChallengesChallenges,
  manufacturingExcellenceChallenges,
  manufacturingExcellenceProposition,
  smartMarketingChallenges,
  smartMarketingProposition,
  smartSalesOperationChallenges,
  smartSalesOperationProposition,
  pricingAndProfitabilityChallenges,
  pricingAndProfitabilityProposition,
  smartSourcingProposition,
  smartSourcingChallenges,
} from "@utils/data";
import { RiProductHuntLine } from "react-icons/ri";
import UseCaseTitle from "@components/workprocess/customUseCaseTitle";

const Integrations = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Use Cases"
        desc="At SMART AI FOR ENTERPRISE INC. we redefine operational efficiency across every facet of your business. Our tailored solutions are designed to elevate your operational capabilities to new heights."
      />
      <UseCaseSectionOne
        id="smart-sourcing"
        title="Smart Sourcing"
        desc="With our Smart Sourcing strategies, we help you identify, evaluate, and engage with the best suppliers using data-driven insights, minimizing costs while maximizing quality and sustainability."
        type="normal"
        image={"/use-cases/1.jpeg"}
        challenges={
          <div>
            {smartSourcingChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div>
            {smartSourcingProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={<MdFiberSmartRecord />}
      />
      <UseCaseSectionOne
        id="manufacturing-excellence"
        title="Manufacturing Excellence"
        desc="Our approach to Manufacturing Excellence integrates cutting-edge AI with lean manufacturing principles, ensuring your production lines are not just faster but also smarter, reducing waste and increasing output quality"
        type="reverse"
        image={"/use-cases/2.jpeg"}
        challenges={
          <div style={{color:"black"}}>
            {manufacturingExcellenceChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div>
            {manufacturingExcellenceProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={<BsTools />}
      />
      <UseCaseSectionOne
        id="supply-chain-resilience"
        title="Supply Chain Resilience"
        desc="In an era of uncertainty, our Supply Chain Resilience solutions provide you with the agility to respond to market changes, the robustness to withstand disruptions, and the strategic foresight to capitalize on emerging opportunities."
        type="normal"
        image={"/use-cases/3.webp"}
        challenges={
          <div style={{color:"black"}}>
            {supplyChainResilienceDataCurrentChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div style={{color:"black"}}>
            {supplyChainResilienceDataCurrentPropositions.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={<FaLink />}
      />
      <UseCaseSectionOne
        title="Smart Talent Acquisition"
        desc="We empower your workforce with tools and insights to boost productivity. Our Smart Talent Acquisition uses advanced analytics to align your talent strategy with business priorities, fostering a more engaged and efficient workforce."
        type="reverse"
        challenges={
          <div style={{color:"black"}}>
            {SmartChallengesChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div style={{color:"black"}}>
            {smartChallengesPropositions.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        image={"/use-cases/4.jpeg"}
        icon={<FaPeopleGroup />}
      />

      <UseCaseTitle
        title="Advanced Business Solutions"
        desc="At SMART AI FOR ENTERPRISE INC. our mission is to fuel your growth trajectory with smart, scalable, and sustainable strategies. Dive into the new era of profitability with our suite of services"
      />
      <UseCaseSectionOne
        id="smart-marketing"
        title="Smart Marketing"
        desc="Leverage our data-driven marketing insights to craft compelling narratives that resonate with your audience. Our Smart Marketing solutions optimize campaigns in real-time, ensuring maximum engagement and ROI."
        type="reverse"
        image={"/use-cases/12.jpeg"}
        challenges={
          <div style={{color:"black"}}>
            {smartMarketingChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div style={{color:"black"}}>
            {smartMarketingProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={<GrAnnounce />}
      />
      <UseCaseSectionOne
        id="smart-sales-operations"
        title="Smart Sales Operations"
        desc="Revolutionize your sales processes with our AI-powered analytics. We streamline your sales pipeline, enhance lead generation, and enable your sales team to close deals faster and more efficiently than ever before."
        type="normal"
        challenges={
          <div style={{color:"black"}}>
            {smartSalesOperationChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div style={{color:"black"}}>
            {smartSalesOperationProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        image={"/use-cases/image-1.webp"}
        icon={<MdCrisisAlert />}
      />
      <UseCaseSectionOne
        title="Pricing Optimization"
        desc="With our Pricing Optimization models, we ensure that you hit the sweet spot every time, combining competitive analysis, market trends, and consumer behavior to set prices that maximize margins and drive sales."
        type="reverse"
        image={"/use-cases/image-2.webp"}
        challenges={
          <div style={{color:"black"}}>
            {pricingAndProfitabilityChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div style={{color:"black"}}>
            {pricingAndProfitabilityProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={<MdCrisisAlert />}
      />
      <UseCaseSectionOne
        title="Profitability Optimization"
        desc="With our Pricing Optimization models, we ensure that you hit the sweet spot every time, combining competitive analysis, market trends, and consumer behavior to set prices that maximize margins and drive sales."
        type="normal"
        image={"/use-cases/image-3.webp"}
        icon={<GiProfit />}
        challenges={
          <div style={{color:"black"}}>
            {pricingAndProfitabilityChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div style={{color:"black"}}>
            {pricingAndProfitabilityProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
      />

      <UseCaseTitle
        title="Innovative Business Models"
        desc="At SMART AI FOR ENTERPRISE INC we're not just adapting to the new economy; we're creating it. Our innovative strategies are tailored to help your business lead and thrive through transformation and monetization:"
      />
      <UseCaseSectionOne
        title="Smart Finance Operations"
        desc="Join SMART AI FOR ENTERPRISE INC. in leading the evolution of business operations. Partner with us and unlock the potential of your enterprise through unparalleled efficiency and innovation."
        type="reverse"
        image={"/use-cases/5.jpeg"}
        icon={<GiMoneyStack />}
      />
      <UseCaseSectionOne
        title="Revenue Assurance"
        desc="Choose SMART AI FOR ENTERPRISE INC as your partner in propelling your business towards unprecedented profitable growth. Let's build a brighter, more prosperous future for your enterprise together."
        type="normal"
        image={"/use-cases/16.jpeg"}
        icon={<IoMdAnalytics />}
      />
      <UseCaseSectionOne
        title="Data Monetization"
        desc="Unlock the hidden value in your data with our comprehensive monetization strategies. We help you turn data into revenue streams, ensuring you capitalize on every bit and byte."
        type="reverse"
        image={"/use-cases/6.jpeg"}
        icon={<FaDatabase />}
      />
      <UseCaseSectionOne
        title="Product to Service Transition"
        desc="Evolve your product offerings into full-fledged services with our seamless transition plans. We provide the insights and tools necessary to shift towards a service-oriented model, enhancing customer engagement and satisfaction."
        type="normal"
        image={"/use-cases/image-4.webp"}
        icon={<RiProductHuntLine />}
      />
      <UseCaseSectionOne
        title="Digital Products and Services"
        desc="In the digital age, staying ahead means being agile. Our digital products and services are designed to give you the edge, combining innovative technology with market-leading expertise to keep you at the forefront."
        type="reverse"
        image={"/use-cases/8.jpeg"}
        icon={<GiDigitalTrace />}
      />
      <UseCaseTitle
        title="Sustainable Future Solutions"
        desc="Lead the way in sustainability With Our Esg Excellence Initiative. We help you reduce your environmental impact, increase your social responsibility, and create a better world for all."
      />
      <UseCaseSectionOne
        title="New Ecosystem Partnerships"
        desc="Partner with SMART AI FOR ENTERPRISE INC and reshape your future. Let's innovate and pioneer new models together, ensuring your business is not just part of the conversation but leading the dialogue in industry transformation."
        type="normal"
        image={"/use-cases/9.jpeg"}
        icon={<MdFiberSmartRecord />}
      />
      <UseCaseSectionOne
        id="sustainability-analytics"
        title="Sustainability Analytics"
        desc="Our advanced sustainability analytics empower you to track and improve your environmental footprint. With our data-driven insights, you can make informed decisions that align with sustainability goals, ensuring that every aspect of your business supports a greener future."
        type="reverse"
        image={"/use-cases/10.jpeg"}
        icon={<FaLightbulb />}
      />

      <UseCaseSectionOne
        title="Carbon Accounting"
        desc="At SMART AI FOR ENTERPRISE INC, we're committed to integrating ESG excellence into the core of business operations. By pioneering innovative approaches to sustainability, we empower organizations to make a positive impact on the world while enhancing their corporate responsibility profile."
        type="normal"
        image={"/use-cases/11.jpeg"}
        icon={<BiSolidReport />}
      />
      <SingleServicePromo />
      <SingleServiceRegister />
      <hr/>
      <Footer />
    </Layout>
  );
};

export default Integrations;

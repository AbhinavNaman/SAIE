import {
  BiServer,
  BiNews,
  BiDetail,
  BiRocket,
  BiPaperPlane,
  BiHelpCircle,
  BiLogIn,
  BiUser,
  BiError,
} from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsHeadset } from "react-icons/bs";
import { FaLaptopCode, FaRegClock, FaRegTrashAlt } from "react-icons/fa";

const IconBoxData = [
  {
    classOption: "bg-primary",
    icon: "fal fa-layer-group fa-2x text-white",
    title: "Good Performance",
    description:
      "Appropriately grow competitive leadership rather than strategic technically sound processes without state .",
  },
  {
    id: 2,
    classOption: "bg-danger",
    icon: "fal fa-shield-check fa-2x text-white",
    title: "Highly Secure",
    description:
      "Appropriately grow competitive leadership rather than strategic technically sound processes without state.",
  },
  {
    id: 3,
    classOption: "bg-dark",
    icon: "fal fa-code fa-2x text-white",
    title: "Fast Development",
    description:
      "Appropriately grow competitive leadership rather than strategic technically sound processes without state.",
  },
];
const FaqOneData = [
  {
    faqTitle: "How does back pricing work?",
    faqDesc:
      "Progressively e-enable collaborative inexpensive supply chains. Efficiently maintain economically methods of empowerment for synergistic sound scenarios.",
  },
  {
    id: 2,
    faqTitle: "How do I calculate how much price?",
    faqDesc:
      "Globally benchmark customized mindshare before clicks-and-mortar partnerships. Efficiently maintain economically sound scenarios and whereas client-based progressively.",
  },
  {
    id: 3,
    faqTitle: "Can you show me an example?",
    faqDesc:
      "Dynamically visualize whereas competitive relationships. Progressively benchmark customized partnerships generate interdependent benefits rather sound scenarios and robust alignments.",
  },
];

const TestimonialData = [
  {
    authorImg: "/p-1.png",
    authorName: "Sanjay Mamidipalli",
    authorTitle: "Saib AI",
    authorQuote:
      "Senior Executive with more than 25 years of experience and deep expertise within the consulting industry selling and delivering next generation data and AI driven transformation programs. Passionate about creating business value through data driven approaches, building senior CXO client relationships, market development and leading high-performing consulting teams.",
  },
  {
    id: 2,
    authorImg: "/p-2.png",
    authorName: "Amar Bandaru",
    authorTitle: "Saib AI",
    authorQuote:""
      ,
  },
];

      // "Amar is an experienced Strategy and Software Executive with a successful track record spanning over 25 years. His expertise lies in Software Development, Strategic Planning, Mergers and Acquisitions, Product Development, and IT consulting services. Notable achievements include founding and selling CROM Technology, managing acquisitions like Adbakx and Flexon Technologies, and providing strategic consulting in the Market Research Industry. Amar's leadership has been crucial in integrating infrastructure and applications during mergers and establishing offshore teams. He holds a Master's in Technology Spatial Information Technology."

const TestimonialOneData = [
  {
    id: "#testimonial-tab-1",
    activeClass: "active",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-1.jpg",
    authorAvatar: "/testimonial/1.jpg",
  },
  {
    id: "#testimonial-tab-2",
    title: "Embarrassed by the First Version.",
    desc: "Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leveraother backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.",
    authorName: "Rupan Oberoi",
    authorDesn: "Web Designer",
    authorThumb: "/testimonial/t-2.jpg",
    authorAvatar: "/testimonial/2.jpg",
  },
  {
    id: "#testimonial-tab-3",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-3.jpg",
    authorAvatar: "/testimonial/3.jpg",
  },
  {
    id: "#testimonial-tab-4",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-4.jpg",
    authorAvatar: "/testimonial/4.jpg",
  },
  {
    id: "#testimonial-tab-5",
    title: "The Best Template You Got to Have it!",
    desc: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    authorName: "Joe Richard",
    authorDesn: "Visual Designer",
    authorThumb: "/testimonial/t-5.jpg",
    authorAvatar: "/testimonial/5.jpg",
  },
];

const registerTestimonial = [
  {
    active: "active show",
    target: "testimonial-tab-1",
    header: "The Best Template You Got to Have it!",
    info: "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global.",
    name: "Joe Richard",
    title: "Visual Designer",
  },
  {
    target: "testimonial-tab-2",
    header: "Amazing Quiety template!",
    info: "Distinctively engineer client-centered information. Progressively customize client-centered repurpose viral e-services whereas before 24/7 total linkage.",
    name: "Oberoi R.",
    title: "CEO at Herbs",
  },
  {
    target: "testimonial-tab-3",
    header: "Embarrassed by the First Version!",
    info: " Efficiently whiteboard cross-unit meta-services. Quickly transition standardized schemas via leveraged users. Assertively actualize mission-critical supply chains through.",
    name: "Joan Dho",
    title: "Founder and CTO",
  },
];
const registerTestimonialTarget = [
  {
    active: "active",
    target: "#testimonial-tab-1",
    image: "/testimonial/1.jpg",
  },
  {
    target: "#testimonial-tab-2",
    image: "/testimonial/2.jpg",
  },
  {
    target: "#testimonial-tab-3",
    image: "/testimonial/3.jpg",
  },
];

///footer data
const footerPrimaryPages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/core-services",
  },
  {
    title: "About Us",
    href: "/company-overview",
  },
  {
    title: "Careers",
    href: "/career",
  },
];

const footerPages = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blogs",
  },
  {
    title: "Blog Details",
    href: "/blog-single",
  },
  {
    title: "Company Overview",
    href: "/company-overview",
  },
  {
    title: "Careers",
    href: "/career-single",
  },
  {
    title: "Services Single",
    href: "/single-service",
  },
];
const footerTemplate = [
  {
    title: "Contact",
    href: "/contact-us",
  },
  {
    title: "Support",
    href: "/help-center",
  },
  {
    title: "Support Single",
    href: "/help-center-single",
  },
  {
    title: "Request for Demo",
    href: "/request-demo",
  },
  {
    title: "Coming Soon",
    href: "/coming-soon",
  },
  {
    title: "Career Single",
    href: "/career-single",
  },
];

//navbar data
const navHomeOne = [
  {
    title: "Sass Company 1",
    info: "It's for SaaS Software Company",
    href: "/",
  },
  {
    title: "Sass Company 2",
    info: " Modern Sass agency",
    href: "sass-company-two",
  },
  {
    title: "Desktop App",
    info: "Web Software Company",
    href: "desktop-app",
  },

  {
    title: "App Landing",
    info: " App and Software Landing",
    href: "app-landing",
  },
  {
    title: "Software Application",
    info: "IT solutions and SaaS Application",
    href: "software-application",
  },
  {
    title: "Startup Agency",
    info: "Different type of Agency",
    href: "startup-agency",
  },
  {
    title: "Data Analysis",
    info: " Software & Data Analysis",
    href: "data-analysis",
  },
  {
    title: "App Landing Two",
    info: "Software & Data Analysis",
    href: "app-landing-two",
  },
  {
    title: "IT Solution",
    info: "IT Solution and Sass Application",
    href: "it-solution",
  },
];

const navHomeTwo = [
  {
    title: "Cyber Security",
    info: "Cyber Security Landing Page",
    href: "cyber-security",
  },
  {
    title: "Crypto Currency",
    info: "Crypto Currency Landing Page",
    href: "crypto-currency",
  },
  {
    title: "Game Solution",
    info: "Crypto Server Landing Page",
    href: "game-solution",
  },
  {
    title: "Payment Gatway",
    info: "Payment Landing Page",
    href: "payment-gateway",
  },
  {
    title: "Digital Marketing",
    info: "Digital Landing Page",
    href: "digital-marketing",
  },
  {
    title: "Conference",
    info: "Conference Landing Page",
    href: "conference",
  },

  {
    title: "Quiety Insurance",
    info: "Quiety Landing Page",
    href: "quiety-insurance",
  },

  {
    title: "Sass Marketing",
    info: "Sass Marketing Landing Page",
    href: "sass-marketing",
  },
];

//Offcanvas Menu
const offcanvasMenuData = [
  {
    title: "Sass Company 1",
    info: "It's for SaaS Software Company",
    href: "/",
  },
  {
    title: "Sass Company 2",
    info: " Modern Sass agency",
    href: "sass-company-two",
  },
  {
    title: "Desktop App",
    info: "Web Software Company",
    href: "desktop-app",
  },

  {
    title: "App Landing",
    info: " App and Software Landing",
    href: "app-landing",
  },
  {
    title: "Software Application",
    info: "IT solutions and SaaS Application",
    href: "software-application",
  },
  {
    title: "Startup Agency",
    info: "Different type of Agency",
    href: "startup-agency",
  },
  {
    title: "Data Analysis",
    info: " Software & Data Analysis",
    href: "data-analysis",
  },
  {
    title: "App Landing Two",
    info: "Software & Data Analysis",
    href: "app-landing-two",
  },
  {
    title: "IT Solution",
    info: "IT Solution and Sass Application",
    href: "it-solution",
  },
  {
    title: "Cyber Security",
    info: "Cyber Security Landing Page",
    href: "cyber-security",
  },
  {
    title: "Crypto Currency",
    info: "Crypto Currency Landing Page",
    href: "crypto-currency",
  },
  {
    title: "Game Solution",
    info: "Crypto Server Landing Page",
    href: "game-solution",
  },
  {
    title: "Payment Gatway",
    info: "Payment Landing Page",
    href: "payment-gateway",
  },
  {
    title: "Digital Marketing",
    info: "Digital Landing Page",
    href: "digital-marketing",
  },
  {
    title: "Conference",
    info: "Conference Landing Page",
    href: "conference",
  },
  {
    title: "Quiety Insurance",
    info: "Quiety Landing Page",
    href: "quiety-insurance",
  },
  {
    title: "Sass Marketing",
    info: "Sass Marketing Landing Page",
    href: "sass-marketing",
  },
];

const navCompanyLinks = [
  {
    title: "Contact Us",
    icon: <BiLogIn />,
    href: "contact-us",
  },
  {
    title: "Service Single",
    icon: <BiServer />,
    href: "single-service",
  },
  {
    title: "Our Latest News",
    icon: <BiNews />,
    href: "blogs",
  },
  {
    title: "News Details",
    icon: <BiDetail />,
    href: "blog-single",
  },
  {
    title: "Career",
    icon: <HiOutlineAcademicCap />,
    href: "career",
  },
  {
    title: "Career Single",
    icon: <HiOutlineAcademicCap />,
    href: "career-single",
  },
  {
    title: "Integrations",
    icon: <BiRocket />,
    href: "integrations",
  },
  {
    title: "Integrations Single",
    icon: <BiPaperPlane />,
    href: "integration-single",
  },
];

const navCompanyPage = [
  {
    title: "Help Center",
    icon: <BiHelpCircle />,
    href: "help-center",
  },
  {
    title: "Help Details",
    icon: <BsHeadset />,
    href: "help-center-single",
  },
  {
    title: "Request for Demo",
    icon: <FaLaptopCode />,
    href: "request-demo",
  },
  {
    title: "User Login",
    icon: <BiLogIn />,
    href: "login",
  },
  {
    title: "User SignUp",
    icon: <BiUser />,
    href: "register",
  },
  {
    title: "Recovery Account",
    icon: <FaRegTrashAlt />,
    href: "password-reset",
  },
  {
    title: "404 Page",
    icon: <BiError />,
    href: "404",
  },
  {
    title: "Coming Soon",
    icon: <FaRegClock />,
    href: "coming-soon",
  },
];

//
const testimonialAuthor = [
  {
    name: "Joe Richard",
    title: "Visual Designer",
    image: "/testimonial/1.jpg",
    target: "#testimonial-tab-1",
  },
  {
    name: "Rupan Oberoi",
    title: "Web Designer",
    image: "/testimonial/2.jpg",
    target: "#testimonial-tab-2",
  },
  {
    name: "Jon Doe",
    title: "Software Engineer",
    image: "/testimonial/3.jpg",
    target: "#testimonial-tab-3",
  },
  {
    name: "Hanry Luice",
    title: "App Developer",
    image: "/testimonial/4.jpg",
    target: "#testimonial-tab-4",
  },
  {
    name: "Ami Nijai",
    title: "Customer Support",
    image: "/testimonial/5.jpg",
    target: "#testimonial-tab-5",
  },
];

const testimonialOne = [
  {
    name: "Joe Richard",
    title: "Visual Designer",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/t-1.jpg",
    target: "testimonial-tab-1",
    active: "active show",
  },
  {
    name: "Rupan Oberoi",
    title: "Web Designer",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/t-2.jpg",
    target: "testimonial-tab-2",
  },
  {
    name: "Jon Doe",
    title: "Software Engineer",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/t-3.jpg",
    target: "testimonial-tab-3",
  },
  {
    name: "Hanry Luice",
    title: "App Developer",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/t-4.jpg",
    target: "testimonial-tab-4",
  },
  {
    name: "Ami Nijai",
    title: "Customer Support",
    header: "The Best Template You Got to Have it!",
    description:
      " Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.",
    image: "/testimonial/t-5.jpg",
    target: "testimonial-tab-5",
  },
];

//pricing data
const pricingData = [
  {
    title: "Stater",
    price: "$25",
    time: "/month",
    bgColor: "bg-white",
    textColor: "text-primary",
    btnColor: "btn-outline-primary",
    shape: "left--40 bottom--40",
    listItem: [
      {
        li: "1 Team",
      },
      {
        li: "1 Installed Agent",
      },
      {
        li: "Real-Time Feedback",
      },
      {
        li: "Video Dedicated Support",
      },
      {
        li: "Attacked Targets Per Month",
      },
      {
        li: "Team Collaboration Tools",
      },
      {
        li: "Automated Updated Features",
      },
      {
        li: "24/7 Life time Support",
      },
    ],
  },

  {
    title: "Advanced",
    price: "$45",
    time: "/month",
    bgColor: "bg-gradient",
    textColor: "text-warning",
    btnColor: "btn-primary",

    listItem: [
      {
        li: "5 Team",
      },
      {
        li: "3 Installed Agent",
      },
      {
        li: "Real-Time Feedback",
      },
      {
        li: "Video Dedicated Support",
      },
      {
        li: "24 Attacked Targets Per Month",
      },
      {
        li: "Team Collaboration Tools",
      },
      {
        li: "Automated Updated Features",
      },
      {
        li: "24/7 Life time Support",
      },
    ],
  },

  {
    title: "Premium",
    price: "$75",
    time: "/month",
    bgColor: "bg-white",
    textColor: "text-primary",
    btnColor: "btn-outline-primary",
    shape: "right--40 top--40",
    listItem: [
      {
        li: "6 Team",
      },
      {
        li: "8 Installed Agent",
      },
      {
        li: "Real-Time Feedback",
      },
      {
        li: "Video Dedicated Support",
      },
      {
        li: "40 Attacked Targets Per Month",
      },
      {
        li: "Team Collaboration Tools",
      },
      {
        li: "Automated Updated Features",
      },
      {
        li: "24/7 Life time Support",
      },
    ],
  },
];

//integration data
const integrationOneRight = [
  {
    image: "/integations/7.png",
    className: "integration-7",
  },
  {
    image: "/integations/8.png",
    className: "integration-8",
  },
  {
    image: "/integations/9.png",
    className: "integration-9",
  },
  {
    image: "/integations/10.png",
    className: "integration-10",
  },
  {
    image: "/integations/11.png",
    className: "integration-11",
  },
  {
    image: "/integations/12.png",
    className: "integration-12",
  },
];

const integrationFeature = [
  {
    logo: "/integations/1.png",
    type: "Popular",
    class: "bg-primary-soft text-primary",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/2.png",
    type: "Free",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/3.png",
    type: "Advanced",
    class: "bg-success-soft text-success",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/4.png",
    type: "Premium",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/5.png",
    type: "Popular",
    class: "bg-primary-soft text-primary",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/6.png",
    type: "Basic",
    class: "bg-danger-soft text-danger",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/7.png",
    type: "Free",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/8.png",
    type: "Advanced",
    class: "bg-success-soft text-success",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
  {
    logo: "/integations/9.png",
    type: "Premium",
    class: "bg-warning-soft text-warning",
    title: "Google Drive",
    info: "Globally engage tactical niche markets rather than client-based competently generate unique e-services",
  },
];

const integrationOneLeft = [
  {
    image: "/integations/1.png",
    className: "integration-1",
  },
  {
    image: "/integations/2.png",
    className: "integration-2",
  },
  {
    image: "/integations/3.png",
    className: "integration-3",
  },
  {
    image: "/integations/4.png",
    className: "integration-4",
  },
  {
    image: "/integations/5.png",
    className: "integration-5",
  },
  {
    image: "/integations/6.png",
    className: "integration-6",
  },
];

//ourTeam data
const ourTeam = [
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-1.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-2.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-3.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-4.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-5.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-6.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-7.jpg",
  },
  {
    name: "John Sullivan",
    title: "Front End Developer",
    image: "/team/team-8.jpg",
  },
];

//blog data
const blogFeatureData = [
  {
    image: "/capalities-wallpaper/NextGenCustomerExp.webp",
    type: "Business",
    header: "Smart Talent Acquisition",
    info: "Smart talent acquisition involves leveraging data-driven strategies to identify, attract, and retain top-tier candidates, ensuring alignment with organizational goals and culture",
    profilePic: "/testimonial/6.jpg",
    author: "Jane Martin",
    data: "April 24, 2021",
    class: "bg-warning-soft",
  },
  // {
  //   image: "/capalities-wallpaper/Blogs - Two Tried and True Frameworks.png",
  //   type: "Business",
  //   header: "When do I Have True Product Market Fit?",
  //   info: "Two Tried & True Frameworks.",
  //   profilePic: "/testimonial/1.jpg",
  //   author: "Veronica P. Byrd",
  //   data: "April 24, 2021",
  //   class: "bg-primary-soft",
  // },
  {
    image: "/use-cases/3.webp",
    type: "Business",
    header: "Smart supply chain",
    info: "In an era of uncertainty, our Supply Chain Resilience solutions provide you with the agility to respond to market changes, the robustness to withstand disruptions, and the strategic foresight to capitalize on emerging opportunities.",
    profilePic: "/testimonial/3.jpg",
    author: "Martin Gilbert",
    data: "May 20, 2021",
    class: "bg-danger-soft",
  },
  // {
  //   image: "/capalities-wallpaper/Blogs - Product Managers Tech Stack.png",
  //   type: "Business",
  //   header: "Product Managers Tech Stack",
  //   info: "The modern product manager’s tech stack.",
  //   profilePic: "/testimonial/4.jpg",
  //   author: "Raymond H. Martin",
  //   data: "June 10, 2021",
  //   class: "bg-primary-soft",
  // },
  {
    image: "/capalities-wallpaper/SmartAssetManagement.webp",
    type: "Business",
    header: "Smart Asset Management",
    info: "Smart asset management encompasses employing sophisticated digital platforms and analytics to effectively monitor, analyze, and optimize asset performance and utilization.",
    profilePic: "/testimonial/5.jpg",
    author: "Luthar Martin",
    data: "July 24, 2021",
    class: "bg-warning-soft",
  },
  {
    image: "/capalities-wallpaper/SmartTalent.webp",
    type: "Business",
    header: "Driving profitable growth",
    info: "Manage your digital products with the right tools and technology.",
    profilePic: "/testimonial/6.jpg",
    author: "Donna Martin",
    data: "August 25, 2021",
    class: "bg-danger-soft",
  },
  {
    image: "/capalities-wallpaper/Blogs - Diversity Inclusion and Allyship.png",
    type: "Business",
    header: "NextGen Customer Exp",
    info: "Next-gen customer experience revolves around seamlessly integrating innovative technologies like AI-driven chatbots, personalized recommendation engines, and immersive virtual experiences to anticipate and exceed customer expectations.",
    profilePic: "/testimonial/1.jpg",
    author: "Donna R. Book",
    data: "September 24, 2021",
    class: "bg-danger-soft",
  },
  ,
];

//career data
const careerJobCard = [
  {
    type: "Remote - Full Time",
    position: "Developer",
    title: "Jr Frontend Developer",
    className: "bg-primary-soft text-primary",
    listItem: [
      {
        media: "Google",
        location: "USA",
        salary: "$35-$45k",
      },
    ],
  },
  {
    type: "Remote - Full Time",
    position: "Designer",
    title: "UI/UX and Product Designer",
    className: "bg-danger-soft text-danger",
    listItem: [
      {
        media: "Figma",
        location: "USA",
        salary: "$25-$35k",
      },
    ],
  },
];

//help center data
const helpCenterFaqDetails = [
  {
    title: "All Support Articles",
    target: "support-tab-1",
    class: "show active",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },

  {
    title: "Payments Query",
    target: "support-tab-2",
    listItem: [
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical with high standards in e-markets. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },

  {
    title: "Setup or Installment",
    target: "support-tab-3",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
  {
    title: "Technical Support",
    target: "support-tab-4",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
  {
    title: "Retailers & Customer",
    target: "support-tab-5",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
  {
    title: "Security Issues",
    target: "support-tab-6",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
  {
    title: "Brand Creation",
    target: "support-tab-7",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
  {
    title: "Legal Support",
    target: "support-tab-8",
    listItem: [
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you have any local branches?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What do I need to create an account?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Are you open for new podcast guests?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "When is the upcoming annual event?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What is the monthly cost of your app?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "Do you offer refunds for the subscriptions?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What’s inside the Facebook community?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "How often is there a subscribers stream?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
      {
        header: "What certifications does Agency has?",
        desc: "Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...",
        href: "/help-center-single",
      },
    ],
  },
];

//desktop app integration two
const brandName = [
  {
    image: "/companylogos/tcs.svg",
    brand: "TCS Consultancy",
  },
  {
    image: "/companylogos/apple.svg",
    brand: "Apple",
  },
  {
    image: "/companylogos/ut.svg",
    brand: "MD Anderson Cancer Center",
  },
  {
    image: "/companylogos/walmart.svg",
    brand: "Walmart",
  },
  {
    image: "/companylogos/techmahindra.svg",
    brand: "Tech Mahindra",
  },
  {
    image: "/companylogos/google.svg",
    brand: "Google",
  },
  {
    image: "/companylogos/optum.svg",
    brand: "Optum",
  },
  {
    image: "/companylogos/ny.svg",
    brand: "New york State of Opportunity",
  },
  {
    image: "/companylogos/ntt.svg",
    brand: "NTT Data",
  },
  {
    image: "/companylogos/oracle.svg",
    brand: "Oracle",
  },
  {
    image: "/companylogos/merck.svg",
    brand: "MERCK",
  },
  {
    image: "/companylogos/cap.svg",
    brand: "Capgemini",
  },
  {
    image: "/companylogos/tek.svg",
    brand: "TEK Systems",
  },
  {
    image: "/companylogos/pge.svg",
    brand: "PG&E",
  },
  {
    image: "/companylogos/genentech.svg",
    brand: "Genentech",
  },
  {
    image: "/companylogos/bcbs.svg",
    brand: "Blue Cross Blue Shield",
  },
  {
    image: "/companylogos/hcl.svg",
    brand: "HCL",
  },
];
//Service IT
const ItServiceData = [
  {
    serviceImg: "/service/coding.png",
    serviceTitle: "Web Development",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-bottom border-end",
  },
  {
    serviceImg: "/service/app-development.png",
    serviceTitle: "App Development",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-bottom border-end",
  },
  {
    serviceImg: "/service/shield.png",
    serviceTitle: "Data Security",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-bottom",
  },
  {
    serviceImg: "/service/curve.png",
    serviceTitle: "UI/UX Development",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-end",
  },
  {
    serviceImg: "/service/graphic-design.png",
    serviceTitle: "Graphics Design",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "border-end",
  },
  {
    serviceImg: "/service/promotion.png",
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "There are many variations of the passages of Lorem Ipsum is an available the done.",
    className: "",
  },
];
const testimonialFourData = [
  {
    quoate:
      "You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.",
    authorAvatar: "/testimonial/app-testimonial-1.png",
    authorName: "Noah L. Paulsen",
    quoateDate: "Feb 19, 2022",
  },
  {
    quoate:
      "You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.",
    authorAvatar: "/testimonial/app-testimonial-2.png",
    authorName: "Noah L. Paulsen",
    quoateDate: "Feb 19, 2022",
  },
  {
    quoate:
      "You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.",
    authorAvatar: "/testimonial/app-testimonial-3.png",
    authorName: "Ariya Stark",
    quoateDate: "June 24, 2022",
  },
];
const cryptoBlogData = [
  {
    blogThumb: "/cbl-1.png",
    blogTitle: "How Filecoin is Up in a Week Could Take Care",
    blogExerpt:
      "Words combined with a handful of model to generate which looks reasonable.",
    authorAvatar: "/testimonial/app-testimonial-1.png",
    authorName: "St Adward",
    postDate: "Feb 19, 2022",
  },
  {
    blogThumb: "/cbl-2.png",
    blogTitle: "How Filecoin is Up in a Week Could Take Care",
    blogExerpt:
      "Words combined with a handful of model to generate which looks reasonable.",
    authorAvatar: "/testimonial/app-testimonial-2.png",
    authorName: "St Adward",
    postDate: "Feb 19, 2022",
  },
  {
    blogThumb: "/cbl-3.png",
    blogTitle: "How Filecoin is Up in a Week Could Take Care",
    blogExerpt:
      "Words combined with a handful of model to generate which looks reasonable.",
    authorAvatar: "/testimonial/app-testimonial-3.png",
    authorName: "St Adward",
    postDate: "Feb 19, 2022",
  },
];

const supplyChainResilienceDataCurrentChallenges = [
  {
    data: "  Demand forecast inaccuracies​",
  },
  {
    data: "Demand sensing issues​",
  },
  {
    data: "Network not optimized for growth​",
  },

  {
    data: "Inventory planning challenges​​",
  },
  {
    data: "Transportation delays​​",
  },
  {
    data: "Excess inventory and stockouts​​",
  },
  {
    data: "Warehousing inefficiencies​​",
  },
  {
    data: "Last-mile delivery challenges​​",
  },
];
const supplyChainResilienceDataCurrentPropositions = [
  {
    data: "Improve demand forecast accuracy by 2%-5%",
  },
  {
    data: "Optimize Inventory Levels by 10%-20%​",
  },
  {
    data: " Accurate demand sensing",
  },

  {
    data: "Predict supply chain disruptions​​",
  },
  {
    data: "Improve on time delivery and reduce transportation costs by 5%​​",
  },
  {
    data: "Improve fulfillment rate by 20%​",
  },
  {
    data: "Reduce labor costs by 10%​",
  },
];

const SmartChallengesChallenges = [
  {
    data: "Finding Right Talent",
  },
  {
    data: "Expensive",
  },
  {
    data: "Shortlisting qualified Resumes​ from thousands of applicants",
  },

  {
    data: "Long recruitment cycle ​",
  },
  {
    data: "Proxy/ fake applicants",
  },
  {
    data: "Bias in Hiring​",
  },
];
const smartChallengesPropositions = [
  {
    data: "Reducing time and costs to hire by up to 50%",
  },
  {
    data: "Smart Resume shortlisting​",
  },
  {
    data: "Eliminate Human Bias",
  },

  {
    data: "Eliminate Technical Interviewer dependency​​",
  },
  {
    data: "Eliminating Proxy/Fake applicants​​",
  },
  {
    data: "Improving candidate experience​",
  },
];

const cyberBlogData = [
  {
    blogThumb: "/blog/c-blog-1.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "The Steps to GainingPrivileged Access Security",
    linkText: "Read more",
  },
  {
    blogThumb: "/blog/c-blog-2.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "Protect Your Workplace FromCyber Attacks",
    linkText: "Read more",
  },
  {
    blogThumb: "/blog/c-blog-3.jpg",
    postAuthor: "Admin",
    postDate: "April 25, 2022",
    title: "Mid-Market Businesses, Don’tSmall about Security",
    linkText: "Read more",
  },
];

const insuranceBrands = [
  {
    url: "/clients/2.svg",
  },
  {
    url: "/clients/3.svg",
  },
  {
    url: "/clients/4.svg",
  },
  {
    url: "/clients/5.svg",
  },
  {
    url: "/clients/6.svg",
  },
  {
    url: "/clients/7.svg",
  },
  {
    url: "/clients/8.svg",
  },
];

const insuranceGallery = [
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
  {
    url: "/insurance/01.jpg",
  },
];

const manufacturingExcellenceChallenges = [
  {
    data: "Reliability issues​",
  },
  {
    data: "Quality control problems​",
  },
  {
    data: "Inefficient production planning​",
  },

  {
    data: "Excess inventory of direct and indirect materials​",
  },
];
const manufacturingExcellenceProposition = [
  {
    data: "Improve Production",
  },
  {
    data: "Through put by 2%-5%​",
  },
  {
    data: "Reduce Opex and Capex by 10%-15%​",
  },

  {
    data: "Reduce returns up to 20%​",
  },
];

const smartMarketingChallenges = [
  {
    data: "Lack of market growth insights",
  },
];
const smartMarketingProposition = [
  {
    data: "Grow Revenue by 2%-5%",
  },
];

const smartSalesOperationChallenges = [
  {
    data: "Revenue Leakages",
  },
  {
    data: "Customer experience and satisfaction issues",
  },
];
const smartSalesOperationProposition = [
  {
    data: "Reduce revenue leakages by 5%-10%",
  },
  {
    data: "mprove CSAT by 10%-20%",
  },
];

const smartSourcingChallenges = [
  {
    data: "Supplier reliability issues",
  },
  {
    data: "Supplier, location and material optimization issues​",
  },
  {
    data: "Poor contract compliance",
  },
  {
    data: "Payment terms not optimized",
  },
];
const smartSourcingProposition = [
  {
    data: "Reduce sourcing costs by 10%-15%",
  },
  {
    data: "Mitigate supplier delivery risks",
  },
  {
    data: "Improve compliance to SLAs",
  },
  {
    data: "Improve quality",
  },
];

const pricingAndProfitabilityChallenges = [
  {
    data: "Pricing and profit optimization issues",
  },
];
const pricingAndProfitabilityProposition = [
  {
    data: "Improve margins by 2%-5%",
  },
];

export {
  offcanvasMenuData,
  cyberBlogData,
  cryptoBlogData,
  testimonialFourData,
  ItServiceData,
  IconBoxData,
  FaqOneData,
  TestimonialData,
  TestimonialOneData,
  registerTestimonial,
  registerTestimonialTarget,
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
  footerPrimaryPages,
  footerPages,
  footerTemplate,
  testimonialOne,
  testimonialAuthor,
  pricingData,
  integrationOneLeft,
  integrationOneRight,
  integrationFeature,
  ourTeam,
  blogFeatureData,
  careerJobCard,
  helpCenterFaqDetails,
  brandName,
  supplyChainResilienceDataCurrentChallenges,
  supplyChainResilienceDataCurrentPropositions,
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
  insuranceBrands,
  insuranceGallery,
  smartChallengesPropositions,
  SmartChallengesChallenges,
};

import Document, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME = "SAIB AI - AI, Machine Learning, and Data Science Consultancy";
const APP_DESCRIPTION =
  "SAIB AI is a team of experts in AI, Machine Learning, and Data Science. We provide consultancy services to businesses looking to leverage AI and Data Science.";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
            rel="stylesheet"
          ></link>

          {/* <title>SMART AI FOR ENTERPRISE INC- AI Solutions</title> */}
          <meta
            name="title"
            content="SMART AI FOR ENTERPRISE INC- AI Solutions"
          />
          <meta
            name="description"
            content="SMART AI FOR ENTERPRISE INC is a team of experts in AI, Machine Learning, and Data Science. We provide consultancy services to businesses looking to leverage AI and Data Science."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.saib.ai/" />
          <meta
            property="og:title"
            content="SMART AI FOR ENTERPRISE INC- AI Solutions"
          />
          <meta
            property="og:description"
            content="SMART AI FOR ENTERPRISE INC is a team of experts in AI, Machine Learning, and Data Science. We provide consultancy services to businesses looking to leverage AI and Data Science."
          />
          <meta
            property="og:image"
            content="https://www.saib.ai/saib-thumbnail.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.saib.ai/" />
          <meta
            property="twitter:title"
            content="SMART AI FOR ENTERPRISE INC- AI Solutions"
          />
          <meta
            property="twitter:description"
            content="SMART AI FOR ENTERPRISE INC is a team of experts in AI, Machine Learning, and Data Science. We provide consultancy services to businesses looking to leverage AI and Data Science."
          />
          <meta
            property="twitter:image"
            content="https://www.saib.ai/saib-thumbnail.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

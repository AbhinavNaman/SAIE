import React from "react";
import Head from "next/head";

const Layout = ({ children, title, desc, hasClass, classOpt, canonicalUrl }) => {
  return (
    <div
      className={`main-wrapper ${
        hasClass ? "overflow-hidden" : ""
      } ${classOpt}`}
    >
      <Head>
        <title>
          {title
            ? `SMART AI FOR ENTERPRISE INC - AI | ${title}`
            : "SMART AI FOR ENTERPRISE INC- AI Solution"}
        </title>
        <meta name="ahrefs-site-verification" content="6e0afbd701449f03dbc4a3d65c85b37b6227ff636430eacf4d47c9be24c3c397"></meta>
        {desc && <meta name="description" content={desc} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <link rel="icon" href="/favicon.png" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;

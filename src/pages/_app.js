// import '@assets/css/bootstrap.min.css';
import "@assets/scss/main.scss";
import "@assets/scss/main.css";
import "@assets/fonts/fontawesome-all.min.css";

// Import Swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Script from "next/script";

//Modal Video
import "react-modal-video/scss/modal-video.scss";
import Head from "next/head";
import { Fragment } from "react";
import NextTopLoader from "nextjs-toploader";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <NextTopLoader
        color="#fd8c29"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #ffb16c,0 0 5px #ffb16c"
        zIndex={1600}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

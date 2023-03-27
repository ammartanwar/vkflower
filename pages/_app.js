import '../styles/globals.css'
import React from 'react'
import Script from "next/script";

function _app({ Component, pageProps }) {
  return (
  <>
  <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-E5FB2V31SY`}
      />

      <Script
      id="my-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-E5FB2V31SY');`,
        }}
      />
  <Component {...pageProps} />
  </>
);}

export default _app
import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const content = {
  description: "Web and software development.",
  icon: "/icon.svg",
  logo: "/icon.svg"
};

const Home = () => (
  <div>
    <Head>
      <title>Devinor</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={content.description} />
      <meta
        name="keywords"
        content="IT, consultant, web, software, development"
      />
      <meta name="author" content="Devinor Consulting" />
      <meta property="fb:app_id" content="202744680073731" />
      <meta property="fb:pages" content="1666025910343164" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={content.icon} />
      <meta property="og:title" content="Devinor" />
      <meta property="og:description" content={content.description} />
      <link rel="manifest" href="/manifest.json" />
      <link rel="alternate" hreflang="en" href="https://devinor.no" />
      <link rel="alternate" hreflang="no" href="https://devinor.no" />
      <link rel="shortcut icon" href={content.icon} />
      <link rel="apple-touch-icon" href="/images/logo/ascend-logo-social.jpg" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
      {
        "@context": "http://schema.org/",
        "@type": "Organization",
        "description": ${content.description},
        "email": "hello(at)devinor.no",
        "foundingDate": "2019-10-15",
        "image": "https://devinor.no${content.logo}",
        "logo": "https://devinor.no${content.logo}",
        "name": "Devinor Consulting",
        "url": "https://devinor.no"
      }`
        }}
      />
    </Head>

    <Nav />

    <img src="/icon.svg" />
  </div>
);

export default Home;

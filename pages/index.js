import Head from "next/head";
import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import FirstSection from "../components/FirstSsection/FirstSection";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import BlogSection from "../components/BlogSection/BlogSection";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import FooterSection from "../components/FooterSection/FooterSection";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import PortfolioDetails from "../components/PortfolioSection/PortfolioSection";
import Callwhatsapp from "../components/Callwhatsapp/Callwhatsapp";

function index() {
  return (
    <div>
      <Head>
        <title>
          vkflower
        </title>
        <title>
        RVK Sumabana - The Flower Experts
        </title>
        <meta
          name="description"
          content="RVK Sumabana - The Flower Experts"
        />
        <link
          rel="icon"
          href="RVK_Logo.png"
        />
      </Head>
      <Navbar />
      <FirstSection />
      <CategoriesSection />
      <AboutUs />
      <PortfolioDetails />
      <ContactUs />
      <BlogSection />
      <ReviewsSection />
      <FooterSection />
      <Callwhatsapp />
    </div>
  );
}

export default index
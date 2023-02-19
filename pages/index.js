import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import FirstSection from "../components/FirstSsection/FirstSection";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import BlogSection from "../components/BlogSection/BlogSection";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import FooterSection from "../components/FooterSection/FooterSection";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import PortfolioDetails from "../components/PortfolioSection/PortfolioSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          vkflower
        </title>
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
    </div>
  );
}

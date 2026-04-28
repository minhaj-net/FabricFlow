import Hero from "./components/Hero";
import CreditMotoAbout from "./components/CreditMotoAbout";
import Features from "./components/Features";
import OurProduct from "./components/OurProduct";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import UpcomingProject from "./components/UpcomingProject";
import LatestBlog from "./components/LatestBlog";
import Partners from "./components/Partners";
import GetInTouch from "./components/GetInTouch";

export default function Home() {
  return (
    <>
      <Hero />
      <CreditMotoAbout />
      <Features />
      <OurProduct />
      <Testimonial />
      <FAQ />
      <UpcomingProject />
      <LatestBlog />
      <Partners />
      <GetInTouch />
    </>
  );
}

import { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const Index: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Index;

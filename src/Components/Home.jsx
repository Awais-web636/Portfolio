import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Cta from './Cta';
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Cta/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default Home;

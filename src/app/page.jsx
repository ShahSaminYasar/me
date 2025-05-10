"use client";
import { useEffect } from "react";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Lenis from "lenis";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Cursor from "./components/Cursor";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills2 from "./sections/Skills2";
import Promo from "./sections/Promo";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="w-[100vw] overflow-hidden relative">
      <Cursor />
      <Header />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Skills2 />
      <Portfolio />
      <Timeline />
      <Contact />
      <Promo />
      <Footer />
    </main>
  );
}

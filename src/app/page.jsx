"use client";
import { useEffect } from "react";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Lenis from "lenis";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Cursor from "./components/Cursor";
import Timeline from "./sections/Timeline";

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
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Timeline />
    </main>
  );
}

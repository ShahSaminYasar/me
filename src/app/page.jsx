"use client";
import { useEffect } from "react";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Lenis from "lenis";

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
    <main>
      <Hero />
      <About />
    </main>
  );
}

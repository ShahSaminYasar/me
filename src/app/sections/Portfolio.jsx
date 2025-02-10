import Link from "next/link";
import Container from "../components/Container";
import Decor_BG_Circle from "../components/Decor_BG_Circle";
import PortfolioCard from "../components/PortfolioCard";
import { FaArrowRight, FaX } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const openDrawerRef = useRef(() => {});
  const closeDrawerRef = useRef(() => {});

  // Effects
  useGSAP(() => {
    gsap.from("#portfolio_heading", {
      y: 100,
      opacity: 0.1,
      scrollTrigger: {
        trigger: "#section_portfolio",
        start: "top bottom",
        end: "top 20%",
        markers: false,
        scrub: 1,
      },
    });

    document.querySelectorAll(".portfolio_card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: card,
          start: "top 97%",
          end: "top 40%",
          markers: false,
          scrub: 0.6,
        },
      });
    });

    const drawerTL = gsap
      .timeline({ paused: true })
      .to("#portfolio_details", {
        display: "block",
        duration: 0,
      })
      .to("#portfolio_details", {
        opacity: "100%",
        duration: 0.1,
      })
      .to("#portfolio_details_drawer", {
        translateX: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });

    // Functions
    openDrawerRef.current = () => {
      drawerTL.play();
    };

    closeDrawerRef.current = () => {
      drawerTL.reverse();
    };
  }, []);

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const closeBtn = document.getElementById("portfolio_details_close_btn");

    closeBtn?.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 3.5,
        duration: 0.3,
        ease: "back.out",
      });
    });

    closeBtn?.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "back.out",
      });
    });
  }, []);

  return (
    <>
      <section id="section_portfolio" className="relative">
        <Container className={`px-5 py-20`}>
          {/* Section Title */}
          <div className="overflow-hidden min-h-[45px] md:min-h-[55px] w-full">
            <span
              id="portfolio_heading"
              className="block text-4xl md:text-5xl font-light text-white opacity-100"
            >
              My{" "}
              <span className="text-primary-shade inline-block font-semibold">
                creations
              </span>
              ...
            </span>
          </div>

          {/* Section Content */}
          <div
            id="container_portfolio_cards"
            className="flex flex-row flex-wrap items-center justify-center gap-10 mt-10"
          >
            <PortfolioCard
              image={"/assets/portfolio/skisc_hsc25_ss.gif"}
              title="SKISC HSC25"
              openDrawer={() => openDrawerRef?.current()}
              className={"portfolio_card"}
            />
            <PortfolioCard
              image={"/assets/portfolio/ravetagbd_ss.gif"}
              title="RaveTagBD"
              openDrawer={() => openDrawerRef?.current()}
              className={"portfolio_card"}
            />
            <PortfolioCard
              image={"/assets/portfolio/brave_education_ss.gif"}
              title="Brave Education"
              openDrawer={() => openDrawerRef?.current()}
              className={"portfolio_card"}
            />
            <PortfolioCard
              image={"/assets/portfolio/definify_ss.gif"}
              title="Definify - Online dictionary"
              openDrawer={() => openDrawerRef?.current()}
              className={"portfolio_card"}
            />
          </div>
          <Link href="#" className="viewAllButton mx-auto block w-fit mt-10">
            <span
              data-text="See more"
              className="flex flex-row items-center gap-2 flex-nowrap"
            >
              See more <FaArrowRight />
            </span>
          </Link>
        </Container>

        <Decor_BG_Circle className={`top-[10%] -left-[38%]`} />
        <Decor_BG_Circle className={`bottom-[10%] right-[18%]`} />
      </section>

      {/* Portfolio Details Drawer */}
      <div
        id="portfolio_details"
        className="hidden opacity-0 fixed left-0 top-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-60 z-20 backdrop-blur-sm"
        onClick={() => closeDrawerRef?.current()}
      >
        <button
          id="portfolio_details_close_btn"
          className="absolute top-5 right-5 bg-blend-difference z-30"
          onClick={() => closeDrawerRef?.current()}
        >
          <IoClose className="text-2xl text-white opacity-70" />
        </button>
        <div
          id="portfolio_details_drawer"
          className="w-full max-w-[400px] h-screen z-20 bg-slate-900 bg-opacity-60 py-10 pt-14 px-3 flex flex-col gap-4 text-white text-opacity-70 text-sm absolute left-0 top-0 translate-x-[-100%] bottom-0 after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-primary-shade after:to-transparent overflow-y-auto"
        >
          <Image
            id="portfolio_details_image"
            src={"/assets/portfolio/skisc_hsc25_ss.gif"}
            width={500}
            height={500}
            alt="Website portfolio thumbnail"
            className="w-full rounded-lg aspect-video object-cover border-[1px] border-[#655473]"
          />
          <h3 id="portfolio_details_title" className="font-medium text-3xl">
            SKISC HSC25
          </h3>
          <p id="portfolio_details_description" className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur consequatur magni earum, recusandae maxime rem!
          </p>
          <Link href="#" className="viewAllButton ml-auto block w-fit mt-10">
            <span
              data-text="Visit Link"
              className="flex flex-row items-center gap-2 flex-nowrap"
            >
              View Live <LuExternalLink />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Portfolio;

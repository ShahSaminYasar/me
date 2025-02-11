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
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  // States
  const [portfolioDetails, setPortfolioDetails] = useState({
    thumbnail: "/assets/portfolio/skisc_hsc25_ss.gif",
    title: "",
    description: "",
    languages: "html,css,js",
    link: "",
  });

  // Refs
  const openDrawerRef = useRef(() => {});
  const closeDrawerRef = useRef(() => {});

  // Effects
  // GSAP
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
      .to(document.body, {
        height: "100vh",
        overflow: "hidden",
        duration: 0,
      })
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

  // Cursor animation on hover
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

    return () => {
      closeBtn?.removeEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 3.5,
          duration: 0.3,
          ease: "back.out",
        });
      });
      closeBtn?.removeEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "back.out",
        });
      });
    };
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
              languages="reactjs,nodejs,expressjs,mongodb,tailwind css"
              description="It is the official website of the HSC-25 batch of The Sylhet Khajanchibari International School and College. Homeworks, assignments, solutions, notes, QnA, blogs, polling, dashboards, user ranks, notifications, authentication, authorization and what not - every feature is there!"
              liveLink="https://skisc-hsc25.web.app"
              openDrawer={() => openDrawerRef?.current()}
              className={"portfolio_card"}
              setPortfolioDetails={setPortfolioDetails}
            />
            <PortfolioCard
              image={"/assets/portfolio/ravetagbd_ss.gif"}
              title="RaveTagBD"
              description="MERN stack ecommerce website for a clothing store named 'RaveTag' - located in Beanibazar, Sylhet. All the functionalities that a standard ecommerce system requires are present including seperate admin and customer panels. The admin can manage products, orders, users, categories and more. The customer can view products, add to cart, place orders, track orders, etc."
              languages="reactjs,nodejs,expressjs,mongodb, tailwind css"
              liveLink="https://ravetagbd.web.app"
              openDrawer={() => openDrawerRef?.current()}
              className={"portfolio_card"}
              setPortfolioDetails={setPortfolioDetails}
            />
            <PortfolioCard
              image={"/assets/portfolio/brave_education_ss.gif"}
              title="Brave Education"
              description="Brave Education is an educational consultancy firm located in Sylhet, Bangladesh. I built this website which serves as their online system for course enrollments. People are able to enroll in the courses/exams by going through a systematic process. At the end payments are being processed in the website to confirm enrollments. Later on, I implemented the feature of result publication of their exams."
              languages="reactjs,nodejs,expressjs,mongodb"
              openDrawer={() => openDrawerRef?.current()}
              className={"portfolio_card"}
              setPortfolioDetails={setPortfolioDetails}
            />
            <PortfolioCard
              image={"/assets/portfolio/definify_ss.gif"}
              title="Definify - Online dictionary"
              description="Definify is an online dictionary app built on JavaScript which uses a dictionary API to serve users with any word's meanings, synonyms, antonyms, pronounciations, examples etc. in a very smooth and classy way with animations. I really want you to check it out once!"
              languages="html,css,javascript"
              openDrawer={() => openDrawerRef?.current()}
              className={"portfolio_card"}
              setPortfolioDetails={setPortfolioDetails}
            />
          </div>
          <Link
            href="/projects"
            className="viewAllButton mx-auto block w-fit mt-10"
          >
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
        className="hidden opacity-0 fixed left-0 top-0 bottom-0 right-0 w-full h-full z-20"
      >
        {/* Drawer close button */}
        <button
          id="portfolio_details_close_btn"
          className="absolute top-5 right-5 bg-blend-difference z-50"
          onClick={() => closeDrawerRef?.current()}
        >
          <IoClose className="text-2xl text-white opacity-70" />
        </button>
        {/* Drawer close layer */}
        <div
          className="fixed left-0 top-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-60 z-30 backdrop-blur-sm"
          onClick={() => closeDrawerRef?.current()}
        ></div>
        {/* Drawer */}
        <div
          id="portfolio_details_drawer"
          className="w-full max-w-[400px] h-screen z-40 bg-slate-900 bg-opacity-100 py-10 pt-14 px-3 flex flex-col gap-4 text-white text-opacity-70 text-xs fixed left-0 top-0 translate-x-[-100%] bottom-0 after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-primary-shade after:to-transparent overflow-y-auto"
        >
          <Image
            id="portfolio_details_image"
            src={
              portfolioDetails?.thumbnail?.length > 3
                ? portfolioDetails?.thumbnail
                : null || null
            }
            width={500}
            height={500}
            alt="Website portfolio thumbnail"
            className="w-full rounded-lg aspect-video object-cover border-[1px] border-[#655473]"
          />
          <h3
            id="portfolio_details_title"
            className="font-semibold text-3xl text-primary-shade"
          >
            {portfolioDetails?.title}
          </h3>
          <div className="flex flex-row flex-wrap w-full gap-1 items-center">
            {portfolioDetails?.languages?.split(",")?.map((language) => (
              <span
                key={language}
                className="inline-block w-fit py-[2px] px-1 rounded-sm bg-white uppercase text-neutral-800 text-xs font-semibold"
              >
                {language}
              </span>
            ))}
          </div>
          <p id="portfolio_details_description" className="font-light">
            {portfolioDetails?.description}
          </p>
          <Link
            href={portfolioDetails?.link}
            target="_blank"
            className="block text-xs font-medium text-left text-primary-shade"
          >
            {portfolioDetails?.link}
          </Link>
          <div className="mt-2 flex justify-end">
            <Link
              href={portfolioDetails?.link || "#section_portfolio"}
              target="_blank"
              className="viewAllButton w-fit"
            >
              <span
                data-text="Visit Link"
                className="flex flex-row items-center gap-2 flex-nowrap"
              >
                View Live <LuExternalLink />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;

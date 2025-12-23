"use client";
import Container from "@/app/components/Container";
import Cursor from "@/app/components/Cursor";
import PortfolioCard from "@/app/components/PortfolioCard";
import axios from "axios";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import Footer from "@/app/components/Footer";
import Decor_BG_Circle from "@/app/components/Decor_BG_Circle";
import Header from "@/app/components/Header";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  // States
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
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

  // Functions
  const getSetProjects = async () => {
    const res = await axios.get("/api/get/projects");
    if (res?.data?.ok) {
      setProjects(res?.data?.data);
      setLoading(false);
    } else {
      console.log(res?.data?.message || "Failed to fetch data");
      return window.location.reload();
    }
  };

  // Effects
  //   Lenis
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // GSAP
  useGSAP(() => {
    const titleTL = gsap.timeline();

    titleTL.to(document.querySelector("h2"), {
      opacity: 1,
      duration: 0,
    });

    document.querySelectorAll(".title_span").forEach((span) => {
      titleTL.from(
        span,
        {
          y: -160,
          duration: 1.2,
          delay: 0.3,
          ease: "circ.out",
        },
        "a"
      );
    });

    titleTL.to(
      document.querySelector(".header_image"),
      {
        opacity: 1,
        duration: 0.6,
      },
      "-=1"
    );
  }, []);

  useGSAP(() => {
    // document.querySelectorAll(".project_card").forEach((card) => {
    //   gsap.from(card, {
    //     opacity: 0,
    //     y: 50,
    //     scrollTrigger: {
    //       trigger: card,
    //       start: "top 100%",
    //       end: "top 70%",
    //       markers: false,
    //       scrub: 0.6,
    //     },
    //   });
    // });

    const drawerTL = gsap
      .timeline({ paused: true })
      .set(document.body, {
        height: "100vh",
        overflowY: "hidden",
      })
      .set("#portfolio_details", { display: "block" })
      .to("#portfolio_details", { opacity: 1, duration: 0.1 })
      .to("#portfolio_details_drawer", {
        x: 0,
        duration: 0.5,
        ease: "power3.inOut",
        onStart: () => {
          const drawer = document.getElementById("portfolio_details_drawer");
          drawer.focus();

          drawer.addEventListener(
            "wheel",
            function (e) {
              e.stopPropagation();
            },
            { passive: true }
          );
        },
      });

    // Functions
    openDrawerRef.current = () => {
      drawerTL.play();
    };

    closeDrawerRef.current = () => {
      drawerTL.reverse();
    };
  }, [projects]);

  // Fetch data
  useEffect(() => {
    getSetProjects();

    // Cursor animation on hover
    const cursor = document.getElementById("cursor");
    const closeBtn = document.getElementById("portfolio_details_close_btn");

    let enlargeCursor = () => {
      gsap.to(cursor, {
        scale: 3.5,
        duration: 0.3,
        ease: "back.out",
      });
    };
    let shrinkCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "back.out",
      });
    };

    closeBtn?.addEventListener("mouseenter", enlargeCursor);

    closeBtn?.addEventListener("mouseleave", shrinkCursor);

    return () => {
      closeBtn?.removeEventListener("mouseenter", enlargeCursor);
      closeBtn?.removeEventListener("mouseleave", shrinkCursor);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="py-10 pt-0 px-5">
        <Container
          className={`flex flex-col gap-5 items-center justify-center`}
        >
          {/* Header */}
          <div className="w-full m-5 rounded-badge md:rounded-xl bg-gradient-to-tl from-[rgba(255,255,255,0.5)] to-black p-[1px] relative">
            <div className="w-full rounded-badge md:rounded-xl bg-gradient-to-br from-[#313131] to-black p-5 flex flex-col md:flex-row gap-7 justify-between items-center relative overflow-hidden">
              <h2 className="opacity-0 text-[55px] sm:text-[70px] md:text-[85px] lg:text-[120px] font-bold text-white relative z-30 flex flex-row md:flex-col gap-2 flex-wrap">
                <div className="overflow-hidden inline-block">
                  <span className="block title_span">My</span>
                </div>{" "}
                <div className="overflow-hidden inline-block">
                  <span className="block title_span">Works</span>
                </div>
              </h2>

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] z-[25] md:hidden"></div>

              <Image
                src={"/assets/keyboard_illustration.png"}
                width={400}
                height={400}
                alt="Keyboard illustration"
                className="header_image opacity-0 w-full md:max-w-[400px] aspect-square rounded-badge md:relative z-20 absolute top-0 left-0 h-full object-cover"
              />
            </div>

            <Decor_BG_Circle
              className={`-bottom-[60%] left-[30%] -translate-x-[50%] z-0`}
            />
          </div>

          {/* Content */}
          {loading ? (
            <div className="min-h-[90vh] grid place-items-center text-white">
              <span className="loading loading-sm loading-spinner text-white"></span>
            </div>
          ) : (
            <div className="w-full">
              <div className="w-full mx-auto max-w-[1050px] grid sm:grid-cols-2 gap-7 justify-center items-center relative z-20">
                {projects?.map((project) => (
                  <PortfolioCard
                    className="project_card"
                    key={project?._id}
                    title={project?.title}
                    description={project?.description}
                    image={project?.image}
                    languages={project?.languages}
                    liveLink={project?.link}
                    setPortfolioDetails={setPortfolioDetails}
                    openDrawer={() => openDrawerRef?.current()}
                  />
                ))}
              </div>
            </div>
          )}
        </Container>

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
            <IoClose className="text-3xl text-white opacity-90" />
          </button>
          {/* Drawer close layer */}
          <div
            className="fixed left-0 top-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-60 z-30 backdrop-blur-sm"
            onClick={() => closeDrawerRef?.current()}
          ></div>
          {/* Drawer */}
          <div
            id="portfolio_details_drawer"
            tabIndex="-1"
            className="w-full max-w-[400px] h-screen z-40 bg-slate-900 bg-opacity-100 py-10 pt-14 px-3 flex flex-col gap-4 text-white text-opacity-70 text-xs fixed left-0 top-0 translate-x-[-100%] bottom-0 after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-primary-shade after:to-transparent overflow-y-auto overscroll-contain"
          >
            <Image
              id="portfolio_details_image"
              unoptimized={true}
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
            <h3 id="portfolio_details_title" className="font-medium text-3xl">
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
            <div className="mt-4 flex justify-end">
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
      </main>
      <Cursor />
      <Footer className={`mb-5`} />
      <div className="w-full h-[10px]"></div>
    </>
  );
};
export default page;

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

const portfolioItems = [
  {
    image:
      "https://ph-files.imgix.net/2f2f1b9b-b596-48b8-a228-7e1b3cfcb660.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=535&h=320&fit=max&frame=1&dpr=2",
    title: "Yawmly",
    languages: "NextJS,MongoDB,Next PWA",
    description:
      "Yawmly started as a personal tool to plan study sessions in a clean, distraction-free way. What began as a simple table turned into a lightweight, offline-first PWA for daily planning. It breaks your day into focused session blocks with color tags, time tracking, and remarks — making it easier to stay on track. You can start using it anonymously and sync later with email or Google. A built-in D-Day tracker keeps big goals in sight. The UI is minimal and fast, built to help—not overwhelm. The biggest challenge was syncing local and online data smoothly, especially with Google login. But every issue solved made it stronger. Yawmly began for me, now it’s here for you.",
    liveLink: "https://www.producthunt.com/posts/yawmly",
  },
  {
    image: "/assets/portfolio/einen_ai.jpg",
    title: "EinenAI",
    languages: "NextJS,MongoDB,AI,Scraping",
    description:
      "EinenAI is an AI-powered platform that transforms long-form videos into clear, structured summaries and study-ready notes. It goes beyond simple summarization by generating well-organized notes that can include code snippets, mathematical expressions, formulas, and step-by-step solutions directly from video content - helping learners and developers understand, revise, and apply concepts faster.",
    liveLink: "http://einen-ai.vercel.app",
  },
  {
    image: "/assets/portfolio/basha_lagbe_ss.gif",
    title: "Basha Lagbe",
    languages: "NextJS,React Native,PostgreSQL,React,Prisma",
    description:
      "Basha Lagbe is an online platform for finding rental houses. Homeowners can post ads for their available rentals, while renters can search for their ideal home using filters like location, number of rooms, rent, and facilities. Users can also save ads to their favorites for later viewing. The platform is available on both web and mobile, though the mobile app is not yet published on the Play Store or App Store. However, the web version is live—feel free to check it out!",
    liveLink: "https://basha-lagbe.vercel.app",
  },
  {
    image: "/assets/portfolio/brave_education_uk.jpg",
    title: "Brave Education UK",
    languages: "nextjs,nodejs,expressjs,mongodb",
    description:
      "Brave Education UK Limited, founded in 2021 and based in London and Sylhet, is a British Council–certified student consultancy specializing in recruiting students for top universities worldwide. With a strong record of successful enrollments and satisfied students, they offer tailored support across fields like Medicine, Business, IT, Law, and Engineering. In addition to this, they offer a range of language courses.",
    liveLink: "https://www.braveeducationuk.com",
  },
  {
    image: "/assets/portfolio/nurashop.jpg",
    title: "Nurashop (POS)",
    languages: "Next.js, PWA, Postgres",
    description:
      "Nurashop is a shop management system built with local businesses in mind. I believe technology should be easy for everyone, so I designed a clean, simple interface that feels natural to use - no matter the user's age or tech experience. Forget the days of flipping through messy notebooks and diaries to find a single transaction. With Nurashop, businesses can record customer sales, manage supplier payments, and track dues instantly. While manual bookkeeping is a time-consuming hassle, Nurashop handles the searching, calculations, and reporting in the blink of an eye.",
    liveLink: "https://nurashop.vercel.app",
  },
  {
    image: "/assets/portfolio/ravetagbd_ss.gif",
    title: "RaveTagBD",
    languages: "reactjs,nodejs,expressjs,mongodb, tailwind css",
    description:
      "MERN stack ecommerce website for a clothing store named 'RaveTag' - located in Beanibazar, Sylhet. All the functionalities that a standard ecommerce system requires are present including seperate admin and customer panels. The admin can manage products, orders, users, categories and more. The customer can view products, add to cart, place orders, track orders, etc.",
    liveLink: "https://ravetagbd.web.app",
  },
  {
    image: "/assets/portfolio/brave_education_ss.gif",
    title: "Brave Education",
    languages: "reactjs,nodejs,expressjs,mongodb",
    description:
      "Brave Education is an educational consultancy firm located in Sylhet, Bangladesh. I built this website which serves as their online system for course enrollments. People are able to enroll in the courses/exams by going through a systematic process. At the end payments are being processed in the website to confirm enrollments. Later on, I implemented the feature of result publication of their exams.",
    liveLink: "https://register.braveeducationbd.com",
  },
  {
    image: "/assets/portfolio/nha_ss.png",
    title: "NHA - Landing Page",
    languages: "Figma, Next.js, MERN Stack, GSAP",
    description:
      "Designed this landing page for a car servicing business of UAE named Nurul Hossain Auto Accessories (NHA). I made the design in Figma and development (in Next.js) is ongoing.",
    liveLink: "#",
  },
];

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
            {portfolioItems?.map((item, i) => (
              <PortfolioCard
                key={`portfolio_item_${i}`}
                image={item?.image}
                title={item?.title}
                languages={item?.languages}
                description={item?.description}
                liveLink={item?.liveLink}
                openDrawer={() => openDrawerRef?.current()}
                className={"portfolio_card"}
                setPortfolioDetails={setPortfolioDetails}
              />
            ))}
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
          className="absolute top-5 right-5 z-50"
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

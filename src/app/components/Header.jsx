import Link from "next/link";
import Container from "./Container";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { redirect, usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  // Hooks
  const headerRef = useRef(null);
  const pathname = usePathname();

  // States
  const [isMainPage, setIsMainPage] = useState(true);

  // Refs
  const openMobileMenuRef = useRef(() => {});
  const closeMobileMenuRef = useRef(() => {});

  // Effects
  // Show/Hide Navlinks depending on the page
  useEffect(() => {
    console.log(pathname);
    if (pathname !== "/") {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [pathname]);

  // Show/Hide Header on Scroll
  useEffect(() => {
    let lastScrollTop = 0;
    const heroSection = document.getElementById("section_hero");
    const header = headerRef?.current;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? "down" : "up";
      const inHero = scrollTop < heroSection?.offsetHeight / 2;

      gsap.to(header, {
        opacity: inHero ? 0 : 1,
        pointerEvents: inHero ? "none" : "all",
        // translateY: scrollTop <= 12 ? "-100%" : "0%",
        translateY:
          scrollTop <= 12 ? "-100%" : direction === "down" ? "-100%" : "0%",
        duration: 0.4,
        delay: 0.3,
      });

      lastScrollTop = Math.max(0, scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cursor Effect
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const navLinks = document.querySelectorAll("nav a, .hamburger");

    const enlargeCursor = () => gsap.to(cursor, { scale: 5, duration: 0.3 });
    const shrinkCursor = () => gsap.to(cursor, { scale: 1, duration: 0.3 });

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", enlargeCursor);
      link.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", enlargeCursor);
        link.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  // Mobile Menu Open/Close
  useGSAP(() => {
    const mobileNavTL = gsap.timeline({ paused: true });

    mobileNavTL
      .to(".mobile_nav", {
        translateX: "0%",
        duration: 0.5,
        ease: "power3.inOut",
      })
      .from(".mobile_nav_link", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
      })
      .from(
        "#mobile_menu_close_btn",
        {
          opacity: 0,
          duration: 0.1,
        },
        "-=0.5"
      );

    openMobileMenuRef.current = () => {
      mobileNavTL.play();
    };

    closeMobileMenuRef.current = () => {
      mobileNavTL.reverse();
    };
  }, []);

  // Mobile Menu Link Hover Effect
  useEffect(() => {
    const links = document.querySelectorAll(".mobile_nav_link");

    if (!links.length) return; // Prevent errors if no links exist

    const enlargeLink = (event) => {
      gsap.to(event.target, {
        transformOrigin: "left",
        scale: 1.25,
        duration: 0.2,
      });
    };

    const shrinkLink = (event) => {
      gsap.to(event.target, {
        transformOrigin: "left",
        scale: 1,
        duration: 0.2,
      });
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", enlargeLink);
      link.addEventListener("mouseleave", shrinkLink);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enlargeLink);
        link.removeEventListener("mouseleave", shrinkLink);
      });
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        id="header"
        className="w-full px-5 fixed top-0 left-0 z-20 opacity-0 bg-black bg-opacity-40 backdrop-blur-md shadow-md"
      >
        <Container
          className={`h-[70px] flex flex-row items-center justify-between pr-4`}
        >
          <Link
            href={"/"}
            className="logo block w-fit px-2 py-1 bg-[#f9faff] text-black rounded-sm text-sm font-normal"
          >
            Shah Samin Yasar
          </Link>

          <nav className="flex flex-row gap-4 text-sm text-white font-light">
            {isMainPage ? (
              <>
                <Link
                  className="hidden md:block text-opacity-70 hover:text-opacity-100"
                  href={"#section_hero"}
                >
                  Intro
                </Link>
                <Link
                  className="hidden md:block text-opacity-70 hover:text-opacity-100"
                  href={"#section_about"}
                >
                  About
                </Link>
                <Link
                  className="hidden md:block text-opacity-70 hover:text-opacity-100"
                  href={"#section_skills"}
                >
                  Skills
                </Link>
                <Link
                  className="hidden md:block text-opacity-70 hover:text-opacity-100"
                  href={"#section_portfolio"}
                >
                  Portfolio
                </Link>
                <Link
                  className="hidden md:block text-opacity-70 hover:text-opacity-100"
                  href={"#section_timeline"}
                >
                  Timeline
                </Link>
                <Link
                  className="hidden md:block text-opacity-70 hover:text-opacity-100"
                  href={"#section_contact"}
                >
                  Contact
                </Link>
              </>
            ) : (
              <Link
                className="flex flex-row gap-2 items-center text-opacity-70 hover:text-opacity-100 underline"
                href={"/"}
              >
                <FaArrowLeft className="text-xl text-white" /> Back to home
              </Link>
            )}
            {isMainPage && (
              <button
                onClick={() => openMobileMenuRef?.current()}
                className="hamburger md:hidden"
              >
                <RiMenu3Fill className="text-2xl text-white" />
              </button>
            )}
          </nav>
        </Container>
      </header>
      <div className="-translate-x-[100%] md:hidden mobile_nav fixed top-0 left-0 z-20 w-full h-full bg-black px-5 py-10 overflow-y-auto text-white text-left flex flex-col items-start justify-center gap-2 text-3xl">
        <button
          onClick={() => closeMobileMenuRef?.current()}
          id="mobile_menu_close_btn"
          className="absolute top-5 right-5 z-40"
        >
          <IoClose className="text-4xl text-white opacity-70" />
        </button>
        <div className="overflow-hidden w-full">
          <button
            onClick={() => {
              closeMobileMenuRef?.current();
              redirect("#section_hero");
            }}
            className="mobile_nav_link opacity-100 block text-opacity-70 hover:text-opacity-100 hover:scale-[1.2] hover:underline"
          >
            Intro
          </button>
        </div>
        <div className="overflow-hidden w-full">
          <button
            onClick={() => {
              closeMobileMenuRef?.current();
              redirect("#section_about");
            }}
            className="mobile_nav_link opacity-100 block text-opacity-70 hover:text-opacity-100 hover:scale-[1.2] hover:underline"
          >
            About
          </button>
        </div>
        <div className="overflow-hidden w-full">
          <button
            onClick={() => {
              closeMobileMenuRef?.current();
              redirect("#section_skills");
            }}
            className="mobile_nav_link opacity-100 block text-opacity-70 hover:text-opacity-100 hover:scale-[1.2] hover:underline"
          >
            Skills
          </button>
        </div>
        <div className="overflow-hidden w-full">
          <button
            onClick={() => {
              closeMobileMenuRef?.current();
              redirect("#section_portfolio");
            }}
            className="mobile_nav_link opacity-100 block text-opacity-70 hover:text-opacity-100 hover:scale-[1.2] hover:underline"
          >
            Portfolio
          </button>
        </div>
        <div className="overflow-hidden w-full">
          <button
            onClick={() => {
              closeMobileMenuRef?.current();
              redirect("#section_timeline");
            }}
            className="mobile_nav_link opacity-100 block text-opacity-70 hover:text-opacity-100 hover:scale-[1.2] hover:underline"
          >
            Timeline
          </button>
        </div>
        <div className="overflow-hidden w-full">
          <button
            onClick={() => {
              closeMobileMenuRef?.current();
              redirect("#section_contact");
            }}
            className="mobile_nav_link opacity-100 block text-opacity-70 hover:text-opacity-100 hover:scale-[1.2] hover:underline"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;

import Container from "../components/Container";
import CTALink from "../components/CTALink";
import { IoDocumentOutline } from "react-icons/io5";
import Decor_BG_Circle from "../components/Decor_BG_Circle";
import { indieFlower } from "../lib/fonts";
import Link from "next/link";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { PiMouseSimple } from "react-icons/pi";
import { FaAnglesDown } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

const Hero = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const heroTL = gsap.timeline();

    let name = document.getElementById("name");
    name.innerHTML = name?.textContent
      ?.split("")
      ?.map(
        (letter) =>
          `<span style='display: inline-block;'>${
            letter === " " ? "&nbsp;" : letter
          }</span>`
      )
      ?.join("");

    gsap.to("#liveStatus", {
      opacity: 1,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.1,
    });

    heroTL
      .to("#hi", {
        opacity: 1,
        duration: 0.7,
        delay: 0.2,
      })
      .to("#name", {
        opacity: 1,
        duration: 0.01,
      })
      .from(
        "#name span",
        {
          y: 50,
          opacity: 0,
          duration: 0.4,
          stagger: 0.03,
        },
        "withTitle"
      )
      .to(
        "#title",
        {
          opacity: 1,
          duration: 0.02,
        },
        "withTitle"
      )
      .from("#title", {
        y: -50,
        duration: 0.7,
        delay: -0.2,
      })
      .to("#flag", {
        opacity: 1,
        duration: 0,
      })
      .from("#flag", {
        scaleY: 0,
        duration: 0.3,
      })
      .to("#cta_container", {
        opacity: 1,
        duration: 0,
        delay: 0.4,
      })
      .from("#cv_btn", {
        y: 30,
        opacity: 0,
        duration: 0.3,
      })
      .from(".handle", {
        opacity: 0,
        x: -30,
        duration: 0.3,
        stagger: 0.1,
      })
      .to("#liveStatusContainer", {
        opacity: 1,
        duration: 0,
        delay: 0.4,
      })
      .from("#liveStatusContainer", {
        y: 20,
        duration: 0.5,
      })
      .to("#scroll_down_indicator", {
        opacity: "15%",
        duration: 0.3,
        delay: 1.5,
      });
  }, []);

  return (
    <section className="bg-black relative">
      <Container
        className={`min-h-screen w-full flex flex-col gap-3 items-center justify-center`}
      >
        <div>
          <div className="flex flex-row justify-between items-center">
            <span
              id="hi"
              className={`${indieFlower?.className} text-[1.25rem] block text-left opacity-0`}
            >
              Hi, I'm
            </span>
            <span
              id="flag"
              className="w-[30px] rounded-sm aspect-video bg-green-700 grid place-items-center opacity-0"
            >
              <span className="block w-[36%] aspect-square rounded-full bg-red-500"></span>
            </span>
          </div>
          <div id="name_container" className="overflow-hidden">
            <h1
              id="name"
              className="text-5xl font-medium uppercase my-1 mb-2 opacity-0"
            >
              Shah Samin Yasar
            </h1>
          </div>
          <div className="overflow-hidden">
            <span id="title" className="block text-3xl font-thin opacity-0">
              a <p className="inline-block">MERN Stack Developer</p>
            </span>
          </div>

          <div
            id="cta_container"
            className="flex flex-row items-center justify-center gap-5 mt-7 relative opacity-0"
          >
            <CTALink id="cv_btn" href="#" className={`mr-3`}>
              <IoDocumentOutline />
              Download CV
            </CTALink>

            <Link className="handle" href={`https://github.com/ShahSaminYasar`}>
              <FiGithub className="text-xl text-white opacity-80" />
            </Link>
            <Link
              className="handle"
              href={`https://www.linkedin.com/in/shah-samin-yasar/`}
            >
              <FiLinkedin className="text-xl text-white opacity-80" />
            </Link>
            <Link
              className="handle"
              href={`https://instagram.com/shahsaminyasar`}
            >
              <FiInstagram className="text-xl text-white opacity-80" />
            </Link>
            <Link
              className="handle"
              href={`https://facebook.com/shah_samin_yasar`}
            >
              <FiFacebook className="text-xl text-white opacity-80" />
            </Link>

            <span
              id="scroll_down_indicator"
              className="flex flex-col items-center justify-center absolute left-[50%] -translate-x-[50%] -bottom-[140px] opacity-0"
            >
              <PiMouseSimple className="text-3xl text-white" />
              <FaAnglesDown className="block arrow text-sm text-white" />
            </span>
          </div>
        </div>
      </Container>
      <span
        id="liveStatusContainer"
        className="text-sm font-light text-white text-opacity-60 flex flex-row items-center gap-1 absolute bottom-4 left-4 opacity-0"
      >
        <div className="livenow">
          <div></div>
          <div></div>
          <div></div>
        </div>{" "}
        LIVE status:{" "}
        <span id="liveStatus" className="inline-block font-medium opacity-50">
          Coding
        </span>
      </span>
      <Decor_BG_Circle
        className={`top-0 left-0 -translate-y-[10%] -translate-x-[40%]`}
      />
      <Decor_BG_Circle
        className={`bottom-0 right-0 translate-x-[30%] translate-y-[20%]`}
      />
    </section>
  );
};
export default Hero;

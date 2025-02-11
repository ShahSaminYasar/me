import Container from "../components/Container";
import Decor_BG_Circle from "../components/Decor_BG_Circle";
import SkillCard from "../components/SkillCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiPhp } from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaPython, FaWordpress } from "react-icons/fa";
import { PiFileCBold } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  // States
  const [cardsContainerMoveX, setCardsContainerMoveX] = useState(0);
  const [textMoveX, setTextMoveX] = useState(0);

  // Refs
  const triggerRef = useRef(null);
  const pinRef = useRef(null);
  const scrollRef = useRef(null);

  //   Functions
  const calculateTextNCardsContainerMoveX = () => {
    const windowWidth = window.innerWidth;
    const container = document.getElementById("skills_container");
    const cardsContainer = document.getElementById("skills_cards_container");
    const textOne = document.getElementById("skills_text_one");

    if (!container || !cardsContainer || !textOne) return; // Prevent errors

    const containerWidth = container.offsetWidth;
    const cardsContainerWidth = cardsContainer.offsetWidth;
    const textWidth = textOne.offsetWidth;

    const moveX = cardsContainerWidth - 125;
    const textMoveXValue = textWidth - containerWidth;

    setCardsContainerMoveX(moveX);
    setTextMoveX(textMoveXValue);
  };

  // Effects
  useEffect(() => {
    calculateTextNCardsContainerMoveX();
  }, []);

  useGSAP(() => {
    gsap.from("#skills_heading", {
      y: 100,
      scrollTrigger: {
        trigger: "#section_skills",
        start: "top 90%",
        end: "top 20%",
        markers: false,
        scrub: 1,
      },
    });

    gsap.from("#skills_text_one, #skills_cards_container, #skills_text_two", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#section_skills",
        start: "top 50%",
        end: "top top",
        markers: false,
        scrub: 1,
      },
    });
  }, []);

  useGSAP(() => {
    gsap.set(triggerRef?.current, {
      height: window.innerHeight + cardsContainerMoveX,
    });

    gsap.to(scrollRef?.current, {
      x: `${-cardsContainerMoveX}px`,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef?.current,
        start: "top top",
        end: `+=${cardsContainerMoveX}px`,
        markers: false,
        scrub: 1,
        pin: pinRef?.current,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.to("#skills_text_one", {
      x: -textMoveX,
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    gsap.fromTo(
      "#skills_text_two",
      {
        x: -textMoveX,
      },
      {
        x: 0,
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      }
    );

    ScrollTrigger.refresh();
  }, [cardsContainerMoveX, textMoveX]);

  return (
    <div ref={triggerRef} id="section_skills">
      <section ref={pinRef} className="px-5 sticky top-0 left-0 my-20">
        <Container
          id="skills_container"
          className={`min-h-screen flex flex-col items-start justify-center`}
        >
          <div className="overflow-hidden min-h-[45px] md:min-h-[55px] w-full">
            <span
              id="skills_heading"
              className="block text-4xl md:text-5xl font-light text-white"
            >
              I{" "}
              <span className="text-primary-shade inline-block font-semibold">
                specialize
              </span>{" "}
              in...
            </span>
          </div>

          {/* Skills Text */}
          <span
            id="skills_text_one"
            className="text-6xl font-semibold text-white text-opacity-10 whitespace-nowrap block mt-6"
          >
            React.js Next.js Node.js Express.js Javascript Typescript PhP Python
            C MongoDB PostgreSQL Firebase TailwindCSS WordPress
          </span>

          {/* Skill Cards */}
          <div
            ref={scrollRef}
            id="skills_cards_container"
            className="flex flex-row gap-8 flex-nowrap my-3 relative left-[50%] -translate-x-[125px]"
          >
            <SkillCard
              icon={FaReact}
              heading={"React.js"}
              text={"Javascript Library"}
            />
            <SkillCard
              icon={RiNextjsFill}
              heading={"Next.js"}
              text={"React Frameword"}
            />
            <SkillCard
              icon={DiNodejs}
              heading={"Node.js"}
              text={"Runtime Environment"}
            />
            <SkillCard
              icon={SiExpress}
              heading={"Express.js"}
              text={"Node.js framework"}
            />
            <SkillCard
              icon={IoLogoJavascript}
              heading={"Javascript"}
              text={"Programming Language"}
            />
            <SkillCard
              icon={SiMongodb}
              heading={"MongoDB"}
              text={"NoSQL Database"}
            />
            <SkillCard
              icon={BiLogoPostgresql}
              heading={"PostgreSQL"}
              text={"Relational Database Management System (RDBMS) "}
            />
            <SkillCard
              icon={IoLogoFirebase}
              heading={"Firebase"}
              text={"Backend-as-a-Service (BaaS)"}
            />
            <SkillCard
              icon={RiTailwindCssFill}
              heading={"Tailwind CSS"}
              text={"CSS Framework"}
            />
            <SkillCard
              icon={SiPhp}
              heading={"PhP"}
              text={"Programming Language"}
            />
            <SkillCard
              icon={FaPython}
              heading={"Python"}
              text={"Programming Language"}
            />
            <SkillCard
              icon={PiFileCBold}
              heading={"C"}
              text={"Programming Language"}
            />
            <SkillCard
              icon={FaWordpress}
              heading={"WordPress"}
              text={"Content Management System (CMS)"}
            />
          </div>

          {/* Skills Text */}
          <span
            id="skills_text_two"
            className={`text-6xl font-semibold text-white text-opacity-10 whitespace-nowrap block mb-6`}
          >
            React.js Next.js Node.js Express.js Javascript Typescript PhP Python
            C MongoDB PostgreSQL Firebase TailwindCSS WordPress
          </span>
        </Container>
        <Decor_BG_Circle
          className={`top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
        />
      </section>
    </div>
  );
};
export default Skills;

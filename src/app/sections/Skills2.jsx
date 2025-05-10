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
import SkillLogo from "../components/SkillLogo";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Skills2 = () => {
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

    gsap.from(".skill_logo", {
      opacity: 0,
      y: () => 20,
      scrollTrigger: {
        trigger: "#section_skills",
        start: "top 50%",
        end: "top top",
        markers: false,
        scrub: 1,
      },
      stagger: 0.1,
    });
  }, []);

  return (
    <div id="section_skills">
      <section className="px-5 sticky top-0 left-0 py-20">
        <Container
          id="skills_container"
          className={`flex flex-col items-start justify-center`}
        >
          <div className="overflow-hidden min-h-[45px] md:min-h-[55px] w-full">
            <span
              id="skills_heading"
              className="block text-4xl md:text-5xl text-center font-light text-white"
            >
              I'm{" "}
              <span className="text-primary-shade inline-block font-semibold">
                skilled
              </span>{" "}
              in...
            </span>
          </div>

          {/* Skill Cards */}
          <div
            id="skills_cards_container"
            className="flex flex-row justify-center gap-6 flex-wrap my-3 mt-10 w-full max-w-[790px] mx-auto"
          >
            <SkillLogo
              src={"/assets/logos/ReactJS.png"}
              alt={"React.js logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/nextJS.png"}
              alt={"Next.js logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/nodeJS.png"}
              alt={"Node.js logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/expressJS.png"}
              alt={"Express.js logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/js.png"}
              alt={"JavaScript logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/mongoDB.png"}
              alt={"MongoDB logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/postgreSQL.png"}
              alt={"PostgreSQL logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/tailwindcss.png"}
              alt={"TailwindCSS logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/php.png"}
              alt={"PhP logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/python.png"}
              alt={"Python logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/c.png"}
              alt={"C logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/wordpress.png"}
              alt={"WordPress logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/figma.png"}
              alt={"Figma logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/photoshop.png"}
              alt={"Photoshop logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/illustrator.png"}
              alt={"Illustrator logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/github.png"}
              alt={"Github logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/firebase.png"}
              alt={"Firebase logo"}
              className={"skill_logo"}
            />
            <SkillLogo
              src={"/assets/logos/vercel.png"}
              alt={"Vercel logo"}
              className={"skill_logo"}
            />
          </div>
        </Container>
        <Decor_BG_Circle
          className={`top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
        />
      </section>
    </div>
  );
};
export default Skills2;

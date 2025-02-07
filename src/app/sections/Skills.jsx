import Container from "../components/Container";
import Decor_BG_Circle from "../components/Decor_BG_Circle";
import SkillCard from "../components/SkillCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  // States
  const [cardsContainerMoveX, setCardsContainerMoveX] = useState(0);
  const [textOneMoveX, setTextOneMoveX] = useState(0);
  const [textTwoMoveX, setTextTwoMoveX] = useState(0);

  // Effects
  useEffect(() => {
    calculateTextNCardsContainerMoveX();
  }, []);

  useGSAP(() => {
    gsap.to("#skills_cards_container", {
      x: -cardsContainerMoveX,
      ease: "none",
      scrollTrigger: {
        trigger: "#section_skills",
        start: "top top",
        end: `+=${cardsContainerMoveX}`,
        markers: true,
        scrub: true,
        pin: true,
      },
    });

    gsap.to("#skills_text_one", {
      x: -textOneMoveX,
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    gsap.to("#skills_text_two", {
      x: 0,
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, [cardsContainerMoveX]);

  //   Functions
  const calculateTextNCardsContainerMoveX = () => {
    let windowWidth = window.innerWidth;
    let skillsContainerWidth =
      document.getElementById("skills_container").offsetWidth;
    let containerWidth = document.getElementById(
      "skills_cards_container"
    ).offsetWidth;
    let moveX = containerWidth - windowWidth / 2 + 32;
    let textOneWidth = document.getElementById("skills_text_one").offsetWidth;
    let textTwoWidth = document.getElementById("skills_text_two").offsetWidth;
    let textMoveXOne = textOneWidth - skillsContainerWidth;
    let textMoveXTwo = textTwoWidth - skillsContainerWidth;

    console.log(
      window.innerWidth,
      skillsContainerWidth,
      textOneWidth,
      textTwoWidth,
      textMoveXOne,
      textMoveXTwo
    );
    // console.log(textMoveX);
    setCardsContainerMoveX(moveX);
    setTextOneMoveX(textMoveXOne);
    setTextTwoMoveX(textMoveXTwo);
  };

  return (
    <section id="section_skills" className="px-5 relative my-20">
      <Container
        id="skills_container"
        className={`min-h-screen flex flex-col items-start justify-center`}
      >
        <span
          id="about_heading"
          className="block text-5xl font-light text-white"
        >
          I{" "}
          <span className="text-primary-shade inline-block font-semibold">
            specialize
          </span>{" "}
          in...
        </span>

        {/* Skills Text */}
        <span
          id="skills_text_one"
          className="text-6xl font-semibold text-white text-opacity-10 whitespace-nowrap block mt-6"
        >
          React.js Next.js Node.js Express.js Javascript Typescript PhP Python C
          MongoDB PostgreSQL Firebase TailwindCSS WordPress
        </span>

        {/* Skill Cards */}
        <div
          id="skills_cards_container"
          className="flex flex-row gap-8 flex-nowrap my-3 relative left-[50%]"
        >
          <SkillCard
            image={"/assets/logos/reactJS.png"}
            heading={"React.js"}
            text={"Javascript Library"}
          />
          <SkillCard
            image={"/assets/logos/nextJS.png"}
            heading={"Next.js"}
            text={"React Frameword"}
          />
          <SkillCard
            image={"/assets/logos/nodeJS.png"}
            heading={"Node.js"}
            text={"Runtime Environment"}
          />
          <SkillCard
            image={"/assets/logos/expressJS.png"}
            heading={"Express.js"}
            text={"Node.js framework"}
          />
          <SkillCard
            image={"/assets/logos/js.png"}
            heading={"Javascript"}
            text={"Programming Language"}
          />
          <SkillCard
            image={"/assets/logos/php.png"}
            heading={"PhP"}
            text={"Programming Language"}
          />
          <SkillCard
            image={"/assets/logos/python.png"}
            heading={"Python"}
            text={"Programming Language"}
          />
          <SkillCard
            image={"/assets/logos/c.png"}
            heading={"C"}
            text={"Programming Language"}
          />
          <SkillCard
            image={"/assets/logos/mongoDB.png"}
            heading={"MongoDB"}
            text={"NoSQL Database"}
          />
          <SkillCard
            image={"/assets/logos/postgreSQl.png"}
            heading={"PostgreSQL"}
            text={"Relational Database Management System (RDBMS) "}
          />
          <SkillCard
            image={"/assets/logos/firebase.png"}
            heading={"Firebase"}
            text={"Backend-as-a-Service (BaaS)"}
          />
          <SkillCard
            image={"/assets/logos/tailwindcss.png"}
            heading={"Tailwind CSS"}
            text={"CSS Framework"}
          />
          <SkillCard
            image={"/assets/logos/wordpress.png"}
            heading={"WordPress"}
            text={"Content Management System (CMS)"}
          />
        </div>

        {/* Skills Text */}
        <span
          id="skills_text_two"
          className={`text-6xl font-semibold text-white text-opacity-10 whitespace-nowrap block mb-6`}
          style={{
            transform: `translateX(-${textTwoMoveX}px)`,
          }}
        >
          React.js Next.js Node.js Express.js Javascript Typescript PhP Python C
          MongoDB PostgreSQL Firebase TailwindCSS WordPress
        </span>
      </Container>
      <Decor_BG_Circle
        className={`top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
      />
    </section>
  );
};
export default Skills;

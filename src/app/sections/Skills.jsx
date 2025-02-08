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
  const [textMoveX, setTextMoveX] = useState(0);

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
        markers: true,
        scrub: 1,
      },
    });
  }, []);

  useGSAP(() => {
    gsap.to("#skills_cards_container", {
      x: -cardsContainerMoveX,
      ease: "none",
      scrollTrigger: {
        trigger: "#section_skills",
        start: "top top",
        end: `+=${cardsContainerMoveX}`,
        markers: false,
        scrub: true,
        pin: true,
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

    // ScrollTrigger.refresh();
  }, [cardsContainerMoveX, textMoveX]);

  return (
    <section id="section_skills" className="px-5 relative my-20">
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
          React.js Next.js Node.js Express.js Javascript Typescript PhP Python C
          MongoDB PostgreSQL Firebase TailwindCSS WordPress
        </span>

        {/* Skill Cards */}
        <div
          id="skills_cards_container"
          className="flex flex-row gap-8 flex-nowrap my-3 relative left-[50%] -translate-x-[125px]"
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

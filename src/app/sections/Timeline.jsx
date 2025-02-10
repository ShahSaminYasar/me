import Container from "../components/Container";
import Decor_BG_Circle from "../components/Decor_BG_Circle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  //   Effects
  useGSAP(() => {
    gsap.from("#timeline_heading", {
      y: 100,
      scrollTrigger: {
        trigger: "#section_timeline",
        start: "top bottom",
        end: "top 70%",
        markers: false,
        scrub: 1,
      },
    });

    document.querySelectorAll(".timeline_card")?.forEach((card) => {
      gsap.from(card.querySelector(".sbar"), {
        scaleY: 0,
        scrollTrigger: {
          trigger: card.querySelector(".sbar"),
          start: "top 90%",
          end: "top 60%",
          scrub: 0.5,
          markers: false,
        },
      });

      gsap.from(card.querySelector(".ebar"), {
        scaleY: 0,
        scrollTrigger: {
          trigger: card.querySelector(".ebar"),
          start: "top 90%",
          end: "top 60%",
          scrub: 0.5,
          markers: false,
        },
      });
    });

    document.querySelectorAll(".timeline_card")?.forEach((card) => {
      gsap.from(card?.querySelector("div"), {
        opacity: 0,
        scrollTrigger: {
          trigger: card?.querySelector("div"),
          start: "top bottom",
          end: "top 85%",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <div>
      <section
        id="section_timeline"
        className="relative min-h-screen py-20 px-5"
      >
        <Container>
          <div className="overflow-hidden min-h-[45px] md:min-h-[55px] w-full">
            <span
              id="timeline_heading"
              className="block text-4xl md:text-5xl font-light text-white"
            >
              My
              <span className="text-primary-shade inline-block font-semibold">
                Timeline
              </span>{" "}
              ...
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-[500px] md:max-w-[670px] flex flex-col gap-0 items-start mt-10">
              <div className="timeline_card">
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-primary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2018
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    Video editing and youtubing
                  </span>
                  <p className="text-xs font-thin">
                    Got into tech stuffs through learning video editing and
                    making YouTube videos.
                  </p>
                </div>
              </div>
              <div className="self-end timeline_card origin-top">
                <span className="sbar origin-top w-[2px] h-[43px] block bg-gradient-to-b from-[rgba(81,66,199,0.9)] to-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-secondary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2019
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    Robotics and Arduino programming
                  </span>
                  <p className="text-xs font-thin">
                    Out of interest, made projects like Smart City Model,
                    Bluetooth Controlled Car, Obstacle sensor etc. with Arduino.
                  </p>
                </div>
                <span className="ebar origin-top w-[2px] h-[43px] block bg-gradient-to-b to-[rgba(81,66,199,0.9)] from-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
              </div>
              <div className="timeline_card">
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-primary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2020
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    MIT App Inventor
                  </span>
                  <p className="text-xs font-thin">
                    Made apps using block based programming in MIT App Inventor.
                  </p>
                </div>
              </div>
              <div className="self-end timeline_card origin-top">
                <span className="sbar origin-top w-[2px] h-[43px] block bg-gradient-to-b from-[rgba(81,66,199,0.9)] to-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-secondary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2020
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    Python
                  </span>
                  <p className="text-xs font-thin">
                    Learnt Python and its various libraries like Pygame using
                    which made some 2D games like space shooter, pong etc.
                  </p>
                </div>
                <span className="ebar origin-top w-[2px] h-[43px] block bg-gradient-to-b to-[rgba(81,66,199,0.9)] from-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
              </div>
              <div className="timeline_card">
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-primary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2020
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    Entry into Web Development
                  </span>
                  <p className="text-xs font-thin">
                    Learnt basic HTML CSS and JS from YT tutorials, later
                    through a premium course.
                  </p>
                </div>
              </div>
              <div className="self-end timeline_card origin-top">
                <span className="sbar origin-top w-[2px] h-[43px] block bg-gradient-to-b from-[rgba(81,66,199,0.9)] to-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-secondary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2021
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    Dived more deeper
                  </span>
                  <p className="text-xs font-thin">
                    Started learning and practicing advanced JavaScript and OOP.
                  </p>
                </div>
                <span className="ebar origin-top w-[2px] h-[43px] block bg-gradient-to-b to-[rgba(81,66,199,0.9)] from-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
              </div>
              <div className="timeline_card">
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-primary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2023
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    Advancement
                  </span>
                  <p className="text-xs font-thin">
                    Mastered JS through problem solving and building advanced
                    web apps without any framework.
                  </p>
                </div>
              </div>
              <div className="self-end timeline_card origin-top">
                <span className="sbar origin-top w-[2px] h-[43px] block bg-gradient-to-b from-[rgba(81,66,199,0.9)] to-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-secondary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2023
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    Learnt C Programming
                  </span>
                  <p className="text-xs font-thin">
                    Got into problem solving with C. Took part in physical
                    contests and grabbed positions.
                  </p>
                </div>
                <span className="ebar origin-top w-[2px] h-[43px] block bg-gradient-to-b to-[rgba(81,66,199,0.9)] from-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
              </div>
              <div className="timeline_card">
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-primary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2023
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    Real life project
                  </span>
                  <p className="text-xs font-thin">
                    Got hired to develop a React based online portal system for
                    an educational agency. Earned my first ever earning from
                    this project.
                  </p>
                </div>
              </div>
              <div className="self-end timeline_card origin-top">
                <span className="sbar origin-top w-[2px] h-[43px] block bg-gradient-to-b from-[rgba(81,66,199,0.9)] to-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-secondary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2024
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    Industry level
                  </span>
                  <p className="text-xs font-thin">
                    Mastered React.js and Next.js through continuously building
                    web applications following the industry standard.
                  </p>
                </div>
                <span className="ebar origin-top w-[2px] h-[43px] block bg-gradient-to-b to-[rgba(81,66,199,0.9)] from-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
              </div>
              <div className="timeline_card">
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-primary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2024
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    More real life projects
                  </span>
                  <p className="text-xs font-thin">
                    Completed two more massive projects. One was an ecommerce
                    store and another one was a school's online class management
                    portal - all based on React.js.
                  </p>
                </div>
              </div>
              <div className="self-end timeline_card origin-top">
                <span className="sbar origin-top w-[2px] h-[43px] block bg-gradient-to-b from-[rgba(81,66,199,0.9)] to-[rgba(81,66,199,0.3)] rounded-[5px] ml-8 sm:ml-3"></span>
                <div className="w-full max-w-[270px] md:max-w-[350px] p-5 rounded-lg bg-gradient-to-br from-[rgba(81,66,199,0.25)] to-transparent text-white text-opacity-80 font-normal flex flex-col gap-0 border-[2px] border-secondary border-opacity-70">
                  <span className="font-light text-[14px] md:text-sm block">
                    2025
                  </span>
                  <span className="font-medium text-lg md:text-xl block">
                    Contractual Project
                  </span>
                  <p className="text-xs font-thin">
                    Got hired to build online portal systems for a tech company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Decor_BG_Circle
          className={`-bottom-[10%] left-[50%] -translate-x-[50%]`}
        />
      </section>
    </div>
  );
};
export default Timeline;

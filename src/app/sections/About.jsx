import Image from "next/image";
import Container from "../components/Container";
import Decor_BG_Circle from "../components/Decor_BG_Circle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.to(document.querySelector(".me_image_two"), {
      opacity: 0,
      duration: 0.4,
      delay: 2,
      scrollTrigger: {
        trigger: "#section_about",
        start: "top 10%",
        end: "top top",
        markers: false,
        scrub: false,
      },
    });

    const aboutTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#section_about",
        start: "-top 40%",
        end: "top top",
        markers: false,
        scrub: true,
      },
    });

    aboutTL
      .from(
        "#about_image_container",
        {
          opacity: 0,
          duration: 3,
        },
        "a"
      )
      .from(
        "#about_heading",
        {
          y: 100,
          duration: 2.5,
        },
        "a"
      )
      .from(
        "#about_description",
        {
          opacity: 0,
          y: "-100%",
          duration: 2.5,
        },
        "a"
      );

    gsap.from("#about_list > span", {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#about_list",
        start: "top 80%",
        end: "bottom+=50px bottom",
        markers: false,
        scrub: 1,
      },
    });
    gsap.from("#about_list_bar", {
      height: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#about_list",
        start: "top 80%",
        end: "bottom+=50px bottom",
        markers: false,
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    const imagesHolder = document.querySelector(".about_images");
    const imageOne = document.querySelector(".me_image_one");
    const imageTwo = document.querySelector(".me_image_two");

    const handleMouseEnter = () => {
      gsap.killTweensOf([imageOne, imageTwo]); // Stop any ongoing animations
      gsap.to(imageTwo, { opacity: 1, duration: 0.2 });
      gsap.to(imageOne, { opacity: 0, duration: 0, delay: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.killTweensOf([imageOne, imageTwo]); // Stop any ongoing animations
      gsap.to(imageOne, { opacity: 1, duration: 0 });
      gsap.to(imageTwo, { opacity: 0, duration: 0.2 });
    };

    imagesHolder.addEventListener("mouseenter", handleMouseEnter);
    imagesHolder.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imagesHolder.removeEventListener("mouseenter", handleMouseEnter);
      imagesHolder.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="section_about" className="relative mt-5">
      <Container className={`grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5`}>
        <div className="p-5 overflow-hidden">
          <div
            id="about_image_container"
            className={`w-full bg-primary bg-opacity-30 backdrop-blur-xl p-10 grid place-items-center h-full rounded-2xl`}
            style={{
              backgroundImage: "url(/assets/about_bg_decor.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
            }}
          >
            <div
              className={`about_images w-[100%] max-w-[250px] aspect-square rounded-[30%] rotate-[-15deg] overflow-hidden relative`}
            >
              <Image
                src={`/assets/shah_samin_yasar.jpg`}
                width={500}
                height={500}
                priority={true}
                alt="Shah Samin Yasar"
                className="me_image_one absolute top-0 left-0 w-full h-full object-cover block rotate-[15deg] scale-125"
              />
              <Image
                src={`/assets/shah_samin_yasar_2.jpg`}
                width={500}
                height={500}
                priority={true}
                alt="Shah Samin Yasar"
                className="me_image_two absolute top-0 left-0 w-full h-full object-cover block rotate-[15deg] scale-110"
              />
            </div>
          </div>
        </div>

        <div
          className={`md:col-span-2 md:min-h-screen p-5 sm:pr-10 flex flex-col justify-center gap-4`}
        >
          {/* Heading */}
          <div className="overflow-hidden">
            <span
              id="about_heading"
              className="block text-3xl md:text-5xl font-light text-white"
            >
              <span className="text-primary-shade inline-block font-semibold">
                Me
              </span>{" "}
              in brief
            </span>
          </div>
          {/* Description */}
          <div className="overflow-hidden">
            <p
              id="about_description"
              className="block text-justify text-sm text-white text-opacity-70 font-light"
            >
              I'm Shah Samin Yasar, a MERN stack developer from Sylhet,
              Bangladesh, with 5+ years of experience. I specialize in building
              industry-level web apps using technologies like React, Next.js,
              Node.js, MongoDB, PostgreSQL etc. Passionate about my work, I
              ensure high-quality solutions, having successfully developed
              projects for businesses, agencies, and educational institutions.
            </p>
          </div>
          {/* Details List */}
          <div
            id="about_list"
            className="pl-4 flex flex-col gap-3 items-start text-white font-light text-sm relative"
          >
            <div
              id="about_list_bar"
              className="absolute block -left-1 top-0 w-[4px] h-full bg-primary-shade rounded-sm"
            ></div>
            <span className="relative">
              <span className="w-4 h-1 bg-primary-shade rounded-sm absolute top-[50%] -left-5 -translate-y-[50%]"></span>
              📍 Based:{" "}
              <span className="font-semibold">Sylhet, Bangladesh</span>
            </span>
            <span className="relative">
              <span className="w-4 h-1 bg-primary-shade rounded-sm absolute top-[50%] -left-5 -translate-y-[50%]"></span>
              🎓 Education:{" "}
              <span className="font-semibold">College Final Year (2025)</span>
            </span>
            <span className="relative">
              <span className="w-4 h-1 bg-primary-shade rounded-sm absolute top-[50%] -left-5 -translate-y-[50%]"></span>
              💪 I specialize in:{" "}
              <span className="font-semibold">Next.js, MERN Stack</span>
            </span>
            <span className="relative">
              <span className="w-4 h-1 bg-primary-shade rounded-sm absolute top-[50%] -left-5 -translate-y-[50%]"></span>
              ♥ Hobbies:{" "}
              <span className="font-semibold">
                Coding, cycling, photography
              </span>
            </span>
            <span className="relative">
              <span className="w-4 h-1 bg-primary-shade rounded-sm absolute top-[50%] -left-5 -translate-y-[50%]"></span>
              😎 Experience: <span className="font-semibold">5+ years</span>
            </span>
            <span className="relative">
              <span className="w-4 h-1 bg-primary-shade rounded-sm absolute top-[50%] -left-5 -translate-y-[50%]"></span>
              ⌨ Typing speed:{" "}
              <span className="font-semibold">72 wpm (average)</span>
            </span>
          </div>
        </div>
      </Container>
      <Decor_BG_Circle className={`left-[5%] bottom-[20%]`} />
    </section>
  );
};
export default About;

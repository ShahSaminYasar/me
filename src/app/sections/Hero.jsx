import Container from "../components/Container";
import CTALink from "../components/CTALink";
import { IoDocumentOutline } from "react-icons/io5";
import Decor_BG_Circle from "../components/Decor_BG_Circle";
import { indieFlower } from "../lib/fonts";
import Link from "next/link";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { PiMouseSimple } from "react-icons/pi";
import { FaAnglesDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-black relative">
      <Container
        className={`min-h-screen w-full flex flex-col gap-3 items-center justify-center`}
      >
        <div>
          <div className="flex flex-row justify-between items-center">
            <span
              className={`${indieFlower?.className} text-[1.25rem] block text-left`}
            >
              Hi, I'm
            </span>
            <span className="w-[30px] rounded-sm aspect-video bg-green-700 grid place-items-center">
              <span className="block w-[36%] aspect-square rounded-full bg-red-500"></span>
            </span>
          </div>
          <h1 className="text-5xl font-medium uppercase my-1 mb-2">
            Shah Samin Yasar
          </h1>
          <span className="text-3xl font-thin">
            a <p className="inline-block">MERN Stack Developer</p>
          </span>

          <div className="flex flex-row items-center justify-center gap-5 mt-7 relative">
            <CTALink href="#" className={`mr-3`}>
              <IoDocumentOutline />
              Download CV
            </CTALink>

            <Link href={`https://github.com/ShahSaminYasar`}>
              <FiGithub className="text-xl text-white opacity-80" />
            </Link>
            <Link href={`https://www.linkedin.com/in/shah-samin-yasar/`}>
              <FiLinkedin className="text-xl text-white opacity-80" />
            </Link>
            <Link href={`https://instagram.com/shahsaminyasar`}>
              <FiInstagram className="text-xl text-white opacity-80" />
            </Link>
            <Link href={`https://facebook.com/shah_samin_yasar`}>
              <FiFacebook className="text-xl text-white opacity-80" />
            </Link>

            <span className="flex flex-col items-center justify-center opacity-30 absolute left-[50%] -translate-x-[50%] -bottom-[140px]">
              <PiMouseSimple className="text-3xl text-white" />
              <FaAnglesDown className="text-sm text-white scroll_down_indicator" />
            </span>
          </div>
        </div>
      </Container>
      <span className="text-sm font-light text-white text-opacity-60 flex flex-row items-center gap-1 absolute bottom-4 left-4">
        <div className="livenow">
          <div></div>
          <div></div>
          <div></div>
        </div>{" "}
        LIVE status: <span className="inline-block font-medium">Coding</span>
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

import Link from "next/link";
import Container from "../components/Container";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Decor_BG_Circle from "../components/Decor_BG_Circle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from("#contact_heading", {
      y: 100,
      opacity: 0.5,
      scrollTrigger: {
        trigger: "#contact_heading",
        start: "top bottom",
        end: "top 70%",
        scrub: 0.6,
      },
    });

    document.querySelectorAll(".contact_col_title")?.forEach((title) => {
      gsap.from(title, {
        y: -100,
        scrollTrigger: {
          trigger: title,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        },
      });
    });

    const handlesContainer = document.querySelector(".handles_container");
    handlesContainer
      .querySelectorAll(".contact_handle")
      ?.forEach((contact_handle) => {
        gsap.set(contact_handle, {
          opacity: 1,
        });
        gsap.from(contact_handle, {
          x: -100,
          opacity: 0,
          scrollTrigger: {
            trigger: contact_handle,
            start: "top 100%",
            end: "top 80%",
            scrub: 0.6,
          },
        });
      });

    gsap.set(document.querySelector(".contact_form"), {
      opacity: 1,
    });

    const contactForm = document.querySelector(".contact_form");

    const contactFormTL = gsap.timeline({
      scrollTrigger: {
        trigger: contactForm,
        start: "top 90%",
        end: "top 40%",
        scrub: 0.6,
      },
    });

    contactFormTL.from(contactForm, {
      x: 100,
      opacity: 0,
    });

    contactForm
      .querySelectorAll("input, textarea, button")
      ?.forEach((input) => {
        contactFormTL.from(input, {
          opacity: 0,
          duration: 0.5,
        });
      });
  }, []);

  return (
    <section id="section_contact" className="relative px-5">
      <Container
        className={`min-h-screen flex flex-col items-center justify-center py-10`}
      >
        {/* Section Title */}
        <div className="overflow-hidden min-h-[45px] md:min-h-[55px] w-full">
          <span
            id="contact_heading"
            className="block text-4xl md:text-5xl font-light text-white text-center"
          >
            Let&apos;s get in{" "}
            <span className="text-primary-shade inline-block font-semibold">
              touch
            </span>{" "}
          </span>
        </div>

        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-10 justify-center py-10">
          <div className="handles_container w-full max-w-[400px] mx-auto grid grid-cols-1 gap-2">
            <div className="overflow-hidden">
              <span
                className={`contact_col_title font-light text-3xl text-white text-opacity-80 block mb-5`}
              >
                My social handles...
              </span>
            </div>

            <Link
              href={"#"}
              className="contact_handle w-full flex flex-row items-center gap-3 rounded-badge p-3 text-sm text-white bg-gradient-to-br from-[rgba(0,102,255,0.2)] hover:to-[rgba(0,102,255,0.2)] duration-200 to-transparent border-[2px] border-[#0066ff]"
            >
              <FaLinkedin className="text-3xl text-[#0066ff]" />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-sm text-[#0066ff]">
                  LinkedIn
                </span>
                <span className="text-xs">in/shah-samin-yasar</span>
              </div>
            </Link>
            <Link
              href={"#"}
              className="contact_handle w-full flex flex-row items-center gap-3 rounded-badge p-3 text-sm text-white bg-gradient-to-br from-[rgba(2,15,255,0.2)] hover:to-[rgba(2,15,255,0.2)] duration-200 to-transparent border-[2px] border-[#020fff]"
            >
              <FaFacebook className="text-3xl text-[#020fff]" />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-sm text-[#020fff]">
                  Facebook
                </span>
                <span className="text-xs">shahsaminyasar</span>
              </div>
            </Link>
            <Link
              href={"#"}
              className="contact_handle w-full flex flex-row items-center gap-3 rounded-badge p-3 text-sm text-white bg-gradient-to-br from-[rgba(255,0,153,0.2)] hover:to-[rgba(255,0,153,0.2)] duration-200 to-transparent border-[2px] border-[#ff0099]"
            >
              <FaInstagram className="text-3xl text-[#ff0099]" />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-sm text-[#ff0099]">
                  Instagram
                </span>
                <span className="text-xs">shah_samin_yasar</span>
              </div>
            </Link>
            <Link
              href={"#"}
              className="contact_handle w-full flex flex-row items-center gap-3 rounded-badge p-3 text-sm text-white bg-gradient-to-br from-[rgba(0,153,255,0.2)] hover:to-[rgba(0,153,255,0.2)] duration-200 to-transparent border-[2px] border-[#0099ff]"
            >
              <FaLinkedin className="text-3xl text-[#0099ff]" />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-sm text-[#0099ff]">
                  Telegram
                </span>
                <span className="text-xs">shahsaminyasar</span>
              </div>
            </Link>
          </div>

          <div className="w-full max-w-[400px] mx-auto">
            <div className="overflow-hidden">
              <span
                className={`contact_col_title font-light text-3xl text-white text-opacity-80 block mb-5`}
              >
                Leave a message...
              </span>
            </div>
            <form className="contact_form flex flex-col gap-4 bg-primary bg-opacity-20 p-5 rounded-lg w-full">
              <input
                placeholder="Your Email"
                type="email"
                className="w-full py-2 px-3 rounded-xl bg-transparent text-sm text-white font-medium block border-[2px] border-primary-shade border-opacity-60 outline-none"
              />
              <textarea
                placeholder="Write message here"
                rows={5}
                className="resize-y w-full py-2 px-3 rounded-xl bg-transparent text-sm text-white font-medium block border-[2px] border-primary-shade border-opacity-60 outline-none"
              ></textarea>

              <button
                type="submit"
                className="py-2 px-3 rounded-xl bg-gradient-to-br from-secondary to-primary text-white block text-sm font-normal w-full mr-auto bg-opacity-50 border-[2px] border-secondary mt-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>

      <Decor_BG_Circle className={`-left-[30%] -bottom-[30%]`} />
    </section>
  );
};
export default Contact;

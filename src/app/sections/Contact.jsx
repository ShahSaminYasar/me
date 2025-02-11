import Link from "next/link";
import Container from "../components/Container";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa6";
import Decor_BG_Circle from "../components/Decor_BG_Circle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  // States
  const [sendingMessage, setSendingMessage] = useState(false);

  // Effects
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const handles = document.querySelectorAll(".contact_handle");

    handles?.forEach((handle) => {
      handle?.addEventListener("mouseenter", () => {
        cursor.innerHTML = "Click";
        gsap.to(cursor, {
          scale: 5.5,
          duration: 0.3,
        });
      });
      handle?.addEventListener("mouseleave", () => {
        cursor.innerHTML = "";
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
        });
      });
    });
  }, []);

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

  // Functions
  const handleSendMessage = async (e) => {
    e.preventDefault();
    setSendingMessage(true);
    let email = e.target.email.value;
    let message = e.target.message.value;

    const res = await axios.post("/api/post/messages", {
      email,
      message,
      datetime: new Date().toString(),
    });

    setSendingMessage(false);

    if (res?.data?.ok) {
      Swal.fire({
        title: "Thank You",
        text: "Your message was sent. I will get back to you as soon as possible. Have a good day",
        icon: "success",
        background: "#1c308a",
        color: "#fff",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
      return e.target.reset();
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Sorry for the inconvenience, your message wasn't sent :( Please check the network connection and try again.",
        icon: "warning",
        background: "#1c308a",
        color: "#fff",
      });
    }
  };

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
              <FaTelegram className="text-3xl text-[#0099ff]" />
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
            <form
              onSubmit={handleSendMessage}
              className="contact_form flex flex-col gap-4 bg-primary bg-opacity-20 p-5 rounded-lg w-full"
            >
              <input
                placeholder="Your Email"
                required
                name="email"
                type="email"
                className="w-full py-2 px-3 rounded-xl bg-transparent text-sm text-white font-medium block border-[2px] border-primary-shade border-opacity-60 outline-none"
              />
              <textarea
                name="message"
                placeholder="Write message here"
                rows={5}
                className="resize-y w-full py-2 px-3 rounded-xl bg-transparent text-sm text-white font-medium block border-[2px] border-primary-shade border-opacity-60 outline-none"
              ></textarea>

              <button
                type="submit"
                disabled={sendingMessage}
                className="py-2 px-3 rounded-xl bg-gradient-to-br from-secondary to-primary text-white block text-sm font-normal w-full mr-auto bg-opacity-50 border-[2px] border-secondary mt-1 disabled:opacity-60 disabled:grayscale-[70%]"
              >
                {sendingMessage ? "Sending..." : "Send Message"}
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

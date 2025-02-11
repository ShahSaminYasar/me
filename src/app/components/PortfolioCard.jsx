import Image from "next/image";
import { LuExternalLink } from "react-icons/lu";
import { firaCode } from "../lib/fonts";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const PortfolioCard = ({
  image = "",
  title = "",
  description = "",
  languages = "",
  liveLink = "",
  setPortfolioDetails = () => {},
  openDrawer = () => {},
  className = "",
}) => {
  // Effects
  // GSAP
  useGSAP(() => {
    const cursor = document.getElementById("cursor");

    document.querySelectorAll(".portfolio-card_image").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        cursor.innerHTML = "View";
        gsap.to(cursor, {
          scale: 5.5,
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        cursor.innerHTML = "";
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
        });
      });
    });
  }, []);

  // Functions
  const handleOpenDrawer = () => {
    setPortfolioDetails({
      thumbnail: image,
      title,
      description,
      languages,
      link: liveLink,
    });
    return openDrawer();
  };

  return (
    <div
      className={`portfolio-card ${
        firaCode?.className
      } w-full max-w-[500px] rounded-lg bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-transparent border-[1px] border-[#655473] p-3 ${
        className && className
      }`}
    >
      <Image
        src={image?.length > 0 ? image : null}
        width={500}
        height={500}
        alt={`Thumbnail of ${title}`}
        onClick={handleOpenDrawer}
        className="portfolio-card_image w-full aspect-video object-cover rounded-lg mb-3"
      />
      <div className="flex flex-row items-center justify-between gap-3 flex-wrap">
        <h3 className="capitalize text-xl text-white font-semibold block text-left">
          {title}
        </h3>
        <div className="flex flex-row items-center flex-nowrap gap-2">
          <button onClick={handleOpenDrawer} className="chronicle-button">
            <span>
              <em>Details</em>
            </span>
            <span>
              <em>Details</em>
            </span>
          </button>
          <Link
            href={liveLink}
            target="_blank"
            className="block w-fit px-1 py-1 border-none hover:scale-110 duration-200 rounded-sm text-xs font-medium text-white"
          >
            <LuExternalLink className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);
const Cursor = () => {
  useGSAP(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const cursor = document.getElementById("cursor");
      gsap.to(cursor, {
        x: clientX - 5,
        y: clientY - 5,
        opacity: 1,
        duration: 0.3,
        delay: 0,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <span
      id="cursor"
      className="w-[10px] aspect-square rounded-full bg-[rgba(255,255,255,1)] fixed top-0 left-0 z-[999] pointer-events-none text-neutral-800 text-[3px] font-light text-center grid place-items-center opacity-0 mix-blend-exclusion"
    ></span>
  );
};
export default Cursor;

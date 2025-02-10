import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);
const Cursor = () => {
  useGSAP(() => {
    const cursor = document.getElementById("cursor");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
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

    // Function to detect touch devices and hide cursor
    const handleTouchStart = () => {
      cursor.style.display = "none"; // Hide cursor on touch
      window.removeEventListener("mousemove", handleMouseMove); // Remove mousemove listener
    };

    // Initial detection (hide if touch is present)
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      cursor.style.display = "none";
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <span
      id="cursor"
      className="w-[10px] aspect-square rounded-full bg-[rgba(255,255,255,1)] fixed top-0 left-0 z-[999] pointer-events-none text-neutral-800 text-[3px] font-light text-center grid place-items-center opacity-0"
      style={{
        mixBlendMode: "exclusion",
      }}
    ></span>
  );
};
export default Cursor;

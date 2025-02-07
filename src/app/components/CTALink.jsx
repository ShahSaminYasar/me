import Link from "next/link";
import { firaCode } from "../lib/fonts";

const CTALink = ({ children, href = "#", className, ref = null, id = "" }) => {
  return (
    <Link
      href={href}
      ref={ref}
      id={id}
      className={`${
        firaCode.className
      } w-fit px-2 py-2 text-xs rounded-lg font-medium border-2 border-primary bg-gradient-to-br from-primary to-secondary text-white flex flex-row items-center gap-2 ${
        className && className
      }`}
    >
      {children}
    </Link>
  );
};
export default CTALink;

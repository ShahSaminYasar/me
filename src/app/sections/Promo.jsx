import Image from "next/image";
import Container from "../components/Container";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Promo = () => {
  return (
    <section className="p-5 pr-7">
      <Container>
        <div className="w-fit mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-7 bg-indigo-300 bg-opacity-30 rounded-xl p-7">
          <Image
            src={"/assets/yawmly_logo.png"}
            width={300}
            height={300}
            alt="Yawmly's logo"
            className="rounded-lg w-full max-w-[140px] sm:max-w-[200px]"
          />

          <div className="text-white text-center w-full max-w-[500px] flex flex-col items-center gap-2">
            <span className="block text-2xl sm:text-4xl font-semibold">
              Try out my latest app!
            </span>
            <p className="text-slate-200 text-xs sm:text-sm font-light">
              Yawmly is a productivity app which will help you plan your entire
              day efficiently and achieve all the goals with boosted focus.
            </p>
            <Link
              href={"https://yawmly.vercel.app"}
              target="_blank"
              className="w-fit px-5 py-2 rounded-xl bg-yellow-400 text-slate-800 text-xs sm:text-sm font-medium flex gap-1 items-center mt-2"
            >
              Click here <FaArrowUpRightFromSquare />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Promo;

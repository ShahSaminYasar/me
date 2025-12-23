const Footer = ({ className }) => {
  return (
    <footer
      className={`flex flex-col items-center justify-center gap-3 m-5 rounded-xl border-[1px] border-primary bg-gradient-to-tl from-[rgba(81,66,199,0.4)] to-transparent text-xs sm:text-sm text-white font-light text-opacity-70 p-10 min-h-[80px] md:mr-7 text-center ${
        className && className
      }`}
    >
      <span>
        Copyright {new Date().getFullYear()} &copy;{" "}
        <span className="font-semibold">Shah Samin Yasar</span>
      </span>
    </footer>
  );
};
export default Footer;

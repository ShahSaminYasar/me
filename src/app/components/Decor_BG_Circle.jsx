const Decor_BG_Circle = ({ className }) => {
  return (
    <span
      className={`block w-[45vw] aspect-square rounded-full bg-primary blur-[18vw] absolute ${
        className && className
      }`}
    ></span>
  );
};
export default Decor_BG_Circle;

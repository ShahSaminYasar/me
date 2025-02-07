const Container = ({ children, className }) => {
  console.log(children);
  return (
    <div
      className={`w-full max-w-6xl mx-auto relative z-[1] ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};
export default Container;

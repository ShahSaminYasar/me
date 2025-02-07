const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-7xl mx-auto relative z-[1] ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};
export default Container;

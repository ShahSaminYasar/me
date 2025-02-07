const Container = ({ children, className, id = null }) => {
  return (
    <div
      id={id}
      className={`w-full max-w-7xl mx-auto relative z-[1] ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};
export default Container;

const Container = ({ children, className, id = null, style = {} }) => {
  return (
    <div
      id={id}
      className={`w-full max-w-7xl mx-auto relative z-[1] ${
        className && className
      }`}
      style={style}
    >
      {children}
    </div>
  );
};
export default Container;

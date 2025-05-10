import Image from "next/image";

const SkillLogo = ({ src, className, alt, width, height }) => {
  return (
    <Image
      src={src}
      width={width || 80}
      height={height || 80}
      alt={alt}
      className={`${className && className}`}
    />
  );
};
export default SkillLogo;

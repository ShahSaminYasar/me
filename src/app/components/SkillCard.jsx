import Image from "next/image";

const SkillCard = ({ image, heading, text }) => {
  return (
    <div className="w-[250px] h-[300px] rounded-xl relative bg-gradient-to-br from-[rgba(255,255,255,0.3)] to-transparent  flex flex-col gap-3 items-center justify-center text-[#E0BAFF] p-7 border-2 border-[#655473]">
      <Image
        src={image}
        width={300}
        height={300}
        alt={`${heading} logo`}
        className="w-full max-w-[100px] mx-auto -translate-y-4"
      />
      <span className="block mt-8 font-semibold text-4xl text-center opacity-70">
        {heading}
      </span>
      <span className="text-sm font-thin block text-center opacity-90">
        {text}
      </span>
    </div>
  );
};
export default SkillCard;

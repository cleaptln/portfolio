import NageurEclaireur from "./NageurEclaireur";

const HeroSection = () => {
  return (
    <div className="z-[2] pointer-events-none flex justify-end flex-col h-[100vh] w-full">
      <h1 className="text-background mr-10 text-[100px] font-sans overflow-visible text-right leading-[100%]">
        <span className="font-display">C</span>lea <br /> <span className="font-display">P</span>ortolan
      </h1>
      <div className="nageur-eclaireur flex w-[50%]">
        <NageurEclaireur fill="#0b0b0b"/>
      </div>
    </div>
  );
};

export default HeroSection;

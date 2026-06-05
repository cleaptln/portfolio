import NageurEclaireur from "./NageurEclaireur";

const HeroSection = () => {
  return (
    <div className="z-[2] pointer-events-none flex justify-end flex-col h-[100vh] w-full">
      <h1 className="text-background mr-10 text-[62px] md:text-[100px] font-sans overflow-visible text-right leading-[100%] mb-[50%] md:mb-0">
        <span className="font-display">C</span>lea <br />
        <span className="font-display">P</span>ortolan
      </h1>
      <div className="flex w-full md:w-[80%] lg:w-[50%] mb-[20%] md:mb-0">
        <NageurEclaireur fill="#0b0b0b" />
      </div>
    </div>
  );
};

export default HeroSection;

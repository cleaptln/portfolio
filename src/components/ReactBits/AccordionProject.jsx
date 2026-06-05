import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import * as Accordion from "@radix-ui/react-accordion";

function AccordionProject({ items = [], speed = 15 }) {
  return (
    <div className="w-full">
      <Accordion.Root
        type="single"
        collapsible
        className="flex flex-col w-full"
      >
        {items.map((item, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            {...item}
            speed={speed}
            className="border-primary text-primary bg-background"
          />
        ))}
      </Accordion.Root>
    </div>
  );
}

function AccordionItem({ value, name, description, image, speed }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent =
        marqueeInnerRef.current.querySelector(".marquee-part");
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      const needed = Math.ceil(window.innerWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };
    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [name]);

  useEffect(() => {
    if (!marqueeInnerRef.current) return;
    const contentWidth =
      marqueeInnerRef.current.querySelector(".marquee-part")?.offsetWidth;
    if (!contentWidth) return;

    if (animationRef.current) animationRef.current.kill();
    animationRef.current = gsap.to(marqueeInnerRef.current, {
      x: -contentWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
  }, [repetitions, speed]);

  const handleMouseEnter = (ev) => {
    const rect = itemRef.current.getBoundingClientRect();
    const edge = ev.clientY - rect.top < rect.height / 2 ? "top" : "bottom";
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev) => {
    const rect = itemRef.current.getBoundingClientRect();
    const edge = ev.clientY - rect.top < rect.height / 2 ? "top" : "bottom";
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  return (
    <Accordion.Item
      value={value}
      className="border-b border-primary overflow-hidden"
      ref={itemRef}
    >
      <Accordion.Header className="flex">
        <Accordion.Trigger
          className="group flex-1 relative overflow-hidden py-8 text-left cursor-pointer transition-all"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Texte principal */}
          <span className="block font-sans text-xl leading-none transition-transform duration-500 group-hover:translate-x-[4px]">
            {name}
          </span>

          {/* Indicateur rotation — affiché à droite */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/40 transition-transform duration-500 ease-expo group-data-[state=open]:rotate-45">
            +
          </span>

           {/* Marquee au hover (React Bits) */}
          <div
            className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%]"
            ref={marqueeRef}
          >
            <div
              className="h-full bg-background w-fit flex"
              ref={marqueeInnerRef}
            >
              {[...Array(repetitions)].map((_, idx) => (
                <div
                  className="marquee-part flex items-center flex-shrink-0"
                  key={idx}
                >
                  <span className="whitespace-nowrap font-sans text-2xl px-[2vw]">
                    {name}
                  </span>
                  {image && (
                    <div
                      className="w-[120px] h-[4vh] rounded-full bg-cover bg-center mx-[1vw]"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Accordion.Trigger>
      </Accordion.Header>

      {/* CONTENU DE L'ACCORDÉON */}
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <div className="pb-10 flex flex-col md:flex-row gap-10 items-start">
          <p className="opacity-80 w-full text-[18px] leading-relaxed">
            {description}
          </p>
          {image && (
            <img
              src={image}
              alt={name}
              className="w-full md:w-[30%] h-auto object-cover rounded-xl border border-primary/20"
            />
          )}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default AccordionProject;

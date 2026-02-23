import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Card from "./ReactBits/Card.jsx";
import { MdArrowOutward } from "react-icons/md";
import { color } from "motion";
import { useTransition } from "./context/TransitionContext.jsx";
import { projectsData } from "../data/projets.js";

gsap.registerPlugin(ScrollTrigger);

const ProjetsContainer = () => {
  const { navigateWithTransition } = useTransition();
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(
    () => {
      const scrollWidth = scrollRef.current.scrollWidth;
      const scrollAmount = scrollWidth - window.innerWidth;
      if (window.innerWidth > 1024) {
        gsap.to(scrollRef.current, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top +=20%",
            end: () => `+=${scrollAmount}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <section className="bg-background overflow-hidden">
      {/* Titre normal */}
      <h2 className="text-primary text-5xl py-5 px-20 font-sans select-none">
        <span className="font-display">M</span>a sélection web
      </h2>

      {/* Container pin */}
      <div ref={containerRef} className="relative overflow-hidden">
        <div ref={scrollRef} className="projetsContainer flex items-center px-20 gap-20 w-max">
          {projectsData.map((p, index) => (
            <div
              key={index}
              onClick={() => navigateWithTransition(`/projet/${p.slug}`)}
              className="projetCard w-[450px] h-[400px] flex-shrink-0 cursor-pointer"
            >
              <Card
                className="h-full relative overflow-hidden fond-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${p.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* --- ZONE BADGES --- */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="border border-primary/50 text-primary/80 px-2 py-1 rounded-full text-xs font-sans uppercase tracking-widest"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-display text-primary">
                      {p.title}
                    </h3>
                    <p className="text-primary mt-6 text-l max-w-md">
                      {p.desc}
                    </p>
                  </div>
                  <div className="p-4 w-fit self-end">
                    <MdArrowOutward className="h-[50px] w-[50px] text-primary" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjetsContainer;

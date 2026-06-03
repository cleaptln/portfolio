import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "./ReactBits/Card.jsx";
import { useTransition } from "./context/TransitionContext.jsx";
import { projectsData } from "../data/projets.js";
const ProjetsContainer = () => {
  const { navigateWithTransition } = useTransition();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-background overflow-hidden pb-20">
      {/* Header : titre au dessus, flèches en dessous sur mobile */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-5 px-8 md:px-20 gap-4">
        <h2 className="text-primary mb-8 text-5xl md:text-5xl font-sans select-none">
          <span className="font-display">M</span>a sélection web
        </h2>

        <div className="flex gap-3">
          <button
            onClick={scrollPrev}
            className="cursor-pointer border border-primary/30 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200 rounded-full p-3"
            aria-label="Projet précédent"
          >
            <MdChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="cursor-pointer border border-primary/30 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200 rounded-full p-3"
            aria-label="Projet suivant"
          >
            <MdChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Carousel Embla */}
      <div className="overflow-hidden px-8 md:px-20 pb-10" ref={emblaRef}>
        <div className="flex gap-5 md:gap-8">
          {projectsData.map((p, index) => (
            <div
              key={index}
              onClick={() => navigateWithTransition(`/projet/${p.slug}`)}
              className="flex-[0_0_80vw] md:flex-[0_0_450px] h-[360px] md:h-[400px] cursor-pointer"
            >
              <Card
                className="h-full relative overflow-hidden fond-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${p.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="border border-primary/50 text-primary/80 px-2 py-1 rounded-full text-xs font-sans uppercase tracking-widest"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-display text-primary">
                      {p.title}
                    </h3>
                    <p className="text-primary mt-4 text-sm md:text-base max-w-md">
                      {p.desc}
                    </p>
                  </div>

                  <div className="p-4 w-fit self-end">
                    <MdArrowOutward className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] text-primary" />
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

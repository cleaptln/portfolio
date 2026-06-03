import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTransition } from "../components/context/TransitionContext";
import { projectsData } from "../data/projets.js";
import { IoArrowBackSharp } from "react-icons/io5";
import SplitText from "../components/ReactBits/SplitText.jsx";
import AccordionProject from "../components/ReactBits/AccordionProject.jsx";
import Bouton from "../components/Bouton.jsx";
import { IoMdArrowForward } from "react-icons/io";

const ProjectPage = () => {
  const containerRef = useRef();
  const videoRef = useRef();
  const { navigateWithTransition } = useTransition();
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = projectsData[currentIndex - 1] ?? null;
  const nextProject = projectsData[currentIndex + 1] ?? null;
  const itemsValeurAjoutee = project.valeurAjoutee.map((v) => ({
    name: v.name,
    description: v.description,
    image: v.img,
  }));

  useGSAP(
    () => {
      if (!project) return;
      gsap.set(".anim-item", { y: 0, opacity: 1 });
      gsap.from(".anim-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5,
      });
    },
    { scope: containerRef, dependencies: [project] },
  );

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-primary">
        <h1>404 - Projet introuvable</h1>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="projectPage min-h-screen bg-background px-20 pb-50 text-primary"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          navigateWithTransition("/#selection-web");
        }}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 0",
          gap: "20px",
          marginBottom: "20px",
          cursor: "pointer",
          borderBottom: "1px solid var(--color-primary)",
          backgroundColor: "transparent",
        }}
        className="transition-opacity anim-item"
      >
        <IoArrowBackSharp size={25} color="var(--color-primary)" />
        <span>Retour aux projets</span>
      </button>
      <h1 className="text-primary mt-10 text-8xl font-sans">
        <SplitText
          text={project.title}
          delay={50}
          duration={1.25}
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
      </h1>
      <div className="badges flex gap-4 my-8">
        {project.badges.map((badge, i) => (
          <span
            key={i}
            className="border border-primary px-4 py-1 rounded-full text-primary"
          >
            {badge}
          </span>
        ))}
      </div>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop
        onMouseEnter={() => videoRef.current.pause()}
        onMouseLeave={() => videoRef.current.play()}
        src={project.videoDemo}
        alt={project.title}
        className="anim-item w-full h-[60vh] object-cover rounded-3xl"
      />

      <div className="desc mt-20 grid grid-cols-3 gap-10 text-primary">
        <div className="col-span-2">
          <h3 className="text-4xl font-sans mb-4">
            <span className="font-display">À</span> propos
          </h3>
          <p className="text-lg opacity-80 leading-relaxed">
            {project.fullDesc}
          </p>
        </div>

        <div className="col-span-1 flex flex-col gap-5 space-y-6">
          <div>
            <h4 className="opacity-50 font-display text-lg">Contexte</h4>
            <p className="text-xl">{project.context}</p>
          </div>
          <div>
            <h4 className="opacity-50 font-display text-lg">Crédits</h4>

            {project.credits.map((credit, i) => {
              if (credit.url) {
                return (
                  <Bouton
                    key={i}
                    content={credit.name}
                    icon={IoMdArrowForward}
                    onClick={() =>
                      window.open(credit.url, "_blank", "noopener,noreferrer")
                    }
                    width="100%"
                  />
                );
              }

              return (
                <p key={i} className="text-xl">
                  {credit.name}
                </p>
              );
            })}
          </div>
          <div>
            <h4 className="opacity-50 font-display text-lg">Année</h4>
            <p className="text-xl">{project.year}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-sans mb-4 mt-20">
          <span className="font-display">M</span>a valeur ajoutée au projet
        </h3>
        <AccordionProject items={itemsValeurAjoutee} />
      </div>
      {/* Navigation entre projets */}
      <div className="mt-24 flex justify-between items-end gap-6 pt-8">
        {/* Projet précédent */}
        <div className="flex-1">
          {prevProject ? (
            <button
              onClick={() =>
                navigateWithTransition(`/projet/${prevProject.slug}`)
              }
              className="group flex items-center gap-4 text-left cursor-pointer"
            >
              {/* Miniature */}
              <div
                className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden relative"
                style={{
                  backgroundImage: `url(${prevProject.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <IoArrowBackSharp size={20} color="white" />
                </div>
              </div>
              <div>
                <span className="text-primary/40 text-xs font-sans tracking-widest uppercase block mb-1">
                  Précédent
                </span>
                <p className="text-primary text-lg font-display transition-all">
                  {prevProject.title}
                </p>
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>

        {/* Projet suivant */}
        <div className="flex-1 flex justify-end">
          {nextProject ? (
            <button
              onClick={() =>
                navigateWithTransition(`/projet/${nextProject.slug}`)
              }
              className="group flex items-center gap-4 text-right cursor-pointer"
            >
              <div className="text-right">
                <span className="text-primary/40 text-xs font-sans tracking-widest uppercase block mb-1">
                  Suivant
                </span>
                <p className="text-primary text-lg font-display transition-all">
                  {nextProject.title}
                </p>
              </div>
              {/* Miniature */}
              <div
                className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden relative"
                style={{
                  backgroundImage: `url(${nextProject.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <IoMdArrowForward size={20} color="white" />
                </div>
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "../components/ReactBits/SplitText.jsx";
import BackButton from "@/components/BackButton.jsx";

const MentionsLegales = () => {
  const containerRef = useRef();
  useGSAP(
    () => {
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
    { scope: containerRef },
  );

  const sections = [
    {
      number: "01",
      title: "Éditeur du site",
      content: (
        <div className="flex flex-col gap-1">
          <p>Ce site est édité par :</p>
          <div className="flex flex-col gap-3 mt-2">
            {[
              { label: "Nom", value: "Portolan Cléa" },
              { label: "Adresse", value: "Lens" },
              { label: "Email", value: "cleaportolan@gmail.com" },
              { label: "Téléphone", value: "06 47 83 71 25" },
            ].map((row, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-primary/40 font-display text-lg">
                  {row.label}
                </span>
                <span className="text-primary text-lg">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "Propriété intellectuelle",
      content: (
        <p>
          Le contenu de ce site (textes, images, graphismes, logo, etc.) est
          protégé par les lois en vigueur sur la propriété intellectuelle. Toute
          reproduction ou utilisation sans autorisation est interdite.
        </p>
      ),
    },
    {
      number: "03",
      title: "Responsabilité",
      content: (
        <p>
          Je m'efforce de fournir des informations précises sur ce site, mais je
          ne peux garantir leur exactitude ou leur mise à jour constante.
          L'utilisation des informations se fait sous votre responsabilité.
        </p>
      ),
    },
    {
      number: "04",
      title: "Contact",
      content: (
        <p>
          Pour toute question ou réclamation, vous pouvez me contacter à{" "}
          <span className="text-primary">cleaportolan@gmail.com</span>.
        </p>
      ),
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background pt-16 px-8 md:px-20 pb-32 text-primary"
    >
      <BackButton /> 

      {/* Titre */}
      <h1 className="text-primary mt-10 text-5xl md:text-8xl font-sans">
        <SplitText
          text="Mentions légales"
          delay={50}
          duration={1.25}
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
      </h1>

      {/* Sections */}
      <div className="mt-20 flex flex-col gap-8">
        {sections.map((section, i) => (
          <div
            key={i}
            className="anim-item border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-300"
          >
            <span className="font-sans text-primary/40 text-5xl">
              {section.number}
            </span>
            <h2 className="text-xl md:text-2xl font-sans">{section.title}</h2>
            <div className="text-primary/60 leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentionsLegales;

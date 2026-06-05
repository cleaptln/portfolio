// src/pages/Alternance.jsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "../components/ReactBits/SplitText.jsx";
import Bouton from "../components/Bouton.jsx";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import BackButton from "@/components/BackButton.jsx";

const Alternance = () => {
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

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background pt-16 px-8 md:px-20 pb-32 md:pb-50 text-primary"
    >
      <BackButton />
      {/* Titre */}
      <h1 className="text-primary mt-10 text-5xl md:text-8xl font-sans">
        <SplitText
          text="Alternance"
          delay={50}
          duration={1.25}
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
      </h1>

      {/* Accroche */}
      <p className="text-primary/60 text-xl mt-6 max-w-3xl anim-item leading-relaxed">
        Master Direction Artistique & Design de Marque — La Manu, Amiens.
        Disponible en alternance dès septembre 2026, au rythme{" "}
        <span className="text-primary">
          1 semaine cours / 3 semaines entreprise.
        </span>
      </p>
      <a
        href="/cleaportolan/Clea_Portolan_CV_Direction_Artistique_Web.pdf"
        download="Clea_Portolan_CV_Direction_Artistique_Web.pdf"
        className="flex mt-8 anim-item"
      >
        <Bouton content="Mon CV" icon={MdDownload} width="120px" />
      </a>
      {/* Grille contenu */}
      <div className="mt-20 flex flex-col gap-8">
        {/* Section 1 — Missions */}
        <div className="anim-item">
          <h2 className="text-3xl md:text-4xl font-sans mb-8 md:mb-10">
            <span className="font-display">C</span>e que je peux piloter chez
            vous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Direction Artistique Digitale",
                desc: "Conception d'identités de marque, déclinaison de chartes graphiques sur le web, création d'univers visuels cohérents et engageants.",
              },
              {
                title: "Product Design & UX/UI",
                desc: "Recherche utilisateur, prototypage sur Figma, conception de parcours fluides, design de composants d'interface.",
              },
              {
                title: "Bridge Design–Dev",
                desc: "Suivi de production avec les équipes dev, prototypage interactif, intégration WordPress ou front-end pour garantir le respect de la DA.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-300"
              >
                <span className="font-sans text-primary/40 text-5xl">{`0${i + 1}`}</span>
                <h3 className="text-xl font-sans">{item.title}</h3>
                <p className="text-primary/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sections Rythme + Arguments — empilées sur mobile, côte à côte sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 2 — Rythme */}
          <div className="anim-item border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-3xl font-sans">
              <span className="font-display">R</span>ythme
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { label: "École", value: "La Manu — Amiens" },
                {
                  label: "Master",
                  value: "Direction Artistique & Design de Marque",
                },
                { label: "Début", value: "Septembre 2026" },
                { label: "Rythme", value: "1 sem. cours · 3 sem. entreprise" },
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

          {/* Section 3 — Arguments financiers */}
          <div className="anim-item md:col-span-2 border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-3xl font-sans">
              <span className="font-display">P</span>ourquoi c'est avantageux
              pour vous
            </h2>
            <div className="flex flex-col gap-5">
              {[
                {
                  title: "Exonération de charges",
                  desc: "Les contrats d'apprentissage bénéficient d'exonérations de charges sociales patronales significatives.",
                },
                {
                  title: "Salaire encadré et prévisible",
                  desc: "Le salaire est calculé selon un pourcentage du SMIC, variable selon l'année de contrat et la convention collective de l'entreprise. À titre indicatif, le minimum légal tourne autour de 1 000–1 200 € brut/mois. Un coût maîtrisé, sans charges patronales.",
                },
                {
                  title: "Frais de scolarité pris en charge",
                  desc: "L'OPCO de votre entreprise peut couvrir l'intégralité des frais de scolarité de La Manu. Zéro reste à charge pour vous.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-primary/20 font-sans text-3xl mt-1 flex-shrink-0">{`0${i + 1}`}</span>
                  <div>
                    <h3 className="text-lg font-sans mb-1">{item.title}</h3>
                    <p className="text-primary/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* CTA contact */}
      <div className="mt-20 anim-item border-t border-primary/20 pt-12 flex flex-col gap-4">
        <h2 className="text-4xl font-sans">
          <span className="font-display">O</span>n se parle ?
        </h2>
        <p className="text-primary/60 max-w-xl">
          Une question sur mon profil, mon rythme ou mes disponibilités ?
        </p>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-4">
          <Bouton
            content="cleaportolan@gmail.com"
            icon={MdEmail}
            onClick={() =>
              (window.location.href = "mailto:cleaportolan@gmail.com")
            }
            width="280px"
          />
          <Bouton
            content="06 47 83 71 25"
            icon={FaPhoneAlt}
            onClick={() => (window.location.href = "tel:0647837125")}
            width="280px"
          />
        </div>
      </div>
    </div>
  );
};

export default Alternance;

import ProjetsContainer from "../components/ProjetsContainer.jsx";
import LogosLoopSection from "../components/LogosLoopSection.jsx";
import Lanyard from "../components/ReactBits/Lanyard.jsx";
import Contact from "../components/Contact.jsx";
import AutresProjets from "../components/AutresProjets.jsx";
import { MdDownload } from "react-icons/md";
import Bouton from "../components/Bouton.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import Dither from "../components/Dither.jsx";
import { TbBriefcase } from "react-icons/tb";
import { MdOutlineWork } from "react-icons/md";
import { useTransition } from "../components/context/TransitionContext.jsx";

const Home = () => {
  const { navigateWithTransition } = useTransition();

  return (
    <>
      {/* SECTION INTRO */}
      <section className="hero-section flex flex-col justify-center w-full relative items-center bg-primary h-screen">
        <HeroSection />
        <div className="absolute opacity-50 inset-0 z-[0]">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Dither
              waveColor={[1, 1, 1]}
              disableAnimation={false}
              enableMouseInteraction
              mouseRadius={0.5}
              colorNum={3}
              waveAmplitude={0.09}
              waveFrequency={2}
              waveSpeed={0.04}
            />
          </div>
        </div>
      </section>

      <main>
        {/* SECTION PROFIL */}
        <section id="mon-profil">
          <section className="profil w-full relative flex flex-col md:block md:h-screen">
            {/* Lanyard — photo statique sur mobile, 3D sur desktop */}
            <div className="md:hidden w-full flex justify-center py-12 px-8">
              <img
                src="/public/img/card_mobile.png"
                alt="Carte Cléa Portolan"
                className="h-72 object-contain"
              />
            </div>
            <div className="hidden md:block carte absolute top-0 right-60 w-full h-full">
              <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
            </div>

            {/* Description */}
            <div className="descriptionpx -8 py-12 md:absolute md:top-[50%] md:translate-y-[-50%] md:left-[50%] md:pr-10 md:px-0 md:py-0 z-10">
              <h2 className="text-primary text-4xl md:text-5xl font-sans select-none mb-8 ">
                <span className="font-display">D</span>irection artistique
                <br />
                <span className="font-display">I</span>nteraction &{" "}
                <span className="font-display">P</span>oduct designer
              </h2>

              <p className="text-primary/70 leading-relaxed max-w-xl mb-8">
                Je suis Cléa Portolan, issue d'un BUT MMI, parcours
                développement web.{" "}
                <strong className="text-primary">
                  Activement en recherche d'alternance,
                </strong>{" "}
                je possède un éventail de compétences pluridisciplinaires et une
                très bonne capacité d'apprentissage. J'use d'une vision créative
                passionnelle, nourrie d'une réflexion organique qui s'épanouit
                dans la complexité.
              </p>

              <h3 className="opacity-50 font-display text-lg">Mon objectif</h3>
              <p className="text-primary/70 leading-relaxed max-w-xl">
                Concevoir des produits numériques et des identités de marque
                mémorables, de la vision stratégique à l'expérience interactive
                finale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8">
                <a
                  href="/public/Clea_Portolan_DA_Web_CV.pdf"
                  download="Clea_Portolan_DA_Web_CV.pdf"
                  className="flex"
                >
                  <Bouton content="Mon CV" icon={MdDownload} width="120px" />
                </a>
                <a className="flex">
                  <Bouton
                    onClick={() => navigateWithTransition("/alternance")}
                    content="À propos de l'alternance"
                    icon={MdOutlineWork}
                    width="220px"
                  />
                </a>
              </div>
            </div>
          </section>

          <LogosLoopSection />
        </section>
        {/* SECTION PROJETS */}
        <section id="selection-web">
          <ProjetsContainer />
        </section>

        {/* SECTION AUTRES PROJETS*/}
        <section id="autres-projets">
          <AutresProjets />
        </section>

        {/* SECTION CONTACT */}
        <section
          id="contact"
          className="flex flex-col justify-center px-20 my-20 gap-8"
        >
          <Contact />
        </section>
      </main>

      {/* Badge fixed — à placer n'importe où dans le return, il se positionne tout seul*/}
      <button
        onClick={() => navigateWithTransition("/alternance")}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-background/90 backdrop-blur-sm border border-primary/30 hover:border-primary text-primary rounded-2xl px-5 py-3 cursor-pointer transition-all duration-300 hover:bg-background shadow-lg"
      >
        <TbBriefcase size={18} />
        <span className="text-sm font-sans tracking-wide">
          Recherche alternance
        </span>
      </button>
      <footer className="flex w-full justify-center gap-2 text-primary/50 align-center py-5">
        <p>© Cléa Portolan | Tous droits réservés.</p>
        <a
          className="cursor-pointer"
          onClick={() => navigateWithTransition(`/mentions-legales`)}
        >
          Mentions légales
        </a>
      </footer>
    </>
  );
};

export default Home;

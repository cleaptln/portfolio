import ProjetsContainer from "../components/ProjetsContainer.jsx";
import LogosLoopSection from "../components/LogosLoopSection.jsx";
import Contact from "../components/Contact.jsx";
import AutresProjets from "../components/AutresProjets.jsx";
import { MdDownload } from "react-icons/md";
import Bouton from "../components/Bouton.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import Dither from "../components/Dither.jsx";
import { TbBriefcase } from "react-icons/tb";
import { MdOutlineWork } from "react-icons/md";
import { usePageTransition } from "../components/context/usePageTransition.js";
import TiltedCard from "../components/ReactBits/TiltedCard.jsx";

const Home = () => {
  const { navigateWithTransition } = usePageTransition();

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
        <section id="mon-profil" className="w-full">
          <section className="profil flex flex-col md:flex-row items-center gap-20 justify-center px-8 py-20 md:py-40 md:px-16">
            <div className="flex flex-col w-[33%] md:w-fulljustify-center items-center">
              <TiltedCard
                imageSrc={`${import.meta.env.BASE_URL}/img/Clea_Portolan.jpg`}
                altText="Cléa Portolan, photo"
                captionText="Cléa Portolan"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <div className="translate-x-2 translate-y-2 bg-neutral-950/60 backdrop-blur-md text-white p-2 rounded-xl border border-white/10 text-center">
                    <p className="text-lg">
                      <span className="font-display">C</span>léa{" "}
                      <span className="font-display">P</span>ortolan
                    </p>
                  </div>
                }
              />
              {/* Boutons d'action */}
              <div className="flex flex-col items-center justify-center sm:flex-row gap-4 sm:gap-8 mt-12">
                <a
                  href={`${import.meta.env.BASE_URL}/img/Clea_Portolan_CV_Direction_Artistique_Web.pdf`}
                  download="Clea_Portolan_CV_Direction_Artistique_Web.pdf"
                  className="flex"
                >
                  <Bouton content="Mon CV" icon={MdDownload} width="120px" />
                </a>
                <a className="flex cursor-pointer">
                  <Bouton
                    onClick={() => navigateWithTransition("/alternance")}
                    content="À propos de l'alternance"
                    icon={MdOutlineWork}
                    width="220px"
                  />
                </a>
              </div>
            </div>
            {/* description */}
            <div className="flex flex-col w-full md:w-[66%]">
              <h2 className="text-primary leading-tight text-4xl md:text-5xl font-sans select-none mb-8">
                <span className="font-display">D</span>irection artistique
                <br />
                <span className="font-display">D</span>éveloppement web
              </h2>

              <div className="md:max-w-[680px]">
                <p className="text-primary/70 leading-relaxed mb-8">
                  Je suis Cléa Portolan, diplômée BUT MMI, parcours
                  développement web et dispositifs interactifs. J'intègre à la
                  rentrée le Master Direction Artistique, stratégie et design de
                  marque à La Manu (Amiens).
                  <br />
                  <strong className="text-primary">
                    Activement en recherche d'alternance pour Septembre 2026,
                  </strong>
                  <br />
                  je possède un éventail de compétences pluridisciplinaires et
                  une très bonne capacité d'apprentissage. J'use d'une vision
                  créative passionnelle, nourrie d'une réflexion organique qui
                  s'épanouit dans la complexité.
                </p>

                <h3 className="opacity-50 font-display text-lg mb-2">
                  Mon objectif
                </h3>
                <p className="text-primary/70 leading-relaxed">
                  Concevoir des produits numériques et des identités de marque
                  mémorables, de la vision stratégique à l'expérience
                  interactive finale.
                </p>
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
          className="flex flex-col justify-center px-8 md:px-20 my-20 gap-8"
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
          className="cursor-pointer underline decoration-solid"
          onClick={() => navigateWithTransition(`/mentions-legales`)}
        >
          Mentions légales
        </a>
      </footer>
    </>
  );
};

export default Home;

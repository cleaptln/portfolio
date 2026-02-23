import ProjetsContainer from "../components/ProjetsContainer.jsx";
import LogosLoopSection from "../components/LogosLoopSection.jsx";
import Lanyard from "../components/ReactBits/Lanyard.jsx";
import Contact from "../components/Contact.jsx";
import AutresProjets from "../components/AutresProjets.jsx";
import { MdDownload } from "react-icons/md";
import Bouton from "../components/Bouton.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import Dither from "../components/Dither.jsx";
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
          <section className="profil h-screen w-full relative">
            <div className=" carte absolute top-0 right-60 w-full h-full">
              <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
            </div>
            <div className=" description absolute top-[50%] translate-y-[-50%] left-[50%] z-10 pr-10">
              <h2 className="text-primary text-4xl font-sans select-none mb-8">
                <span className="font-display">D</span>éveloppement <br />
                <span className="font-display">D</span>esign web
              </h2>

              <p className="text-primary/70 leading-relaxed max-w-xl">
                Je suis Cléa Portolan, en voie d'être diplômée d'un BUT MMI
                parcours développement web, pour devenir designer d'intéraction.
                Je possède un éventail de compétences pluridisciplinaires et une
                très bonne capacité d’apprentissage. J'use d'une vision créative
                passionnelle, nourrie d'une réflexion organique qui s'épanouit
                dans la complexité.
              </p>

              <div className="mt-8">
                <a
                  href="/public/Clea_Portolan_CV.pdf"
                  download="Clea_Portolan_CV.pdf"
                >
                  <Bouton content="Mon CV" icon={MdDownload} width="200px" />
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
      <footer className="flex w-full justify-center gap-2 text-primary/50 align-center py-5">
        <p>© Cléa Portolan | Tous droits réservés.</p>
        <a onClick={() => navigateWithTransition(`/mentions-legales`)}>
          Mentions légales
        </a>
      </footer>
    </>
  );
};

export default Home;

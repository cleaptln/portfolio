import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 1. Transformation du tableau SRCS en un tableau d'objets { src, alt }
const SRCS = [
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/flaine3.jpg`, alt: "Photographie à Flaine" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/bisou-sucre-carte.jpg`, alt: "Design de carte de visite Bisou Sucré" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Web_Design_graphique_Movember_2.jpg`, alt: "Affiche pour l'événement Movember" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Web_Design__Graphique_Visions.jpg`, alt: "Design graphique personnel Visions" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/aleteia.jpg`, alt: "Maquette web Aléteïa" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Design_Graphique_Edmond.jpg`, alt: "Affiche pour promouvoir la pièce Edmond" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Design_Graphique_Evenementiel_Mariage_1.jpg`, alt: "Design graphique événementiel et faire-part de mariage" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Design_Graphique_Kerouac_2.jpg`, alt: "Création d'une couverture du livre de Kerouac" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Design_Graphique_Maxime_Depinoy1.jpg`, alt: "Direction artistique et graphisme pour Maxime Depinoy" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Design_Graphique_Maxime_Depinoy4.jpg`, alt: "Déclinaison graphique pour Maxime Depinoy" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Design_Graphique_Mystere_A_L_IUT.jpg`, alt: "Affiche pour Mystère à l'IUT inspirée de Saul Bass" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Design_graphique_Web_Like-Communication_1.jpg`, alt: "Branding pour Like Communication" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Design_Graphique_WesAnderson_3.jpg`, alt: "Couverture de livre inspirée de la direction artistique de Wes Anderson" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_photographie_studio61.jpg`, alt: "Photographie en noir et blanc" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_photographie_studio62.jpg`, alt: "Montage photo noir et blanc" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Design_Graphique_Evenementiel_Mariage_2.jpg`, alt: "Papeterie et éléments graphiques pour un mariage" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/Clea_Portolan_Web_Design_Graphique_Imnesia1.jpg`, alt: "Logo typographique chrome Imnesia" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/dare_mockup.jpg`, alt: "T-shirt Dare" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/charte_graphique_mmi_lens.png`, alt: "Charte graphique de MMI Lens" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/henri-matisse-brochure.jpg`, alt: "Mise en page de brochure inspirée par Henri Matisse" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/KYVOS_PLAY.png`, alt: "Design d'interface pour le jeu mobile Kyvos" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/lampadaireVert.JPG`, alt: "Photographie urbaine d'un lampadaire vert" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/logoStyleWaka.png`, alt: "Branding Waka" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/miroir_mockup.jpg`, alt: "Affiche pour l'exposition Miroir" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/mockup_portfolio_v2.jpg`, alt: "Présentation de la version 2 du portfolio" },
  { src: `${import.meta.env.BASE_URL}/img/autres-projets/terre_eclat_home.jpg`, alt: "Design de la page d'accueil pour le projet Terre Éclat" },
];

// Le découpage reste identique
const col1Srcs = SRCS.slice(0, 8);
const col2Srcs = SRCS.slice(9, 15);
const col3Srcs = SRCS.slice(16, 26);
const triggers = [];

export default function AutresProjets() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;
    const col3 = col3Ref.current;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      gsap.set(col3, { display: "none" });
    }
    gsap.set(col2, { y: () => -container.clientHeight });

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: isMobile ? container : section,
        start: isMobile ? "top center" : "top top",
        end: isMobile ? "bottom center" : "+=1500",
        scrub: 0.7,
        pin: !isMobile,
        pinSpacing: !isMobile,
        invalidateOnRefresh: true,
      },
    });
    triggers.push(tl.scrollTrigger);

    tl.to(col1, { y: () => -(col1.scrollHeight - container.clientHeight) }, 0);

    tl.to(
      col2,
      {
        y: () => {
          const distance = col2.scrollHeight - "100%";
          return isMobile ? distance * 0.5 : distance;
        },
      },
      0,
    );

    if (!isMobile) {
      tl.to(
        col3,
        { y: () => -(col3.scrollHeight - container.clientHeight) },
        0,
      );
    }

    const resizeTimer = { current: null };
    const handleResize = () => {
      clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(() => ScrollTrigger.refresh(), 250);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      triggers.forEach((t) => t?.kill());
      tl.kill();
    };
  }, []);

  return (
    <section
      id="autres-projets"
      className="collection bg-primary"
      ref={sectionRef}
    >
      <div className="collection-inner">
        {/* COL LEFT — texte statique */}
        <div className="col-left px-8 py-16 md:p-20 flex flex-col gap-10 justify-center">
          <h2 className="text-background text-5xl font-sans select-none">
            <span className="font-display">P</span>enser l'écosystème de marque
          </h2>
          <h3 className="text-background text-xl">
            <span className="font-display">D</span>e l'identité à l'écran
          </h3>
          <p
            className="text-background max-w-xl leading-relaxed"
            style={{ opacity: 0.8 }}
          >
            Pour moi, le code n'est pas une fin en soi, c'est le prolongement
            logique d'une intention de design. Concevoir l'identité visuelle
            d'une marque (DA) pour ensuite la déployer dans un produit numérique
            interactif et ergonomique (UX/UI) demande une vision d'ensemble.
            Voici les projets graphiques et les expérimentations visuelles qui
            forgent mon identity créative et ma sensibilité éditoriale.
          </p>
        </div>

        {/* COL RIGHT — colonnes d'images animées */}
        {/* 2. Mise à jour des boucles .map() pour extraire l'image et l'alt */}
        <div className="col-right" ref={containerRef}>
          <div className="coll coll-1" ref={col1Ref}>
            {col1Srcs.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy" />
            ))}
          </div>
          <div className="coll coll-2" ref={col2Ref}>
            {col2Srcs.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy"/>
            ))}
          </div>
          <div className="coll coll-3" ref={col3Ref}>
            {col3Srcs.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} loading="lazy"/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
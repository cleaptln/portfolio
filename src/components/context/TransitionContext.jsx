import { createContext, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const navigate = useNavigate();
  const curtainRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // La fonction magique à appeler pour changer de page
  const navigateWithTransition = (path) => {
    if (isAnimating) return; // Évite les doubles clics
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        // On remet le rideau en bas pour la prochaine fois (invisible)
        gsap.set(curtainRef.current, { scaleY: 0, transformOrigin: "bottom" });
      },
    });

    // 1. LE RIDEAU MONTE (Sortie de l'ancienne page)
    tl.set(curtainRef.current, { transformOrigin: "bottom", scaleY: 0 })
      .to(curtainRef.current, {
        scaleY: 1,
        duration: 0.8,
        ease: "power4.inOut",
      })
      .add(() => {
        navigate(path);
        window.scrollTo(0, 0);
      })
      // 3. LE RIDEAU CONTINUE DE MONTER POUR DISPARAÎTRE (Entrée nouvelle page)
      .set(curtainRef.current, { transformOrigin: "top" }) // Astuce: on change l'origine
      .to(curtainRef.current, {
        scaleY: 0,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 0.1, // Petit délai pour laisser React charger la page
      });
  };

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {/* LE RIDEAU (Fixe au dessus de tout) */}
      <div
        ref={curtainRef}
        className="fixed inset-0 bg-neutral-950 z-[9999] pointer-events-none"
        style={{ transform: "scaleY(0)" }} // Caché au départ
      />
      {children}
    </TransitionContext.Provider>
  );
};

// Hook personnalisé pour utiliser la transition partout
export const useTransition = () => useContext(TransitionContext);
import { useTransition } from "../components/context/TransitionContext.jsx";
import { IoArrowBackSharp } from "react-icons/io5";

const MentionsLegales = () => {
  const { navigateWithTransition } = useTransition();

  return (
    <section className="bg-background min-h-screen px-6 mb-20 md:px-20 py-5">
      <button
        onClick={(e) => {
          e.preventDefault();
          navigateWithTransition("/");
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
        <span>Retour</span>
      </button>
      <div className="max-w-4xl mx-auto mt-20  space-y-16">
        <h1 className="text-primary text-5xl font-sans select-none">
          <span className="font-display">M</span>entions légales
        </h1>

        {/* 1 */}
        <div className="space-y-4">
          <h2 className="text-primary text-2xl font-sans">
            1. Éditeur du site
          </h2>

          <div className="text-primary/70 leading-relaxed space-y-1">
            <p>Ce site est édité par :</p>
            <p>
              <strong>Nom :</strong> Portolan Cléa
            </p>
            <p>
              <strong>Adresse :</strong> Lens
            </p>
            <p>
              <strong>Email :</strong> cleaportolan@gmail.com
            </p>
            <p>
              <strong>Téléphone :</strong> 06 47 83 71 25
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="space-y-4">
          <h2 className="text-primary text-2xl font-sans">
            3. Propriété intellectuelle
          </h2>
          <p className="text-primary/70 leading-relaxed">
            Le contenu de ce site (textes, images, graphismes, logo, etc.) est
            protégé par les lois en vigueur sur la propriété intellectuelle.
            Toute reproduction ou utilisation sans autorisation est interdite.
          </p>
        </div>

        {/* 5 */}
        <div className="space-y-4">
          <h2 className="text-primary text-2xl font-sans">5. Responsabilité</h2>
          <p className="text-primary/70 leading-relaxed">
            Je m'efforce de fournir des informations précises sur ce site, mais
            je ne peux garantir leur exactitude ou leur mise à jour constante.
            L'utilisation des informations se fait sous votre responsabilité.
          </p>
        </div>

        {/* 6 */}
        <div className="space-y-4">
          <h2 className="text-primary text-2xl font-sans">6. Contact</h2>
          <p className="text-primary/70 leading-relaxed">
            Pour toute question ou réclamation, vous pouvez me contacter à
            cleaportolan@gmail.com.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentionsLegales;

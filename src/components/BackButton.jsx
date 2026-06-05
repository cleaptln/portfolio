import { IoArrowBackSharp } from "react-icons/io5";
import { useTransition } from "../components/context/TransitionContext";

const BackButton = ({ to = "/" }) => {
  const { navigateWithTransition } = useTransition();

  return (
    <button
      onClick={() => navigateWithTransition(to)}
      className="fixed top-8 left-8 z-50 flex items-center gap-3 bg-background/90 backdrop-blur-sm border border-primary/30 hover:border-primary text-primary rounded-2xl px-5 py-3 cursor-pointer transition-all duration-300 hover:bg-background shadow-lg"
    >
      <IoArrowBackSharp size={18} />
      <span className="text-sm font-sans tracking-wide">Retour</span>
    </button>
  );
};

export default BackButton;

import Dock from "./ReactBits/Dock";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

const NavBar = () => {
  const items = [
    {
      icon: <VscArchive size={18} className="text-primary" />,
      label: "Profil",
      onClick: () => {
        document.getElementById("mon-profil")?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      icon: <VscAccount size={18} className="text-primary" />,
      label: "Sélection web",
      onClick: () => {
        document.getElementById("selection-web")?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      icon: <VscAccount size={18} className="text-primary" />,
      label: "Autres projets",
      onClick: () => {
        document.getElementById("autres-projets")?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      icon: <VscSettingsGear size={18} className="text-primary" />,
      label: "Contact",
      onClick: () => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
  ];

  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
      className="cursor-pointer"
    />
  );
};

export default NavBar;

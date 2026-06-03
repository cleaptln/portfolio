import { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import Alternance from "./pages/Alternance.jsx";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  // const navRef = useRef(null);

  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#selection-web") {
      setTimeout(() => {
        const el = document.querySelector("#selection-web");
        if (el) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: el, offsetY: 0 },
            ease: "power3.inOut",
          });
        }
      }, 500);
    }
  }, [location]);

  return (
    <div className="relative w-full bg-background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:slug" element={<ProjectPage />} />
        <Route path="/alternance" element={<Alternance />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </div>
  );
}

export default App;
